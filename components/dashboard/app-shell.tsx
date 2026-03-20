"use client"

import { usePathname } from "next/navigation"
import { Header } from "@/components/dashboard/header"
import { Sidebar, type NavSection } from "@/components/dashboard/sidebar"

interface TabConfig {
  label: string
  href: string
  matchPrefix: string
}

interface AppShellProps {
  children: React.ReactNode
  sections: NavSection[]
  headerTabs: TabConfig[]
  searchPlaceholder?: string
  showQuickHire?: boolean
  quickHireAction?: string
  settingsHref: string
  supportHref: string
}

export function AppShell({
  children,
  sections,
  headerTabs,
  searchPlaceholder,
  showQuickHire = false,
  quickHireAction,
  settingsHref,
  supportHref,
}: AppShellProps) {
  const pathname = usePathname()

  const resolvedTabs = headerTabs.map((tab) => ({
    label: tab.label,
    href: tab.href,
    active: pathname.startsWith(tab.matchPrefix),
  }))

  return (
    <div className="min-h-screen bg-muted/30">
      <Header tabs={resolvedTabs} searchPlaceholder={searchPlaceholder} />
      <div className="flex">
        <Sidebar
          sections={sections}
          showQuickHire={showQuickHire}
          quickHireAction={quickHireAction}
          settingsHref={settingsHref}
          supportHref={supportHref}
        />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
