import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import routesConfigs from '~/configs/routes.config';

function ProtectedPage({ children }) {
  const { user } = useSelector((state) => state.user);
  return user ? <>{children}</> : <Navigate to={routesConfigs.signin} />;
}

export default ProtectedPage;
