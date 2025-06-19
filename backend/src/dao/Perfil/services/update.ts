import { IPerfil } from '../interface';
import { Perfil } from '../model';
import { PERFIL } from '../metadata';
import { SequelizeUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class PerfilesUpdater extends SequelizeUpdater<IPerfil> {
   model = Perfil;
   entityName = PERFIL.SINGULAR;
}

export const perfilesUpdater = new PerfilesUpdater();
