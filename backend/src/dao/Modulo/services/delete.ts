import { Modulo } from '../model';
import { SequelizeDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { MODULO } from '../metadata';

class ModulosDeleter extends SequelizeDeleter {
   model = Modulo;
   entityName = MODULO.SINGULAR;
}

export const modulosDeleter = new ModulosDeleter();
