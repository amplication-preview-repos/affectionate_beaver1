import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CleaningRequestService } from "./cleaningRequest.service";
import { CleaningRequestControllerBase } from "./base/cleaningRequest.controller.base";

@swagger.ApiTags("cleaningRequests")
@common.Controller("cleaningRequests")
export class CleaningRequestController extends CleaningRequestControllerBase {
  constructor(protected readonly service: CleaningRequestService) {
    super(service);
  }
}
