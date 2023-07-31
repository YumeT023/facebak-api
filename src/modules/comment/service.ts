import {prisma} from "../../lib/db";
import {CreateCommentDto} from "./schema";

export const createComment = (
  data: CreateCommentDto & {
    postId: string;
  }
) => {
  return prisma.comment.create({
    data,
  });
};

export const getCommentsByPostId = (postId: string) => {
  return prisma.comment.findMany({
    where: {
      postId,
    },
  });
};
