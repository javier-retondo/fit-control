import { IPermiso } from '../interface';
import { Permiso } from '../model';
import { PERMISO } from '../metadata';
import { SequelizeUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class PermisosUpdater extends SequelizeUpdater<IPermiso> {
   model = Permiso;
   entityName = PERMISO.SINGULAR;
}

export const permisosUpdater = new PermisosUpdater();
