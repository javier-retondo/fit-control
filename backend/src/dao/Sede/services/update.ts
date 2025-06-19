import { ISede } from '../interface';
import { Sede } from '../model';
import { SEDE } from '../metadata';
import { SequelizeUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class SedesUpdater extends SequelizeUpdater<ISede> {
   model = Sede;
   entityName = SEDE.SINGULAR;
}

export const sedesUpdater = new SedesUpdater();
