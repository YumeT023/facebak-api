import fastify from "fastify";
import {Post, Comment} from "./routes";

const DEFAULT_OPTIONS = {
  logger: true,
};

export const createApplication = (opts: Record<string, unknown> = {}) => {
  const app = fastify({...DEFAULT_OPTIONS, ...opts});

  // do not want to use prefix here
  app.register(Post);
  app.register(Comment);

  return app;
};
