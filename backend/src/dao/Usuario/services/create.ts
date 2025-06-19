import { IUsuario } from '../interface';
import { Usuario } from '../model';
import { SequelizeCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { USUARIO } from '../metadata';

class UsuariosCreator extends SequelizeCreator<IUsuario> {
   model = Usuario;
   entityName = USUARIO.SINGULAR;
}

export const usuariosCreator = new UsuariosCreator();
