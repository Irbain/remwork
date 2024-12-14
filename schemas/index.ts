import * as z from "zod";

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    // username: z.string().min(3, {
    //     message: "Username must be at least 3 characters.",
    //   }),
    // isTwoFactorEnabled: z.optional(z.boolean()),
    //role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(
      z
        .string({
          required_error: "Please select an email to display.",
        })
        .email()
    ),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
    //bio: z.string().max(160).min(4),
    // twitterUrl: z
    //   .string()
    //   .url({ message: "Please enter a valid URL." })
    //   .optional(),
    // linkedinUrl: z
    //   .string()
    //   .url({ message: "Please enter a valid URL." })
    //   .optional(),
    // githubUrl: z
    //   .string()
    //   .url({ message: "Please enter a valid URL." })
    //   .optional(),
    // personalWebsite: z
    //   .string()
    //   .url({ message: "Please enter a valid URL." })
    //   .optional(),
    // lastUpdate: z.number().optional(),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "New Password is required",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Password is required",
      path: ["password"],
    }
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, { message: "Minimum of 6 characters required" }),
});

export const ResetSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, {
    message: "Password is required",
  }), //dont limit password lenght at login but register is fine
  code: z.optional(z.string()),
});

export const SignUpSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(3, {
    message: "Name is required",
  }),
});
