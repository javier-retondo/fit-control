import { IPerfil } from '../interface';
import { Perfil } from '../model';
import { SequelizeCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { PERFIL } from '../metadata';

class PerfilesCreator extends SequelizeCreator<IPerfil> {
   model = Perfil;
   entityName = PERFIL.SINGULAR;
}

export const perfilesCreator = new PerfilesCreator();
