import { IHorarioSede } from '../interface';
import { HorarioSede } from '../model';
import { SequelizeCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { HORARIO_SEDE } from '../metadata';

class HorariosSedeCreator extends SequelizeCreator<IHorarioSede> {
   model = HorarioSede;
   entityName = HORARIO_SEDE.SINGULAR;
}

export const horariosSedeCreator = new HorariosSedeCreator();
