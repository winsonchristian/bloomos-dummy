import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import fs from "fs";
import path from "path";

const usersPath = path.join(process.cwd(), "data", "catha-users.json");
const users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = users.find(
          (u) => u.email === credentials.email && u.password === credentials.password
        );
        if (user) {
          return { name: user.name, email: user.email, redirect: user.redirect };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      session.user.redirect = token.redirect;
      return session;
    },
    async jwt({ token, user }) {
      if (user) token.redirect = user.redirect;
      return token;
    },
  },
});
