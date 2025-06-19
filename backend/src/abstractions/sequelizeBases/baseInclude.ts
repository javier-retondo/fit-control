import { Model, ModelStatic, WhereOptions } from 'sequelize';

export type IncludeItem = {
   model: ModelStatic<Model>;
   as: string;
   attributes: string[];
   where?: WhereOptions;
   include?: IncludeItem[];
   required?: boolean;
   duplicate?: boolean;
   separate?: boolean;
   through?: {
      attributes: string[];
   };
};

export function createInclude<
   TModel extends Model,
   TInterface extends Record<string, any>,
   TAssociation extends Record<string, string>,
>(
   model: ModelStatic<TModel>,
   as: TAssociation[keyof TAssociation],
   attributes: (keyof TInterface & string)[],
   where?: WhereOptions,
   nestedIncludes?: IncludeItem[],
   required?: boolean,
   separate?: boolean,
   through?: boolean,
): IncludeItem {
   const includeItem: IncludeItem = {
      model,
      as: as as string,
      attributes,
      where,
      required,
      duplicate: required ? false : undefined,
      separate,
      through: through
         ? {
              attributes: [],
           }
         : undefined,
   };

   if (nestedIncludes?.length) {
      includeItem.include = nestedIncludes;
   }

   return includeItem;
}
