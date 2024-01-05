import { RootState } from '../RootState.type';

export const getIsLoading = (state: RootState): boolean =>
  state.contacts.isLoading;
export const getIsError = (state: RootState): boolean => state.contacts.error;
