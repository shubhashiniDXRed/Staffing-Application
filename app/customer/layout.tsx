"use client"

import { usePathname } from "next/navigation"
import { LayoutDashboard, Briefcase, Users, Calendar, MessageSquare } from "lucide-react"
import { Header } from "@/components/dashboard/header"
import { Sidebar, type NavSection } from "@/components/dashboard/sidebar"

const navSections: NavSection[] = [
  {
    title: "Main Menu",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/customer" },
      { icon: Briefcase, label: "My Jobs", href: "/customer/jobs", badge: 3 },
      { icon: Users, label: "Candidates", href: "/customer/candidates" },
      { icon: Calendar, label: "Interviews", href: "/customer/interviews", badge: 2 },
      { icon: MessageSquare, label: "Messages", href: "/customer/messages", badge: 5 },
    ],
  },
]

const headerTabs = [
  { label: "Command Center", href: "/staffing" },
  { label: "Customer View", href: "/customer" },
  { label: "Vendor Portal", href: "/freelancer" },
]

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  const tabs = headerTabs.map((tab) => ({
    ...tab,
    active: pathname.startsWith("/customer") && tab.href === "/customer",
  }))
  
  if (pathname.startsWith("/customer")) {
    tabs[0].active = false
    tabs[1].active = true
    tabs[2].active = false
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <Header tabs={tabs} searchPlaceholder="Search candidates, jobs..." />
      <div className="flex">
        <Sidebar 
          sections={navSections} 
          showQuickHire
          quickHireAction="/customer/jobs/new"
          settingsHref="/customer/settings"
          supportHref="/customer/support"
        />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
