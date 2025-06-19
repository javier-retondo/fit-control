import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config';
import { MEDIO_PAGO } from './metadata';
import { IMedioPago } from './interface';
import { ESTADOS } from '../../utils/constants/SYSTEM_ENUMS';

type MedioPagoCreationAttributes = Optional<IMedioPago, 'id'>;

class MedioPago extends Model<IMedioPago, MedioPagoCreationAttributes> {}

MedioPago.init(
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      tipo: {
         type: DataTypes.STRING(80),
         allowNull: false,
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
      tableName: MEDIO_PAGO.TABLE,
      timestamps: false,
      modelName: MEDIO_PAGO.TABLE,
      name: {
         plural: MEDIO_PAGO.PLURAL,
         singular: MEDIO_PAGO.SINGULAR,
      },
   },
);

export { MedioPago };
