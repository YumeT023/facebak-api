import {FastifyPluginCallback} from "fastify";
import {getPostByIdHandler, getPostsHandler, savePostHandler} from "./controller";
import {$ref} from "../shared";

export const postRoutes: FastifyPluginCallback = (server, _, done) => {
  server.get(
    "/posts",
    {
      preHandler: [server.authenticate],
    },
    getPostsHandler
  );

  server.put(
    "/posts",
    {
      preHandler: [server.authenticate],
      schema: {
        body: $ref("postDto"),
      },
    },
    savePostHandler
  );

  server.get(
    "/posts/:id",
    {
      preHandler: [server.authenticate],
    },
    getPostByIdHandler
  );

  done();
};
