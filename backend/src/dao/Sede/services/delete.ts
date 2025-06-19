import { Sede } from '../model';
import { SequelizeDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { SEDE } from '../metadata';

class SedesDeleter extends SequelizeDeleter {
   model = Sede;
   entityName = SEDE.SINGULAR;
}

export const sedesDeleter = new SedesDeleter();
