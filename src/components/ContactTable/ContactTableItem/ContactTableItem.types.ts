export interface TableContact {
  createdAt: string;
  id: string;
  name: string;
  number: string;
}

export interface ModalFordeleteProps {
  isThemeDark: boolean;
  contact: TableContact;
  modalIsOpen: boolean;
  closeModal: () => void;
  handleDelete: (id: string) => void;
}

export interface ContactTableItemProps {
  contact: TableContact;
  index: number;
}
