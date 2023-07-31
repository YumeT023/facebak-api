import {FastifyPluginCallback} from "fastify";
import {getUsersHandler} from "./controller";

export const userRoutes: FastifyPluginCallback = (server, _, done) => {
  server.get("/users", getUsersHandler);

  done();
};
