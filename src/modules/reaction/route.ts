import {FastifyPluginCallback} from "fastify";
import {getPostReactionsHandler} from "./controller";

export const reactionRoutes: FastifyPluginCallback = (server, _, done) => {
  server.get("/posts/:pid/reactions", getPostReactionsHandler);

  done();
};
