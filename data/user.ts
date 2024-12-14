import client from "../app/utils/prismadb";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await client.user.findUnique({
      where: { email },
    });
    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string | undefined) => {
  //TODO: i added | undefinied to fix type error that maight lead to a problem
  try {
    const user = await client.user.findUnique({
      where: { id },
    });
    return user;
  } catch {
    return null;
  }
};
