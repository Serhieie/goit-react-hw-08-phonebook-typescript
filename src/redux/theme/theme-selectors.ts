import { RootState } from '../RootState.type';

export const getTheme = (state: RootState): boolean => state.theme.darkTheme;
export const showPass = (state: RootState): boolean => state.theme.showPass;
