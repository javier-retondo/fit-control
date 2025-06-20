import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Layout from './layouts/Layout';
import { GlobalProvider } from './context';
import { ProtectedRoute } from './routes/ProtectedRoute';
import AdminDashboard from './pages/Admin/Dashboard';
import UserDashboard from './pages/User/Dashboard';
import UserLayout from './layouts/UserLayout';
import AdminLayout from './layouts/AdminLayout';
import LandingFitControl from './pages/Landing/FitControl';
import LandingEmpresa from './pages/Landing/Empresa';
import EmpresaLayout from './layouts/EmpresaLayout';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingFitControl />} />
            <Route path="*" element={<LandingFitControl />} />
          </Route>
          <Route path="/gym/:slug" element={<EmpresaLayout />}>
            <Route index element={<LandingEmpresa />} />
            <Route path="/gym/:slug" element={<LandingEmpresa />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
          <Route path="/user" element={<UserLayout />}>
            <Route
              path="dashboard"
              element={
                <ProtectedRoute requiredRole="usuario">
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route
              path="dashboard"
              element={
                <ProtectedRoute requiredRole="administrador">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default App;
