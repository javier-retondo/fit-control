import { IFichaMedica } from '../interface';
import { FichaMedica } from '../model';
import { FICHA_MEDICA } from '../metadata';
import { SequelizePatcher } from '../../../abstractions/sequelizeBases/basePatch';

class FichasMedicasPatcher extends SequelizePatcher<IFichaMedica> {
   model = FichaMedica;
   entityName = FICHA_MEDICA.SINGULAR;
}

export const fichasMedicasPatcher = new FichasMedicasPatcher();
