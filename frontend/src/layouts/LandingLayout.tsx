import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import { EmpresaProvider, useEmpresa } from '../context/EmpresaContext';
import { empresasMock } from '../api/mocks/empresas';
import { useEmpresaTheme } from '../hooks/useEmpresaTheme';
import NavBar from '../components/Navbars/LandingNavbar';
import Footer from '../components/Footers/LandingFooter';
import { theme } from '../theme';
import EmpresaLoading from '../components/Loadings/EmpresaLoading';

const LandingLoader = () => {
  const { slug } = useParams();
  const { setEmpresa, setIsReady, empresa, isReady } = useEmpresa();

  useEffect(() => {
    if (!slug) {
      setEmpresa(null);
      setIsReady(false);
      return;
    }
    setIsReady(false);
    const data = empresasMock[slug as keyof typeof empresasMock];
    if (data) {
      setEmpresa(data);
      setIsReady(true);
    } else {
      setEmpresa(null);
      setIsReady(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  useEffect(() => {
    if (empresa) {
      document.title = `${empresa.nombre}`;
      const favicon = document.querySelector(
        "link[rel='icon']",
      ) as HTMLLinkElement;
      if (favicon) {
        favicon.href = empresa.logo;
      } else {
        const newFavicon = document.createElement('link');
        newFavicon.rel = 'icon';
        newFavicon.href = empresa.logo;
        document.head.appendChild(newFavicon);
      }
    } else {
      document.title = 'FitControl';
      const favicon = document.querySelector(
        "link[rel='icon']",
      ) as HTMLLinkElement;
      if (favicon) {
        favicon.href = '/img/logo.png';
      } else {
        const newFavicon = document.createElement('link');
        newFavicon.rel = 'icon';
        newFavicon.href = '/img/logo.png';
        document.head.appendChild(newFavicon);
      }
    }
  }, [empresa]);

  const EmpresaTheme = useEmpresaTheme();

  if (!slug) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Outlet />
        <Footer />
      </ThemeProvider>
    );
  }

  if (!isReady) {
    return (
      <ThemeProvider theme={EmpresaTheme}>
        <CssBaseline />
        <EmpresaLoading />
      </ThemeProvider>
    );
  }

  if (!empresa) {
    return <Navigate to="/gym-not-found" replace />;
  }

  return (
    <ThemeProvider theme={EmpresaTheme}>
      <CssBaseline />
      <NavBar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

const LandingLayout = () => {
  return (
    <EmpresaProvider>
      <LandingLoader />
    </EmpresaProvider>
  );
};

export default LandingLayout;
