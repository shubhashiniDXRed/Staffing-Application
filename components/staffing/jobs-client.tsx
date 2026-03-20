"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, MoreVertical, MapPin, Clock, DollarSign, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { Job } from "@/lib/types"

const statusColors: Record<string, string> = {
  active: "bg-green-100 text-green-700",
  paused: "bg-amber-100 text-amber-700",
  closed: "bg-gray-100 text-gray-700",
}

export function JobsClient({ jobs }: { jobs: Job[] }) {
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-10 pl-10 pr-4 text-sm border border-border rounded-lg bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        />
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((job) => (
          <Card key={job.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{job.title}</h3>
                  <p className="text-sm text-muted-foreground">{job.company}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit Job</DropdownMenuItem>
                    <DropdownMenuItem>View Applicants</DropdownMenuItem>
                    <DropdownMenuItem>Pause Job</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Close Job</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className={statusColors[job.status]}>
                  {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                </Badge>
                <Badge variant="outline">{job.type}</Badge>
              </div>

              <div className="space-y-2 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{job.applicants} applicants</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Posted {new Date(job.postedDate).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {job.skills.slice(0, 3).map((skill) => (
                  <span key={skill} className="px-2 py-0.5 text-xs bg-muted rounded-md text-muted-foreground">
                    {skill}
                  </span>
                ))}
                {job.skills.length > 3 && (
                  <span className="px-2 py-0.5 text-xs text-muted-foreground">
                    +{job.skills.length - 3} more
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}
