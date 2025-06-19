import { IClase } from '../interface';
import { Clase } from '../model';
import { SequelizeCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { CLASE } from '../metadata';

class ClasesCreator extends SequelizeCreator<IClase> {
   model = Clase;
   entityName = CLASE.SINGULAR;
}

export const clasesCreator = new ClasesCreator();
