import { Clock, DollarSign, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { TimesheetsClient } from "@/components/staffing/timesheets-client"
import { mockTimesheets } from "@/lib/mock-data"

export default function TimesheetsPage() {
  const pendingCount = mockTimesheets.filter((ts) => ts.status === "pending").length
  const totalHours = mockTimesheets.reduce((acc, ts) => acc + ts.hoursWorked, 0)
  const totalAmount = mockTimesheets.reduce((acc, ts) => acc + ts.total, 0)

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">Timesheets</h1>
          <p className="text-sm text-muted-foreground">{pendingCount} pending approval</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <FileText className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{pendingCount}</p>
                <p className="text-sm text-muted-foreground">Pending Approval</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{totalHours}</p>
                <p className="text-sm text-muted-foreground">Total Hours This Week</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">${totalAmount.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total Amount</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <TimesheetsClient timesheets={mockTimesheets} />
    </div>
  )
}
