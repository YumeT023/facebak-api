import {prisma} from "../../lib/db";
import {badRequestError} from "../../util/error";
import {CreateUserDto} from "./schema";

export const getUsers = () => {
  return prisma.user.findMany();
};

export const createUser = (data: CreateUserDto) => {
  const {password, confirmPassword, ...user} = data;

  if (password !== confirmPassword) {
    return badRequestError("Password should match");
  }

  return prisma.user.create({
    data: {
      ...user,
      password,
    },
  });
};
