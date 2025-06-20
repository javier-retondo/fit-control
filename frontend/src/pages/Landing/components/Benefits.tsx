import { Box, Typography, Grid, Paper, useTheme } from '@mui/material';
import { Parallax } from 'react-scroll-parallax';

const benefits = [
  {
    titulo: 'Reservas Automatizadas',
    descripcion:
      'Tus socios reservan clases desde la app, sin intervención del staff. Todo fluye de forma automática.',
    img: '/img/flexo-check-bg.png',
  },
  {
    titulo: 'Control de Ingresos',
    descripcion:
      'Gestioná el acceso de tus socios con un sistema de control de ingresos eficiente. Olvídate de las colas y los problemas.',
    img: '/img/flexo-pc-bg.png',
  },
  {
    titulo: 'Planes Personalizados',
    descripcion:
      'Instructores asignan rutinas a cada socio y se visualizan desde cualquier dispositivo. Todo en un solo lugar.',
    img: '/img/flexo-ok-bg.png',
  },
];

const Benefits = () => {
  const theme = useTheme();

  return (
    <section id="beneficios">
      <Box
        sx={{
          py: 10,
          px: 2,
          backgroundColor: 'background.default',
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Beneficios de usar FitControl
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 6, color: 'text.secondary' }}
        >
          Todo lo que necesitás para gestionar tu gimnasio en una sola
          plataforma.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {benefits.map((b, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ mb: 2 }} key={index}>
              <Parallax speed={-30} translateY={[-20, 20]}>
                <Paper
                  elevation={6}
                  sx={{
                    backgroundColor: theme.palette.background.default,
                    borderRadius: 4,
                    p: 4,
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: `0 8px 30px ${theme.palette.primary.main}`,
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    <img
                      src={b.img}
                      alt={b.titulo}
                      width={100}
                      height={100}
                      style={{ borderRadius: '50%' }}
                    />
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {b.titulo}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {b.descripcion}
                  </Typography>
                </Paper>
              </Parallax>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default Benefits;
