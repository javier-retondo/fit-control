import { IEjercicio } from '../interface';
import { Ejercicio } from '../model';
import { EJERCICIO } from '../metadata';
import { SequelizeUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class EjerciciosUpdater extends SequelizeUpdater<IEjercicio> {
   model = Ejercicio;
   entityName = EJERCICIO.SINGULAR;
}

export const ejerciciosUpdater = new EjerciciosUpdater();
