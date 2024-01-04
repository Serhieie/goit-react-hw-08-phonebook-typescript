import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLogedIn, getToken } from '../redux/auth/selectors-auth';

interface RestrictedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

const RestrictedRoute: React.FC<RestrictedRouteProps> = ({
  children,
  redirectTo = '/',
}) => {
  const isLoggedIn = useSelector(getLogedIn);
  const token = useSelector(getToken);
  const shouldRedirect = isLoggedIn && token;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <>{children}</>;
};

export default RestrictedRoute;
