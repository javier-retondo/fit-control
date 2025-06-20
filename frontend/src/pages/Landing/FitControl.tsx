import Hero from './components/Hero';
import Benefits from './components/Benefits';
import CallToAction from './components/CallToAction';
import GimnasiosClientes from './components/Gyms';
import PlanesPrecios from './components/Planes';

const LandingFitControl = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <GimnasiosClientes />
      <PlanesPrecios
        modo="fitcontrol"
        planes={[
          {
            nombre: 'Essentials',
            precio: 'AR$ 7.500 / mes',
            descripcion: 'Ideal para gimnasios pequeños',
            beneficios: ['Socios, clases, reservas', 'App para socios'],
          },
          {
            nombre: 'Pro',
            precio: 'AR$ 12.000 / mes',
            descripcion: 'Para gimnasios con múltiples sedes',
            beneficios: ['Todo Essentials', 'Reportes', 'Módulo pagos'],
            destacado: true,
          },
          {
            nombre: 'White Label',
            precio: 'A convenir',
            descripcion: 'Con tu propia marca y dominio',
            beneficios: [
              'Dominio propio',
              'Landing editable',
              'Soporte dedicado',
            ],
          },
        ]}
      />
      <CallToAction />
    </>
  );
};

export default LandingFitControl;
