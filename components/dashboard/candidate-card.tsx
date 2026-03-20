import { Star, Calendar, Eye, MessageCircle, Award, Building2, CheckCircle2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface Skill {
  name: string
  color: string
}

interface Candidate {
  id: string
  name: string
  title: string
  avatar: string
  rating: number
  skills: Skill[]
  experience: string
  rate: string
  availability: string
  availabilityColor: string
  location: string
  badges: { icon: React.ReactNode; label: string }[]
  description: string
}

const skillColors: Record<string, string> = {
  blue: "bg-[var(--color-blue-50)] text-[var(--color-blue-600)]",
  purple: "bg-[#faf5ff] text-[#7e22ce]",
  cyan: "bg-[#ecfeff] text-[#0891b2]",
  green: "bg-[var(--color-green-50)] text-[var(--color-green-600)]",
  orange: "bg-[var(--color-orange-50)] text-[var(--color-orange-700)]",
  pink: "bg-[#fdf2f8] text-[#be185d]",
}

export function CandidateCard({ candidate }: { candidate: Candidate }) {
  return (
    <div className="p-5 bg-white border border-[var(--color-gray-200)] rounded-xl">
      <div className="flex gap-4">
        {/* Avatar */}
        <Avatar className="w-16 h-16 rounded-lg">
          <AvatarImage src={candidate.avatar} alt={candidate.name} />
          <AvatarFallback className="rounded-lg">{candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header Row */}
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-semibold text-[var(--color-gray-900)]">{candidate.name}</h3>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(candidate.rating)
                          ? "fill-[var(--color-yellow-400)] text-[var(--color-yellow-400)]"
                          : "fill-[var(--color-gray-200)] text-[var(--color-gray-200)]"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-[var(--color-gray-500)] ml-1">({candidate.rating})</span>
                </div>
              </div>
              <p className="text-sm text-[var(--color-gray-500)]">{candidate.title}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
              <Button className="bg-[var(--color-blue-600)] hover:bg-[var(--color-blue-700)] text-white">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Interview
              </Button>
              <Button variant="outline" className="border-[var(--color-gray-200)] text-[var(--color-gray-700)] hover:bg-[var(--color-gray-50)]">
                <Eye className="w-4 h-4 mr-2" />
                View Profile
              </Button>
              <Button variant="outline" className="border-[var(--color-gray-200)] text-[var(--color-gray-700)] hover:bg-[var(--color-gray-50)]">
                <MessageCircle className="w-4 h-4 mr-2" />
                Message
              </Button>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-3">
            {candidate.skills.map((skill, index) => (
              <span
                key={index}
                className={`px-2.5 py-1 text-xs font-medium rounded-md ${skillColors[skill.color] || skillColors.blue}`}
              >
                {skill.name}
              </span>
            ))}
          </div>

          {/* Stats Row */}
          <div className="flex gap-8 mb-3">
            <div>
              <p className="text-xs text-[var(--color-gray-500)]">Experience</p>
              <p className="text-sm font-medium text-[var(--color-gray-900)]">{candidate.experience}</p>
            </div>
            <div>
              <p className="text-xs text-[var(--color-gray-500)]">Rate</p>
              <p className="text-sm font-medium text-[var(--color-gray-900)]">{candidate.rate}</p>
            </div>
            <div>
              <p className="text-xs text-[var(--color-gray-500)]">Availability</p>
              <p className={`text-sm font-medium ${candidate.availabilityColor}`}>{candidate.availability}</p>
            </div>
            <div>
              <p className="text-xs text-[var(--color-gray-500)]">Location</p>
              <p className="text-sm font-medium text-[var(--color-gray-900)]">{candidate.location}</p>
            </div>
          </div>

          {/* Badges */}
          <div className="flex items-center gap-4 mb-3">
            {candidate.badges.map((badge, index) => (
              <div key={index} className="flex items-center gap-1.5 text-sm text-[var(--color-gray-500)]">
                {badge.icon}
                <span>{badge.label}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm text-[var(--color-gray-500)] leading-relaxed">
            {candidate.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function CandidateList() {
  const candidates: Candidate[] = [
    {
      id: "1",
      name: "Sarah Jenkins",
      title: "Senior CMS Developer",
      avatar: "/placeholder.svg?height=64&width=64&query=professional woman developer",
      rating: 4.7,
      skills: [
        { name: "CMS 12", color: "blue" },
        { name: ".NET Core", color: "purple" },
        { name: "React", color: "cyan" },
        { name: "Azure", color: "green" },
      ],
      experience: "8 years",
      rate: "$120/hr",
      availability: "Immediate",
      availabilityColor: "text-[var(--color-green-600)]",
      location: "Remote",
      badges: [
        { icon: <Award className="w-4 h-4 text-[var(--color-yellow-400)]" />, label: "OCP Certified" },
        { icon: <Building2 className="w-4 h-4 text-[var(--color-gray-500)]" />, label: "Freelancer" },
        { icon: <CheckCircle2 className="w-4 h-4 text-[var(--color-green-600)]" />, label: "Verified" },
      ],
      description: "Experienced Optimizely CMS developer with expertise in CMS 12, headless implementations, and cloud deployments.",
    },
    {
      id: "2",
      name: "David Kim",
      title: "Optimizely Architect",
      avatar: "/placeholder.svg?height=64&width=64&query=professional asian man architect",
      rating: 5.0,
      skills: [
        { name: "CMS 12", color: "blue" },
        { name: "Commerce", color: "orange" },
        { name: "Architecture", color: "purple" },
        { name: "DXP", color: "green" },
      ],
      experience: "12 years",
      rate: "$180/hr",
      availability: "2 weeks",
      availabilityColor: "text-[var(--color-orange-700)]",
      location: "Remote",
      badges: [
        { icon: <Award className="w-4 h-4 text-[var(--color-yellow-400)]" />, label: "MVP 2023" },
        { icon: <Building2 className="w-4 h-4 text-[#9333ea]" />, label: "DevSquad Agency" },
        { icon: <CheckCircle2 className="w-4 h-4 text-[var(--color-green-600)]" />, label: "Verified" },
      ],
      description: "Solutions architect specializing in enterprise Optimizely implementations. Led digital transformation projects for",
    },
  ]

  return (
    <div className="space-y-4">
      {candidates.map((candidate) => (
        <CandidateCard key={candidate.id} candidate={candidate} />
      ))}
    </div>
  )
}
