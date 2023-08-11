import {FastifyPluginCallback} from "fastify";
import {saveCommentHandler, getCommentByPostIdHandler} from "./controller";
import {$ref} from "../shared";

export const commentRoutes: FastifyPluginCallback = (server, _, done) => {
  server.put(
    "/posts/:pid/comments",
    {
      schema: {
        body: $ref("commentDto"),
      },
    },
    saveCommentHandler
  );

  server.get("/posts/:pid/comments", getCommentByPostIdHandler);

  done();
};
