import { IMensaje } from '../interface';
import { Mensaje } from '../model';
import { MENSAJE } from '../metadata';
import { SequelizePatcher } from '../../../abstractions/sequelizeBases/basePatch';

class MensajesPatcher extends SequelizePatcher<IMensaje> {
   model = Mensaje;
   entityName = MENSAJE.SINGULAR;
}

export const mensajesPatcher = new MensajesPatcher();
