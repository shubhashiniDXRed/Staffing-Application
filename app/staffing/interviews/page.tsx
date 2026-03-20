import { Plus, Video, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { InterviewsClient } from "@/components/staffing/interviews-client"
import { mockInterviews } from "@/lib/mock-data"

export default function InterviewsPage() {
  const scheduledCount = mockInterviews.filter((i) => i.status === "scheduled").length
  const completedCount = mockInterviews.filter((i) => i.status === "completed").length

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">Interviews</h1>
          <p className="text-sm text-muted-foreground">
            {scheduledCount} scheduled, {completedCount} completed
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Schedule Interview
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{scheduledCount}</p>
                <p className="text-sm text-muted-foreground">Upcoming</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <Video className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{completedCount}</p>
                <p className="text-sm text-muted-foreground">Completed This Week</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">45</p>
                <p className="text-sm text-muted-foreground">Avg. Duration (min)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <InterviewsClient interviews={mockInterviews} />
    </div>
  )
}
