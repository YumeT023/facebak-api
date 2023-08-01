import {z} from "zod";

const reactionInputDto = z.object({
  userId: z.string(),
  type: z.enum(["LIKE", "DISLIKE"]),
});

export type ReactionInputDto = z.infer<typeof reactionInputDto>;

export const Reaction = {
  reactionInputDto,
};
