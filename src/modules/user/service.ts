import {prisma} from "../../lib/db";
import {badRequestError, notFoundError} from "../../util/error";
import {CreateUserDto, UpdateUserDto} from "./schema";
import {hash, compare} from "bcrypt";

export const getUsers = () => {
  return prisma.user.findMany();
};

export const getUserById = (uid: string) => {
  return prisma.user.findUnique({
    where: {
      id: uid,
    },
  });
};

export const createUser = async (data: CreateUserDto) => {
  const {password, confirmPassword, ...user} = data;

  if (password !== confirmPassword) {
    return badRequestError("Password should match");
  }

  const passwordHash = await hash(password, 10);

  return prisma.user.create({
    data: {
      ...user,
      password: passwordHash,
    },
  });
};

export const updateUser = async (data: UpdateUserDto) => {
  const {password, email, ...user} = data;

  const persisted = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!persisted) {
    throw notFoundError("User", "email", email);
  }

  const match = await compare(password, persisted.password);

  if (!match) {
    throw badRequestError("Password should match");
  }

  return prisma.user.update({
    where: {
      email,
    },
    data: user,
  });
};
