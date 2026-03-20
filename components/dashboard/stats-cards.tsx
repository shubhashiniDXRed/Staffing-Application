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
    <div className="flex-1 p-4 bg-white border border-[#e5e7eb] rounded-xl">
      <div className="flex items-start justify-between mb-3">
        <div className={`w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center`}>
          {icon}
        </div>
        {sublabel && (
          <span className="text-xs text-[#6b7280]">{sublabel}</span>
        )}
        {trend && (
          <div className="flex items-center gap-1 text-xs text-[#16a34a]">
            <TrendingUp className="w-3 h-3" />
            <span>{trend.value}</span>
          </div>
        )}
      </div>
      <p className="text-2xl font-bold text-[#111827] mb-1">{value}</p>
      <p className="text-sm text-[#6b7280]">{label}</p>
    </div>
  )
}

export function StatsCards() {
  return (
    <div className="flex gap-4">
      <StatCard
        icon={<Users className="w-5 h-5 text-[#2563eb]" />}
        iconBg="bg-[#eff6ff]"
        value={23}
        label="Shortlisted Candidates"
        sublabel="Total"
      />
      <StatCard
        icon={<Star className="w-5 h-5 text-[#2563eb]" />}
        iconBg="bg-[#eff6ff]"
        value="4.8"
        label="Average Rating"
        trend={{ value: 4.6, positive: true }}
      />
      <StatCard
        icon={<Calendar className="w-5 h-5 text-[#ea580c]" />}
        iconBg="bg-[#fff7ed]"
        value={8}
        label="Interviews to Schedule"
        sublabel="Pending"
      />
      <StatCard
        icon={<BadgeCheck className="w-5 h-5 text-[#16a34a]" />}
        iconBg="bg-[#f0fdf4]"
        value={18}
        label="Certified Professionals"
        sublabel="Verified"
      />
    </div>
  )
}
