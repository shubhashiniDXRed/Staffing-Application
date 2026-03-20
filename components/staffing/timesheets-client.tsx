"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import type { Timesheet } from "@/lib/types"

const statusColors: Record<string, string> = {
  pending: "bg-amber-100 text-amber-700",
  approved: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
}

export function TimesheetsClient({ timesheets }: { timesheets: Timesheet[] }) {
  const [filter, setFilter] = useState<"all" | "pending" | "approved">("all")

  const filtered = timesheets.filter((ts) => filter === "all" || ts.status === filter)

  return (
    <>
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
                {filtered.map((ts) => (
                  <tr key={ts.id} className="border-b border-border last:border-0">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={ts.freelancerAvatar} />
                          <AvatarFallback>{ts.freelancerName[0]}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-foreground">{ts.freelancerName}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{ts.project}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">
                      {new Date(ts.weekEnding).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 text-sm text-foreground">{ts.hoursWorked}h</td>
                    <td className="py-3 px-4 text-sm text-foreground">${ts.rate}/hr</td>
                    <td className="py-3 px-4 text-sm font-medium text-foreground">${ts.total.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <Badge className={statusColors[ts.status]}>
                        {ts.status.charAt(0).toUpperCase() + ts.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-right">
                      {ts.status === "pending" && (
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-green-600 hover:text-green-700 hover:bg-green-50"
                          >
                            <Check className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
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
    </>
  )
}
