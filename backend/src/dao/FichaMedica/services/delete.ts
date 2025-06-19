import { FichaMedica } from '../model';
import { SequelizeDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { FICHA_MEDICA } from '../metadata';

class FichasMedicasDeleter extends SequelizeDeleter {
   model = FichaMedica;
   entityName = FICHA_MEDICA.SINGULAR;
}

export const fichasMedicasDeleter = new FichasMedicasDeleter();
