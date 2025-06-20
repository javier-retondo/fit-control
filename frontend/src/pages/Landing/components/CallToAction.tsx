import { Box, Typography, Button, Stack } from '@mui/material';
import { Parallax } from 'react-scroll-parallax';
import { useState } from 'react';

type CTAProps = {
  titulo?: string;
  subtitulo?: string;
  imagen?: string;
  imagenHover?: string;
  fondo?: string;
  cta?: {
    label: string;
    href: string;
  };
  mostrarBotonSecundario?: boolean;
};

const CallToAction = ({
  titulo = 'Más de 1.200 socios ya entrenan mejor con FitControl',
  subtitulo = 'Gestioná clases, pagos, rutinas y acceso con una sola herramienta.',
  imagen = '/img/flexo-tip.png',
  imagenHover = '/img/flexo-feliz.png',
  fondo = '/img/sede_4.webp',
  cta = { label: 'Empezar ahora', href: '/login/socio' },
  mostrarBotonSecundario = true,
}: CTAProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="cta">
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          px: 2,
          width: '99vw',
          textAlign: 'center',
          backgroundImage: `url(${fondo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
            {imagen && (
              <Box
                component="img"
                src={hovered && imagenHover ? imagenHover : imagen}
                alt="Decoración"
                sx={{
                  width: 100,
                  mb: 3,
                  transition: 'all 0.3s ease-in-out',
                  transform: hovered ? 'scale(1.1) rotate(3deg)' : 'scale(1)',
                }}
              />
            )}

            <Typography variant="h4" gutterBottom color="white">
              {titulo}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ mb: 4, color: 'text.secondary' }}
            >
              {subtitulo}
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Button
                href={cta.href}
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'background.default',
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: '#FFC300', color: 'black' },
                }}
              >
                {cta.label}
              </Button>

              {mostrarBotonSecundario && (
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
              )}
            </Stack>
          </Parallax>
        </Box>
      </Box>
    </section>
  );
};

export default CallToAction;
