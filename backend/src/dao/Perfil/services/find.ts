import { PERFIL } from '../../metadata';
import { IPerfil } from '../interface';
import { Perfil } from '../model';
import { ESTADOS } from '../../../utils/constants/SYSTEM_ENUMS';
import { SequelizeFinder } from '../../../abstractions/sequelizeBases/baseFind';
import { perfilIncludes } from '../includes';

type filter = Partial<{
   id: number[];
   search: string;
   estados: ESTADOS[];
}>;

export const perfilesFinder = new SequelizeFinder<IPerfil, filter>({
   model: Perfil,
   columns: PERFIL.COLUMNS,
   includes: perfilIncludes,
   searchableFields: ['descripcion'],
});
