import {prisma} from "../../lib/db";
import {notFoundError} from "../../util/error";
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

export const getPostById = async (id: string) => {
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      comments: true,
    },
  });

  if (!post) {
    throw notFoundError("Post", "id", id);
  }
  return post;
};
