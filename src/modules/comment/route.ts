import {FastifyPluginCallback} from "fastify";
import {createCommentHandler, getCommentByPostIdHandler} from "./controller";
import {$ref} from "../shared";

export const commentRoutes: FastifyPluginCallback = (server, _, done) => {
  server.post(
    "/posts/:pid/comments",
    {
      schema: {
        body: $ref("commentDto"),
      },
    },
    createCommentHandler
  );

  server.get("/posts/:pid/comments", getCommentByPostIdHandler);

  done();
};
