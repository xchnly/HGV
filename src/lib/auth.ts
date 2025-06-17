import Credentials from "next-auth/providers/credentials"
import type { NextAuthOptions } from "next-auth"

export const authConfig: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.email === "admin@beliyuk.com" &&
          credentials?.password === "admin5648"
        ) {
          return {
            id: "1",
            name: "Admin",
            email: "admin@beliyuk.com",
          }
        }
        return null
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET, // PENTING!
}
