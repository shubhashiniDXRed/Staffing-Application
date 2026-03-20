import Link from "next/link"
import { Users, Star, Calendar, BadgeCheck, TrendingUp, Briefcase, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const stats = [
  {
    label: "Shortlisted Candidates",
    value: 23,
    icon: Users,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    sublabel: "Total",
  },
  {
    label: "Average Rating",
    value: "4.8",
    icon: Star,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    trend: { value: 4.6, direction: "up" },
  },
  {
    label: "Interviews to Schedule",
    value: 8,
    icon: Calendar,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    sublabel: "Pending",
  },
  {
    label: "Certified Professionals",
    value: 18,
    icon: BadgeCheck,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    sublabel: "Verified",
  },
]

const recentActivity = [
  {
    type: "interview",
    title: "Interview scheduled with Sarah Jenkins",
    time: "2 hours ago",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
  },
  {
    type: "application",
    title: "David Kim accepted job offer",
    time: "4 hours ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
  },
  {
    type: "timesheet",
    title: "New timesheet submitted for approval",
    time: "6 hours ago",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
  },
]

const upcomingInterviews = [
  {
    candidate: "Sarah Jenkins",
    role: "Senior CMS Developer",
    date: "Jan 20",
    time: "10:00 AM",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
  },
  {
    candidate: "David Kim",
    role: "Optimizely Architect",
    date: "Jan 21",
    time: "2:00 PM",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
  },
]

export default function StaffingDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here&apos;s what&apos;s happening today.</p>
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
                  {stat.sublabel && (
                    <span className="text-xs text-muted-foreground">{stat.sublabel}</span>
                  )}
                  {stat.trend && (
                    <div className="flex items-center gap-1 text-xs text-green-600">
                      <TrendingUp className="w-3 h-3" />
                      <span>{stat.trend.value}</span>
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
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Recent Activity</CardTitle>
            <Button variant="ghost" size="sm" className="text-primary">
              View All
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={activity.avatar} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Interviews */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Upcoming Interviews</CardTitle>
            <Button variant="ghost" size="sm" asChild className="text-primary">
              <Link href="/staffing/interviews">
                View All
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingInterviews.map((interview, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={interview.avatar} />
                    <AvatarFallback>{interview.candidate[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{interview.candidate}</p>
                    <p className="text-xs text-muted-foreground">{interview.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">{interview.date}</p>
                    <p className="text-xs text-muted-foreground">{interview.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/staffing/jobs">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-foreground">My Jobs</p>
                <p className="text-sm text-muted-foreground">5 active positions</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/staffing/talent">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-foreground">Shortlisted Talent</p>
                <p className="text-sm text-muted-foreground">23 candidates</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/staffing/timesheets">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="font-medium text-foreground">Timesheets</p>
                <p className="text-sm text-muted-foreground">2 pending approval</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
