import {FastifyPluginCallback} from "fastify";
import {getPostReactionsHandler, saveReactionHandler} from "./controller";
import {$ref} from "../shared";

export const reactionRoutes: FastifyPluginCallback = (server, _, done) => {
  server.get("/posts/:pid/reactions", getPostReactionsHandler);

  server.post(
    "/posts/:pid/reactions",
    {
      schema: {
        body: $ref("reactionInputDto"),
      },
    },
    saveReactionHandler
  );

  done();
};
