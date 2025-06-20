import { ESTADOS } from '../../utils/constants/SYSTEM_ENUMS';
import { IHorarioClase, IHorarioSede } from '../interfaces';

export type ISede = {
   id?: number;
   nombre: string;
   descripcion: string;
   estado: ESTADOS;

   // relaciones
   Horarios?: IHorarioSede[];
   Clases?: IHorarioClase[];
};

type SedeColumnAliasKeys = 'ID' | 'NOMBRE' | 'DESCRIPCION' | 'ESTADO';
export type ISedeColumnsAliases = {
   [key in SedeColumnAliasKeys]: keyof ISede;
};

type SedeAssociationsKeys = 'HORARIOS' | 'CLASES';

export type ISedeAssociations = {
   [key in SedeAssociationsKeys]: keyof ISede;
};
