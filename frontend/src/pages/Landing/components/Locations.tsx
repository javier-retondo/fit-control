import { Box, Typography, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Parallax } from 'react-scroll-parallax';
import Slider from 'react-slick';

const locations = [
  {
    nombre: 'Sede Central',
    direccion: 'Av. Principal 1234, CABA',
    horarios: 'Lunes a Viernes de 7:00 a 22:00\nSábados de 9:00 a 18:00',
    imagen: '/img/sede_1.png',
  },
  {
    nombre: 'Sede Norte',
    direccion: 'Ruta Panamericana km 45, Pilar',
    horarios: 'Lunes a Viernes de 8:00 a 21:00\nSábados de 9:00 a 14:00',
    imagen: '/img/sede_2.webp',
  },
  {
    nombre: 'Sede Oeste',
    direccion: 'Av. Rivadavia 9800, Ramos Mejía',
    horarios: 'Lunes a Viernes de 6:30 a 22:30\nDomingos de 10:00 a 16:00',
    imagen: '/img/sede_3.webp',
  },
];

const sliderSettings = {
  dots: false,
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

const Locations = () => {
  return (
    <section id="sedes">
      <Box
        sx={{
          py: 10,
          px: 2,
          width: '99vw',
          backgroundColor: 'background.default',
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Nuestras Sedes
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 6, color: 'text.secondary' }}
        >
          Elegí la sede más cercana y conocé sus horarios de atención.
        </Typography>

        <Box sx={{ width: '100%', maxWidth: '1400px', mx: 'auto' }}>
          <Slider {...sliderSettings}>
            {locations.map((location, index) => (
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
                      src={location.imagen}
                      alt={location.nombre}
                      sx={{
                        width: '100%',
                        height: 220,
                        objectFit: 'cover',
                      }}
                    />
                    <Box sx={{ p: 3 }}>
                      <Typography variant="h6">{location.nombre}</Typography>

                      <Box
                        sx={{ display: 'flex', alignItems: 'center', mt: 1 }}
                      >
                        <LocationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary' }}
                        >
                          {location.direccion}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'start', mt: 1 }}>
                        <AccessTimeIcon
                          sx={{ mr: 1, mt: 0.5, color: 'primary.main' }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            whiteSpace: 'pre-line',
                          }}
                        >
                          {location.horarios}
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

export default Locations;
