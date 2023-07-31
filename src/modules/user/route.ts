import {FastifyPluginCallback} from "fastify";
import {
  createUserHandler,
  getUserByIdHandler,
  getUsersHandler,
  updateUserHandler,
} from "./controller";
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

  server.get("/users/:uid", getUserByIdHandler);

  server.put(
    "/users",
    {
      schema: {
        body: $ref("updateUserDto"),
      },
    },
    updateUserHandler
  );

  done();
};
