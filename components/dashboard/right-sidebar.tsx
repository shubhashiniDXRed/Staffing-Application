import { Calendar, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PositionItem {
  name: string
  count: number
  color: string
}

const positions: PositionItem[] = [
  { name: "CMS Developer", count: 8, color: "bg-[var(--color-blue-600)]" },
  { name: "Commerce", count: 6, color: "bg-[var(--color-orange-700)]" },
  { name: "Frontend", count: 5, color: "bg-[var(--color-green-600)]" },
  { name: "Architect", count: 3, color: "bg-[var(--color-yellow-400)]" },
  { name: "Other", count: 1, color: "bg-[var(--color-gray-500)]" },
]

export function RightSidebar() {
  return (
    <aside className="w-72 p-6 space-y-6">
      {/* Quick Actions */}
      <div className="bg-white border border-[var(--color-gray-200)] rounded-xl p-4">
        <h3 className="text-base font-semibold text-[var(--color-gray-900)] mb-4">Quick Actions</h3>
        <div className="space-y-3">
          <Button className="w-full bg-[var(--color-blue-600)] hover:bg-[var(--color-blue-700)] text-white justify-center">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Batch Interviews
          </Button>
          <Button variant="outline" className="w-full border-[var(--color-gray-200)] text-[var(--color-gray-700)] hover:bg-[var(--color-gray-50)] justify-center">
            <Mail className="w-4 h-4 mr-2" />
            Send Bulk Message
          </Button>
          <Button variant="outline" className="w-full border-[var(--color-gray-200)] text-[var(--color-gray-700)] hover:bg-[var(--color-gray-50)] justify-center">
            <Download className="w-4 h-4 mr-2" />
            Export List
          </Button>
        </div>
      </div>

      {/* By Position */}
      <div className="bg-white border border-[var(--color-gray-200)] rounded-xl p-4">
        <h3 className="text-base font-semibold text-[var(--color-gray-900)] mb-4">By Position</h3>
        <div className="space-y-3">
          {positions.map((position, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${position.color}`} />
                <span className="text-sm text-[var(--color-gray-700)]">{position.name}</span>
              </div>
              <span className="text-sm font-medium text-[var(--color-gray-900)]">{position.count}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
