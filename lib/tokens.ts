import crypto from "crypto"; //no need for installing any package
import { v4 as uuidv4 } from "uuid";

import client from "@/app/utils/prismadb";
import { getVerificationTokenByEmail } from "@/data/verification-token";
import { getPasswordResetTokenByEmail } from "@/data/password-reset-token";
import { getTwoFactorTokenByEmail } from "@/data/two-factor-token";

export const generateTwoFactorToken = async (email: string) => {
  const token = crypto.randomInt(100_000, 1_000_000).toString();
  const expires = new Date(new Date().getTime() + 5 * 60 * 1000); //five minutes

  const existingToken = await getTwoFactorTokenByEmail(email);

  if (existingToken) {
    await client.twoFactorToken.delete({
      id: existingToken.id,
    });
  }

  const twoFactorToken = await client.twoFactorToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return twoFactorToken;
};

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getPasswordResetTokenByEmail(email);

  if (existingToken) {
    await client.passwordResetToken.delete({
      where: { id: existingToken.id },
    });
  }
  const passwordResetToken = await client.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return passwordResetToken;
};

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000); // we are goona expire the token in 1h

  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await client.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const verificationToken = await client.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return verificationToken;
};
