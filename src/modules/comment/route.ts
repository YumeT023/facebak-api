import {FastifyPluginCallback} from "fastify";
import {getCommentByPostIdHandler, saveCommentHandler} from "./controller";
import {$ref} from "../shared";

export const commentRoutes: FastifyPluginCallback = (server, _, done) => {
  server.put(
    "/posts/:pid/comments",
    {
      preHandler: [server.authenticate],
      schema: {
        body: $ref("commentDto"),
      },
    },
    saveCommentHandler
  );

  server.get(
    "/posts/:pid/comments",
    {
      preHandler: [server.authenticate],
    },
    getCommentByPostIdHandler
  );

  done();
};
