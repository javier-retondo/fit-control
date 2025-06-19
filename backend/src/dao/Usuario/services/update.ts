import { IUsuario } from '../interface';
import { Usuario } from '../model';
import { USUARIO } from '../metadata';
import { SequelizeUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class UsuariosUpdater extends SequelizeUpdater<IUsuario> {
   model = Usuario;
   entityName = USUARIO.SINGULAR;
}

export const usuariosUpdater = new UsuariosUpdater();
