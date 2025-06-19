import { IClase } from '../interface';
import { Clase } from '../model';
import { CLASE } from '../metadata';
import { SequelizeUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class ClasesUpdater extends SequelizeUpdater<IClase> {
   model = Clase;
   entityName = CLASE.SINGULAR;
}

export const clasesUpdater = new ClasesUpdater();
