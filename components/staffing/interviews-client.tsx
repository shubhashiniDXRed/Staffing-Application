"use client"

import { useState } from "react"
import { Video, Phone, MapPin, Clock, MoreVertical, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { Interview } from "@/lib/types"

const typeIcons: Record<string, React.ReactNode> = {
  video: <Video className="w-4 h-4" />,
  phone: <Phone className="w-4 h-4" />,
  "in-person": <MapPin className="w-4 h-4" />,
}

const statusColors: Record<string, string> = {
  scheduled: "bg-blue-100 text-blue-700",
  completed: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
}

export function InterviewsClient({ interviews }: { interviews: Interview[] }) {
  const [filter, setFilter] = useState<"all" | "scheduled" | "completed">("all")

  const filtered = interviews.filter((i) => filter === "all" || i.status === filter)

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex gap-2">
        {(["all", "scheduled", "completed"] as const).map((tab) => (
          <Button
            key={tab}
            variant={filter === tab ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Button>
        ))}
      </div>

      {/* Interviews List */}
      <div className="space-y-4">
        {filtered.map((interview) => (
          <Card key={interview.id}>
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={interview.candidateAvatar} />
                  <AvatarFallback>{interview.candidateName[0]}</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-foreground">{interview.candidateName}</h3>
                      <p className="text-sm text-muted-foreground">{interview.candidateTitle}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={statusColors[interview.status]}>
                        {interview.status.charAt(0).toUpperCase() + interview.status.slice(1)}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Reschedule</DropdownMenuItem>
                          <DropdownMenuItem>View Candidate</DropdownMenuItem>
                          <DropdownMenuItem>Add Notes</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Cancel</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(interview.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>
                        {interview.time} ({interview.duration})
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {typeIcons[interview.type]}
                      <span className="capitalize">{interview.type}</span>
                    </div>
                  </div>

                  {interview.notes && (
                    <p className="mt-2 text-sm text-muted-foreground bg-muted/50 p-2 rounded">
                      {interview.notes}
                    </p>
                  )}
                </div>

                {interview.status === "scheduled" && <Button>Join Call</Button>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}
