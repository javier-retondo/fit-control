import { IClase } from '../interface';
import { Clase } from '../model';
import { CLASE } from '../metadata';
import { SequelizePatcher } from '../../../abstractions/sequelizeBases/basePatch';

class ClasesPatcher extends SequelizePatcher<IClase> {
   model = Clase;
   entityName = CLASE.SINGULAR;
}

export const clasesPatcher = new ClasesPatcher();
