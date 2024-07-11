import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  message?: SortOrder;
  recipient?: SortOrder;
  sentAt?: SortOrder;
};
