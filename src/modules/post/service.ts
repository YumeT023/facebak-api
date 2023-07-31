import {prisma} from "../../lib/db";
import {CreatePostDto} from "./schema";

export const getAll = () => {
  return prisma.post.findMany();
};

export const savePost = (data: CreatePostDto) => {
  return prisma.post.upsert({
    where: {
      id: data.id ?? "",
    },
    include: {
      comments: true,
    },
    update: data,
    create: data,
  });
};

export const getPostById = (id: string) => {
  return prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      comments: true,
    },
  });
};
