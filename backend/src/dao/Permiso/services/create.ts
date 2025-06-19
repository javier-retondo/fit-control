import { IPermiso } from '../interface';
import { Permiso } from '../model';
import { SequelizeCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { PERMISO } from '../metadata';

class PermisosCreator extends SequelizeCreator<IPermiso> {
   model = Permiso;
   entityName = PERMISO.SINGULAR;
}

export const permisosCreator = new PermisosCreator();
