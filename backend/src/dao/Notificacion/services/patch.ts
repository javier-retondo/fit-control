import { INotificacion } from '../interface';
import { Notificacion } from '../model';
import { NOTIFICACION } from '../metadata';
import { SequelizePatcher } from '../../../abstractions/sequelizeBases/basePatch';

class NotificacionesPatcher extends SequelizePatcher<INotificacion> {
   model = Notificacion;
   entityName = NOTIFICACION.SINGULAR;
}

export const notificacionesPatcher = new NotificacionesPatcher();
