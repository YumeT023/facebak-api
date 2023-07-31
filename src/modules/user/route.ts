import {FastifyPluginCallback} from "fastify";
import {createUserHandler, getUsersHandler} from "./controller";
import {$ref} from "../shared";

export const userRoutes: FastifyPluginCallback = (server, _, done) => {
  server.get("/users", getUsersHandler);

  server.post(
    "/users",
    {
      schema: {
        body: $ref("createUserDto"),
      },
    },
    createUserHandler
  );

  done();
};
