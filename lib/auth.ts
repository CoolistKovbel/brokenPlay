import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./db";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "MysticMurko",
      credentials: {
        email: { label: "eddress", type: "email", placeholder: "0x" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const existingUser = await prisma.profile.findUnique({
          where: { email: credentials?.email },
        }); 

        console.log(existingUser)

        if (!existingUser) {
          return null;
        }

        const passwordMatch = await compare(
          credentials.password,
          existingUser.password
        );

        if (!passwordMatch) {
          return null;
        }

        return {
          id: `${existingUser.id}`,
          username: existingUser.username,
          email: existingUser.email,
          eddress: existingUser.eddress
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {

        console.log(user, "Logging from the auth jwt function")

      // Persist the OAuth access_token and or the user id to the token right after signin
      if (user) {
        return {
          ...token,
          username: user.username,
        };
      }
      return token;
    },
    async session({ session, token }) {
        console.log(session, "Logging from the auth session funcion")
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
        },
      };
    },
  },
};
