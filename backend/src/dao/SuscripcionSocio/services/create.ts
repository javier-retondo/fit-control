import { ISocioSuscripcion } from '../interface';
import { SocioSuscripcion } from '../model';
import { SequelizeCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { SOCIO_SUSCRIPCION } from '../metadata';

class SocioSuscripcionesCreator extends SequelizeCreator<ISocioSuscripcion> {
   model = SocioSuscripcion;
   entityName = SOCIO_SUSCRIPCION.SINGULAR;
}

export const socioSuscripcionesCreator = new SocioSuscripcionesCreator();
