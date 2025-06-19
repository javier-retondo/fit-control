import { HorarioSede } from '../model';
import { SequelizeDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { HORARIO_SEDE } from '../metadata';

class HorariosSedeDeleter extends SequelizeDeleter {
   model = HorarioSede;
   entityName = HORARIO_SEDE.SINGULAR;
}

export const horariosSedeDeleter = new HorariosSedeDeleter();
