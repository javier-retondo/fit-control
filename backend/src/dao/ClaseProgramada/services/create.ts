import { IHorarioClase } from '../interface';
import { HorarioClase } from '../model';
import { SequelizeCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { HORARIO_CLASE } from '../metadata';

class HorariosClaseCreator extends SequelizeCreator<IHorarioClase> {
   model = HorarioClase;
   entityName = HORARIO_CLASE.SINGULAR;
}

export const horariosClaseCreator = new HorariosClaseCreator();
