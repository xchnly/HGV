import NextAuth from "next-auth"
import { authConfig } from "@/lib/auth" // pastikan path ke config benar

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }
