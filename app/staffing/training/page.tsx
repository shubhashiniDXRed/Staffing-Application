"use client"

import { useState } from "react"
import { Plus, GraduationCap, Clock, Users, Play, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockTraining } from "@/lib/mock-data"

const statusColors: Record<string, string> = {
  completed: "bg-green-100 text-green-700",
  "in-progress": "bg-blue-100 text-blue-700",
  "not-started": "bg-gray-100 text-gray-700",
}

const statusIcons: Record<string, React.ReactNode> = {
  completed: <CheckCircle className="w-4 h-4 text-green-600" />,
  "in-progress": <Play className="w-4 h-4 text-blue-600" />,
  "not-started": <Clock className="w-4 h-4 text-gray-600" />,
}

export default function TrainingPage() {
  const [filter, setFilter] = useState<"all" | "completed" | "in-progress" | "not-started">("all")
  
  const filteredTraining = mockTraining.filter(t => 
    filter === "all" || t.status === filter
  )

  const completedCount = mockTraining.filter(t => t.status === "completed").length
  const inProgressCount = mockTraining.filter(t => t.status === "in-progress").length

  return (
    <div className="space-y-6">
      {/* Page Header */}
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

      {/* Filter Tabs */}
      <div className="flex gap-2">
        {(["all", "completed", "in-progress", "not-started"] as const).map((tab) => (
          <Button
            key={tab}
            variant={filter === tab ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(tab)}
          >
            {tab === "in-progress" ? "In Progress" : tab === "not-started" ? "Not Started" : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Button>
        ))}
      </div>

      {/* Training Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTraining.map((training) => (
          <Card key={training.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-purple-600" />
                </div>
                <Badge className={statusColors[training.status]}>
                  <span className="flex items-center gap-1">
                    {statusIcons[training.status]}
                    {training.status === "in-progress" ? "In Progress" : training.status === "not-started" ? "Not Started" : "Completed"}
                  </span>
                </Badge>
              </div>

              <h3 className="font-semibold text-foreground mb-1">{training.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{training.category}</p>

              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{training.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{training.completedBy} completed</span>
                </div>
              </div>

              {training.dueDate && (
                <p className="text-sm text-muted-foreground mb-4">
                  Due: {new Date(training.dueDate).toLocaleDateString()}
                </p>
              )}

              <Button 
                className="w-full" 
                variant={training.status === "completed" ? "outline" : "default"}
              >
                {training.status === "completed" ? "View Certificate" : training.status === "in-progress" ? "Continue" : "Start Training"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
