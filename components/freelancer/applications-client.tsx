"use client"

import { useState } from "react"
import { MapPin, Clock, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const statusColors: Record<string, string> = {
  pending: "bg-amber-100 text-amber-700",
  reviewed: "bg-blue-100 text-blue-700",
  interview: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
  accepted: "bg-emerald-100 text-emerald-700",
}

const statusLabels: Record<string, string> = {
  pending: "Pending Review",
  reviewed: "Under Review",
  interview: "Interview Scheduled",
  rejected: "Not Selected",
  accepted: "Accepted",
}

interface Application {
  id: string
  jobTitle: string
  company: string
  location: string
  appliedDate: string
  status: "pending" | "reviewed" | "interview" | "rejected" | "accepted"
  salary: string
}

export function ApplicationsClient({ applications }: { applications: Application[] }) {
  const [filter, setFilter] = useState<"all" | "pending" | "interview" | "reviewed" | "rejected">("all")

  const filtered = applications.filter((app) => filter === "all" || app.status === filter)

  const tabs = [
    { value: "all" as const, label: "All" },
    { value: "pending" as const, label: statusLabels.pending },
    { value: "reviewed" as const, label: statusLabels.reviewed },
    { value: "interview" as const, label: statusLabels.interview },
    { value: "rejected" as const, label: statusLabels.rejected },
  ]

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex gap-2 flex-wrap">
        {tabs.map((tab) => (
          <Button
            key={tab.value}
            variant={filter === tab.value ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(tab.value)}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {filtered.map((application) => (
          <Card key={application.id}>
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-foreground">{application.jobTitle}</h3>
                      <p className="text-sm text-muted-foreground">{application.company}</p>
                    </div>
                    <Badge className={statusColors[application.status]}>
                      {statusLabels[application.status]}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>{application.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>Applied {new Date(application.appliedDate).toLocaleDateString()}</span>
                    </div>
                    <span>{application.salary}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">View Job</Button>
                  {application.status === "interview" && <Button size="sm">View Interview</Button>}
                  {application.status === "pending" && (
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      Withdraw
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}
