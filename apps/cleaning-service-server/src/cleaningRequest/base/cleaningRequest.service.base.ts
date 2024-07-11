/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  CleaningRequest as PrismaCleaningRequest,
} from "@prisma/client";

export class CleaningRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CleaningRequestCountArgs, "select">
  ): Promise<number> {
    return this.prisma.cleaningRequest.count(args);
  }

  async cleaningRequests(
    args: Prisma.CleaningRequestFindManyArgs
  ): Promise<PrismaCleaningRequest[]> {
    return this.prisma.cleaningRequest.findMany(args);
  }
  async cleaningRequest(
    args: Prisma.CleaningRequestFindUniqueArgs
  ): Promise<PrismaCleaningRequest | null> {
    return this.prisma.cleaningRequest.findUnique(args);
  }
  async createCleaningRequest(
    args: Prisma.CleaningRequestCreateArgs
  ): Promise<PrismaCleaningRequest> {
    return this.prisma.cleaningRequest.create(args);
  }
  async updateCleaningRequest(
    args: Prisma.CleaningRequestUpdateArgs
  ): Promise<PrismaCleaningRequest> {
    return this.prisma.cleaningRequest.update(args);
  }
  async deleteCleaningRequest(
    args: Prisma.CleaningRequestDeleteArgs
  ): Promise<PrismaCleaningRequest> {
    return this.prisma.cleaningRequest.delete(args);
  }
}
