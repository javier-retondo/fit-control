import { IPago } from '../interface';
import { Pago } from '../model';
import { PAGO } from '../metadata';
import { SequelizeUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class PagosUpdater extends SequelizeUpdater<IPago> {
   model = Pago;
   entityName = PAGO.SINGULAR;
}

export const pagosUpdater = new PagosUpdater();
