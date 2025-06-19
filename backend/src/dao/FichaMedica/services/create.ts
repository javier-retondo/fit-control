import { IFichaMedica } from '../interface';
import { FichaMedica } from '../model';
import { SequelizeCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { FICHA_MEDICA } from '../metadata';

class FichasMedicasCreator extends SequelizeCreator<IFichaMedica> {
   model = FichaMedica;
   entityName = FICHA_MEDICA.SINGULAR;
}

export const fichasMedicasCreator = new FichasMedicasCreator();
