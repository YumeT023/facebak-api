import {PrismaClient} from "@prisma/client";
import {GetResult} from "@prisma/client/runtime/library";

export abstract class AbstractService<S extends Record<string, unknown>, T> {
  protected constructor(protected readonly db: PrismaClient) {}

  abstract findAll(): Promise<S[]>;
  abstract findById(id: T): Promise<GetResult<S, unknown & {}> | null>;
  abstract save(data: unknown): Promise<GetResult<S, unknown & {}> | null>;
}
