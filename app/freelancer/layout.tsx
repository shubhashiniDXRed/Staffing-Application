"use client"

import { usePathname } from "next/navigation"
import { LayoutDashboard, Search, FileText, Calendar, MessageSquare, User, Clock } from "lucide-react"
import { Header } from "@/components/dashboard/header"
import { Sidebar, type NavSection } from "@/components/dashboard/sidebar"

const navSections: NavSection[] = [
  {
    title: "Main Menu",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/freelancer" },
      { icon: Search, label: "Find Jobs", href: "/freelancer/jobs" },
      { icon: FileText, label: "My Applications", href: "/freelancer/applications", badge: 4 },
      { icon: Calendar, label: "Interviews", href: "/freelancer/interviews", badge: 2 },
      { icon: MessageSquare, label: "Messages", href: "/freelancer/messages", badge: 3 },
    ],
  },
  {
    title: "Account",
    items: [
      { icon: User, label: "My Profile", href: "/freelancer/profile" },
      { icon: Clock, label: "Timesheets", href: "/freelancer/timesheets" },
    ],
  },
]

const headerTabs = [
  { label: "Command Center", href: "/staffing" },
  { label: "Customer View", href: "/customer" },
  { label: "Vendor Portal", href: "/freelancer" },
]

export default function FreelancerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  const tabs = headerTabs.map((tab) => ({
    ...tab,
    active: pathname.startsWith("/freelancer") && tab.href === "/freelancer",
  }))
  
  if (pathname.startsWith("/freelancer")) {
    tabs[0].active = false
    tabs[1].active = false
    tabs[2].active = true
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <Header tabs={tabs} searchPlaceholder="Search jobs, companies..." />
      <div className="flex">
        <Sidebar 
          sections={navSections} 
          showQuickHire={false}
          settingsHref="/freelancer/settings"
          supportHref="/freelancer/support"
        />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
