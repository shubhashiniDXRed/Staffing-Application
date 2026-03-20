"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Calendar, MessageCircle, Award, CheckCircle2 } from "lucide-react"
import type { Candidate } from "@/lib/types"

interface ViewProfileModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  candidate?: Candidate
}

const skillColors = [
  "bg-blue-100 text-blue-700",
  "bg-purple-100 text-purple-700",
  "bg-green-100 text-green-700",
  "bg-orange-100 text-orange-700",
]

const badgeIcons: Record<string, React.ReactNode> = {
  certified: <Award className="w-4 h-4 text-amber-500" />,
  verified: <CheckCircle2 className="w-4 h-4 text-green-500" />,
  mvp: <Award className="w-4 h-4 text-amber-500" />,
}

export function ViewProfileModal({ open, onOpenChange, candidate }: ViewProfileModalProps) {
  if (!candidate) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Candidate Profile</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header */}
          <div className="flex gap-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src={candidate.avatar} />
              <AvatarFallback className="text-xl">
                {candidate.name.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-foreground">{candidate.name}</h3>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(candidate.rating)
                          ? "fill-amber-400 text-amber-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">
                    ({candidate.rating})
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground mb-2">{candidate.title}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{candidate.location}</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-3 bg-muted/50 rounded-lg text-center">
              <p className="text-lg font-bold text-foreground">{candidate.experience}</p>
              <p className="text-sm text-muted-foreground">Experience</p>
            </div>
            <div className="p-3 bg-muted/50 rounded-lg text-center">
              <p className="text-lg font-bold text-foreground">{candidate.rate}</p>
              <p className="text-sm text-muted-foreground">Rate</p>
            </div>
            <div className="p-3 bg-muted/50 rounded-lg text-center">
              <Badge 
                variant="secondary" 
                className={candidate.availabilityStatus === "immediate" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}
              >
                {candidate.availability}
              </Badge>
              <p className="text-sm text-muted-foreground mt-1">Availability</p>
            </div>
          </div>

          {/* Badges */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">Credentials</h4>
            <div className="flex flex-wrap gap-2">
              {candidate.badges.map((badge, index) => (
                <Badge key={index} variant="outline" className="flex items-center gap-1">
                  {badgeIcons[badge.type]}
                  {badge.label}
                </Badge>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {candidate.skills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className={skillColors[index % skillColors.length]}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">About</h4>
            <p className="text-muted-foreground">{candidate.description}</p>
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-4 border-t border-border">
            <Button className="flex-1">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Interview
            </Button>
            <Button variant="outline" className="flex-1">
              <MessageCircle className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
