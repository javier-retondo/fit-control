import { IReserva } from '../interface';
import { Reserva } from '../model';
import { SequelizeCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { RESERVA } from '../metadata';

class ReservasCreator extends SequelizeCreator<IReserva> {
   model = Reserva;
   entityName = RESERVA.SINGULAR;
}

export const reservasCreator = new ReservasCreator();
