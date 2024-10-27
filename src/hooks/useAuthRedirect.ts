import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const useAuthRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    if (!isAuthenticated && location.pathname !== '/register') {
      navigate('/register');
    }
  }, [navigate, location]);
};

export default useAuthRedirect;
