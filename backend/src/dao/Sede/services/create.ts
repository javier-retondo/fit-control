import { ISede } from '../interface';
import { Sede } from '../model';
import { SequelizeCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { SEDE } from '../metadata';

class SedesCreator extends SequelizeCreator<ISede> {
   model = Sede;
   entityName = SEDE.SINGULAR;
}

export const sedesCreator = new SedesCreator();
