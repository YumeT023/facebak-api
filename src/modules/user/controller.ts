import {FastifyRequest} from "fastify";
import {CreateUserDto, LoginUserDto, UpdateUserDto} from "./schema";
import {createUser, getUserByEmail, getUserById, getUsers, updateUser} from "./service";
import {unauthorizedError} from "../../util/error";
import {compare} from "bcrypt";
import {omit} from "../../util/object-util";

export const getUsersHandler = async () => {
  return await getUsers();
};

export const getUserByIdHandler = async (
  req: FastifyRequest<{
    Params: {
      uid: string;
    };
  }>
) => {
  return await getUserById(req.params.uid);
};

export const createUserHandler = async (
  req: FastifyRequest<{
    Body: CreateUserDto;
  }>
) => {
  return await createUser(req.body);
};

export const updateUserHandler = async (
  req: FastifyRequest<{
    Body: UpdateUserDto;
  }>
) => {
  return await updateUser(req.body);
};

export const loginUserHandler = async (
  req: FastifyRequest<{
    Body: LoginUserDto;
  }>
) => {
  const payload = req.body;
  const user = await getUserByEmail(payload.email);
  if (!user || payload.username !== user.username) {
    throw unauthorizedError("Invalid email or username");
  }

  const passwordDoesMatch = await compare(payload.password, user.password);
  if (passwordDoesMatch) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const restUser = omit(user, ["password"]);
    return {token: req.jwt.sign(restUser)};
  }
  throw unauthorizedError("Bad token");
};
