"use client"

import { useState } from "react"
import { Edit2, MapPin, Mail, Phone, Globe, Star, Award, CheckCircle2, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const profile = {
  name: "Sarah Jenkins",
  title: "Senior CMS Developer",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  email: "sarah.jenkins@email.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  website: "sarahjenkins.dev",
  bio: "Experienced Optimizely CMS developer with expertise in CMS 12, headless implementations, and cloud deployments. Passionate about creating scalable and maintainable solutions.",
  rate: "$120/hr",
  availability: "Immediate",
  rating: 4.7,
  reviews: 23,
  skills: ["CMS 12", ".NET Core", "React", "Azure", "TypeScript", "Next.js", "Tailwind CSS", "PostgreSQL"],
  certifications: [
    { name: "Optimizely Certified Developer", issuer: "Optimizely", year: "2023" },
    { name: "Azure Solutions Architect", issuer: "Microsoft", year: "2022" },
  ],
  experience: [
    {
      title: "Senior CMS Developer",
      company: "TechCorp Solutions",
      period: "2021 - Present",
      description: "Lead developer for enterprise CMS implementations.",
    },
    {
      title: "CMS Developer",
      company: "Digital Agency Inc",
      period: "2018 - 2021",
      description: "Developed and maintained CMS solutions for various clients.",
    },
  ],
}

const skillColors = [
  "bg-blue-100 text-blue-700",
  "bg-purple-100 text-purple-700",
  "bg-green-100 text-green-700",
  "bg-orange-100 text-orange-700",
  "bg-cyan-100 text-cyan-700",
  "bg-pink-100 text-pink-700",
]

export default function FreelancerProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">My Profile</h1>
          <p className="text-sm text-muted-foreground">
            Manage your professional profile
          </p>
        </div>
        <Button onClick={() => setIsEditing(!isEditing)}>
          <Edit2 className="w-4 h-4 mr-2" />
          {isEditing ? "Save Changes" : "Edit Profile"}
        </Button>
      </div>

      {/* Profile Header Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col items-center">
              <Avatar className="w-32 h-32 mb-4">
                <AvatarImage src={profile.avatar} alt={profile.name} />
                <AvatarFallback className="text-2xl">
                  {profile.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              {isEditing && (
                <Button variant="outline" size="sm">Change Photo</Button>
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{profile.name}</h2>
                  <p className="text-lg text-muted-foreground">{profile.title}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(profile.rating)
                            ? "fill-amber-400 text-amber-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {profile.rating} ({profile.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>{profile.website}</span>
                </div>
              </div>

              <div className="flex gap-4 mb-4">
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  {profile.availability}
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  {profile.rate}
                </Badge>
              </div>

              <p className="text-muted-foreground">{profile.bio}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Skills</CardTitle>
          {isEditing && (
            <Button variant="outline" size="sm">
              <Plus className="w-4 h-4 mr-1" />
              Add Skill
            </Button>
          )}
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill, index) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className={`${skillColors[index % skillColors.length]} ${isEditing ? "pr-1" : ""}`}
              >
                {skill}
                {isEditing && (
                  <button className="ml-2 hover:text-red-500">
                    <Trash2 className="w-3 h-3" />
                  </button>
                )}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Certifications</CardTitle>
          {isEditing && (
            <Button variant="outline" size="sm">
              <Plus className="w-4 h-4 mr-1" />
              Add Certification
            </Button>
          )}
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {profile.certifications.map((cert, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer} - {cert.year}</p>
                </div>
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Experience */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Experience</CardTitle>
          {isEditing && (
            <Button variant="outline" size="sm">
              <Plus className="w-4 h-4 mr-1" />
              Add Experience
            </Button>
          )}
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {profile.experience.map((exp, index) => (
              <div key={index} className="relative pl-6 pb-6 last:pb-0 border-l-2 border-border last:border-transparent">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <div className="mb-1">
                  <h4 className="font-medium text-foreground">{exp.title}</h4>
                  <p className="text-sm text-primary">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                <p className="text-sm text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
