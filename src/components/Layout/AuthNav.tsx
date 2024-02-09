import { NavLink } from 'react-router-dom';
import { useTheme } from 'helpers/hooks/theme-hook';
import { navLinkStyles } from './Layout-parts-styles/NavLink.styles';

export const AuthNav: React.FC = () => {
  const { isThemeDark } = useTheme();

  const navStyles = `${
    isThemeDark
      ? 'text-blue-300 after:bg-blue-500 '
      : 'text-filterTextColor after:bg-filterTextColor '
  } ${({ isActive }: { isActive: boolean }): string =>
    isActive ? 'active' : ''} 
        ${navLinkStyles}`;

  return (
    <div className="flex gap-8 w-full">
      <div>
        <NavLink className={navStyles} to="/">
          StoneBook
        </NavLink>
      </div>
      <div className="flex gap-8 ml-auto">
        <NavLink className={navStyles} to="/login">
          Login
          <span className="w-full absolute scale-x-0  top-8 bg-transparent"></span>
        </NavLink>
        <NavLink className={navStyles} to="/registration">
          Registration
        </NavLink>
      </div>
    </div>
  );
};
