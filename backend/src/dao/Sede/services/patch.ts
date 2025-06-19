import { ISede } from '../interface';
import { Sede } from '../model';
import { SEDE } from '../metadata';
import { SequelizePatcher } from '../../../abstractions/sequelizeBases/basePatch';

class SedesPatcher extends SequelizePatcher<ISede> {
   model = Sede;
   entityName = SEDE.SINGULAR;
}

export const sedesPatcher = new SedesPatcher();
