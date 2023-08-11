import {prisma} from "../../lib/db";
import {notFoundError} from "../../util/error";
import {omit} from "../../util/object-util";
import {getPostById} from "../post/service";
import {getUserById} from "../user/service";
import {CreateCommentDto} from "./schema";

export const createComment = async (
  data: CreateCommentDto & {
    postId: string;
  }
) => {
  const post = await getPostById(data.postId);

  if (!post) {
    throw notFoundError("Post", "id", data.postId);
  }

  const user = await getUserById(data.userId);

  if (!user) {
    throw notFoundError("User", "id", data.postId);
  }

  const comment = await prisma.comment.create({
    data,
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
