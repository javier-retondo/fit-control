import { Mensaje } from '../model';
import { SequelizeDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { MENSAJE } from '../metadata';

class MensajesDeleter extends SequelizeDeleter {
   model = Mensaje;
   entityName = MENSAJE.SINGULAR;
}

export const mensajesDeleter = new MensajesDeleter();
