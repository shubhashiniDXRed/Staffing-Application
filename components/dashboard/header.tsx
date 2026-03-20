"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search, Bell, LogOut } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/lib/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface NavTab {
  label: string
  href: string
  active?: boolean
}

interface HeaderProps {
  tabs?: NavTab[]
  searchPlaceholder?: string
}

export function Header({ tabs, searchPlaceholder = "Search talent by skills, role..." }: HeaderProps) {
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  return (
    <header className="flex items-center justify-between h-16 px-6 border-b border-border bg-background">
      <div className="flex items-center gap-8">
        {/* Logo */}
        <Link href="/login" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
            </svg>
          </div>
          <span className="text-lg font-semibold text-foreground">Command.</span>
        </Link>

        {/* Navigation Tabs */}
        {tabs && tabs.length > 0 && (
          <nav className="flex items-center">
            <div className="flex border border-border rounded-lg overflow-hidden">
              {tabs.map((tab) => (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`px-4 py-2 text-sm transition-colors ${
                    tab.active
                      ? "font-medium text-foreground bg-muted border-x border-border"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {tab.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="w-64 h-9 pl-9 pr-4 text-sm border border-border rounded-lg bg-muted placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>

        {/* Notification Bell */}
        <button className="relative p-2 text-muted-foreground hover:bg-muted rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* User Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-3 outline-none">
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">{user?.name || "Guest"}</p>
                <p className="text-xs text-muted-foreground">{user?.title || "Select a role"}</p>
              </div>
              <Avatar className="w-10 h-10">
                <AvatarImage src={user?.avatar} alt={user?.name} />
                <AvatarFallback>
                  {user?.name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("") || "?"}
                </AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem asChild>
              <Link href="/login">Switch Role</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="text-red-600">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
