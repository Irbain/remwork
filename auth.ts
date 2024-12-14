import NextAuth, { type DefaultSession } from "next-auth";
import { UserRole } from "@prisma/client";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import client from "@/app/utils/prismadb";
import { getUserById } from "./data/user";
import { getTwoFactorConfirmationByUserId } from "@/data/two-factor-confirmation";
import { getAccountByUserId } from "./data/accout";

export type ExtendedUser = DefaultSession["user"] & {
  id: string;
  // customField
  isTwoFactorEnabled: boolean;
  role: UserRole; // Add recruiter later
  isOAuth: boolean;
  // premium recruiter
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      await client.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }, // better than a boolean in case the account is too old
      });
    },
  },

  callbacks: {
    async signIn({ user, account }) {
      // allow oauth without email verification

      if (account?.provider !== "credentials") return true;

      const existingUser = await getUserById(user.id);

      // Prevent sign in without email verification
      if (!existingUser?.emailVerified) return false;

      if (existingUser?.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id
        );

        if (!twoFactorConfirmation) return false;
        // delete 2FA for next sign in

        await client.twoFactorConfirmation.delete({
          where: { id: twoFactorConfirmation.id },
        });
      }
      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      if (session.user) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
      }

      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email as string;
        session.user.isOAuth = token.isOAuth as boolean;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token; // if we dont have token.sub that means we are logged out

      const existingUser = await getUserById(token.sub);
      /**
       * getUserById is using prisma which is not supported in the Edge
       * but we could run Prima on credentials providers on auth.config.ts cause that's not running on the edge
       */

      if (!existingUser) return token;

      const existingAccount = await getAccountByUserId(existingUser.id);

      token.isOAuth = !!existingAccount; // !! truns it into a boolean
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.role = existingUser.role;
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;

      return token;
    },
  },
  adapter: PrismaAdapter(client),
  session: { strategy: "jwt" },
  ...authConfig,
});
