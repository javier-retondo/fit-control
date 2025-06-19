import { INotificacion } from '../interface';
import { Notificacion } from '../model';
import { NOTIFICACION } from '../metadata';
import { SequelizeUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class NotificacionesUpdater extends SequelizeUpdater<INotificacion> {
   model = Notificacion;
   entityName = NOTIFICACION.SINGULAR;
}

export const notificacionesUpdater = new NotificacionesUpdater();
