import { AppShell } from "@/components/dashboard/app-shell"
import type { NavSection } from "@/components/dashboard/sidebar"

const navSections: NavSection[] = [
  {
    title: "Main Menu",
    items: [
      { icon: "layout-dashboard", label: "Dashboard", href: "/customer" },
      { icon: "briefcase", label: "My Jobs", href: "/customer/jobs", badge: 3 },
      { icon: "users", label: "Candidates", href: "/customer/candidates" },
      { icon: "calendar", label: "Interviews", href: "/customer/interviews", badge: 2 },
      { icon: "message-square", label: "Messages", href: "/customer/messages", badge: 5 },
      { icon: "clock", label: "Timesheets", href: "/customer/timesheets", badge: 1 },
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
