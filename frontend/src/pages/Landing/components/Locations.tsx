import { Box, Typography, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Parallax } from 'react-scroll-parallax';
import Slider from 'react-slick';

type Sede = {
  nombre: string;
  direccion: string;
  horarios: string;
  imagen: string;
};

type LocationsProps = {
  locations: Sede[];
  titulo?: string;
  subtitulo?: string;
};

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

const Locations = ({
  locations,
  titulo = 'Nuestras Sedes',
  subtitulo = 'Elegí la sede más cercana y conocé sus horarios de atención.',
}: LocationsProps) => {
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
          {titulo}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 6, color: 'text.secondary' }}
        >
          {subtitulo}
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
