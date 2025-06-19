import { Clase } from '../model';
import { SequelizeDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { CLASE } from '../metadata';

class ClasesDeleter extends SequelizeDeleter {
   model = Clase;
   entityName = CLASE.SINGULAR;
}

export const clasesDeleter = new ClasesDeleter();
