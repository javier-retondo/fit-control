import { IPerfil } from '../interface';
import { Perfil } from '../model';
import { PERFIL } from '../metadata';
import { SequelizePatcher } from '../../../abstractions/sequelizeBases/basePatch';

class PerfilesPatcher extends SequelizePatcher<IPerfil> {
   model = Perfil;
   entityName = PERFIL.SINGULAR;
}

export const perfilesPatcher = new PerfilesPatcher();
