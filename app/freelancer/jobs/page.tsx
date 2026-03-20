import { FreelancerJobsClient } from "@/components/freelancer/jobs-client"
import { mockJobs } from "@/lib/mock-data"

export default function FreelancerJobsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">Find Jobs</h1>
        <p className="text-sm text-muted-foreground">Browse open positions matching your skills</p>
      </div>

      <FreelancerJobsClient jobs={mockJobs} />
    </div>
  )
}
