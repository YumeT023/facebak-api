import {JWT} from "@fastify/jwt";

declare module "fastify" {
  interface FastifyRequest {
    jwt: JWT;
  }
  export interface FastifyInstance {
    // TODO: better typings
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    authenticate: any;
  }
}
