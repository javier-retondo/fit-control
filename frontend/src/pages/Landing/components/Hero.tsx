import { Box, Typography, Button } from '@mui/material';
import Slider from 'react-slick';
import { Parallax } from 'react-scroll-parallax';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const heroImages = ['/img/hero_1.png', '/img/hero_2.jpg', '/img/hero_3.jpg'];

const Hero = () => {
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
        {heroImages.map((src, index) => (
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
          <Parallax speed={-15}>
            <img
              src="/img/flexo-pesa.png"
              alt="FitControl Logo"
              style={{ width: '250px', marginBottom: '16px', opacity: 0.8 }}
            />
          </Parallax>
          <Parallax speed={-5}>
            <Typography variant="h2" component="h1" gutterBottom>
              Bienvenido a FitControl
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{ mb: 4, color: 'text.secondary' }}
            >
              Controlá tu gimnasio con estilo. Automatizá reservas, pagos,
              rutinas y más.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'primary.main',
                color: 'background.default',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#FFC300',
                },
              }}
            >
              Empezá ahora
            </Button>
          </Parallax>
          <Parallax speed={-5}>
            <Box sx={{ mt: 4 }}>
              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  color: 'text.secondary',
                }}
              >
                ¿Sos parte del staff?{' '}
                <Box
                  component="a"
                  href="/login/staff"
                  sx={{
                    color: 'primary.main',
                    textDecoration: 'underline',
                    fontWeight: 'medium',
                    cursor: 'pointer',
                    '&:hover': { color: '#FFC300' },
                  }}
                >
                  Ingresá acá
                </Box>
              </Typography>
            </Box>
          </Parallax>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
