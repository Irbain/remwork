import client from "@/app/utils/prismadb";

export const getTwoFactorConfirmationByUserId = async (userId: string) => {
  try {
    const twoFactorConfirmation = await client.twoFactorConfirmation.findUnique(
      {
        where: { userId },
      }
    );

    return twoFactorConfirmation;
  } catch {
    return null;
  }
};
