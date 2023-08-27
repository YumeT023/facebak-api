import z from "zod";
import {loginUserHandler} from "./controller";

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

export const loginUserDto = z.object({
  username: z.string(),
  password: z.string(),
  email: z.string().email(),
});

export type CreateUserDto = z.infer<typeof createUserDto>;
export type UpdateUserDto = z.infer<typeof updateUserDto>;
export type LoginUserDto = z.infer<typeof loginUserDto>;

export const User = {
  createUserDto,
  updateUserDto,
  loginUserDto,
};
