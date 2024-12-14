import { auth } from "@/auth";

// prevent writting each time session?user
// for server components
export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};

// useCurrentUser hook for client

export const currentRole = async () => {
  const session = await auth();

  return session?.user.role;
};
