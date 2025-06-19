import { IRutina } from '../interface';
import { Rutina } from '../model';
import { RUTINA } from '../metadata';
import { SequelizePatcher } from '../../../abstractions/sequelizeBases/basePatch';

class RutinasPatcher extends SequelizePatcher<IRutina> {
   model = Rutina;
   entityName = RUTINA.SINGULAR;
}

export const rutinasPatcher = new RutinasPatcher();
