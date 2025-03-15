import { z } from "zod";

export const signUpSchema = z.object({
  username: z
    .string()
    .min(4, "Minimum length must be 4 characters")
    .max(8, "Max length cannot be greater than 8 characters"),
  
  email: z
    .string()
    .email({ message: "Email should be valid" })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(8, "Password cannot be longer than 8 characters")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,8}$/,
      "Password must contain at least one letter and one number"
    ),
});
