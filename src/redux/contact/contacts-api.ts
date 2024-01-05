import axios, { AxiosError } from 'axios';
import { createApi } from '@reduxjs/toolkit/query/react';
import {
  GetAllContactsResponse,
  PostContactRequest,
  DeleteContactRequest,
} from './redux-contacts.type';

export const contactsApi = createApi({
  reducerPath: 'swaggerApi',
  baseQuery: async ({ url, method, body }, { signal }) => {
    try {
      const result = await axios.request({
        url,
        method,
        data: body,
        signal,
      });

      return { data: result.data };
    } catch (error) {
      const axiosError = error as AxiosError;
      return { error: axiosError.message || 'Something went wrong!' };
    }
  },

  tagTypes: ['Contact'],
  endpoints: builder => ({
    getAllContacts: builder.query<GetAllContactsResponse, void>({
      query: () => ({ url: 'contacts' }),
      providesTags: ['Contact'],
    }),

    postContact: builder.mutation<void, PostContactRequest>({
      query: contactData => ({
        url: 'contacts',
        method: 'POST',
        body: contactData,
      }),
      invalidatesTags: ['Contact'],
    }),

    deleteContact: builder.mutation<void, DeleteContactRequest>({
      query: ({ id }) => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  usePostContactMutation,
  useDeleteContactMutation,
} = contactsApi;
