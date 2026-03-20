import { Users, Star, Calendar, BadgeCheck, TrendingUp } from "lucide-react"

interface StatCardProps {
  icon: React.ReactNode
  iconBg: string
  value: string | number
  label: string
  sublabel?: string
  trend?: { value: number; positive: boolean }
}

function StatCard({ icon, iconBg, value, label, sublabel, trend }: StatCardProps) {
  return (
    <div className="flex-1 p-4 bg-white border border-[var(--color-gray-200)] rounded-xl">
      <div className="flex items-start justify-between mb-3">
        <div className={`w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center`}>
          {icon}
        </div>
        {sublabel && (
          <span className="text-xs text-[var(--color-gray-500)]">{sublabel}</span>
        )}
        {trend && (
          <div className="flex items-center gap-1 text-xs text-[var(--color-green-600)]">
            <TrendingUp className="w-3 h-3" />
            <span>{trend.value}</span>
          </div>
        )}
      </div>
      <p className="text-2xl font-bold text-[var(--color-gray-900)] mb-1">{value}</p>
      <p className="text-sm text-[var(--color-gray-500)]">{label}</p>
    </div>
  )
}

export function StatsCards() {
  return (
    <div className="flex gap-4">
      <StatCard
        icon={<Users className="w-5 h-5 text-[var(--color-blue-600)]" />}
        iconBg="bg-[var(--color-blue-50)]"
        value={23}
        label="Shortlisted Candidates"
        sublabel="Total"
      />
      <StatCard
        icon={<Star className="w-5 h-5 text-[var(--color-blue-600)]" />}
        iconBg="bg-[var(--color-blue-50)]"
        value="4.8"
        label="Average Rating"
        trend={{ value: 4.6, positive: true }}
      />
      <StatCard
        icon={<Calendar className="w-5 h-5 text-[var(--color-orange-700)]" />}
        iconBg="bg-[var(--color-orange-50)]"
        value={8}
        label="Interviews to Schedule"
        sublabel="Pending"
      />
      <StatCard
        icon={<BadgeCheck className="w-5 h-5 text-[var(--color-green-600)]" />}
        iconBg="bg-[var(--color-green-50)]"
        value={18}
        label="Certified Professionals"
        sublabel="Verified"
      />
    </div>
  )
}
