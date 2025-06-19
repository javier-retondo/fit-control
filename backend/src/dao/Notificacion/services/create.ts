import { INotificacion } from '../interface';
import { Notificacion } from '../model';
import { SequelizeCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { NOTIFICACION } from '../metadata';

class NotificacionesCreator extends SequelizeCreator<INotificacion> {
   model = Notificacion;
   entityName = NOTIFICACION.SINGULAR;
}

export const notificacionesCreator = new NotificacionesCreator();
