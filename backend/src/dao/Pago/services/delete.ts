import { Pago } from '../model';
import { SequelizeDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { PAGO } from '../metadata';

class PagosDeleter extends SequelizeDeleter {
   model = Pago;
   entityName = PAGO.SINGULAR;
}

export const pagosDeleter = new PagosDeleter();
