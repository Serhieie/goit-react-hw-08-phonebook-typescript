import { AuthState } from './auth/redux-auth.type';
import { ThemeState } from './theme/themeReducer.types';
import { FilterState } from './filter/filterSlice.type';
import { Contact } from './contact/redux-contacts.type';

export interface RootState {
  filter: FilterState;
  contacts: Contact & { isLoading: boolean; error: boolean };
  theme: ThemeState & { showPass: boolean };
  auth: AuthState;
}
