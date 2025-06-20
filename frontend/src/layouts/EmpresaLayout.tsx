import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet, useParams } from 'react-router-dom';
import { EmpresaProvider, useEmpresa } from '../context/EmpresaContext';
import { empresasMock } from '../api/mocks/empresas';
import { useEmpresaTheme } from '../hooks/useEmpresaTheme';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const EmpresaLoader = () => {
  const { slug } = useParams();
  const { setEmpresa, setIsReady } = useEmpresa();

  useEffect(() => {
    const data = empresasMock[slug as keyof typeof empresasMock];
    if (data) setEmpresa(data);
    setIsReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const theme = useEmpresaTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

const EmpresaLayout = () => {
  return (
    <EmpresaProvider>
      <EmpresaLoader />
    </EmpresaProvider>
  );
};

export default EmpresaLayout;
