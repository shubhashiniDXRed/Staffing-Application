"use client"

import { usePathname } from "next/navigation"
import { LayoutDashboard, Briefcase, Users, Calendar, Clock, GraduationCap, FileText } from "lucide-react"
import { Header } from "@/components/dashboard/header"
import { Sidebar, type NavSection } from "@/components/dashboard/sidebar"

const navSections: NavSection[] = [
  {
    title: "Main Menu",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/staffing" },
      { icon: Briefcase, label: "My Jobs", href: "/staffing/jobs", badge: 5 },
      { icon: Users, label: "Shortlisted Talent", href: "/staffing/talent" },
      { icon: Calendar, label: "Interviews", href: "/staffing/interviews", badge: 3 },
    ],
  },
  {
    title: "Management",
    items: [
      { icon: Clock, label: "Timesheets", href: "/staffing/timesheets", badge: 2 },
      { icon: GraduationCap, label: "Training", href: "/staffing/training" },
      { icon: FileText, label: "Invoices", href: "/staffing/invoices" },
    ],
  },
]

const headerTabs = [
  { label: "Command Center", href: "/staffing" },
  { label: "Customer View", href: "/customer" },
  { label: "Vendor Portal", href: "/freelancer" },
]

export default function StaffingLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  const tabs = headerTabs.map((tab) => ({
    ...tab,
    active: pathname.startsWith("/staffing") && tab.href === "/staffing" 
      ? true 
      : pathname.startsWith(tab.href) && tab.href !== "/staffing",
  }))
  
  // Mark first tab as active for staffing routes
  if (pathname.startsWith("/staffing")) {
    tabs[0].active = true
    tabs[1].active = false
    tabs[2].active = false
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <Header tabs={tabs} searchPlaceholder="Search talent by skills, role..." />
      <div className="flex">
        <Sidebar 
          sections={navSections} 
          showQuickHire
          quickHireAction="/staffing/jobs/new"
          settingsHref="/staffing/settings"
          supportHref="/staffing/support"
        />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
