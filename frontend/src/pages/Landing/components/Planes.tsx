import { Box, Typography, Paper, Button, Grid, Stack } from '@mui/material';
import { useEmpresaTheme } from '../../../hooks/useEmpresaTheme';

type Plan = {
  nombre: string;
  precio: string;
  descripcion: string;
  beneficios: string[];
  destacado?: boolean;
};

type Props = {
  planes: Plan[];
  modo: 'fitcontrol' | 'empresa';
  maxVisible?: number;
};

const PlanesPrecios = ({ planes, modo, maxVisible }: Props) => {
  const visibles = maxVisible ? planes.slice(0, maxVisible) : planes;
  const theme = useEmpresaTheme();
  return (
    <section id="precios">
      <Box
        sx={{
          py: 10,
          px: 2,
          backgroundColor: theme.palette.background.paper,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.background.default,
            p: 2,
            borderRadius: 2,
          }}
        >
          {modo === 'fitcontrol'
            ? 'Planes y Precios'
            : 'Elegí tu plan de entrenamiento'}
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ mb: 6, color: theme.palette.text.secondary }}
        >
          {modo === 'fitcontrol'
            ? 'Elegí el plan que mejor se adapte a tu gimnasio. Sin instalación ni complicaciones.'
            : 'Seleccioná el plan que mejor se ajuste a tu objetivo'}
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {visibles.map((plan, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
              <Paper
                elevation={plan.destacado ? 8 : 3}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  backgroundColor: plan.destacado
                    ? theme.palette.action.hover
                    : theme.palette.background.paper,
                  border: plan.destacado
                    ? `2px solid ${theme.palette.primary.main}`
                    : `1px solid ${theme.palette.divider}`,
                  height: '100%',
                }}
              >
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {plan.nombre}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}
                >
                  {plan.precio}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: 1, mb: 2, color: theme.palette.text.secondary }}
                >
                  {plan.descripcion}
                </Typography>

                <Stack spacing={1} sx={{ mb: 3 }}>
                  {plan.beneficios.map((b: string, idx: number) => (
                    <Typography
                      variant="body2"
                      key={idx}
                      sx={{ color: theme.palette.text.primary }}
                    >
                      • {b}
                    </Typography>
                  ))}
                </Stack>

                <Button
                  variant={plan.destacado ? 'contained' : 'outlined'}
                  href={modo === 'fitcontrol' ? '#contacto' : '#login'}
                  fullWidth
                  sx={{
                    fontWeight: 'bold',
                    color: plan.destacado
                      ? theme.palette.background.default
                      : theme.palette.primary.main,
                    backgroundColor: plan.destacado
                      ? theme.palette.primary.main
                      : 'transparent',
                    '&:hover': {
                      backgroundColor: plan.destacado
                        ? theme.palette.secondary.main
                        : theme.palette.primary.main,
                      borderColor: theme.palette.secondary.main,
                      textDecoration: 'none',
                      color: plan.destacado
                        ? theme.palette.primary.main
                        : theme.palette.secondary.main,
                    },
                  }}
                >
                  {modo === 'fitcontrol' ? 'Elegir plan' : 'Saber más'}
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {maxVisible && planes.length > maxVisible && (
          <Box sx={{ mt: 4 }}>
            <Button
              variant="text"
              href="#contacto"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 'bold',
                '&:hover': {
                  color: theme.palette.secondary.main,
                },
              }}
            >
              Ver todos los planes
            </Button>
          </Box>
        )}
      </Box>
    </section>
  );
};

export default PlanesPrecios;
