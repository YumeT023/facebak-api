import z from "zod";

export const commentDto = z.object({
  content: z.string(),
  userId: z.string().uuid(),
  id: z.string().uuid().optional(),
});

export type CreateCommentDto = z.infer<typeof commentDto>;

export const Comment = {
  commentDto,
};
