import { HorarioClase } from '../model';
import { SequelizeDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { HORARIO_CLASE } from '../metadata';

class HorariosClaseDeleter extends SequelizeDeleter {
   model = HorarioClase;
   entityName = HORARIO_CLASE.SINGULAR;
}

export const horariosClaseDeleter = new HorariosClaseDeleter();
