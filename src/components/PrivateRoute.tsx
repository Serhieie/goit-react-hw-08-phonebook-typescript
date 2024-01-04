import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  getLogedIn,
  getisLoadingUser,
  getToken,
} from '../redux/auth/selectors-auth';

interface PrivateRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  redirectTo = '/',
}) => {
  const token = useSelector(getToken);
  const isLoggedIn = useSelector(getLogedIn);
  const userLoading = useSelector(getisLoadingUser);

  const shouldRedirect = !userLoading && !isLoggedIn && !token;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <>{children}</>;
};

export default PrivateRoute;
