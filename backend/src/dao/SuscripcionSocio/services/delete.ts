import { SocioSuscripcion } from '../model';
import { SequelizeDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { SOCIO_SUSCRIPCION } from '../metadata';

class SocioSuscripcionesDeleter extends SequelizeDeleter {
   model = SocioSuscripcion;
   entityName = SOCIO_SUSCRIPCION.SINGULAR;
}

export const socioSuscripcionesDeleter = new SocioSuscripcionesDeleter();
