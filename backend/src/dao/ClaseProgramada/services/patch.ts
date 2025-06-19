import { IHorarioClase } from '../interface';
import { HorarioClase } from '../model';
import { HORARIO_CLASE } from '../metadata';
import { SequelizePatcher } from '../../../abstractions/sequelizeBases/basePatch';

class HorariosClasePatcher extends SequelizePatcher<IHorarioClase> {
   model = HorarioClase;
   entityName = HORARIO_CLASE.SINGULAR;
}

export const horariosClasePatcher = new HorariosClasePatcher();
