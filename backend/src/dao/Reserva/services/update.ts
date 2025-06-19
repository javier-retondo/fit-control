import { IReserva } from '../interface';
import { Reserva } from '../model';
import { RESERVA } from '../metadata';
import { SequelizeUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class ReservasUpdater extends SequelizeUpdater<IReserva> {
   model = Reserva;
   entityName = RESERVA.SINGULAR;
}

export const reservasUpdater = new ReservasUpdater();
