"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Clock, DollarSign, Check, X, Filter, Download } from "lucide-react"
import { mockTimesheets } from "@/lib/mock-data"

export default function CustomerTimesheetsPage() {
  const [statusFilter, setStatusFilter] = useState("all")
  
  const filteredTimesheets = mockTimesheets.filter(ts => 
    statusFilter === "all" || ts.status === statusFilter
  )

  const pendingCount = mockTimesheets.filter(t => t.status === "pending").length
  const totalPending = mockTimesheets
    .filter(t => t.status === "pending")
    .reduce((sum, t) => sum + t.total, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Timesheet Approval</h1>
          <p className="text-muted-foreground">{pendingCount} timesheets pending approval</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-amber-100">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pending Review</p>
                <p className="text-2xl font-semibold">{pendingCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-blue-100">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pending Amount</p>
                <p className="text-2xl font-semibold">${totalPending.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-green-100">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Approved This Week</p>
                <p className="text-2xl font-semibold">5</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Timesheets List */}
      <div className="space-y-4">
        {filteredTimesheets.map((timesheet) => (
          <Card key={timesheet.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={timesheet.freelancerAvatar} alt={timesheet.freelancerName} />
                    <AvatarFallback>{timesheet.freelancerName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{timesheet.freelancerName}</h3>
                    <p className="text-sm text-muted-foreground">{timesheet.project}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Week Ending</p>
                    <p className="font-medium">{new Date(timesheet.weekEnding).toLocaleDateString()}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Hours</p>
                    <p className="font-medium">{timesheet.hoursWorked}h</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Rate</p>
                    <p className="font-medium">${timesheet.rate}/hr</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Total</p>
                    <p className="font-semibold text-lg">${timesheet.total.toLocaleString()}</p>
                  </div>
                  
                  <Badge 
                    variant={
                      timesheet.status === "approved" ? "default" : 
                      timesheet.status === "pending" ? "secondary" : "destructive"
                    }
                    className={
                      timesheet.status === "approved" ? "bg-green-100 text-green-700" :
                      timesheet.status === "pending" ? "bg-amber-100 text-amber-700" : ""
                    }
                  >
                    {timesheet.status.charAt(0).toUpperCase() + timesheet.status.slice(1)}
                  </Badge>
                  
                  {timesheet.status === "pending" && (
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <Check className="h-4 w-4 mr-1" />
                        Approve
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                        <X className="h-4 w-4 mr-1" />
                        Reject
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
