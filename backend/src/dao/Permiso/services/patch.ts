import { IPermiso } from '../interface';
import { Permiso } from '../model';
import { PERMISO } from '../metadata';
import { SequelizePatcher } from '../../../abstractions/sequelizeBases/basePatch';

class PermisosPatcher extends SequelizePatcher<IPermiso> {
   model = Permiso;
   entityName = PERMISO.SINGULAR;
}

export const permisosPatcher = new PermisosPatcher();
