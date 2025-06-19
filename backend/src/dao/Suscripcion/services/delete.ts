import { Suscripcion } from '../model';
import { SequelizeDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { SUSCRIPCION } from '../metadata';

class SuscripcionesDeleter extends SequelizeDeleter {
   model = Suscripcion;
   entityName = SUSCRIPCION.SINGULAR;
}

export const suscripcionesDeleter = new SuscripcionesDeleter();
