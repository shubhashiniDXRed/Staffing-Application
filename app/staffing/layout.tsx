import { LayoutDashboard, Briefcase, Users, Calendar, Clock, GraduationCap, FileText, MessageSquare } from "lucide-react"
import { AppShell } from "@/components/dashboard/app-shell"
import type { NavSection } from "@/components/dashboard/sidebar"

const navSections: NavSection[] = [
  {
    title: "Main Menu",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/staffing" },
      { icon: Briefcase, label: "My Jobs", href: "/staffing/jobs", badge: 5 },
      { icon: Users, label: "Shortlisted Talent", href: "/staffing/talent" },
      { icon: Calendar, label: "Interviews", href: "/staffing/interviews", badge: 3 },
      { icon: MessageSquare, label: "Messages", href: "/staffing/messages", badge: 4 },
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
  { label: "Command Center", href: "/staffing", matchPrefix: "/staffing" },
  { label: "Customer View", href: "/customer", matchPrefix: "/customer" },
  { label: "Vendor Portal", href: "/freelancer", matchPrefix: "/freelancer" },
]

export default function StaffingLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      sections={navSections}
      headerTabs={headerTabs}
      searchPlaceholder="Search talent by skills, role..."
      showQuickHire
      quickHireAction="/staffing/jobs/new"
      settingsHref="/staffing/settings"
      supportHref="/staffing/support"
    >
      {children}
    </AppShell>
  )
}
