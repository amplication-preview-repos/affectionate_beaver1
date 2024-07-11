import { SortOrder } from "../../util/SortOrder";

export type CleaningRequestOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  requestDate?: SortOrder;
  description?: SortOrder;
  status?: SortOrder;
};
