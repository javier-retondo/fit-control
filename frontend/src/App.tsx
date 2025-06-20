import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Landing from './pages/Landing';
import Layout from './layouts/Layout';
import { GlobalProvider } from './context';
import { ProtectedRoute } from './routes/ProtectedRoute';
import AdminDashboard from './pages/Admin/Dashboard';
import UserDashboard from './pages/User/Dashboard';
import UserLayout from './layouts/UserLayout';
import AdminLayout from './layouts/AdminLayout';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="*" element={<Landing />} />
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
