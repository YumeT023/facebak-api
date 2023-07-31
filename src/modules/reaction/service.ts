import {prisma} from "../../lib/db";
import {getPostById} from "../post/service";

export const getPostReactions = async (postId: string) => {
  const post = await getPostById(postId);
  return prisma.reaction.findMany({
    where: {
      postId: post.id,
    },
  });
};
