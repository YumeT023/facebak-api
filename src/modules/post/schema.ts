import z from "zod";

const postDto = z.object({
  id: z.string().uuid().optional(),
  content: z.string().nonempty(),
  title: z.string().optional(),
  userId: z.string().uuid(),
});

export type CreatePostDto = z.infer<typeof postDto>;

export const Post = {
  postDto,
};
