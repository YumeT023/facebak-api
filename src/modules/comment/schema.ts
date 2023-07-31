import z from "zod";

export const commentDto = z.object({
  content: z.string(),
});

export type CreateCommentDto = z.infer<typeof commentDto>;

export const Comment = {
  commentDto,
};
