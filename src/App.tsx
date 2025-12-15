import { Outlet } from 'react-router-dom';
import SEO from './components/common/SEO';
import Toast from './components/common/Toast';
import { ToastProvider } from './contexts/ToastContext';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <SEO />
        <Toast />
        <Outlet />
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;