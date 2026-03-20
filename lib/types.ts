// User roles
export type UserRole = "staffing-manager" | "customer" | "freelancer"

// User type
export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
  title?: string
  company?: string
}

// Freelancer/Candidate type
export interface Candidate {
  id: string
  name: string
  title: string
  avatar: string
  rating: number
  reviewCount: number
  skills: string[]
  experience: string
  rate: string
  availability: string
  availabilityStatus: "immediate" | "weeks" | "unavailable"
  location: string
  badges: {
    type: "certified" | "freelancer" | "verified" | "mvp" | "agency"
    label: string
  }[]
  description: string
}

// Job type
export interface Job {
  id: string
  title: string
  company: string
  location: string
  type: "Full-time" | "Part-time" | "Contract" | "Remote"
  salary: string
  postedDate: string
  applicants: number
  status: "active" | "paused" | "closed"
  description: string
  skills: string[]
}

// Interview type
export interface Interview {
  id: string
  candidateId: string
  candidateName: string
  candidateAvatar: string
  candidateTitle: string
  jobTitle: string
  date: string
  time: string
  duration: string
  type: "video" | "phone" | "in-person"
  status: "scheduled" | "completed" | "cancelled"
  notes?: string
}

// Timesheet type
export interface Timesheet {
  id: string
  freelancerId: string
  freelancerName: string
  freelancerAvatar: string
  weekEnding: string
  hoursWorked: number
  rate: number
  total: number
  status: "pending" | "approved" | "rejected"
  project: string
}

// Training type
export interface Training {
  id: string
  title: string
  category: string
  duration: string
  completedBy: number
  status: "completed" | "in-progress" | "not-started"
  dueDate?: string
}

// Invoice type
export interface Invoice {
  id: string
  invoiceNumber: string
  clientName: string
  amount: number
  status: "paid" | "pending" | "overdue"
  dueDate: string
  issuedDate: string
}

// Message type
export interface Message {
  id: string
  senderId: string
  senderName: string
  senderAvatar: string
  content: string
  timestamp: string
  read: boolean
}

// Notification type
export interface Notification {
  id: string
  type: "interview" | "message" | "application" | "timesheet" | "system"
  title: string
  description: string
  timestamp: string
  read: boolean
}

// Stats type for dashboard cards
export interface DashboardStat {
  label: string
  value: string | number
  icon: string
  trend?: {
    value: number
    direction: "up" | "down"
  }
  subLabel?: string
}

// Position breakdown for right sidebar
export interface PositionBreakdown {
  position: string
  count: number
  color: string
}
