import { Module } from "@nestjs/common";
import { CleaningRequestModuleBase } from "./base/cleaningRequest.module.base";
import { CleaningRequestService } from "./cleaningRequest.service";
import { CleaningRequestController } from "./cleaningRequest.controller";
import { CleaningRequestResolver } from "./cleaningRequest.resolver";

@Module({
  imports: [CleaningRequestModuleBase],
  controllers: [CleaningRequestController],
  providers: [CleaningRequestService, CleaningRequestResolver],
  exports: [CleaningRequestService],
})
export class CleaningRequestModule {}
