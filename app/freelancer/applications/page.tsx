"use client"

import { useState } from "react"
import { FileText, Building2, MapPin, Clock, Eye, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const applications = [
  {
    id: "1",
    jobTitle: "Senior CMS Developer",
    company: "Acme Corp",
    location: "Remote",
    appliedDate: "2024-01-18",
    status: "pending",
    salary: "$100-150/hr",
  },
  {
    id: "2",
    jobTitle: "Frontend Developer",
    company: "TechStart Inc",
    location: "New York, NY",
    appliedDate: "2024-01-15",
    status: "interview",
    salary: "$120,000-150,000",
  },
  {
    id: "3",
    jobTitle: "Commerce Architect",
    company: "Global Retail Co",
    location: "Chicago, IL",
    appliedDate: "2024-01-10",
    status: "reviewed",
    salary: "$150-200/hr",
  },
  {
    id: "4",
    jobTitle: "Full Stack Developer",
    company: "Innovation Labs",
    location: "Remote",
    appliedDate: "2024-01-05",
    status: "rejected",
    salary: "$80-100/hr",
  },
]

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

export default function FreelancerApplicationsPage() {
  const [filter, setFilter] = useState<"all" | "pending" | "interview" | "reviewed" | "rejected">("all")
  
  const filteredApplications = applications.filter(app => 
    filter === "all" || app.status === filter
  )

  const pendingCount = applications.filter(a => a.status === "pending").length
  const interviewCount = applications.filter(a => a.status === "interview").length

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">My Applications</h1>
        <p className="text-sm text-muted-foreground">
          {pendingCount} pending, {interviewCount} with interviews scheduled
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <FileText className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{pendingCount}</p>
                <p className="text-sm text-muted-foreground">Pending</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Eye className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{applications.filter(a => a.status === "reviewed").length}</p>
                <p className="text-sm text-muted-foreground">Under Review</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <Clock className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{interviewCount}</p>
                <p className="text-sm text-muted-foreground">Interviews</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                <X className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{applications.filter(a => a.status === "rejected").length}</p>
                <p className="text-sm text-muted-foreground">Not Selected</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 flex-wrap">
        {(["all", "pending", "reviewed", "interview", "rejected"] as const).map((tab) => (
          <Button
            key={tab}
            variant={filter === tab ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(tab)}
          >
            {tab === "all" ? "All" : statusLabels[tab]}
          </Button>
        ))}
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {filteredApplications.map((application) => (
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
                  {application.status === "interview" && (
                    <Button size="sm">View Interview</Button>
                  )}
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
    </div>
  )
}
