import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useEmpresa } from '../context/EmpresaContext';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { empresa } = useEmpresa();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const isFitControl = !empresa?.slug || empresa.slug === 'fitcontrol';

  const sections = isFitControl
    ? [
        { id: 'hero', label: 'Inicio' },
        { id: 'beneficios', label: 'Beneficios' },
        { id: 'gimnasios', label: 'Gimnasios' },
        { id: 'precios', label: 'Planes' },
        { id: 'cta', label: 'Contacto' },
      ]
    : [
        { id: 'hero', label: 'Inicio' },
        { id: 'clases', label: 'Clases' },
        { id: 'sedes', label: 'Sedes' },
        { id: 'cta', label: 'Contacto' },
      ];

  const scrollToSection = (id: string) => {
    const anchor = document.getElementById(id);
    if (anchor) {
      window.scrollTo({
        top: anchor.offsetTop - 64,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: theme.palette.background.default,
        backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${theme.palette.divider}`,
        zIndex: 1100,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box
          sx={{
            fontWeight: 'bold',
            color: theme.palette.primary.main,
            fontSize: 20,
          }}
        >
          <img
            src={empresa?.logo || '/img/logo.png'}
            alt={empresa?.nombre || 'Logo FitControl'}
            style={{
              width: 24,
              height: 24,
              marginRight: 8,
              marginBottom: 1,
              verticalAlign: 'middle',
            }}
          />
          <label
            style={{
              fontWeight: 'bold',
              color: theme.palette.primary.main,
              verticalAlign: 'middle',
            }}
          >
            {empresa?.nombre || 'FitControl'}
          </label>
        </Box>
        {isMobile ? (
          <>
            <IconButton
              onClick={() => setOpen(true)}
              sx={{ color: theme.palette.primary.main }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
              <Box sx={{ width: 250 }} role="presentation">
                <List>
                  {sections.map((section) => (
                    <ListItem key={section.id} disablePadding>
                      <ListItemButton
                        onClick={() => {
                          setOpen(false);
                          setTimeout(() => scrollToSection(section.id), 200);
                        }}
                      >
                        <ListItemText primary={section.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                  <ListItem disablePadding>
                    <ListItemButton
                      component="a"
                      href="/login/socio"
                      onClick={() => setOpen(false)}
                    >
                      <ListItemText primary="Acceder como Socio" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {sections.map((section) => (
              <Button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 'bold',
                  '&:hover': {
                    color: theme.palette.secondary.main || '#FFC300',
                  },
                }}
              >
                {section.label}
              </Button>
            ))}
            <Button
              href="/login/socio"
              variant="contained"
              sx={{
                ml: 2,
                fontWeight: 'bold',
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.background.default,
                '&:hover': {
                  backgroundColor: theme.palette.secondary.main || '#FFC300',
                  color: theme.palette.text.primary,
                },
              }}
            >
              Acceder
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
