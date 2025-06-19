import { ISuscripcion } from '../interface';
import { Suscripcion } from '../model';
import { SUSCRIPCION } from '../metadata';
import { SequelizePatcher } from '../../../abstractions/sequelizeBases/basePatch';

class SuscripcionesPatcher extends SequelizePatcher<ISuscripcion> {
   model = Suscripcion;
   entityName = SUSCRIPCION.SINGULAR;
}

export const suscripcionesPatcher = new SuscripcionesPatcher();
