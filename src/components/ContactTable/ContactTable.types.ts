import { GetAllContactsResponse } from 'redux/contact/redux-contacts.type';
export interface ContactTableProps {
  data: GetAllContactsResponse | undefined;
  error: boolean;
  isLoading: boolean;
}
