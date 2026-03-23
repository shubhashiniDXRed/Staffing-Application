import { AppShell } from "@/components/dashboard/app-shell"
import type { NavSection } from "@/components/dashboard/sidebar"

const navSections: NavSection[] = [
  {
    title: "Main Menu",
    items: [
      { icon: "layout-dashboard", label: "Dashboard", href: "/staffing" },
      { icon: "briefcase", label: "My Jobs", href: "/staffing/jobs", badge: 5 },
      { icon: "users", label: "Shortlisted Talent", href: "/staffing/talent" },
      { icon: "calendar", label: "Interviews", href: "/staffing/interviews", badge: 3 },
      { icon: "message-square", label: "Messages", href: "/staffing/messages", badge: 4 },
    ],
  },
  {
    title: "Management",
    items: [
      { icon: "clock", label: "Timesheets", href: "/staffing/timesheets", badge: 2 },
      { icon: "graduation-cap", label: "Training", href: "/staffing/training" },
      { icon: "file-text", label: "Invoices", href: "/staffing/invoices" },
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
