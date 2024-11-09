import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@app/lib/prisma";
import Credentials from "next-auth/providers/credentials";
import { signInScheme } from "@app/lib/zod";
import { compareSync } from "bcrypt-ts";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      authorize: async (credential) => {
        const validateFields = signInScheme.safeParse(credential);

        if (!validateFields.success) {
          return null;
        }

        const { email, password } = validateFields.data;

        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user || !user.password) {
          throw new Error("No User Found");
        }

        const passwordMatch = compareSync(password, user.password);

        if (!passwordMatch) return null;

        return user;
      },
    }),
  ],

  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLogedIn = !!auth?.user;
      const protectRoutes = ["/dashboard", "/user", "/product"];

      if (!isLogedIn && protectRoutes.includes(nextUrl.pathname)) {
        return Response.redirect(new URL("/login", nextUrl));
      }

      if (isLogedIn && nextUrl.pathname.startsWith("/login")) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }

      return true;
    },

    jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },

    session({ session, token }) {
      session.user.id = token.sub;
      session.user.role = token.role;
      return session;
    },
  },
});