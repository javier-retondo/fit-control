import { Rutina } from '../model';
import { SequelizeDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { RUTINA } from '../metadata';

class RutinasDeleter extends SequelizeDeleter {
   model = Rutina;
   entityName = RUTINA.SINGULAR;
}

export const rutinasDeleter = new RutinasDeleter();
