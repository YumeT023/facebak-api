import fastify, {FastifyReply, FastifyRequest} from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import {commentRoutes} from "./modules/comment";
import {postRoutes} from "./modules/post";
import {schemas} from "./modules/shared";
import {userRoutes} from "./modules/user";
import {reactionRoutes} from "./modules/reaction";

const DEFAULT_OPTIONS = {};

export const buildServer = (opts: Record<string, unknown> = {}) => {
  const server = fastify({
    ...DEFAULT_OPTIONS,
    ...opts,
  });

  schemas.forEach((schema) => {
    server.addSchema(schema);
  });

  server.register(jwt, {
    secret: "ndkandna9u7dsy789adb",
  });

  server.decorate("authenticate", async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      await req.jwtVerify();
    } catch (e) {
      return reply.send(e);
    }
  });

  server.addHook("preHandler", (req, reply, next) => {
    req.jwt = server.jwt;
    return next();
  });

  server.register(cors);

  // do not want to use prefix here
  server.register(commentRoutes);
  server.register(postRoutes);
  server.register(userRoutes);
  server.register(reactionRoutes);

  return server;
};
