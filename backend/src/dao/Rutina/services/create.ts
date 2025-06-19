import { IRutina } from '../interface';
import { Rutina } from '../model';
import { SequelizeCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { RUTINA } from '../metadata';

class RutinasCreator extends SequelizeCreator<IRutina> {
   model = Rutina;
   entityName = RUTINA.SINGULAR;
}

export const rutinasCreator = new RutinasCreator();
