import { Reserva } from '../model';
import { SequelizeDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { RESERVA } from '../metadata';

class ReservasDeleter extends SequelizeDeleter {
   model = Reserva;
   entityName = RESERVA.SINGULAR;
}

export const reservasDeleter = new ReservasDeleter();
