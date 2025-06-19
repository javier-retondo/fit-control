import { ESTADOS } from '../../utils/constants/SYSTEM_ENUMS';

export type IMedioPago = {
   id?: number;
   tipo: string;
   descripcion: string;
   estado: ESTADOS;
};

type MedioPagoColumnAliasKeys = 'ID' | 'TIPO' | 'DESCRIPCION' | 'ESTADO';
export type IMedioPagoColumnsAliases = {
   [key in MedioPagoColumnAliasKeys]: keyof IMedioPago;
};

export type IMedioPagoAssociations = object;
