import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config';
import { MENSAJE } from './metadata';
import { IMensaje } from './interface';
import { ESTADOS } from '../../utils/constants/SYSTEM_ENUMS';

type MensajeCreationAttributes = Optional<IMensaje, 'id'>;

class Mensaje extends Model<IMensaje, MensajeCreationAttributes> {}

Mensaje.init(
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      usuario_remitente_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      usuario_destinatario_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      contenido: {
         type: DataTypes.STRING(255),
         allowNull: false,
      },
      fecha: {
         type: DataTypes.DATE,
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
      tableName: MENSAJE.TABLE,
      timestamps: false,
      modelName: MENSAJE.TABLE,
      name: {
         plural: MENSAJE.PLURAL,
         singular: MENSAJE.SINGULAR,
      },
   },
);

export { Mensaje };
