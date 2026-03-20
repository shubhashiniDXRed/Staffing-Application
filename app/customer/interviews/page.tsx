"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Calendar, 
  Clock, 
  Video, 
  Phone, 
  Plus, 
  Filter,
  MoreVertical,
  MapPin 
} from "lucide-react"
import { mockInterviews } from "@/lib/mock-data"
import { ScheduleInterviewModal } from "@/components/modals/schedule-interview-modal"

export default function CustomerInterviewsPage() {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false)
  
  const upcomingInterviews = mockInterviews.filter(i => i.status === "scheduled")
  const completedInterviews = mockInterviews.filter(i => i.status === "completed")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Interviews</h1>
          <p className="text-muted-foreground">{upcomingInterviews.length} upcoming interviews</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button onClick={() => setScheduleModalOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Schedule Interview
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">{upcomingInterviews.length}</p>
                <p className="text-sm text-muted-foreground">Upcoming</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-100">
                <Video className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">2</p>
                <p className="text-sm text-muted-foreground">Today</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-100">
                <Clock className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">3</p>
                <p className="text-sm text-muted-foreground">This Week</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-slate-100">
                <Calendar className="h-5 w-5 text-slate-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">{completedInterviews.length}</p>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Interviews */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Upcoming Interviews</h2>
        <div className="space-y-4">
          {upcomingInterviews.map((interview) => (
            <Card key={interview.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={interview.candidateAvatar} alt={interview.candidateName} />
                      <AvatarFallback>
                        {interview.candidateName.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{interview.candidateName}</h3>
                      <p className="text-sm text-muted-foreground">{interview.candidateTitle}</p>
                      <p className="text-sm text-blue-600">{interview.jobTitle}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(interview.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{interview.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      {interview.type === "video" ? (
                        <Video className="h-4 w-4" />
                      ) : interview.type === "phone" ? (
                        <Phone className="h-4 w-4" />
                      ) : (
                        <MapPin className="h-4 w-4" />
                      )}
                      <span className="capitalize">{interview.type}</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700">
                      {interview.duration}
                    </Badge>
                    <div className="flex gap-2">
                      <Button size="sm">Join Call</Button>
                      <Button size="sm" variant="outline">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                {interview.notes && (
                  <p className="mt-3 text-sm text-muted-foreground border-t pt-3">
                    Note: {interview.notes}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Completed Interviews */}
      {completedInterviews.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-4">Completed</h2>
          <div className="space-y-4">
            {completedInterviews.map((interview) => (
              <Card key={interview.id} className="bg-muted/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={interview.candidateAvatar} alt={interview.candidateName} />
                        <AvatarFallback>
                          {interview.candidateName.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{interview.candidateName}</h3>
                        <p className="text-sm text-muted-foreground">{interview.jobTitle}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <span className="text-sm text-muted-foreground">
                        {new Date(interview.date).toLocaleDateString()} at {interview.time}
                      </span>
                      <Badge variant="secondary">Completed</Badge>
                      <Button size="sm" variant="outline">View Feedback</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      <ScheduleInterviewModal 
        open={scheduleModalOpen} 
        onOpenChange={setScheduleModalOpen}
      />
    </div>
  )
}
