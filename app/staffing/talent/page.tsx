import { Filter, Download, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { Filters } from "@/components/dashboard/filters"
import { CandidateList } from "@/components/dashboard/candidate-card"
import { RightSidebar } from "@/components/dashboard/right-sidebar"

export default function ShortlistedTalentPage() {
  return (
    <div className="flex gap-6">
      <div className="flex-1">
        {/* Page Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-1">Shortlisted Talent</h1>
            <p className="text-sm text-muted-foreground">23 candidates across 5 active positions</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button>
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Interviews
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mb-6">
          <StatsCards />
        </div>

        {/* Filters */}
        <div className="mb-6 p-4 bg-background border border-border rounded-xl">
          <Filters />
        </div>

        {/* Candidate List */}
        <CandidateList />
      </div>

      <RightSidebar />
    </div>
  )
}
