import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Please Enter a valid Email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
