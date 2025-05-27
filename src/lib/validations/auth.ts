import { z } from "zod";

export const nameSchema = z.string().min(1, "Name is required");
export const emailSchema = z
  .string()
  .email("Invalid email address")
  .min(1, "Email is required");
export const passwordSchema = z
  .string()
  .min(3, { message: "Password must be at least 3 characters long" });

export const signInSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const signUpSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
});
