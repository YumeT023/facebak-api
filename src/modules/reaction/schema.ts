import {z} from "zod";

const common = {
  userId: z.string(),
};

const reactionInputDto = z.object({
  ...common,
  type: z.enum(["LIKE", "DISLIKE"]),
});

const reactionDeleteDto = z.object(common);

export type ReactionInputDto = z.infer<typeof reactionInputDto>;

export type ReactionDeleteDto = z.infer<typeof reactionDeleteDto>;

export const Reaction = {
  reactionInputDto,
  reactionDeleteDto,
};
