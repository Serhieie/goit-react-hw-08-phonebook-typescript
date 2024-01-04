import { AuthState } from 'redux/auth/redux-auth.type';

export const initialStateAuth: AuthState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isLoadingUser: false,
  avatar: '',
  error: false,
};
