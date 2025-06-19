import { MEDIO_PAGO } from '../../metadata';
import { IMedioPago } from '../interface';
import { MedioPago } from '../model';
import { ESTADOS } from '../../../utils/constants/SYSTEM_ENUMS';
import { SequelizeFinder } from '../../../abstractions/sequelizeBases/baseFind';
import { mediopagoIncludes } from '../includes';

type filter = Partial<{
   id: number[];
   search: string;
   estados: ESTADOS[];
}>;

export const mediosPagoFinder = new SequelizeFinder<IMedioPago, filter>({
   model: MedioPago,
   columns: MEDIO_PAGO.COLUMNS,
   includes: mediopagoIncludes,
   searchableFields: ['tipo', 'descripcion'],
});
