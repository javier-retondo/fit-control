import { Permiso } from '../model';
import { SequelizeDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { PERMISO } from '../metadata';

class PermisosDeleter extends SequelizeDeleter {
   model = Permiso;
   entityName = PERMISO.SINGULAR;
}

export const permisosDeleter = new PermisosDeleter();
