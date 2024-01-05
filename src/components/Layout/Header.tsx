import { useSelector, useDispatch } from 'react-redux';
import { getTheme } from '../../redux/theme/theme-selectors';
import { ThemeSwitcher } from '../App/ThemeSwitcher';
import { AuthNav } from './AuthNav';
import { MainNav } from './MainNav';
import { UserDisplay } from './UserDisplay';
import { logout } from '../../redux/auth/operations-auth';
import { useAuth } from '../../helpers/hooks/auth-selector-hook';
import {
  headerStyles,
  navigationStyles,
} from './Layout-parts-styles/Header.styles';
import { useAuthReturn } from '../../helpers/hooks/auth-selector-hook';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isThemeDark: boolean = useSelector(getTheme);
  const fullState: useAuthReturn = useAuth();

  //logout operation
  const handleLogout = async () => {
    //How to type it correctly?
    dispatch(logout() as any);
  };

  const navStyles: string = `${
    fullState.isLoggedIn ? 'ml-auto' : 'mr-auto'
  } ${navigationStyles}`;

  return (
    <header className={`${headerStyles}`}>
      <UserDisplay
        fullState={fullState}
        handleLogout={handleLogout}
        isThemeDark={isThemeDark}
      />
      <ThemeSwitcher isThemeDark={isThemeDark} />
      <nav className={navStyles}>
        {fullState.isLoggedIn && fullState.token ? (
          <MainNav
            isThemeDark={isThemeDark}
            isLoggedIn={fullState.isLoggedIn}
          />
        ) : (
          <AuthNav isThemeDark={isThemeDark} />
        )}
      </nav>
    </header>
  );
};