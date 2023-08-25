import {FastifyPluginCallback} from "fastify";
import {deleteReactionHandler, getPostReactionsHandler, saveReactionHandler} from "./controller";
import {$ref} from "../shared";

export const reactionRoutes: FastifyPluginCallback = (server, _, done) => {
  server.get("/posts/:pid/reactions", getPostReactionsHandler);

  server.post(
    "/posts/:pid/reactions",
    {
      preHandler: [server.authenticate],
      schema: {
        body: $ref("reactionInputDto"),
      },
    },
    saveReactionHandler
  );

  server.delete(
    "/posts/:pid/reactions",
    {
      preHandler: [server.authenticate],
      schema: {
        body: $ref("reactionDeleteDto"),
      },
    },
    deleteReactionHandler
  );

  done();
};
