import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../theme';

const Layout = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
