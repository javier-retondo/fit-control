import { Ejercicio } from '../model';
import { SequelizeDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { EJERCICIO } from '../metadata';

class EjerciciosDeleter extends SequelizeDeleter {
   model = Ejercicio;
   entityName = EJERCICIO.SINGULAR;
}

export const ejerciciosDeleter = new EjerciciosDeleter();
