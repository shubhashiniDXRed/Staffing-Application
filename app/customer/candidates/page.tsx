"use client"

import { useState } from "react"
import { Search, Star, Calendar, Eye, MessageCircle, Award, CheckCircle2, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { mockCandidates, mockJobs } from "@/lib/mock-data"

const skillColors: Record<string, string> = {
  "CMS 12": "bg-blue-100 text-blue-700",
  ".NET Core": "bg-purple-100 text-purple-700",
  "React": "bg-cyan-100 text-cyan-700",
  "Azure": "bg-green-100 text-green-700",
  "Commerce": "bg-orange-100 text-orange-700",
  "Architecture": "bg-pink-100 text-pink-700",
  "DXP": "bg-indigo-100 text-indigo-700",
  "TypeScript": "bg-blue-100 text-blue-700",
  "Next.js": "bg-gray-100 text-gray-700",
  "Tailwind": "bg-teal-100 text-teal-700",
  "C#": "bg-violet-100 text-violet-700",
  "SQL Server": "bg-red-100 text-red-700",
}

const badgeIcons: Record<string, React.ReactNode> = {
  certified: <Award className="w-4 h-4 text-amber-500" />,
  freelancer: <Building2 className="w-4 h-4 text-gray-500" />,
  verified: <CheckCircle2 className="w-4 h-4 text-green-500" />,
  mvp: <Award className="w-4 h-4 text-amber-500" />,
  agency: <Building2 className="w-4 h-4 text-purple-500" />,
}

export default function CustomerCandidatesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedJob, setSelectedJob] = useState<string>("all")
  
  const filteredCandidates = mockCandidates.filter(candidate =>
    candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    candidate.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    candidate.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">Candidates</h1>
          <p className="text-sm text-muted-foreground">
            {filteredCandidates.length} candidates available
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name, title, or skill..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-10 pr-4 text-sm border border-border rounded-lg bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>
        <Select value={selectedJob} onValueChange={setSelectedJob}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by job" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Jobs</SelectItem>
            {mockJobs.map((job) => (
              <SelectItem key={job.id} value={job.id}>{job.title}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Candidates Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredCandidates.map((candidate) => (
          <Card key={candidate.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex gap-4">
                <Avatar className="w-16 h-16 rounded-lg">
                  <AvatarImage src={candidate.avatar} alt={candidate.name} />
                  <AvatarFallback className="rounded-lg">
                    {candidate.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground">{candidate.name}</h3>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < Math.floor(candidate.rating)
                                  ? "fill-amber-400 text-amber-400"
                                  : "fill-gray-200 text-gray-200"
                              }`}
                            />
                          ))}
                          <span className="text-xs text-muted-foreground ml-1">({candidate.rating})</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{candidate.title}</p>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={candidate.availabilityStatus === "immediate" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}
                    >
                      {candidate.availability}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {candidate.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className={`px-2 py-0.5 text-xs font-medium rounded-md ${skillColors[skill] || "bg-gray-100 text-gray-700"}`}
                      >
                        {skill}
                      </span>
                    ))}
                    {candidate.skills.length > 4 && (
                      <span className="px-2 py-0.5 text-xs text-muted-foreground">
                        +{candidate.skills.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span>{candidate.experience}</span>
                    <span>{candidate.rate}</span>
                    <span>{candidate.location}</span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    {candidate.badges.map((badge, index) => (
                      <div key={index} className="flex items-center gap-1 text-sm text-muted-foreground">
                        {badgeIcons[badge.type]}
                        <span>{badge.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      Schedule Interview
                    </Button>
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-1" />
                      View Profile
                    </Button>
                    <Button size="sm" variant="outline">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      Message
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
