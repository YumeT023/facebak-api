import {prisma} from "../../lib/db";

export const getUsers = () => {
  return prisma.user.findMany();
};
