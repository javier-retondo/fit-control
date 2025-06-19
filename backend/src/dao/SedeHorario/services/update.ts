import { IHorarioSede } from '../interface';
import { HorarioSede } from '../model';
import { HORARIO_SEDE } from '../metadata';
import { SequelizeUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class HorariosSedeUpdater extends SequelizeUpdater<IHorarioSede> {
   model = HorarioSede;
   entityName = HORARIO_SEDE.SINGULAR;
}

export const horariosSedeUpdater = new HorariosSedeUpdater();
