'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Login() {
  const [userType, setUserType] = useState('user')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (userType === 'user') {
      router.push('/dashboard/user')
    } else {
      router.push('/dashboard/mitra')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#202117] p-4">
      <Card className="max-w-md w-full mx-4">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold text-black">Login</CardTitle>
        </CardHeader>
        <CardContent className="bg-[#262626] p-8 rounded-lg">
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <Input type="email" placeholder="Email" required className="w-full px-4 py-3 rounded-lg border-gray-600 bg-[#202117] text-white" />
            </div>
            <div className="mb-4">
              <Input type="password" placeholder="Password" required className="w-full px-4 py-3 rounded-lg border-gray-600 bg-[#202117] text-white" />
            </div>
            <div className="mb-4">
              <select
                className="w-full px-4 py-3 rounded-lg border-gray-600 bg-[#202117] text-white"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="user" className="text-black">User</option>
                <option value="mitra" className="text-black">Mitra</option>
              </select>
            </div>
            <Button type="submit" className="w-full bg-[#AFEA0D] text-black font-semibold rounded-full py-3">Login</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}