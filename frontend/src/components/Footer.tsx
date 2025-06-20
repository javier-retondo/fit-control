import {
  Box,
  Typography,
  Stack,
  Link,
  IconButton,
  useTheme,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { useEmpresa } from '../context/EmpresaContext';

const Footer = () => {
  const theme = useTheme();
  const { empresa } = useEmpresa();

  const isFitControl = !empresa?.slug || empresa.slug === 'fitcontrol';

  const secciones = isFitControl
    ? [
        { href: '#hero', label: 'Inicio' },
        { href: '#beneficios', label: 'Beneficios' },
        { href: '#gimnasios', label: 'Gimnasios' },
        { href: '#precios', label: 'Planes' },
      ]
    : [
        { href: '#hero', label: 'Inicio' },
        { href: '#clases', label: 'Clases' },
        { href: '#sedes', label: 'Sedes' },
        { href: '#cta', label: 'Contacto' },
      ];

  const redesFitControl = [
    { href: 'https://www.facebook.com/fitcontrolapp', icon: <FacebookIcon /> },
    {
      href: 'https://www.instagram.com/fitcontrolapp',
      icon: <InstagramIcon />,
    },
    { href: `https://wa.me/${empresa?.redes?.whatsapp}`, icon: <EmailIcon /> },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.secondary,
        py: 6,
        px: 2,
        mt: 0,
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        justifyContent="space-between"
        alignItems="center"
        maxWidth="lg"
        sx={{ mx: 'auto' }}
      >
        {/* Logo o marca */}
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.primary,
            fontWeight: 'bold',
            '&:hover': { color: theme.palette.primary.main },
          }}
        >
          {empresa?.nombre || 'FitControl'}
        </Typography>

        {/* Links internos */}
        <Stack direction="row" spacing={3}>
          {secciones.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              underline="hover"
              color="inherit"
              sx={{
                fontWeight: 'bold',
                '&:hover': { color: theme.palette.primary.main },
              }}
            >
              {s.label}
            </Link>
          ))}
        </Stack>

        {/* Redes sociales */}
        <Stack direction="row" spacing={1}>
          {empresa?.redes?.facebook && (
            <IconButton
              href={empresa.redes.facebook}
              target="_blank"
              sx={{
                color: theme.palette.primary.main,
                '&:hover': { color: theme.palette.secondary.main || '#969696' },
              }}
            >
              <FacebookIcon />
            </IconButton>
          )}
          {empresa?.redes?.instagram && (
            <IconButton
              href={empresa.redes.instagram}
              target="_blank"
              sx={{
                color: theme.palette.primary.main,
                '&:hover': { color: theme.palette.secondary.main || '#969696' },
              }}
            >
              <InstagramIcon />
            </IconButton>
          )}
          {empresa?.redes?.whatsapp && (
            <IconButton
              href={`https://wa.me/${empresa.redes.whatsapp}`}
              target="_blank"
              sx={{
                color: theme.palette.primary.main,
                '&:hover': { color: theme.palette.secondary.main || '#969696' },
              }}
            >
              <EmailIcon />
            </IconButton>
          )}
          {isFitControl &&
            redesFitControl.map((red) => (
              <IconButton
                key={red.href}
                href={red.href}
                target="_blank"
                sx={{
                  color: theme.palette.primary.main,
                  '&:hover': {
                    color: theme.palette.secondary.main || '#969696',
                  },
                }}
              >
                {red.icon}
              </IconButton>
            ))}
        </Stack>
      </Stack>

      <Typography
        variant="body2"
        align="center"
        sx={{ mt: 4, fontSize: '0.8rem', color: theme.palette.text.secondary }}
      >
        © {new Date().getFullYear()} {empresa?.nombre || 'FitControl'}. Todos
        los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
