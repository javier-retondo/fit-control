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
            nombre: 'Esencial',
            precio: 'AR$ 18.000 / mes',
            descripcion:
              'Para gimnasios que recién comienzan o con una sola sede',
            beneficios: [
              '1 sede',
              'Hasta 150 socios',
              'Clases y reservas online',
              'App para socios',
              'Soporte por email',
            ],
          },
          {
            nombre: 'Pro',
            precio: 'AR$ 29.000 / mes',
            descripcion: 'Para gimnasios en crecimiento con más de una sede',
            beneficios: [
              'Hasta 3 sedes',
              'Hasta 500 socios',
              'Gestión de pagos',
              'Reportes avanzados',
              'Soporte por WhatsApp',
            ],
            destacado: true,
          },
          {
            nombre: 'Max',
            precio: 'AR$ 42.000 / mes',
            descripcion: 'Para cadenas o gimnasios con operación completa',
            beneficios: [
              'Sedes ilimitadas',
              'Socios ilimitados',
              'Integraciones externas',
              'Módulo de staff completo',
              'Soporte prioritario',
            ],
          },
        ]}
      />
      <CallToAction />
    </>
  );
};

export default LandingFitControl;
