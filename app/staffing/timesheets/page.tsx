"use client"

import { useState } from "react"
import { Check, X, Clock, DollarSign, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { mockTimesheets } from "@/lib/mock-data"

const statusColors: Record<string, string> = {
  pending: "bg-amber-100 text-amber-700",
  approved: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
}

export default function TimesheetsPage() {
  const [filter, setFilter] = useState<"all" | "pending" | "approved">("all")
  
  const filteredTimesheets = mockTimesheets.filter(ts => 
    filter === "all" || ts.status === filter
  )

  const pendingCount = mockTimesheets.filter(ts => ts.status === "pending").length
  const totalHours = mockTimesheets.reduce((acc, ts) => acc + ts.hoursWorked, 0)
  const totalAmount = mockTimesheets.reduce((acc, ts) => acc + ts.total, 0)

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">Timesheets</h1>
          <p className="text-sm text-muted-foreground">
            {pendingCount} pending approval
          </p>
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

      {/* Filter Tabs */}
      <div className="flex gap-2">
        {(["all", "pending", "approved"] as const).map((tab) => (
          <Button
            key={tab}
            variant={filter === tab ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Button>
        ))}
      </div>

      {/* Timesheets Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Timesheets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Freelancer</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Project</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Week Ending</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Hours</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Rate</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Total</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTimesheets.map((timesheet) => (
                  <tr key={timesheet.id} className="border-b border-border last:border-0">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={timesheet.freelancerAvatar} />
                          <AvatarFallback>{timesheet.freelancerName[0]}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-foreground">{timesheet.freelancerName}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{timesheet.project}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">
                      {new Date(timesheet.weekEnding).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 text-sm text-foreground">{timesheet.hoursWorked}h</td>
                    <td className="py-3 px-4 text-sm text-foreground">${timesheet.rate}/hr</td>
                    <td className="py-3 px-4 text-sm font-medium text-foreground">${timesheet.total.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <Badge className={statusColors[timesheet.status]}>
                        {timesheet.status.charAt(0).toUpperCase() + timesheet.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-right">
                      {timesheet.status === "pending" && (
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-green-600 hover:text-green-700 hover:bg-green-50">
                            <Check className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50">
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
