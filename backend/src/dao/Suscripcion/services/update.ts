import { ISuscripcion } from '../interface';
import { Suscripcion } from '../model';
import { SUSCRIPCION } from '../metadata';
import { SequelizeUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class SuscripcionesUpdater extends SequelizeUpdater<ISuscripcion> {
   model = Suscripcion;
   entityName = SUSCRIPCION.SINGULAR;
}

export const suscripcionesUpdater = new SuscripcionesUpdater();
