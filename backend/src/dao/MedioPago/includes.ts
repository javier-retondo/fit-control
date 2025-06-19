//import { Model, ModelStatic } from 'sequelize';
//import { IMedioPagoAssociations } from './interface';
import { IncludeItem } from '../../abstractions/sequelizeBases/baseInclude';
//import { MEDIO_PAGO } from './metadata';

/*
{
export function createMedioPagoInclude<TModel extends Model, TInterface extends Record<string, any>>(
   model: ModelStatic<TModel>,
   as: keyof IMedioPagoAssociations,
   attributes: (keyof TInterface & string)[],
   nestedIncludes?: IncludeItem[],
   required?: boolean,
   separate?: boolean,
   through?: boolean,
): IncludeItem {
   return createInclude<TModel, TInterface, IMedioPagoAssociations>(
      model,
      MEDIO_PAGO.ASSOCIATIONS[as],
      attributes,
      nestedIncludes,
      required,
      separate,<
      through,
   );
}}
*/

export const mediopagoIncludes: IncludeItem[] = [];
