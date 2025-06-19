import { IMensaje } from '../interface';
import { Mensaje } from '../model';
import { SequelizeCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { MENSAJE } from '../metadata';

class MensajesCreator extends SequelizeCreator<IMensaje> {
   model = Mensaje;
   entityName = MENSAJE.SINGULAR;
}

export const mensajesCreator = new MensajesCreator();
