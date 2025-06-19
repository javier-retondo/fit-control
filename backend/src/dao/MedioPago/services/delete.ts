import { MedioPago } from '../model';
import { SequelizeDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { MEDIO_PAGO } from '../metadata';

class MediosPagoDeleter extends SequelizeDeleter {
   model = MedioPago;
   entityName = MEDIO_PAGO.SINGULAR;
}

export const mediosPagoDeleter = new MediosPagoDeleter();
