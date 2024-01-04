import { RootState } from '../RootState.type';

export const getIsLoading = (state: RootState): boolean =>
  state.contacts.isLoading;
