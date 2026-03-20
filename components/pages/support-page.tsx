"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  MessageCircle, 
  FileQuestion, 
  Mail, 
  Phone, 
  Book,
  ExternalLink,
  Search,
  ChevronRight,
  Clock,
  CheckCircle2
} from "lucide-react"
import { Field, FieldLabel } from "@/components/ui/field"

const faqItems = [
  {
    question: "How do I update my profile?",
    answer: "Navigate to Settings > Profile to update your personal information, photo, and contact details.",
  },
  {
    question: "How do I schedule an interview?",
    answer: "Click the 'Schedule Interview' button on any candidate card or use the batch scheduling feature in Quick Actions.",
  },
  {
    question: "How are timesheets approved?",
    answer: "Timesheets submitted by freelancers appear in your Timesheets tab. Review hours and click Approve or Reject.",
  },
  {
    question: "How do I export candidate data?",
    answer: "Use the Export button on the Shortlisted Talent page to download candidate information as CSV or PDF.",
  },
]

const supportTickets = [
  {
    id: "TKT-001",
    subject: "Issue with interview scheduling",
    status: "open",
    createdAt: "2024-01-15",
  },
  {
    id: "TKT-002",
    subject: "Payment processing delay",
    status: "resolved",
    createdAt: "2024-01-10",
  },
]

export function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Help & Support</h1>
        <p className="text-muted-foreground">Get help with your account and find answers</p>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-xl font-semibold mb-2">How can we help you?</h2>
            <p className="text-muted-foreground mb-4">Search our knowledge base or browse common topics</p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search for help..." 
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="cursor-pointer hover:border-primary transition-colors">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-blue-100">
              <Book className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Documentation</h3>
              <p className="text-sm text-muted-foreground">Browse guides and tutorials</p>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:border-primary transition-colors">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-green-100">
              <MessageCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Live Chat</h3>
              <p className="text-sm text-muted-foreground">Chat with our support team</p>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:border-primary transition-colors">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-purple-100">
              <FileQuestion className="h-6 w-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Video Tutorials</h3>
              <p className="text-sm text-muted-foreground">Watch how-to videos</p>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Quick answers to common questions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">{item.question}</h4>
                <p className="text-sm text-muted-foreground">{item.answer}</p>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All FAQs
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Submit a Support Ticket</CardTitle>
            <CardDescription>Can't find what you're looking for? Contact us</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Field>
              <FieldLabel>Category</FieldLabel>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="account">Account Issues</SelectItem>
                  <SelectItem value="billing">Billing & Payments</SelectItem>
                  <SelectItem value="technical">Technical Support</SelectItem>
                  <SelectItem value="feature">Feature Request</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel>Subject</FieldLabel>
              <Input placeholder="Brief description of your issue" />
            </Field>
            <Field>
              <FieldLabel>Description</FieldLabel>
              <Textarea 
                placeholder="Please provide as much detail as possible..."
                className="min-h-[120px]"
              />
            </Field>
            <Button className="w-full">Submit Ticket</Button>
          </CardContent>
        </Card>
      </div>

      {/* Support Tickets */}
      <Card>
        <CardHeader>
          <CardTitle>Your Support Tickets</CardTitle>
          <CardDescription>Track the status of your requests</CardDescription>
        </CardHeader>
        <CardContent>
          {supportTickets.length > 0 ? (
            <div className="space-y-3">
              {supportTickets.map((ticket) => (
                <div key={ticket.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    {ticket.status === "open" ? (
                      <Clock className="h-5 w-5 text-amber-500" />
                    ) : (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    )}
                    <div>
                      <p className="font-medium">{ticket.subject}</p>
                      <p className="text-sm text-muted-foreground">
                        {ticket.id} • Created {new Date(ticket.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge 
                      variant={ticket.status === "open" ? "secondary" : "default"}
                      className={ticket.status === "resolved" ? "bg-green-100 text-green-700" : ""}
                    >
                      {ticket.status === "open" ? "Open" : "Resolved"}
                    </Badge>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <FileQuestion className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>No support tickets yet</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Us Directly</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 border rounded-lg">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Email Support</p>
                <a href="mailto:support@command.com" className="text-sm text-blue-600 hover:underline">
                  support@command.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 border rounded-lg">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Phone Support</p>
                <a href="tel:1-800-COMMAND" className="text-sm text-blue-600 hover:underline">
                  1-800-COMMAND (Mon-Fri, 9AM-6PM EST)
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
