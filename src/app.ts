import fastify from "fastify";
import {Post} from "./routes";

const DEFAULT_OPTIONS = {
  logger: true,
};

export const createApplication = (opts: Record<string, unknown> = {}) => {
  const app = fastify({...DEFAULT_OPTIONS, ...opts});

  app.register(Post, {prefix: "/posts"});

  return app;
};
