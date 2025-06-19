import { ISocioSuscripcion } from '../interface';
import { SocioSuscripcion } from '../model';
import { SOCIO_SUSCRIPCION } from '../metadata';
import { SequelizePatcher } from '../../../abstractions/sequelizeBases/basePatch';

class SocioSuscripcionesPatcher extends SequelizePatcher<ISocioSuscripcion> {
   model = SocioSuscripcion;
   entityName = SOCIO_SUSCRIPCION.SINGULAR;
}

export const socioSuscripcionesPatcher = new SocioSuscripcionesPatcher();
