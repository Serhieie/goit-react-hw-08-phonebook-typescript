interface Contact {
  createdAt: string;
  id?: string;
  name: string;
  phone: string;
}

interface GetAllContactsResponse extends Array<Contact> {}

interface PostContactRequest {
  name: string;
  phone: string;
}

interface DeleteContactRequest {
  id: string;
}

export type {
  Contact,
  PostContactRequest,
  GetAllContactsResponse,
  DeleteContactRequest,
};
