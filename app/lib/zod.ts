import { object, string } from "zod";

export const signInScheme = object({
  email: string().email("Invalid email address"),
  password: string()
    .min(6, "Password must be at least 6 characters long")
    .max(32, "Password must not exceed 32 characters"),
});

export const registerScheme = object({
  name: string()
    .min(1, "Name must be more than 1 character")
    .max(50, "Name must not exceed 50 characters"),
  email: string().email("Invalid email address"),
  password: string()
    .min(6, "Password must be at least 6 characters long")
    .max(32, "Password must not exceed 32 characters"),
  ConfirmPassword: string()
    .min(6, "Confirm Password must be at least 6 characters long")
    .max(32, "Confirm Password must not exceed 32 characters"),
}).refine((data) => data.password === data.ConfirmPassword, {
  message: "Passwords do not match",
  path: ["ConfirmPassword"],
});
