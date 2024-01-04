import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLogedIn, getToken } from '../redux/selectors';
import PropTypes from 'prop-types';

export default function RestrictedRoute({ children, redirectTo = '/' }) {
  const isLoggedIn = useSelector(getLogedIn);
  const token = useSelector(getToken);
  const shouldRedirect = isLoggedIn && token;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}

RestrictedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string,
};
