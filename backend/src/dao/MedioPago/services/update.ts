import { IMedioPago } from '../interface';
import { MedioPago } from '../model';
import { MEDIO_PAGO } from '../metadata';
import { SequelizeUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class MediosPagoUpdater extends SequelizeUpdater<IMedioPago> {
   model = MedioPago;
   entityName = MEDIO_PAGO.SINGULAR;
}

export const mediosPagoUpdater = new MediosPagoUpdater();
