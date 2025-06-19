import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config';
import { PERFIL } from './metadata';
import { IPerfil } from './interface';
import { ESTADOS } from '../../utils/constants/SYSTEM_ENUMS';

type PerfilCreationAttributes = Optional<IPerfil, 'id'>;

class Perfil extends Model<IPerfil, PerfilCreationAttributes> {}

Perfil.init(
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      descripcion: {
         type: DataTypes.STRING(150),
         allowNull: false,
      },
      estado: {
         type: DataTypes.ENUM(ESTADOS.ACTIVO, ESTADOS.INACTIVO),
         allowNull: false,
         defaultValue: ESTADOS.ACTIVO,
      },
   },
   {
      sequelize: sequelize,
      tableName: PERFIL.TABLE,
      timestamps: false,
      modelName: PERFIL.TABLE,
      name: {
         plural: PERFIL.PLURAL,
         singular: PERFIL.SINGULAR,
      },
   },
);

export { Perfil };
