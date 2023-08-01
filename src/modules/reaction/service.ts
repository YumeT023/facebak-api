import {prisma} from "../../lib/db";
import {notFoundError} from "../../util/error";
import {getPostById} from "../post/service";
import {getUserById} from "../user/service";
import {ReactionDeleteDto, ReactionInputDto} from "./schema";

export const getPostReactions = async (postId: string) => {
  const post = await getPostById(postId);
  return prisma.reaction.findMany({
    where: {
      postId: post.id,
    },
  });
};

export const getReactionById = async (userId: string, postId: string) => {
  const reaction = await prisma.reaction.findUnique({
    where: {
      userId_postId: {
        userId,
        postId,
      },
    },
  });

  if (!reaction) {
    throw notFoundError("Reaction", "userId_postId", `${userId}-${postId}`);
  }
  return reaction;
};

export const deleteReaction = async (data: ReactionDeleteDto, postId: string) => {
  const post = await getPostById(postId);
  const user = await getUserById(data.userId);
  await getReactionById(user.id, post.id);
  return prisma.reaction.delete({
    where: {
      userId_postId: {
        userId: user.id,
        postId: post.id,
      },
    },
  });
};

export const saveReaction = async (data: ReactionInputDto, postId: string) => {
  // this also ensure that record with those ids exists
  const user = await getUserById(data.userId);
  const post = await getPostById(postId);
  const reaction = {
    ...data,
    postId: post.id,
    userId: user.id,
  };
  return prisma.reaction.upsert({
    where: {
      userId_postId: {
        userId: user.id,
        postId: post.id,
      },
    },
    create: reaction,
    update: reaction,
  });
};
