"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"
import type { UserRole } from "@/lib/types"
import { Users, Building2, Briefcase } from "lucide-react"

const roles: {
  role: UserRole
  title: string
  description: string
  icon: React.ReactNode
  color: string
  redirect: string
}[] = [
  {
    role: "staffing-manager",
    title: "Staffing Manager",
    description: "Manage talent, schedule interviews, and oversee staffing operations",
    icon: <Users className="h-8 w-8" />,
    color: "bg-blue-500",
    redirect: "/staffing",
  },
  {
    role: "customer",
    title: "Customer",
    description: "Post jobs, review candidates, and manage your hiring pipeline",
    icon: <Building2 className="h-8 w-8" />,
    color: "bg-emerald-500",
    redirect: "/customer",
  },
  {
    role: "freelancer",
    title: "Freelancer",
    description: "Find opportunities, manage applications, and track your work",
    icon: <Briefcase className="h-8 w-8" />,
    color: "bg-amber-500",
    redirect: "/freelancer",
  },
]

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()

  const handleRoleSelect = (role: UserRole, redirect: string) => {
    login(role)
    router.push(redirect)
  }

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col items-center justify-center p-4">
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6 text-white"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-foreground">Command</span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Welcome to Command</h1>
        <p className="text-muted-foreground text-lg">
          Select your role to continue to the dashboard
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {roles.map((item) => (
          <Card
            key={item.role}
            className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/50"
            onClick={() => handleRoleSelect(item.role, item.redirect)}
          >
            <CardHeader className="text-center pb-2">
              <div
                className={`mx-auto h-16 w-16 rounded-full ${item.color} flex items-center justify-center text-white mb-4`}
              >
                {item.icon}
              </div>
              <CardTitle className="text-xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-sm">{item.description}</CardDescription>
              <Button className="mt-4 w-full" variant="outline">
                Continue as {item.title}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        This is a demo application. Select any role to explore the dashboard.
      </p>
    </div>
  )
}
