export type IPagination<T> = {
   page: number;
   pageSize: number;
   sort: {
      column: keyof T;
      direction: 'ASC' | 'DESC';
   }[];
};

export type IMetadata<TColumns, TAssociations> = {
   TABLE: string;
   COLUMNS: TColumns;
   PLURAL: string;
   SINGULAR: string;
   ASSOCIATIONS: TAssociations;
};
