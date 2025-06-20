import { Box, Typography, Paper } from '@mui/material';
import Slider from 'react-slick';

const classes = [
  {
    nombre: 'Funcional',
    descripcion:
      'Entrenamiento de fuerza y resistencia en circuitos dinámicos.',
    imagen: '/img/funcional.jpg',
  },
  {
    nombre: 'Yoga',
    descripcion:
      'Conectá cuerpo y mente. Ideal para la flexibilidad y el equilibrio.',
    imagen: '/img/yoga.jpg',
  },
  {
    nombre: 'Spinning',
    descripcion: 'Alta intensidad sobre bici fija. Ideal para quemar calorías.',
    imagen: '/img/spinning.jpg',
  },
  {
    nombre: 'Zumba',
    descripcion: 'Cardio divertido con ritmos latinos. ¡Bailá y entrená!',
    imagen: '/img/zumba.jpg',
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4500,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Feauted = () => {
  return (
    <section id="clases">
      <Box sx={{ py: 10, px: 2, backgroundColor: 'background.paper' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Clases Destacadas
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 6, color: 'text.secondary' }}
        >
          Una propuesta para cada tipo de entrenamiento.
        </Typography>

        <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
          <Slider {...sliderSettings}>
            {classes.map((clase, i) => (
              <Box key={i} sx={{ px: 2 }}>
                <Paper
                  elevation={4}
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    backgroundColor: 'background.default',
                    color: 'text.primary',
                    height: '100%',
                  }}
                >
                  <Box
                    component="img"
                    src={clase.imagen}
                    alt={clase.nombre}
                    sx={{
                      width: '100%',
                      height: 220,
                      objectFit: 'cover',
                    }}
                  />
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h6">{clase.nombre}</Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary' }}
                    >
                      {clase.descripcion}
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </section>
  );
};

export default Feauted;
