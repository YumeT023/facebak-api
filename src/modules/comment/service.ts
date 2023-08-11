import {prisma} from "../../lib/db";
import {notFoundError} from "../../util/error";
import {omit} from "../../util/object-util";
import {getPostById} from "../post/service";
import {getUserById} from "../user/service";
import {CreateCommentDto} from "./schema";

export const saveComment = async (
  data: CreateCommentDto & {
    postId: string;
  }
) => {
  await getPostById(data.postId);
  await getUserById(data.userId);

  if (data.id) {
    await getCommentById(data.id);
  }

  const comment = await prisma.comment.upsert({
    where: {
      id: data.id ?? "",
    },
    create: data,
    update: data,
    include: {
      user: true,
    },
  });

  (comment as Record<string, unknown>).user = omit(comment.user, ["password"]);
  return comment;
};

export const getCommentsByPostId = async (postId: string) => {
  const comments = await prisma.comment.findMany({
    where: {
      postId,
    },
    include: {
      user: true,
    },
  });
  return comments.map((comment) => {
    (comment as Record<string, unknown>).user = omit(comment.user, ["password"]);
    return comment;
  });
};

export const getCommentById = async (id: string) => {
  const comment = await prisma.comment.findUnique({
    where: {
      id,
    },
  });
  if (!comment) {
    throw notFoundError("Comment", "id", id);
  }
  return comment;
};
