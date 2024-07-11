import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CleaningRequestServiceBase } from "./base/cleaningRequest.service.base";

@Injectable()
export class CleaningRequestService extends CleaningRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
