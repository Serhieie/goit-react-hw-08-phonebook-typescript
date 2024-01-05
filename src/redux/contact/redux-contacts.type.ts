interface Contact {
  createdAt: string;
  id: string;
  name: string;
  number: string;
}

interface GetAllContactsResponse extends Array<Contact> {}

interface PostContactRequest {
  name: string;
  number: string;
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
