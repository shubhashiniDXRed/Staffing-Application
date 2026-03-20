import { LayoutDashboard, Search, FileText, Calendar, MessageSquare, User, Clock, Award } from "lucide-react"
import { AppShell } from "@/components/dashboard/app-shell"
import type { NavSection } from "@/components/dashboard/sidebar"

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
      { icon: FileText, label: "Resume", href: "/freelancer/resume" },
      { icon: Award, label: "Certifications", href: "/freelancer/certifications" },
      { icon: Clock, label: "Timesheets", href: "/freelancer/timesheets" },
    ],
  },
]

const headerTabs = [
  { label: "Command Center", href: "/staffing", matchPrefix: "/staffing" },
  { label: "Customer View", href: "/customer", matchPrefix: "/customer" },
  { label: "Vendor Portal", href: "/freelancer", matchPrefix: "/freelancer" },
]

export default function FreelancerLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      sections={navSections}
      headerTabs={headerTabs}
      searchPlaceholder="Search jobs, companies..."
      showQuickHire={false}
      settingsHref="/freelancer/settings"
      supportHref="/freelancer/support"
    >
      {children}
    </AppShell>
  )
}
