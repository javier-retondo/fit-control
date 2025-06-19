import { IMedioPago } from '../interface';
import { MedioPago } from '../model';
import { MEDIO_PAGO } from '../metadata';
import { SequelizePatcher } from '../../../abstractions/sequelizeBases/basePatch';

class MediosPagoPatcher extends SequelizePatcher<IMedioPago> {
   model = MedioPago;
   entityName = MEDIO_PAGO.SINGULAR;
}

export const mediosPagoPatcher = new MediosPagoPatcher();
