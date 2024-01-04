import { RootState } from '../RootState.type';

export const getFilterValue = (state: RootState): string =>
  state.filter.filterValue;
