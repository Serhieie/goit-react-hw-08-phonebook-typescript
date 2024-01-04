//main interface
export interface AuthState {
  user: { name: string; email: string };
  token: string | null;
  isLoggedIn: boolean;
  isLoadingUser: boolean;
  avatar: string;
  error: boolean;
}

//operations-auth
export interface AuthStateForOptions {
  auth: AuthState;
}

export interface TokenData {
  token: string;
}

export interface Credentials {
  username: string;
  password: string;
}
