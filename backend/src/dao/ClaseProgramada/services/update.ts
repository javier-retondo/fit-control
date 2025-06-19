import { IHorarioClase } from '../interface';
import { HorarioClase } from '../model';
import { HORARIO_CLASE } from '../metadata';
import { SequelizeUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class HorariosClaseUpdater extends SequelizeUpdater<IHorarioClase> {
   model = HorarioClase;
   entityName = HORARIO_CLASE.SINGULAR;
}

export const horariosClaseUpdater = new HorariosClaseUpdater();
