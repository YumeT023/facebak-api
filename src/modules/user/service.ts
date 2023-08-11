import {prisma} from "../../lib/db";
import {badRequestError, notFoundError, conflictError} from "../../util/error";
import {omit} from "../../util/object-util";
import {CreateUserDto, UpdateUserDto} from "./schema";
import {hash, compare} from "bcrypt";

// TODO: use dedicated `mapper` to map from internal object to rest object
export const getUsers = async () => {
  const users = await prisma.user.findMany();
  return users.map((user) => omit(user, ["password"]));
};

export const getUserById = async (uid: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: uid,
    },
  });

  if (!user) {
    throw notFoundError("User", "id", uid);
  }
  return omit(user, ["password"]);
};

export const createUser = async (data: CreateUserDto) => {
  const {password, confirmPassword, email, ...rest} = data;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    throw conflictError(`An user.email=${email} is already registered`);
  }

  if (password !== confirmPassword) {
    throw badRequestError("Password should match");
  }

  const passwordHash = await hash(password, 10);

  const record = await prisma.user.create({
    data: {
      ...rest,
      email,
      password: passwordHash,
    },
  });
  return omit(record, ["password"]);
};

export const updateUser = async (data: UpdateUserDto) => {
  const {email, ...user} = data;

  const persisted = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!persisted) {
    throw notFoundError("User", "email", email);
  }

  const match = await compare(user.password, persisted.password);

  if (!match) {
    throw badRequestError("Password should match to complete the change");
  }

  user.password = persisted.password;

  if (user.newPassword) {
    if (user.newPassword !== user.confirmNewPassword) {
      throw badRequestError("'newPassword' & 'confirmNewPassword' should match");
    }
    user.password = await hash(user.newPassword, 10);
  }

  user.newPassword = undefined;
  user.confirmNewPassword = undefined;

  const record = await prisma.user.update({
    where: {
      email,
    },
    data: user,
  });
  return omit(record, ["password"]);
};
