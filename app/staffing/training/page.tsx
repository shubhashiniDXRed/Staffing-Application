import { Plus, CheckCircle, Play, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrainingClient } from "@/components/staffing/training-client"
import { mockTraining } from "@/lib/mock-data"

export default function TrainingPage() {
  const completedCount = mockTraining.filter((t) => t.status === "completed").length
  const inProgressCount = mockTraining.filter((t) => t.status === "in-progress").length

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">Training</h1>
          <p className="text-sm text-muted-foreground">
            {completedCount} completed, {inProgressCount} in progress
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Training
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{completedCount}</p>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Play className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{inProgressCount}</p>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">479</p>
                <p className="text-sm text-muted-foreground">Total Completions</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <TrainingClient courses={mockTraining} />
    </div>
  )
}
