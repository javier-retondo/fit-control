import { IRutina } from '../interface';
import { Rutina } from '../model';
import { RUTINA } from '../metadata';
import { SequelizeUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class RutinasUpdater extends SequelizeUpdater<IRutina> {
   model = Rutina;
   entityName = RUTINA.SINGULAR;
}

export const rutinasUpdater = new RutinasUpdater();
