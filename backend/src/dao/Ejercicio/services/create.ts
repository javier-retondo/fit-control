import { IEjercicio } from '../interface';
import { Ejercicio } from '../model';
import { SequelizeCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { EJERCICIO } from '../metadata';

class EjerciciosCreator extends SequelizeCreator<IEjercicio> {
   model = Ejercicio;
   entityName = EJERCICIO.SINGULAR;
}

export const ejerciciosCreator = new EjerciciosCreator();
