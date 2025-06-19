import Typography from '@mui/material/Typography';
import Link from '@fuse/core/Link';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import _ from 'lodash';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import JwtLoginTab from './tabs/JwtSignInTab';
import { z } from 'zod';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
} from '@mui/material';

const schema = z.object({
  email: z
    .string()
    .email('Ingrese un email válido')
    .nonempty('Por favor ingrese su email.'),
  password: z
    .string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .nonempty('Por favor ingrese su contraseña.'),
  remember: z.boolean().optional(),
});

type FormType = z.infer<typeof schema>;

const defaultValues = {
  email: '',
  password: '',
  remember: false,
};

function SignInPage() {
  const { control, formState, handleSubmit, reset } = useForm<FormType>({
    mode: 'onChange',
    defaultValues,
    resolver: zodResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  function onSubmit() {
    // quiero que me redirija a la página de inicio del admin
    // logica de inicio de sesión
    // Aquí podrías agregar la lógica de autenticación, por ejemplo, llamar a una API

    // Simulando un inicio de sesión exitoso
    console.log('Inicio de sesión exitoso con:', defaultValues);

    reset(defaultValues);
    window.location.href = '/dashboards/project';
  }

  return (
    <div className="flex min-w-0 flex-auto flex-col items-center sm:justify-center md:p-8">
      <Paper className="flex min-h-full w-full overflow-hidden rounded-none sm:min-h-auto sm:w-auto sm:rounded-xl sm:shadow-sm md:w-full md:max-w-6xl">
        <div className="w-full px-4 py-8 ltr:border-r-1 rtl:border-l-1 sm:w-auto sm:p-12 md:p-16">
          <div className="mx-auto w-full max-w-80 sm:mx-0 sm:w-80">
            <img
              className="w-60"
              src="/assets/images/logo/logo3.png"
              alt="logo"
            />

            <Typography className="mt-8 text-4xl font-extrabold leading-[1.25] tracking-tight">
              Ingreso
            </Typography>

            <JwtLoginTab />
          </div>
        </div>

        <Box
          className="relative hidden h-full flex-auto items-center justify-center overflow-hidden p-16 md:flex lg:px-28"
          sx={{
            backgroundImage: 'url(/assets/images/etc/background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: 'primary.contrastText',
          }}
        >
          <Box
            className="absolute inset-0 z-0"
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.9)', // podés ajustar la opacidad
            }}
          />

          <div className="relative z-10 w-full max-w-4xl">
            <div className="text-7xl font-bold leading-none text-yellow-400">
              <div>Bienvenido a</div>
              <div>Fit Control</div>
            </div>

            <div className="mt-6 text-lg leading-6 tracking-tight text-gray-300">
              La plataforma definitiva para gestionar tu gimnasio, controlar
              entrenamientos, membresías, turnos y mucho más. Todo desde un solo
              lugar.
            </div>

            <div className="mt-8 flex items-center">
              <AvatarGroup
                sx={{
                  '& .MuiAvatar-root': {
                    borderColor: 'yellow',
                  },
                }}
              >
                <Avatar src="/assets/images/avatars/male-01.jpg" />
                <Avatar src="/assets/images/avatars/male-03.jpg" />
                <Avatar src="/assets/images/avatars/female-01.jpg" />
                <Avatar src="/assets/images/avatars/female-03.jpg" />
              </AvatarGroup>

              <div className="ml-4 font-medium tracking-tight text-gray-400">
                Más de 200 gimnasios ya confían en nosotros. ¡Sumate hoy!
              </div>
            </div>
          </div>
        </Box>
      </Paper>
    </div>
  );
}

export default SignInPage;
