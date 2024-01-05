import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ThemeState } from './themeReducer.types';

const initialState: ThemeState = {
  darkTheme: false,
  showPass: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.darkTheme = !state.darkTheme;
    },
    setShowPass: state => {
      state.showPass = !state.showPass;
    },
  },
});

const persistConfig = {
  key: 'theme',
  storage,
  blacklist: ['contacts', 'form', 'filter'],
};

export const persistedThemeReducer = persistReducer<ThemeState>(
  persistConfig,
  themeSlice.reducer
);

export const { setTheme, setShowPass } = themeSlice.actions;
