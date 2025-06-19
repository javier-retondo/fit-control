import { IModulo } from '../interface';
import { Modulo } from '../model';
import { SequelizeCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { MODULO } from '../metadata';

class ModulosCreator extends SequelizeCreator<IModulo> {
   model = Modulo;
   entityName = MODULO.SINGULAR;
}

export const modulosCreator = new ModulosCreator();
