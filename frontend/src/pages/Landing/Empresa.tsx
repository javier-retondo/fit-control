import Hero from './components/Hero';
import Locations from './components/Locations';
import CallToAction from './components/CallToAction';
import { Box, Typography } from '@mui/material';
import PlanesPrecios from './components/Planes';
import { useEmpresa } from '../../context/EmpresaContext';
import Featured from './components/Featured';
import EmpresaLoading from '../../components/EmpresaLoading';

const LandingEmpresa = () => {
  const { empresa, isReady } = useEmpresa();

  if (!isReady) {
    return <EmpresaLoading />;
  }

  if (!empresa) {
    return (
      <Box>
        <Box
          sx={{
            p: 10,
            textAlign: 'center',
            height: '100vh',
            width: '100vw',
            backgroundImage: `url(/img/hero_2.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)',
          }}
        ></Box>
        <Box
          sx={{
            position: 'absolute',
            top: 100,
            left: 0,
            width: '100vw',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            px: 2,
          }}
        >
          <Typography variant="h1">404</Typography>
          <Typography variant="h4" sx={{ mt: 2 }}>
            Gimnasio no encontrado
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            El gimnasio que estás buscando no existe o no está disponible.
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            Por favor, verifica el enlace o vuelve a la página principal.
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            Si crees que esto es un error, contacta con el soporte técnico.
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <>
      <Hero
        titulo={empresa.landing.hero?.titulo}
        subtitulo={empresa.landing.hero?.subtitulo}
        imagenes={empresa.landing.hero?.imagenes}
        cta={empresa.landing.hero?.cta}
        mostrarStaffLink={false}
        imagenDecorativa={empresa.landing.hero?.imagenDecorativa}
        demo={empresa.demo}
      />
      <Featured clases={empresa.landing.clases ?? []} />
      <Locations locations={empresa.landing.sedes ?? []} />
      <PlanesPrecios
        modo="empresa"
        maxVisible={2}
        planes={empresa.landing.planes ?? []}
      />
      <CallToAction
        titulo={empresa.landing.cta?.titulo}
        subtitulo={empresa.landing.cta?.subtitulo}
        imagen={empresa.landing.cta?.imagen}
        fondo={empresa.landing.cta?.fondo}
        imagenHover={empresa.landing.cta?.imagenHover}
        cta={empresa.landing.cta?.cta}
        mostrarBotonSecundario={false}
      />
    </>
  );
};

export default LandingEmpresa;
