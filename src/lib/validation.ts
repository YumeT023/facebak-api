import z from "zod";

export const SavePost = z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  content: z.string().nonempty(),
});

export type SavePostType = z.infer<typeof SavePost>;
