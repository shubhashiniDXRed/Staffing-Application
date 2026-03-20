import Link from "next/link"
import { Users, Briefcase, Calendar, CheckCircle, TrendingUp, ArrowRight, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const stats = [
  {
    label: "Active Jobs",
    value: 5,
    icon: Briefcase,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    label: "Total Applicants",
    value: 85,
    icon: Users,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    trend: { value: 12, direction: "up" },
  },
  {
    label: "Interviews Scheduled",
    value: 8,
    icon: Calendar,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    label: "Hired This Month",
    value: 3,
    icon: CheckCircle,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
]

const topCandidates = [
  {
    name: "Sarah Jenkins",
    title: "Senior CMS Developer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
    rating: 4.7,
    match: 95,
  },
  {
    name: "David Kim",
    title: "Optimizely Architect",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    rating: 5.0,
    match: 92,
  },
  {
    name: "Emily Rodriguez",
    title: "Frontend Developer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    rating: 4.9,
    match: 88,
  },
]

const activeJobs = [
  {
    title: "Senior CMS Developer",
    applicants: 12,
    status: "active",
    posted: "5 days ago",
  },
  {
    title: "Frontend Developer",
    applicants: 28,
    status: "active",
    posted: "8 days ago",
  },
  {
    title: "Commerce Architect",
    applicants: 8,
    status: "active",
    posted: "10 days ago",
  },
]

export default function CustomerDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Customer Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here&apos;s your hiring overview.</p>
        </div>
        <Button asChild>
          <Link href="/customer/jobs/new">
            Post New Job
          </Link>
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-lg ${stat.iconBg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${stat.iconColor}`} />
                  </div>
                  {stat.trend && (
                    <div className="flex items-center gap-1 text-xs text-green-600">
                      <TrendingUp className="w-3 h-3" />
                      <span>+{stat.trend.value}%</span>
                    </div>
                  )}
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Candidates */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Top Matched Candidates</CardTitle>
            <Button variant="ghost" size="sm" asChild className="text-primary">
              <Link href="/customer/candidates">
                View All
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCandidates.map((candidate, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={candidate.avatar} />
                    <AvatarFallback>{candidate.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">{candidate.name}</p>
                    <p className="text-sm text-muted-foreground">{candidate.title}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="bg-green-100 text-green-700 mb-1">
                      {candidate.match}% Match
                    </Badge>
                    <p className="text-xs text-muted-foreground">{candidate.rating} stars</p>
                  </div>
                  <Button size="sm">View Profile</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Jobs */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Active Jobs</CardTitle>
            <Button variant="ghost" size="sm" asChild className="text-primary">
              <Link href="/customer/jobs">
                View All
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeJobs.map((job, index) => (
                <div key={index} className="p-3 rounded-lg border border-border">
                  <h4 className="font-medium text-foreground mb-2">{job.title}</h4>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{job.applicants} applicants</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{job.posted}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
