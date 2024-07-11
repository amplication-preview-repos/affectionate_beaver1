export type CleaningRequest = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  requestDate: Date | null;
  description: string | null;
  status?: "Option1" | null;
};
