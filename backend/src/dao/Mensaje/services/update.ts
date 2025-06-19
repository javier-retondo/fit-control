import { IMensaje } from '../interface';
import { Mensaje } from '../model';
import { MENSAJE } from '../metadata';
import { SequelizeUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class MensajesUpdater extends SequelizeUpdater<IMensaje> {
   model = Mensaje;
   entityName = MENSAJE.SINGULAR;
}

export const mensajesUpdater = new MensajesUpdater();
