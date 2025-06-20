import { Box, Typography, Paper } from '@mui/material';
import Slider from 'react-slick';

type Clase = {
  nombre: string;
  descripcion: string;
  imagen: string;
};

type FeaturedProps = {
  clases: Clase[];
  titulo?: string;
  subtitulo?: string;
};

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

const Featured = ({
  clases,
  titulo = 'Clases Destacadas',
  subtitulo = 'Una propuesta para cada tipo de entrenamiento.',
}: FeaturedProps) => {
  if (!clases || clases.length === 0) return null;

  return (
    <section id="clases">
      <Box sx={{ py: 10, px: 2, backgroundColor: 'background.paper' }}>
        <Typography variant="h4" align="center" gutterBottom>
          {titulo}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 6, color: 'text.secondary' }}
        >
          {subtitulo}
        </Typography>

        <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
          <Slider {...sliderSettings}>
            {clases.map((clase, i) => (
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

export default Featured;
