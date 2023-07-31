import z from "zod";

const postDto = z.object({
  id: z.string().optional(),
  content: z.string().nonempty(),
  title: z.string().optional(),
});

export type CreatePostDto = z.infer<typeof postDto>;

export const Post = {
  postDto,
};
