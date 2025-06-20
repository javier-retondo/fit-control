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

const sections = [
  { id: 'hero', label: 'Inicio' },
  { id: 'beneficios', label: 'Beneficios' },
  { id: 'clases', label: 'Clases' },
  { id: 'sedes', label: 'Sedes' },
  { id: 'cta', label: 'Contacto' },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #333',
        zIndex: 1100,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ fontWeight: 'bold', color: 'primary.main', fontSize: 20 }}>
          <img
            src="/img/logo.png"
            alt="Logo FitControl"
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
              color: 'primary.main',
              verticalAlign: 'middle',
            }}
          >
            FitControl
          </label>
        </Box>
        {isMobile ? (
          <>
            <IconButton
              onClick={() => setOpen(true)}
              sx={{ color: 'primary.main' }}
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
          // Desktop
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {sections.map((section) => (
              <Button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                sx={{
                  color: 'primary.main',
                  fontWeight: 'bold',
                  '&:hover': { color: '#FFC300' },
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
                backgroundColor: 'primary.main',
                color: 'background.default',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#FFC300',
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
