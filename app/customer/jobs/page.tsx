import Link from "next/link"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CustomerJobsClient } from "@/components/customer/jobs-client"
import { mockJobs } from "@/lib/mock-data"

export default function CustomerJobsPage() {
  const activeCount = mockJobs.filter((j) => j.status === "active").length
  const pausedCount = mockJobs.filter((j) => j.status === "paused").length

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">My Job Postings</h1>
          <p className="text-sm text-muted-foreground">
            {activeCount} active, {pausedCount} paused
          </p>
        </div>
        <Button asChild>
          <Link href="/customer/jobs/new">
            <Plus className="w-4 h-4 mr-2" />
            Post New Job
          </Link>
        </Button>
      </div>

      <CustomerJobsClient jobs={mockJobs} />
    </div>
  )
}
