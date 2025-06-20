import { Box, Typography, Paper } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Slider from 'react-slick';
import { Parallax } from 'react-scroll-parallax';

const gimnasios = [
  {
    nombre: 'Energym',
    zona: 'Palermo, CABA',
    tiempoUso: 'Usan FitControl desde 2023',
    imagen: '/img/sede_1.png',
  },
  {
    nombre: 'PowerHouse',
    zona: 'Ramos Mejía, GBA Oeste',
    tiempoUso: 'Más de 18 meses usando FitControl',
    imagen: '/img/sede_2.webp',
  },
  {
    nombre: 'FitZone',
    zona: 'Córdoba Capital',
    tiempoUso: 'Confían en FitControl desde 2022',
    imagen: '/img/sede_3.webp',
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const GimnasiosClientes = () => {
  return (
    <section id="gimnasios">
      <Box
        sx={{
          py: 10,
          px: 2,
          width: '99vw',
          backgroundColor: 'background.default',
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Gimnasios que confían en FitControl
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 6, color: 'text.secondary' }}
        >
          Estas marcas ya están transformando su gestión con nuestra plataforma.
        </Typography>

        <Box sx={{ width: '100%', maxWidth: '1400px', mx: 'auto' }}>
          <Slider {...sliderSettings}>
            {gimnasios.map((gimnasio, index) => (
              <Box key={index} sx={{ px: 2 }}>
                <Parallax speed={-5}>
                  <Paper
                    elevation={5}
                    sx={{
                      borderRadius: 4,
                      overflow: 'hidden',
                      backgroundColor: 'background.paper',
                      color: 'text.primary',
                      height: '100%',
                    }}
                  >
                    <Box
                      component="img"
                      src={gimnasio.imagen}
                      alt={gimnasio.nombre}
                      sx={{
                        width: '100%',
                        height: 220,
                        objectFit: 'cover',
                      }}
                    />
                    <Box sx={{ p: 3 }}>
                      <Typography variant="h6">{gimnasio.nombre}</Typography>

                      <Box
                        sx={{ display: 'flex', alignItems: 'center', mt: 1 }}
                      >
                        <VerifiedUserIcon
                          sx={{ mr: 1, color: 'primary.main' }}
                        />
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary' }}
                        >
                          {gimnasio.zona}
                        </Typography>
                      </Box>

                      <Box
                        sx={{ display: 'flex', alignItems: 'center', mt: 1 }}
                      >
                        <AccessTimeIcon sx={{ mr: 1, color: 'primary.main' }} />
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary' }}
                        >
                          {gimnasio.tiempoUso}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Parallax>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </section>
  );
};

export default GimnasiosClientes;
