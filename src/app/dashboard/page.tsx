"use client"

import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  const { data: session } = useSession()

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {session ? (
        <div className="space-y-2">
          <p>Halo, <strong>{session.user?.name}</strong>!</p>
          <p>Email: {session.user?.email}</p>

          <Button onClick={() => signOut({ callbackUrl: "/login" })}>
            Logout
          </Button>
        </div>
      ) : (
        <p>Memuat data...</p>
      )}
    </main>
  )
}
