import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "../../../lib/auth";
export default NextAuth({
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if(user) {
        token.id = user.id
      }
      return token;
    },
    async session({ session, user, token }) {
      session.user.id = token.id
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const url = `${process.env.BACKEND_URL}/users`;
        const result = await fetch(url);
        const users = await result.json();
        const user = users?.find((user) => user?.email === credentials.email);
        if (!user) {
          throw new Error("User not found!");
        }
        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          throw new Error("Password is not valid!");
        }
        return {...user};
      },
    }),
  ],
  secret: "hyJaWM98GoaKsxHnhybgwtp10Ogs9jeHGgmApQMbV5Q=",
});
