import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config';
import { SOCIO_SUSCRIPCION } from './metadata';
import { ISocioSuscripcion } from './interface';
import { ESTADOS } from '../../utils/constants/SYSTEM_ENUMS';

type SocioSuscripcionCreationAttributes = Optional<ISocioSuscripcion, 'id'>;

class SocioSuscripcion extends Model<ISocioSuscripcion, SocioSuscripcionCreationAttributes> {}

SocioSuscripcion.init(
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      socio_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      suscripcion_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      importe: {
         type: DataTypes.DOUBLE,
         allowNull: false,
      },
      vigencia_desde: {
         type: DataTypes.DATEONLY,
         allowNull: false,
      },
      vigencia_hasta: {
         type: DataTypes.DATEONLY,
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
      tableName: SOCIO_SUSCRIPCION.TABLE,
      timestamps: false,
      modelName: SOCIO_SUSCRIPCION.TABLE,
      name: {
         plural: SOCIO_SUSCRIPCION.PLURAL,
         singular: SOCIO_SUSCRIPCION.SINGULAR,
      },
   },
);

export { SocioSuscripcion };
