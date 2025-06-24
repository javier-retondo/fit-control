import Hero from './components/Hero';
import Benefits from './components/Benefits';
import CallToAction from './components/CallToAction';
import GimnasiosClientes from './components/Gyms';
import PlanesPrecios from './components/Planes';
import { useEmpresa } from '../../context/EmpresaContext';
import { useEffect } from 'react';

const LandingFitControl = () => {
  const { setIsReady } = useEmpresa();

  useEffect(() => {
    setIsReady(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <CallToAction
        titulo="Más de 1.200 socios ya entrenan mejor con FitControl"
        subtitulo="Gestioná clases, pagos, rutinas y acceso con una sola herramienta."
        imagen="/img/flexo-tip.png"
        imagenHover="/img/flexo-feliz.png"
        fondo="/img/sede_4.webp"
        cta={{ label: 'Empezar ahora', href: '/register' }}
        mostrarBotonSecundario={true}
        modo="fitcontrol"
      />
    </>
  );
};

export default LandingFitControl;
