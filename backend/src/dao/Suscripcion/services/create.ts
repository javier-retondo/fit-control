import { ISuscripcion } from '../interface';
import { Suscripcion } from '../model';
import { SequelizeCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { SUSCRIPCION } from '../metadata';

class SuscripcionesCreator extends SequelizeCreator<ISuscripcion> {
   model = Suscripcion;
   entityName = SUSCRIPCION.SINGULAR;
}

export const suscripcionesCreator = new SuscripcionesCreator();
