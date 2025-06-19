import { IModulo } from '../interface';
import { Modulo } from '../model';
import { MODULO } from '../metadata';
import { SequelizeUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class ModulosUpdater extends SequelizeUpdater<IModulo> {
   model = Modulo;
   entityName = MODULO.SINGULAR;
}

export const modulosUpdater = new ModulosUpdater();
