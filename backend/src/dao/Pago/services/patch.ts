import { IPago } from '../interface';
import { Pago } from '../model';
import { PAGO } from '../metadata';
import { SequelizePatcher } from '../../../abstractions/sequelizeBases/basePatch';

class PagosPatcher extends SequelizePatcher<IPago> {
   model = Pago;
   entityName = PAGO.SINGULAR;
}

export const pagosPatcher = new PagosPatcher();
