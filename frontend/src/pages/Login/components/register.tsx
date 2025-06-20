import { Box, Button, TextField, Typography } from '@mui/material';
import { theme } from '../../../theme';
import type { loginCases } from '..';
import GeneralContext from '../../../context/GeneralContext';
import { useContext } from 'react';

type RegisterProps = {
  form: {
    email: string;
    name: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setLoginCase: (caseType: loginCases) => void;
};

const RegisterComp = ({ form, handleChange, setLoginCase }: RegisterProps) => {
  const { setLoading } = useContext(GeneralContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <>
      <Typography variant="h4" align="center" color="primary" gutterBottom>
        Registrarse
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          fullWidth
          label="Nombre Completo"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Correo electrónico"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2, py: 1 }}
        >
          Registrarse
        </Button>
      </form>

      <Box mt={3} textAlign="center">
        <Typography variant="body2">
          ¿Ya tenés cuenta?{' '}
          <Button
            variant="text"
            onClick={() => setLoginCase('login')}
            sx={{
              textTransform: 'none',
              color: theme.palette.primary.main,
            }}
          >
            Iniciar Sesión
          </Button>
        </Typography>
      </Box>
    </>
  );
};

export default RegisterComp;
