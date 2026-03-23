import { AppShell } from "@/components/dashboard/app-shell"
import type { NavSection } from "@/components/dashboard/sidebar"

const navSections: NavSection[] = [
  {
    title: "Main Menu",
    items: [
      { icon: "layout-dashboard", label: "Dashboard", href: "/freelancer" },
      { icon: "search", label: "Find Jobs", href: "/freelancer/jobs" },
      { icon: "file-text", label: "My Applications", href: "/freelancer/applications", badge: 4 },
      { icon: "calendar", label: "Interviews", href: "/freelancer/interviews", badge: 2 },
      { icon: "message-square", label: "Messages", href: "/freelancer/messages", badge: 3 },
    ],
  },
  {
    title: "Account",
    items: [
      { icon: "user", label: "My Profile", href: "/freelancer/profile" },
      { icon: "file-text", label: "Resume", href: "/freelancer/resume" },
      { icon: "award", label: "Certifications", href: "/freelancer/certifications" },
      { icon: "clock", label: "Timesheets", href: "/freelancer/timesheets" },
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
