import * as graphql from "@nestjs/graphql";
import { CleaningRequestResolverBase } from "./base/cleaningRequest.resolver.base";
import { CleaningRequest } from "./base/CleaningRequest";
import { CleaningRequestService } from "./cleaningRequest.service";

@graphql.Resolver(() => CleaningRequest)
export class CleaningRequestResolver extends CleaningRequestResolverBase {
  constructor(protected readonly service: CleaningRequestService) {
    super(service);
  }
}
