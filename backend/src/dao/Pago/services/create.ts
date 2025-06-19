import { IPago } from '../interface';
import { Pago } from '../model';
import { SequelizeCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { PAGO } from '../metadata';

class PagosCreator extends SequelizeCreator<IPago> {
   model = Pago;
   entityName = PAGO.SINGULAR;
}

export const pagosCreator = new PagosCreator();
