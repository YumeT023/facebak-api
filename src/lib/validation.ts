import z from "zod";

export const PostModel = z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  content: z.string().nonempty(),
});

export const CommentModel = z.object({
  content: z.string().nonempty(),
});

export type PostModelType = z.infer<typeof PostModel>;
export type CommentModelType = z.infer<typeof CommentModel>;
