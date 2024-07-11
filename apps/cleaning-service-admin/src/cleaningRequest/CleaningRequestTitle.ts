import { CleaningRequest as TCleaningRequest } from "../api/cleaningRequest/CleaningRequest";

export const CLEANINGREQUEST_TITLE_FIELD = "id";

export const CleaningRequestTitle = (record: TCleaningRequest): string => {
  return record.id?.toString() || String(record.id);
};
