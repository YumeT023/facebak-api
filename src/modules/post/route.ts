import {FastifyPluginCallback} from "fastify";
import {getPostByIdHandler, getPostsHandler, savePostHandler} from "./controller";
import {$ref} from "../shared";

export const postRoutes: FastifyPluginCallback = (server, _, done) => {
  server.get("/posts", getPostsHandler);

  server.put(
    "/posts",
    {
      schema: {
        body: $ref("postDto"),
      },
    },
    savePostHandler
  );

  server.get("/posts/:id", getPostByIdHandler);

  done();
};
