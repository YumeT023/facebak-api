import {FastifyRequest} from "fastify";
import {createUser, getUsers} from "./service";
import {CreateUserDto} from "./schema";

export const getUsersHandler = async () => {
  return await getUsers();
};

export const createUserHandler = async (
  req: FastifyRequest<{
    Body: CreateUserDto;
  }>
) => {
  return await createUser(req.body);
};
