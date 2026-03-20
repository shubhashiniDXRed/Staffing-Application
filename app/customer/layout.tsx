import { LayoutDashboard, Briefcase, Users, Calendar, MessageSquare, Clock } from "lucide-react"
import { AppShell } from "@/components/dashboard/app-shell"
import type { NavSection } from "@/components/dashboard/sidebar"

const navSections: NavSection[] = [
  {
    title: "Main Menu",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/customer" },
      { icon: Briefcase, label: "My Jobs", href: "/customer/jobs", badge: 3 },
      { icon: Users, label: "Candidates", href: "/customer/candidates" },
      { icon: Calendar, label: "Interviews", href: "/customer/interviews", badge: 2 },
      { icon: MessageSquare, label: "Messages", href: "/customer/messages", badge: 5 },
      { icon: Clock, label: "Timesheets", href: "/customer/timesheets", badge: 1 },
    ],
  },
]

const headerTabs = [
  { label: "Command Center", href: "/staffing", matchPrefix: "/staffing" },
  { label: "Customer View", href: "/customer", matchPrefix: "/customer" },
  { label: "Vendor Portal", href: "/freelancer", matchPrefix: "/freelancer" },
]

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      sections={navSections}
      headerTabs={headerTabs}
      searchPlaceholder="Search candidates, jobs..."
      showQuickHire
      quickHireAction="/customer/jobs/new"
      settingsHref="/customer/settings"
      supportHref="/customer/support"
    >
      {children}
    </AppShell>
  )
}
