import { Perfil } from '../model';
import { SequelizeDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { PERFIL } from '../metadata';

class PerfilesDeleter extends SequelizeDeleter {
   model = Perfil;
   entityName = PERFIL.SINGULAR;
}

export const perfilesDeleter = new PerfilesDeleter();
