import {prisma} from "../../lib/db";
import {badRequestError, notFoundError, conflictError} from "../../util/error";
import {CreateUserDto, UpdateUserDto} from "./schema";
import {hash, compare} from "bcrypt";

export const getUsers = () => {
  return prisma.user.findMany();
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
  return user;
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

  return prisma.user.create({
    data: {
      ...rest,
      email,
      password: passwordHash,
    },
  });
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

  return prisma.user.update({
    where: {
      email,
    },
    data: user,
  });
};
