"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Settings, HelpCircle, Lightbulb, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface NavItem {
  icon: LucideIcon
  label: string
  href: string
  badge?: number
}

export interface NavSection {
  title: string
  items: NavItem[]
}

interface SidebarProps {
  sections: NavSection[]
  showQuickHire?: boolean
  quickHireAction?: string
  settingsHref?: string
  supportHref?: string
}

function NavItemComponent({ item, isActive }: { item: NavItem; isActive: boolean }) {
  const Icon = item.icon
  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm transition-colors",
        isActive
          ? "bg-primary/10 text-primary"
          : "text-muted-foreground hover:bg-muted"
      )}
    >
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5" />
        <span className={cn(isActive && "font-medium")}>{item.label}</span>
      </div>
      {item.badge !== undefined && (
        <span className="text-xs font-medium text-primary">
          {item.badge}
        </span>
      )}
    </Link>
  )
}

export function Sidebar({ 
  sections, 
  showQuickHire = true,
  quickHireAction = "/staffing/post-job",
  settingsHref = "/settings",
  supportHref = "/support"
}: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside className="w-60 border-r border-border bg-background flex flex-col h-[calc(100vh-64px)]">
      <div className="flex-1 p-4 overflow-y-auto">
        {sections.map((section, index) => (
          <div key={section.title} className={index > 0 ? "mt-6" : ""}>
            <p className="px-3 mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {section.title}
            </p>
            <nav className="space-y-1">
              {section.items.map((item) => (
                <NavItemComponent
                  key={item.href}
                  item={item}
                  isActive={pathname === item.href}
                />
              ))}
            </nav>
          </div>
        ))}

        {/* Quick Hire Card */}
        {showQuickHire && (
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <Lightbulb className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-foreground">Quick Hire</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Get matched with pre-vetted talent in 24 hours.
            </p>
            <Link
              href={quickHireAction}
              className="block w-full py-2 text-sm font-medium text-center text-orange-500 border border-orange-500 rounded-lg hover:bg-orange-50 transition-colors"
            >
              Post Job Now
            </Link>
          </div>
        )}
      </div>

      {/* Footer Navigation */}
      <div className="p-4 border-t border-border">
        <nav className="space-y-1">
          <NavItemComponent
            item={{ icon: Settings, label: "Settings", href: settingsHref }}
            isActive={pathname === settingsHref}
          />
          <NavItemComponent
            item={{ icon: HelpCircle, label: "Support", href: supportHref }}
            isActive={pathname === supportHref}
          />
        </nav>
      </div>
    </aside>
  )
}
