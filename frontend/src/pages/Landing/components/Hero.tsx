import { Box, Typography, Button } from '@mui/material';
import Slider from 'react-slick';
import { Parallax } from 'react-scroll-parallax';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEmpresaTheme } from '../../../hooks/useEmpresaTheme';
import { useNavigate } from 'react-router-dom';

type HeroProps = {
  titulo?: string;
  subtitulo?: string;
  imagenes?: string[];
  imagenDecorativa?: string;
  demo?: boolean;
  cta?: {
    label: string;
    href: string;
  };
  mostrarStaffLink?: boolean;
};

const Hero = ({
  titulo = 'Bienvenido a FitControl',
  subtitulo = 'Controlá tu gimnasio con estilo. Automatizá reservas, pagos, rutinas y más.',
  imagenes = ['/img/hero_1.png', '/img/hero_2.jpg', '/img/hero_3.jpg'],
  imagenDecorativa = '/img/flexo-pesa.png',
  cta = { label: 'Empezá ahora', href: '/registro' },
  mostrarStaffLink = true,
  demo = false,
}: HeroProps) => {
  const theme = useEmpresaTheme();
  const navigate = useNavigate();

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        height: '100vh',
        width: '99vw',
        overflow: 'hidden',
      }}
    >
      <Slider {...sliderSettings}>
        {imagenes.map((src, index) => (
          <Box
            key={index}
            component="div"
            sx={{
              height: '100vh',
              width: '100vw',
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.4)',
            }}
          />
        ))}
      </Slider>

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: 2,
        }}
      >
        <Box sx={{ maxWidth: 800 }}>
          {imagenDecorativa && (
            <Parallax speed={-15}>
              <img
                src={imagenDecorativa}
                alt="Imagen decorativa"
                style={{
                  width: '250px',
                  marginBottom: '16px',
                  opacity: 0.8,
                }}
              />
            </Parallax>
          )}

          <Parallax speed={-5}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}
            >
              {titulo}
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{ mb: 4, color: 'text.secondary' }}
            >
              {subtitulo}
            </Typography>
            <Button
              variant="contained"
              size="large"
              href={cta?.href}
              sx={{
                fontWeight: 'bold',
                color: theme.palette.background.default,
                backgroundColor: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.secondary.main,
                  borderColor: theme.palette.secondary.main,
                  textDecoration: 'none',
                  color: theme.palette.primary.main,
                },
              }}
            >
              {cta?.label}
            </Button>
          </Parallax>
          {(mostrarStaffLink || demo) && (
            <Parallax speed={-5}>
              <Box sx={{ mt: 6 }}>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 2,
                    color: 'text.secondary',
                  }}
                >
                  {demo ? '¿Te gustó la demo?' : '¿Querés ver una demo?'}{' '}
                  <Box
                    component="a"
                    onClick={() => {
                      if (demo) {
                        navigate('/');
                      } else {
                        navigate('/gym/cba-gymx');
                      }
                    }}
                    sx={{
                      color: 'primary.main',
                      textDecoration: 'underline',
                      fontWeight: 'medium',
                      cursor: 'pointer',
                      '&:hover': {
                        color: 'background.paper',
                        textDecoration: 'none',
                      },
                    }}
                  >
                    {demo ? 'Volver a FitControl' : 'Ver demo'}
                  </Box>
                </Typography>
              </Box>
            </Parallax>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
