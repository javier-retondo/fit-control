import {
   FindAttributeOptions,
   FindOptions,
   Includeable,
   Model,
   ModelStatic,
   Transaction,
   WhereOptions,
   Op,
} from 'sequelize';
import { redisClient } from '../../config/redisManager';

import { IPagination } from '../../utils/interfaces/general';
import { IncludeItem } from './baseInclude';

type RelationFilter = {
   include: Includeable;
};

interface FinderConfig<T, TFilter> {
   model: ModelStatic<Model>;
   columns: Record<string, string>;
   includes: IncludeItem[];
   searchableFields?: (keyof T)[];
   relationFilters?: (filter: TFilter) => RelationFilter[];
   customWhere?: (filter: TFilter) => WhereOptions<T>;
}

export class SequelizeFinder<T, TFilter> {
   private config: FinderConfig<T, TFilter>;

   constructor(config: FinderConfig<T, TFilter>) {
      this.config = config;
   }

   private paginationHelper(props: {
      page?: number;
      pageSize?: number;
      sort: { column: keyof T; direction: 'ASC' | 'DESC' }[];
   }) {
      const { page = 1, pageSize = 10000, sort } = props;
      const offset = (page - 1) * pageSize;
      const limit = pageSize;

      const order: [string, 'ASC' | 'DESC'][] =
         sort?.map((item) => [item.column as string, item.direction]) || [];

      return { offset, limit, order };
   }

   private getIncludes(includes?: (keyof T)[]): {
      include: Includeable[];
      attributes: FindAttributeOptions;
   } {
      const include =
         includes && this.config.includes
            ? this.config.includes.filter((item) => includes.includes(item.as as keyof T))
            : [];

      const attributes =
         includes && this.config.columns
            ? Object.values(this.config.columns).filter((col) => includes.includes(col as keyof T))
            : [];

      return {
         include,
         attributes,
      };
   }

   async findAll(
      filter?: TFilter & { search?: string },
      pagination?: IPagination<T>,
      includeKeys?: (keyof T)[],
      cache: boolean = false,
      countOnly: boolean = false,
      transaction?: Transaction,
   ): Promise<{ rows: T[]; count: number }> {
      try {
         const cacheKey =
            cache &&
            `${this.config.model.name}:FINDER:${JSON.stringify(filter)}:${JSON.stringify(
               pagination,
            )}:${JSON.stringify(includeKeys)}`;

         if (cacheKey) {
            const cached = await redisClient.get(cacheKey);
            if (cached) return JSON.parse(cached);
         }

         const { include, attributes } = this.getIncludes(includeKeys);

         let where: WhereOptions<T> = {};
         const hasManyInclude: Includeable[] = [];

         if (this.config.customWhere && filter) {
            where = this.config.customWhere(filter);
         }

         if (filter) {
            if (this.config.searchableFields && filter.search) {
               where = {
                  ...(where as object),
                  [Op.or]: this.config.searchableFields.map((field) => ({
                     [field]: { [Op.like]: `%${filter.search}%` },
                  })),
               } as WhereOptions<T>;
            }

            Object.entries(filter).forEach(([key, value]) => {
               if (
                  value !== undefined &&
                  key !== 'search' &&
                  Object.values(this.config.columns).includes(key)
               ) {
                  (where as any)[key] = Array.isArray(value) ? { [Op.in]: value } : value;
               }
            });
         }

         if (this.config.relationFilters) {
            const relationFilterPayload = filter
               ? (Object.fromEntries(
                    Object.entries(filter).filter(([k]) => k !== 'search'),
                 ) as TFilter)
               : ({} as TFilter);

            const relations = this.config.relationFilters(relationFilterPayload);
            relations.forEach(({ include: relInclude }) => {
               hasManyInclude.push(Object.assign({}, relInclude, { duplicating: false }));
            });
         }

         const { limit, offset, order } = this.paginationHelper(
            pagination?.sort
               ? pagination
               : {
                    sort: [
                       {
                          column:
                             (Object.values(this.config.columns)[0] as keyof T) ??
                             ('id' as keyof T),
                          direction: 'ASC',
                       },
                    ],
                 },
         );

         let idsToFilter: number[] | undefined;

         if (hasManyInclude.length > 0) {
            const safeOptions: FindOptions & { distinct?: boolean } = {
               attributes: Array.from(
                  new Set([
                     Object.values(this.config.columns)[0],
                     ...Object.values(this.config.columns).filter((col) =>
                        pagination?.sort?.some((s) => s.column === col),
                     ),
                  ]),
               ),
               where,
               limit,
               offset,
               order,
               include: hasManyInclude,
               distinct: true,
               raw: true,
            };
            const idsResult = await this.config.model.findAll(safeOptions);

            if (idsResult.length === 0) return { rows: [], count: 0 };

            idsToFilter = idsResult.map((r: any) => r[Object.values(this.config.columns)[0]]);
         }

         const finalWhere: WhereOptions<T> =
            idsToFilter !== undefined
               ? ({
                    [Object.values(this.config.columns)[0]]: { [Op.in]: idsToFilter },
                 } as WhereOptions<T>)
               : where;
         type SafeFindOptions = FindOptions & {
            distinct?: boolean;
         };
         const findOptions: SafeFindOptions = {
            attributes,
            where: finalWhere,
            limit,
            offset,
            order,
            include,
            distinct: hasManyInclude.length > 0,
         };
         const rows = !countOnly
            ? await this.config.model
                 .findAll(findOptions)
                 .then((data: any[]) => data.map((r) => r.toJSON()))
            : [];

         const totalCount =
            countOnly || pagination
               ? await this.config.model.count({
                    where: finalWhere,
                    include,
                    distinct: hasManyInclude.length > 0,
                 })
               : rows.length;

         if (cacheKey) {
            await redisClient.set(cacheKey, JSON.stringify({ rows, count: totalCount }), 60 * 2);
         }

         return { rows, count: totalCount };
      } catch (error: any) {
         const errorLog = {
            tableName: this.config.model.name,
            message: error.message || 'Error desconocido',
            sql: error?.sql || 'No disponible',
            parameters: JSON.stringify(error?.parameters || {}),
            stack: error.stack,
         };

         if (transaction) await transaction.rollback();
         throw errorLog;
      }
   }
}
