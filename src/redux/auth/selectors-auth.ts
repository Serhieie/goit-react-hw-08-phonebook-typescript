import { RootState } from '../RootState.type';
import { AuthState } from './redux-auth.type';

export const getUserAuth = (state: RootState): AuthState => state.auth;
export const getError = (state: RootState): boolean => state.auth.error;
export const getisLoadingUser = (state: RootState): boolean =>
  state.auth.isLoadingUser;
export const getToken = (state: RootState): string | null => state.auth.token;
export const getAvatar = (state: RootState): string => state.auth.avatar;
export const getLogedIn = (state: RootState): boolean => state.auth.isLoggedIn;
export const getUserData = (
  state: RootState
): { name: string; email: string } => state.auth.user;
