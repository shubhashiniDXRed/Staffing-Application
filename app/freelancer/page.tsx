import Link from "next/link"
import { FileText, Calendar, Eye, MessageSquare, TrendingUp, ArrowRight, Briefcase, DollarSign, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const stats = [
  {
    label: "Active Applications",
    value: 4,
    icon: FileText,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    label: "Interview Invites",
    value: 2,
    icon: Calendar,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    label: "Profile Views",
    value: 156,
    icon: Eye,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    trend: { value: 23, direction: "up" },
  },
  {
    label: "Messages",
    value: 8,
    icon: MessageSquare,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
]

const recommendedJobs = [
  {
    title: "Senior CMS Developer",
    company: "Acme Corp",
    location: "Remote",
    salary: "$100-150/hr",
    match: 95,
    posted: "2 days ago",
  },
  {
    title: "Frontend Developer",
    company: "TechStart Inc",
    location: "New York, NY",
    salary: "$120,000-150,000",
    match: 88,
    posted: "5 days ago",
  },
  {
    title: "Commerce Architect",
    company: "Global Retail Co",
    location: "Chicago, IL",
    salary: "$150-200/hr",
    match: 82,
    posted: "1 week ago",
  },
]

const recentActivity = [
  {
    type: "application",
    title: "Application sent to Senior CMS Developer",
    company: "Acme Corp",
    time: "2 hours ago",
    status: "pending",
  },
  {
    type: "interview",
    title: "Interview scheduled",
    company: "TechStart Inc",
    time: "1 day ago",
    status: "scheduled",
  },
  {
    type: "view",
    title: "Profile viewed by recruiter",
    company: "Global Retail Co",
    time: "2 days ago",
    status: "viewed",
  },
]

const statusColors: Record<string, string> = {
  pending: "bg-amber-100 text-amber-700",
  scheduled: "bg-blue-100 text-blue-700",
  viewed: "bg-purple-100 text-purple-700",
}

export default function FreelancerDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Freelancer Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Find your next opportunity.</p>
        </div>
        <Button asChild>
          <Link href="/freelancer/jobs">
            Browse Jobs
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
        {/* Recommended Jobs */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Recommended Jobs</CardTitle>
            <Button variant="ghost" size="sm" asChild className="text-primary">
              <Link href="/freelancer/jobs">
                View All
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendedJobs.map((job, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-medium text-foreground">{job.title}</h4>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        {job.match}% Match
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{job.company}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span>{job.location}</span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-3.5 h-3.5" />
                        {job.salary}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {job.posted}
                      </span>
                    </div>
                  </div>
                  <Button size="sm">Apply</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="p-3 rounded-lg bg-muted/50">
                  <div className="flex items-start justify-between mb-1">
                    <p className="text-sm font-medium text-foreground">{activity.title}</p>
                    <Badge className={statusColors[activity.status]}>
                      {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{activity.company}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/freelancer/profile">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="font-medium text-foreground">Update Profile</p>
                <p className="text-sm text-muted-foreground">Improve your visibility</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/freelancer/applications">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-foreground">My Applications</p>
                <p className="text-sm text-muted-foreground">4 active applications</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/freelancer/timesheets">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-foreground">Timesheets</p>
                <p className="text-sm text-muted-foreground">Submit your hours</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
