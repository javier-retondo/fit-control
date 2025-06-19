import { IUsuario } from '../interface';
import { Usuario } from '../model';
import { USUARIO } from '../metadata';
import { createUserInclude, UsuarioIncludes } from '../includes';
import { SOCIO_SUSCRIPCION } from '../../metadata';
import { Suscripcion } from '../../models';
import { ISuscripcion } from '../../interfaces';
import { SequelizeFinder } from '../../../abstractions/sequelizeBases/baseFind';

type filter = Partial<{
   id: number[];
   search: string;
   perfil_id: number[];
   suscripcion_id: number[];
   superadmin: boolean;
}>;

export const usuariosFinder = new SequelizeFinder<IUsuario, filter>({
   model: Usuario,
   columns: USUARIO.COLUMNS,
   includes: UsuarioIncludes,
   searchableFields: ['nombre', 'apellido', 'email', 'telefono'],
   relationFilters: (filter: filter) => {
      const relations = [];

      if (filter?.suscripcion_id) {
         relations.push({
            alias: USUARIO.ASSOCIATIONS.SUSCRIPCIONES,
            foreignKey: SOCIO_SUSCRIPCION.COLUMNS.SUSCRIPCION_ID,
            values: filter.suscripcion_id,
            include: createUserInclude<Suscripcion, ISuscripcion>(
               Suscripcion,
               'SUSCRIPCIONES',
               [],
               undefined,
               true,
            ),
         });
      }

      return relations;
   },
});
