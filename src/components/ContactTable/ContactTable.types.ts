export interface ContactTableProps {
  data: {
    createdAt: string;
    id: string;
    name: string;
    number: string;
  }[];
  error: boolean;
  isLoading: boolean;
}
