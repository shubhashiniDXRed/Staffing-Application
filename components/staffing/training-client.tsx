"use client"

import { useState } from "react"
import { GraduationCap, Clock, Users, Play, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Training } from "@/lib/types"

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

export function TrainingClient({ courses }: { courses: Training[] }) {
  const [filter, setFilter] = useState<"all" | "completed" | "in-progress" | "not-started">("all")

  const filtered = courses.filter((t) => filter === "all" || t.status === filter)

  const tabs = [
    { value: "all" as const, label: "All" },
    { value: "completed" as const, label: "Completed" },
    { value: "in-progress" as const, label: "In Progress" },
    { value: "not-started" as const, label: "Not Started" },
  ]

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex gap-2">
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

      {/* Training Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((training) => (
          <Card key={training.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-purple-600" />
                </div>
                <Badge className={statusColors[training.status]}>
                  <span className="flex items-center gap-1">
                    {statusIcons[training.status]}
                    {training.status === "in-progress"
                      ? "In Progress"
                      : training.status === "not-started"
                      ? "Not Started"
                      : "Completed"}
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
                {training.status === "completed"
                  ? "View Certificate"
                  : training.status === "in-progress"
                  ? "Continue"
                  : "Start Training"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}
