import { Notificacion } from '../model';
import { SequelizeDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { NOTIFICACION } from '../metadata';

class NotificacionesDeleter extends SequelizeDeleter {
   model = Notificacion;
   entityName = NOTIFICACION.SINGULAR;
}

export const notificacionesDeleter = new NotificacionesDeleter();
