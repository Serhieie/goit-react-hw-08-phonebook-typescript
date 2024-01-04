import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { register, login, logout, fetchCurrentUser } from './operations-auth';
import {
  handlePending,
  handleRegisterFulfilled,
  handleRegisterRejected,
  handleLoginFulfilled,
  handleLogoutFulfilled,
  handleFetchCurrentUserFulfilled,
  handleRejected,
} from './hendlers-auth';
import { initialStateAuth } from './initialStateAuth';
import { AuthState } from 'redux/auth/redux-auth.type';

const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  reducers: {
    changeUserName(state: AuthState, action: PayloadAction<string>) {
      state.user = { ...state.user, name: action.payload };
    },
    changeUserEmail(state: AuthState, action: PayloadAction<string>) {
      state.user = { ...state.user, email: action.payload };
    },
    changeUserToken(state: AuthState, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    changeIsLoadingToken(state: AuthState, action: PayloadAction<boolean>) {
      state.isLoadingUser = action.payload;
    },
    changeUserStatus(state: AuthState, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
    changeUserAvatar(state: AuthState, action: PayloadAction<string>) {
      state.avatar = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, handleRegisterFulfilled)
      .addCase(register.rejected, handleRegisterRejected);
    builder
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, handleLoginFulfilled)
      .addCase(login.rejected, handleRejected);
    builder
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, handleLogoutFulfilled)
      .addCase(logout.rejected, handleRejected);
    builder
      .addCase(fetchCurrentUser.pending, handlePending)
      .addCase(fetchCurrentUser.fulfilled, handleFetchCurrentUserFulfilled)
      .addCase(fetchCurrentUser.rejected, handleRejected);
  },
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'avatar', 'user'],
};

export const persistedAuthReducer = persistReducer<AuthState>(
  authPersistConfig,
  authSlice.reducer
);

export const {
  changeUserName,
  changeUserEmail,
  changeUserStatus,
  changeUserToken,
  changeUserAvatar,
  changeIsLoadingToken,
} = authSlice.actions;
