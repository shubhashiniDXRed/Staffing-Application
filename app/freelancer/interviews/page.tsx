"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Calendar, 
  Clock, 
  Video, 
  Phone, 
  MapPin,
  Building2,
  CheckCircle2,
  XCircle
} from "lucide-react"

const freelancerInterviews = [
  {
    id: "1",
    company: "Acme Corp",
    companyLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=80&h=80&fit=crop",
    jobTitle: "Senior CMS Developer",
    interviewer: "Michael Chen",
    date: "2024-01-20",
    time: "10:00 AM",
    duration: "45 min",
    type: "video",
    status: "upcoming",
    notes: "Technical interview - Be prepared to discuss CMS 12 experience",
  },
  {
    id: "2",
    company: "TechStart Inc",
    companyLogo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=80&h=80&fit=crop",
    jobTitle: "Frontend Developer",
    interviewer: "Lisa Wang",
    date: "2024-01-22",
    time: "2:00 PM",
    duration: "60 min",
    type: "video",
    status: "upcoming",
    notes: "Final round interview with the engineering team",
  },
  {
    id: "3",
    company: "Global Retail Co",
    companyLogo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=80&h=80&fit=crop",
    jobTitle: "Commerce Architect",
    interviewer: "James Wilson",
    date: "2024-01-15",
    time: "11:00 AM",
    duration: "30 min",
    type: "phone",
    status: "completed",
    result: "passed",
  },
  {
    id: "4",
    company: "Innovation Labs",
    companyLogo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=80&h=80&fit=crop",
    jobTitle: "Full Stack Developer",
    interviewer: "Emily Davis",
    date: "2024-01-10",
    time: "3:00 PM",
    duration: "45 min",
    type: "video",
    status: "completed",
    result: "declined",
  },
]

export default function FreelancerInterviewsPage() {
  const upcomingInterviews = freelancerInterviews.filter(i => i.status === "upcoming")
  const completedInterviews = freelancerInterviews.filter(i => i.status === "completed")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-foreground">My Interviews</h1>
        <p className="text-muted-foreground">{upcomingInterviews.length} upcoming interviews</p>
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
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">
                  {completedInterviews.filter(i => i.result === "passed").length}
                </p>
                <p className="text-sm text-muted-foreground">Passed</p>
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
                <p className="text-2xl font-semibold">1</p>
                <p className="text-sm text-muted-foreground">This Week</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-slate-100">
                <Building2 className="h-5 w-5 text-slate-600" />
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
      {upcomingInterviews.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-4">Upcoming Interviews</h2>
          <div className="space-y-4">
            {upcomingInterviews.map((interview) => (
              <Card key={interview.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={interview.companyLogo} alt={interview.company} />
                        <AvatarFallback>{interview.company[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{interview.jobTitle}</h3>
                        <p className="text-sm text-muted-foreground">{interview.company}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          with {interview.interviewer}
                        </p>
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
                      <Button size="sm">Join Call</Button>
                    </div>
                  </div>
                  {interview.notes && (
                    <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Prep notes:</span> {interview.notes}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

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
                        <AvatarImage src={interview.companyLogo} alt={interview.company} />
                        <AvatarFallback>{interview.company[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{interview.jobTitle}</h3>
                        <p className="text-sm text-muted-foreground">{interview.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">
                        {new Date(interview.date).toLocaleDateString()} at {interview.time}
                      </span>
                      {interview.result === "passed" ? (
                        <Badge className="bg-green-100 text-green-700">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Passed
                        </Badge>
                      ) : (
                        <Badge variant="secondary">
                          <XCircle className="h-3 w-3 mr-1" />
                          Not Selected
                        </Badge>
                      )}
                      <Button size="sm" variant="outline">View Feedback</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
