import z from "zod";

export const commonFields = {
  bio: z.string().optional(),
  photo: z.string().optional(),
  password: z.string().min(8),
};

export const createUserDto = z.object({
  ...commonFields,
  email: z.string().email(),
  username: z.string().min(5).max(50),
  confirmPassword: z.string().min(8),
});

export const updateUserDto = z.object({
  ...commonFields,
  email: z.string().email(),
  username: z.string().min(5).max(50).optional(),
  newPassword: z.string().min(8).optional(),
  confirmNewPassword: z.string().min(8).optional(),
});

export type CreateUserDto = z.infer<typeof createUserDto>;
export type UpdateUserDto = z.infer<typeof updateUserDto>;

export const User = {
  createUserDto,
  updateUserDto,
};
