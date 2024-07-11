import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CleaningRequestWhereInput = {
  id?: StringFilter;
  requestDate?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  status?: "Option1";
};
