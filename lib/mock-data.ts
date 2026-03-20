import type {
  User,
  Candidate,
  Job,
  Interview,
  Timesheet,
  Training,
  Invoice,
  Notification,
  PositionBreakdown,
} from "./types"

// Mock Users
export const mockUsers: User[] = [
  {
    id: "1",
    name: "Jennifer Smith",
    email: "jennifer@command.com",
    role: "staffing-manager",
    avatar: "/avatars/jennifer.jpg",
    title: "Project Manager",
    company: "Command Staffing",
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "michael@acme.com",
    role: "customer",
    avatar: "/avatars/michael.jpg",
    title: "HR Director",
    company: "Acme Corp",
  },
  {
    id: "3",
    name: "Sarah Jenkins",
    email: "sarah@freelance.com",
    role: "freelancer",
    avatar: "/avatars/sarah.jpg",
    title: "Senior CMS Developer",
  },
]

// Mock Candidates
export const mockCandidates: Candidate[] = [
  {
    id: "1",
    name: "Sarah Jenkins",
    title: "Senior CMS Developer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 4.7,
    reviewCount: 23,
    skills: ["CMS 12", ".NET Core", "React", "Azure"],
    experience: "8 years",
    rate: "$120/hr",
    availability: "Immediate",
    availabilityStatus: "immediate",
    location: "Remote",
    badges: [
      { type: "certified", label: "OCP Certified" },
      { type: "freelancer", label: "Freelancer" },
      { type: "verified", label: "Verified" },
    ],
    description:
      "Experienced Optimizely CMS developer with expertise in CMS 12, headless implementations, and cloud deployments.",
  },
  {
    id: "2",
    name: "David Kim",
    title: "Optimizely Architect",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5.0,
    reviewCount: 18,
    skills: ["CMS 12", "Commerce", "Architecture", "DXP"],
    experience: "12 years",
    rate: "$180/hr",
    availability: "2 weeks",
    availabilityStatus: "weeks",
    location: "Remote",
    badges: [
      { type: "mvp", label: "MVP 2023" },
      { type: "agency", label: "DevSquad Agency" },
      { type: "verified", label: "Verified" },
    ],
    description:
      "Solutions architect specializing in enterprise Optimizely implementations. Led digital transformation projects for Fortune 500 companies.",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    title: "Frontend Developer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 4.9,
    reviewCount: 31,
    skills: ["React", "TypeScript", "Next.js", "Tailwind"],
    experience: "6 years",
    rate: "$95/hr",
    availability: "Immediate",
    availabilityStatus: "immediate",
    location: "New York, NY",
    badges: [
      { type: "verified", label: "Verified" },
      { type: "freelancer", label: "Freelancer" },
    ],
    description:
      "Frontend specialist with a passion for creating beautiful, accessible user interfaces. Expert in modern React ecosystem.",
  },
  {
    id: "4",
    name: "James Wilson",
    title: "Commerce Developer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 4.5,
    reviewCount: 15,
    skills: ["Commerce", "C#", ".NET", "SQL Server"],
    experience: "7 years",
    rate: "$130/hr",
    availability: "1 week",
    availabilityStatus: "weeks",
    location: "Remote",
    badges: [
      { type: "certified", label: "Certified" },
      { type: "verified", label: "Verified" },
    ],
    description:
      "E-commerce specialist with extensive experience in Optimizely Commerce implementations and custom integrations.",
  },
]

// Mock Jobs
export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior CMS Developer",
    company: "Acme Corp",
    location: "Remote",
    type: "Contract",
    salary: "$100-150/hr",
    postedDate: "2024-01-15",
    applicants: 12,
    status: "active",
    description: "Looking for an experienced CMS developer to lead our Optimizely implementation.",
    skills: ["CMS 12", ".NET Core", "React", "Azure"],
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "TechStart Inc",
    location: "New York, NY",
    type: "Full-time",
    salary: "$120,000-150,000",
    postedDate: "2024-01-12",
    applicants: 28,
    status: "active",
    description: "Join our team to build modern web applications using React and TypeScript.",
    skills: ["React", "TypeScript", "CSS", "Testing"],
  },
  {
    id: "3",
    title: "Commerce Architect",
    company: "Global Retail Co",
    location: "Chicago, IL",
    type: "Contract",
    salary: "$150-200/hr",
    postedDate: "2024-01-10",
    applicants: 8,
    status: "active",
    description: "Seeking a solutions architect for our e-commerce platform modernization.",
    skills: ["Commerce", "Architecture", "Cloud", "Integration"],
  },
  {
    id: "4",
    title: "Full Stack Developer",
    company: "Innovation Labs",
    location: "Remote",
    type: "Part-time",
    salary: "$80-100/hr",
    postedDate: "2024-01-08",
    applicants: 15,
    status: "paused",
    description: "Part-time role for a versatile developer comfortable with both frontend and backend.",
    skills: ["Node.js", "React", "PostgreSQL", "AWS"],
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "CloudFirst Solutions",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000-160,000",
    postedDate: "2024-01-05",
    applicants: 22,
    status: "active",
    description: "Help us build and maintain our cloud infrastructure and CI/CD pipelines.",
    skills: ["Azure", "Kubernetes", "Terraform", "CI/CD"],
  },
]

