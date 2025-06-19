import { IReserva } from '../interface';
import { Reserva } from '../model';
import { RESERVA } from '../metadata';
import { SequelizePatcher } from '../../../abstractions/sequelizeBases/basePatch';

class ReservasPatcher extends SequelizePatcher<IReserva> {
   model = Reserva;
   entityName = RESERVA.SINGULAR;
}

export const reservasPatcher = new ReservasPatcher();
