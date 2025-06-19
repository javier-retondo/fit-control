import { ISocioSuscripcion } from '../interface';
import { SocioSuscripcion } from '../model';
import { SOCIO_SUSCRIPCION } from '../metadata';
import { SequelizeUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class SocioSuscripcionesUpdater extends SequelizeUpdater<ISocioSuscripcion> {
   model = SocioSuscripcion;
   entityName = SOCIO_SUSCRIPCION.SINGULAR;
}

export const socioSuscripcionesUpdater = new SocioSuscripcionesUpdater();
