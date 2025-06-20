import { Box, Typography, Stack, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.secondary',
        py: 6,
        px: 2,
        mt: 10,
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
          sx={{ color: 'text.primary', '&:hover': { color: '#FFC300' } }}
        >
          FitControl
        </Typography>

        {/* Links internos */}
        <Stack direction="row" spacing={3}>
          <Link
            href="#hero"
            underline="hover"
            color="inherit"
            sx={{ fontWeight: 'bold', '&:hover': { color: '#FFC300' } }}
          >
            Inicio
          </Link>
          <Link
            href="#beneficios"
            underline="hover"
            color="inherit"
            sx={{ fontWeight: 'bold', '&:hover': { color: '#FFC300' } }}
          >
            Beneficios
          </Link>
          <Link
            href="#clases"
            underline="hover"
            color="inherit"
            sx={{ fontWeight: 'bold', '&:hover': { color: '#FFC300' } }}
          >
            Clases
          </Link>
          <Link
            href="#sedes"
            underline="hover"
            color="inherit"
            sx={{ fontWeight: 'bold', '&:hover': { color: '#FFC300' } }}
          >
            Sedes
          </Link>
        </Stack>

        {/* Redes sociales */}
        <Stack direction="row" spacing={1}>
          <IconButton
            href="https://facebook.com"
            target="_blank"
            sx={{ color: 'primary.main', '&:hover': { color: '#969696' } }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            href="https://instagram.com"
            target="_blank"
            sx={{ color: 'primary.main', '&:hover': { color: '#969696' } }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            href="mailto:info@fitcontrol.com"
            sx={{ color: 'primary.main', '&:hover': { color: '#969696' } }}
          >
            <EmailIcon />
          </IconButton>
        </Stack>
      </Stack>

      <Typography
        variant="body2"
        align="center"
        sx={{ mt: 4, fontSize: '0.8rem', color: 'text.secondary' }}
      >
        © {new Date().getFullYear()} FitControl. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