// Mock Interviews
export const mockInterviews: Interview[] = [
  {
    id: "1",
    candidateId: "1",
    candidateName: "Sarah Jenkins",
    candidateAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    candidateTitle: "Senior CMS Developer",
    jobTitle: "Senior CMS Developer",
    date: "2024-01-20",
    time: "10:00 AM",
    duration: "45 min",
    type: "video",
    status: "scheduled",
    notes: "Technical interview - focus on CMS 12 experience",
  },
  {
    id: "2",
    candidateId: "2",
    candidateName: "David Kim",
    candidateAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    candidateTitle: "Optimizely Architect",
    jobTitle: "Commerce Architect",
    date: "2024-01-21",
    time: "2:00 PM",
    duration: "60 min",
    type: "video",
    status: "scheduled",
    notes: "Architecture review session",
  },
  {
    id: "3",
    candidateId: "3",
    candidateName: "Emily Rodriguez",
    candidateAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    candidateTitle: "Frontend Developer",
    jobTitle: "Frontend Developer",
    date: "2024-01-19",
    time: "11:30 AM",
    duration: "30 min",
    type: "phone",
    status: "completed",
  },
]

// Mock Timesheets
export const mockTimesheets: Timesheet[] = [
  {
    id: "1",
    freelancerId: "1",
    freelancerName: "Sarah Jenkins",
    freelancerAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    weekEnding: "2024-01-19",
    hoursWorked: 40,
    rate: 120,
    total: 4800,
    status: "pending",
    project: "Acme Corp - CMS Migration",
  },
  {
    id: "2",
    freelancerId: "2",
    freelancerName: "David Kim",
    freelancerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    weekEnding: "2024-01-19",
    hoursWorked: 32,
    rate: 180,
    total: 5760,
    status: "approved",
    project: "Global Retail - Commerce Platform",
  },
]

// Mock Training
export const mockTraining: Training[] = [
  {
    id: "1",
    title: "Optimizely CMS 12 Fundamentals",
    category: "Technical",
    duration: "4 hours",
    completedBy: 156,
    status: "completed",
  },
  {
    id: "2",
    title: "Cloud Deployment Best Practices",
    category: "DevOps",
    duration: "2 hours",
    completedBy: 89,
    status: "in-progress",
    dueDate: "2024-02-01",
  },
  {
    id: "3",
    title: "Security Compliance Training",
    category: "Compliance",
    duration: "1 hour",
    completedBy: 234,
    status: "not-started",
    dueDate: "2024-01-31",
  },
]

// Mock Invoices
export const mockInvoices: Invoice[] = [
  {
    id: "1",
    invoiceNumber: "INV-2024-001",
    clientName: "Acme Corp",
    amount: 15600,
    status: "paid",
    dueDate: "2024-01-15",
    issuedDate: "2024-01-01",
  },
  {
    id: "2",
    invoiceNumber: "INV-2024-002",
    clientName: "TechStart Inc",
    amount: 8400,
    status: "pending",
    dueDate: "2024-01-30",
    issuedDate: "2024-01-15",
  },
  {
    id: "3",
    invoiceNumber: "INV-2024-003",
    clientName: "Global Retail Co",
    amount: 22500,
    status: "overdue",
    dueDate: "2024-01-10",
    issuedDate: "2023-12-27",
  },
]

// Mock Notifications
export const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "interview",
    title: "Interview Scheduled",
    description: "Interview with Sarah Jenkins scheduled for Jan 20 at 10:00 AM",
    timestamp: "2024-01-18T09:00:00Z",
    read: false,
  },
  {
    id: "2",
    type: "application",
    title: "New Application",
    description: "Emily Rodriguez applied for Frontend Developer position",
    timestamp: "2024-01-17T14:30:00Z",
    read: false,
  },
  {
    id: "3",
    type: "timesheet",
    title: "Timesheet Pending Approval",
    description: "Sarah Jenkins submitted timesheet for week ending Jan 19",
    timestamp: "2024-01-17T08:00:00Z",
    read: true,
  },
]

// Position breakdown for sidebar
export const positionBreakdown: PositionBreakdown[] = [
  { position: "CMS Developer", count: 8, color: "#3b82f6" },
  { position: "Commerce", count: 6, color: "#f59e0b" },
  { position: "Frontend", count: 5, color: "#22c55e" },
  { position: "Architect", count: 3, color: "#f97316" },
  { position: "Other", count: 1, color: "#6b7280" },
]

// Dashboard stats for staffing manager
export const staffingManagerStats = [
  {
    label: "Shortlisted Candidates",
    value: 23,
    icon: "users",
    subLabel: "Total",
  },
  {
    label: "Average Rating",
    value: 4.8,
    icon: "star",
    trend: { value: 4.6, direction: "up" as const },
  },
  {
    label: "Interviews to Schedule",
    value: 8,
    icon: "calendar",
    subLabel: "Pending",
  },
  {
    label: "Certified Professionals",
    value: 18,
    icon: "badge",
    subLabel: "Verified",
  },
]

// Dashboard stats for customer
export const customerStats = [
  {
    label: "Active Jobs",
    value: 5,
    icon: "briefcase",
  },
  {
    label: "Total Applicants",
    value: 85,
    icon: "users",
    trend: { value: 12, direction: "up" as const },
  },
  {
    label: "Interviews Scheduled",
    value: 8,
    icon: "calendar",
  },
  {
    label: "Hired This Month",
    value: 3,
    icon: "check",
  },
]

// Dashboard stats for freelancer
export const freelancerStats = [
  {
    label: "Active Applications",
    value: 4,
    icon: "file",
  },
  {
    label: "Interview Invites",
    value: 2,
    icon: "calendar",
  },
  {
    label: "Profile Views",
    value: 156,
    icon: "eye",
    trend: { value: 23, direction: "up" as const },
  },
  {
    label: "Messages",
    value: 8,
    icon: "message",
  },
]
