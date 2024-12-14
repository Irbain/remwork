import client from "@/app/utils/prismadb";

export const getTwoFactorTokenByToken = async (token: string) => {
  try {
    const twoFactorToken = await client.twoFactorToken.findUnique({
      where: { token },
    });

    return twoFactorToken;
  } catch {
    return;
  }
};

export const getTwoFactorTokenByEmail = async (email: string) => {
  try {
    const twoFactorToken = await client.twoFactorToken.findFirst({
      where: { email },
    });

    return twoFactorToken;
  } catch {
    return;
  }
};
