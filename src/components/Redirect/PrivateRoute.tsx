import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getisLoadingUser, getToken } from '../../redux/auth/selectors-auth';
import { RedirectProps } from './Redirect.type';

const PrivateRoute: React.FC<RedirectProps> = ({
  children,
  redirectTo = '/',
}) => {
  const token = useSelector(getToken);
  const userLoading = useSelector(getisLoadingUser);

  const shouldRedirect = !userLoading && !token;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <>{children}</>;
};

export default PrivateRoute;
