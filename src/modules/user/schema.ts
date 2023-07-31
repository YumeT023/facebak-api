import z from "zod";

export const commonFields = {
  bio: z.string().optional(),
  photo: z.string().optional(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
};

export const createUserDto = z.object({
  ...commonFields,
  email: z.string().email(),
  username: z.string().max(50),
});

export const updateUserDto = z.object({
  ...commonFields,
  email: z.string().email().optional(),
  username: z.string().max(50).optional(),
});

export type CreateUserDto = z.infer<typeof createUserDto>;
export type UpdateUserDto = z.infer<typeof updateUserDto>;

export const User = {
  createUserDto,
  updateUserDto,
};
