import { Usuario } from '../model';
import { SequelizeDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { USUARIO } from '../metadata';

class UsuariosDeleter extends SequelizeDeleter {
   model = Usuario;
   entityName = USUARIO.SINGULAR;
}

export const usuariosDeleter = new UsuariosDeleter();
