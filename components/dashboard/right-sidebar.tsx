import { Calendar, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PositionItem {
  name: string
  count: number
  color: string
}

const positions: PositionItem[] = [
  { name: "CMS Developer", count: 8, color: "bg-[#3b82f6]" },
  { name: "Commerce", count: 6, color: "bg-[#f97316]" },
  { name: "Frontend", count: 5, color: "bg-[#22c55e]" },
  { name: "Architect", count: 3, color: "bg-[#facc15]" },
  { name: "Other", count: 1, color: "bg-[#6b7280]" },
]

export function RightSidebar() {
  return (
    <aside className="w-72 p-6 space-y-6">
      {/* Quick Actions */}
      <div className="bg-white border border-[#e5e7eb] rounded-xl p-4">
        <h3 className="text-base font-semibold text-[#111827] mb-4">Quick Actions</h3>
        <div className="space-y-3">
          <Button className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white justify-center">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Batch Interviews
          </Button>
          <Button variant="outline" className="w-full border-[#e5e7eb] text-[#374151] hover:bg-[#f9fafb] justify-center">
            <Mail className="w-4 h-4 mr-2" />
            Send Bulk Message
          </Button>
          <Button variant="outline" className="w-full border-[#e5e7eb] text-[#374151] hover:bg-[#f9fafb] justify-center">
            <Download className="w-4 h-4 mr-2" />
            Export List
          </Button>
        </div>
      </div>

      {/* By Position */}
      <div className="bg-white border border-[#e5e7eb] rounded-xl p-4">
        <h3 className="text-base font-semibold text-[#111827] mb-4">By Position</h3>
        <div className="space-y-3">
          {positions.map((position, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${position.color}`} />
                <span className="text-sm text-[#374151]">{position.name}</span>
              </div>
              <span className="text-sm font-medium text-[#111827]">{position.count}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
