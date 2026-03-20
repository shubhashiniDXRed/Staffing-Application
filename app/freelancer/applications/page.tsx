import { FileText, Eye, Clock, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ApplicationsClient } from "@/components/freelancer/applications-client"

const applications = [
  {
    id: "1",
    jobTitle: "Senior CMS Developer",
    company: "Acme Corp",
    location: "Remote",
    appliedDate: "2024-01-18",
    status: "pending" as const,
    salary: "$100-150/hr",
  },
  {
    id: "2",
    jobTitle: "Frontend Developer",
    company: "TechStart Inc",
    location: "New York, NY",
    appliedDate: "2024-01-15",
    status: "interview" as const,
    salary: "$120,000-150,000",
  },
  {
    id: "3",
    jobTitle: "Commerce Architect",
    company: "Global Retail Co",
    location: "Chicago, IL",
    appliedDate: "2024-01-10",
    status: "reviewed" as const,
    salary: "$150-200/hr",
  },
  {
    id: "4",
    jobTitle: "Full Stack Developer",
    company: "Innovation Labs",
    location: "Remote",
    appliedDate: "2024-01-05",
    status: "rejected" as const,
    salary: "$80-100/hr",
  },
]

export default function FreelancerApplicationsPage() {
  const pendingCount = applications.filter((a) => a.status === "pending").length
  const interviewCount = applications.filter((a) => a.status === "interview").length
  const reviewedCount = applications.filter((a) => a.status === "reviewed").length
  const rejectedCount = applications.filter((a) => a.status === "rejected").length

  return (
    <div className="space-y-6">
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
                <p className="text-2xl font-bold text-foreground">{reviewedCount}</p>
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
                <p className="text-2xl font-bold text-foreground">{rejectedCount}</p>
                <p className="text-sm text-muted-foreground">Not Selected</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <ApplicationsClient applications={applications} />
    </div>
  )
}
