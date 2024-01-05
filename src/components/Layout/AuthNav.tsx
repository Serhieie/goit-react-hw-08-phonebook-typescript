import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { navLinkStyles } from './Layout-parts-styles/NavLink.styles';
import { AuthNavProps } from './Layout.types';

export const AuthNav: React.FC<AuthNavProps> = ({ isThemeDark }) => {
  const navStyles = `${
    isThemeDark
      ? 'text-blue-300 after:bg-blue-500 '
      : 'text-filterTextColor after:bg-filterTextColor '
  }
    ${navLinkStyles}
  `;
  return (
    <div className="flex gap-8 mr-auto">
      <NavLink className={navStyles} to="/">
        Login
        <span className="w-full absolute scale-x-0  top-8 bg-transparent"></span>
      </NavLink>
      <NavLink className={`${navStyles} ssm:ml-0`} to="/registration">
        Registration
      </NavLink>
    </div>
  );
};

AuthNav.propTypes = {
  isThemeDark: PropTypes.bool.isRequired,
};
