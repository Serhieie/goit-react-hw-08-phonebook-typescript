import { AuthState } from 'redux/auth/redux-auth.type';

//User Display types
interface UserDisplayProps {
  fullState: {
    isLoggedIn: boolean;
    isRefreshing: boolean;
    user: { name: string; email: string };
    error: boolean;
    token: string | null;
    avatar: string;
    fullAuth: AuthState;
  };
  handleLogout: () => void;
  isThemeDark: boolean;
}

//MainNav types
export interface MainNavTypes {
  isThemeDark: boolean;
  isLoggedIn: boolean;
}

export interface NavLinkProps {
  isActive?: boolean;
}

//AuthNav types
export interface AuthNavProps {
  isThemeDark: boolean;
}

export type { UserDisplayProps };
