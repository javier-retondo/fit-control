import { Box, Typography, Button, Stack } from '@mui/material';
import { Parallax } from 'react-scroll-parallax';
import { useState } from 'react';

const CallToAction = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="cta">
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          px: 2,
          width: '99vw',
          textAlign: 'center',
          backgroundImage: 'url(/img/sede_4.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.9)',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 0,
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Parallax speed={-5}>
            <Box
              component="img"
              src={hovered ? '/img/flexo-feliz.png' : '/img/flexo-tip.png'}
              alt="Flexo"
              sx={{
                width: 100,
                mb: 3,
                transition: 'all 0.3s ease-in-out',
                transform: hovered ? 'scale(1.1) rotate(3deg)' : 'scale(1)',
              }}
            />
            <Typography variant="h4" gutterBottom color="white">
              Más de 1.200 socios ya entrenan mejor con FitControl
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ mb: 4, color: 'text.secondary' }}
            >
              Gestioná clases, pagos, rutinas y acceso con una sola herramienta.
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Button
                href="/login/socio"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'background.default',
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: '#FFC300', color: 'black' },
                }}
              >
                Empezar ahora
              </Button>
              <Button
                href="#beneficios"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  fontWeight: 'bold',
                  '&:hover': {
                    borderColor: '#FFC300',
                    color: '#FFC300',
                    backgroundColor: 'rgba(255, 215, 0, 0.05)',
                  },
                }}
              >
                Ver más beneficios
              </Button>
            </Stack>
          </Parallax>
        </Box>
      </Box>
    </section>
  );
};

export default CallToAction;
