import { IEjercicio } from '../interface';
import { Ejercicio } from '../model';
import { EJERCICIO } from '../metadata';
import { SequelizePatcher } from '../../../abstractions/sequelizeBases/basePatch';

class EjerciciosPatcher extends SequelizePatcher<IEjercicio> {
   model = Ejercicio;
   entityName = EJERCICIO.SINGULAR;
}

export const ejerciciosPatcher = new EjerciciosPatcher();
