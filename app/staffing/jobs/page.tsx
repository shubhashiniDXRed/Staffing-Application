import Link from "next/link"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { JobsClient } from "@/components/staffing/jobs-client"
import { mockJobs } from "@/lib/mock-data"

export default function JobsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">My Jobs</h1>
          <p className="text-sm text-muted-foreground">{mockJobs.length} positions across all clients</p>
        </div>
        <Button asChild>
          <Link href="/staffing/jobs/new">
            <Plus className="w-4 h-4 mr-2" />
            Post New Job
          </Link>
        </Button>
      </div>

      <JobsClient jobs={mockJobs} />
    </div>
  )
}
