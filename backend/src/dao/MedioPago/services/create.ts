import { IMedioPago } from '../interface';
import { MedioPago } from '../model';
import { SequelizeCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { MEDIO_PAGO } from '../metadata';

class MediosPagoCreator extends SequelizeCreator<IMedioPago> {
   model = MedioPago;
   entityName = MEDIO_PAGO.SINGULAR;
}

export const mediosPagoCreator = new MediosPagoCreator();
