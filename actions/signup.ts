"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { SignUpSchema } from "@/schemas";
import client from "@/app/utils/prismadb";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const signup = async (values: z.infer<typeof SignUpSchema>) => {
  const validatedFields = SignUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  await client.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  //
  const verficationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verficationToken.email, verficationToken.token);

  return {
    success: "Confirmation email sent!",
  };
};
