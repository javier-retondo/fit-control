import { IModulo } from '../interface';
import { Modulo } from '../model';
import { MODULO } from '../metadata';
import { SequelizePatcher } from '../../../abstractions/sequelizeBases/basePatch';

class ModulosPatcher extends SequelizePatcher<IModulo> {
   model = Modulo;
   entityName = MODULO.SINGULAR;
}

export const modulosPatcher = new ModulosPatcher();
