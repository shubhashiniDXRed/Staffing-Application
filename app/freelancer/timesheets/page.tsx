"use client"

import { useState } from "react"
import { Plus, Clock, DollarSign, FileText, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const timesheets = [
  {
    id: "1",
    weekEnding: "2024-01-19",
    project: "Acme Corp - CMS Migration",
    hoursWorked: 40,
    rate: 120,
    total: 4800,
    status: "pending",
  },
  {
    id: "2",
    weekEnding: "2024-01-12",
    project: "Acme Corp - CMS Migration",
    hoursWorked: 38,
    rate: 120,
    total: 4560,
    status: "approved",
  },
  {
    id: "3",
    weekEnding: "2024-01-05",
    project: "TechStart - Frontend Development",
    hoursWorked: 32,
    rate: 120,
    total: 3840,
    status: "paid",
  },
]

const statusColors: Record<string, string> = {
  pending: "bg-amber-100 text-amber-700",
  approved: "bg-blue-100 text-blue-700",
  paid: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
}

export default function FreelancerTimesheetsPage() {
  const [filter, setFilter] = useState<"all" | "pending" | "approved" | "paid">("all")
  
  const filteredTimesheets = timesheets.filter(ts => 
    filter === "all" || ts.status === filter
  )

  const totalEarnings = timesheets.filter(ts => ts.status === "paid").reduce((acc, ts) => acc + ts.total, 0)
  const pendingAmount = timesheets.filter(ts => ts.status === "pending" || ts.status === "approved").reduce((acc, ts) => acc + ts.total, 0)
  const totalHours = timesheets.reduce((acc, ts) => acc + ts.hoursWorked, 0)

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">My Timesheets</h1>
          <p className="text-sm text-muted-foreground">
            Track and submit your work hours
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Submit Timesheet
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">${totalEarnings.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total Paid</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <Clock className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">${pendingAmount.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Pending Payment</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{totalHours}</p>
                <p className="text-sm text-muted-foreground">Total Hours</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{timesheets.length}</p>
                <p className="text-sm text-muted-foreground">Timesheets</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2">
        {(["all", "pending", "approved", "paid"] as const).map((tab) => (
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
          <CardTitle className="text-lg">Timesheet History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Week Ending</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Project</th>
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
                    <td className="py-3 px-4 text-sm text-foreground">
                      {new Date(timesheet.weekEnding).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td className="py-3 px-4 text-sm text-foreground">{timesheet.project}</td>
                    <td className="py-3 px-4 text-sm text-foreground">{timesheet.hoursWorked}h</td>
                    <td className="py-3 px-4 text-sm text-foreground">${timesheet.rate}/hr</td>
                    <td className="py-3 px-4 text-sm font-medium text-foreground">${timesheet.total.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <Badge className={statusColors[timesheet.status]}>
                        {timesheet.status.charAt(0).toUpperCase() + timesheet.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Button variant="ghost" size="sm">View Details</Button>
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
