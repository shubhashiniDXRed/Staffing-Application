"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { 
  Award, 
  Plus, 
  ExternalLink, 
  Calendar, 
  CheckCircle2,
  Clock,
  Upload,
  Trash2,
  Search
} from "lucide-react"
import { Field, FieldLabel } from "@/components/ui/field"

const mockCertifications = [
  {
    id: "1",
    name: "AWS Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    issueDate: "2023-06-15",
    expiryDate: "2026-06-15",
    credentialId: "AWS-SAP-2023-12345",
    status: "active",
    logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=80&h=80&fit=crop",
  },
  {
    id: "2",
    name: "Optimizely Certified Developer",
    issuer: "Optimizely",
    issueDate: "2022-09-20",
    expiryDate: null,
    credentialId: "OCD-2022-78901",
    status: "active",
    logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=80&h=80&fit=crop",
  },
  {
    id: "3",
    name: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    issueDate: "2021-03-10",
    expiryDate: "2024-03-10",
    credentialId: "GCP-PDE-2021-45678",
    status: "expiring",
    logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=80&h=80&fit=crop",
  },
  {
    id: "4",
    name: "Certified Kubernetes Administrator",
    issuer: "CNCF",
    issueDate: "2020-11-05",
    expiryDate: "2023-11-05",
    credentialId: "CKA-2020-11223",
    status: "expired",
    logo: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=80&h=80&fit=crop",
  },
]

const recommendedCertifications = [
  {
    name: "Azure Solutions Architect Expert",
    issuer: "Microsoft",
    relevance: "High demand in your field",
  },
  {
    name: "Terraform Associate",
    issuer: "HashiCorp",
    relevance: "Complements your cloud skills",
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    relevance: "Based on your experience",
  },
]

export default function FreelancerCertificationsPage() {
  const [addModalOpen, setAddModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const activeCount = mockCertifications.filter(c => c.status === "active").length
  const expiringCount = mockCertifications.filter(c => c.status === "expiring").length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Certifications</h1>
          <p className="text-muted-foreground">Manage your professional certifications</p>
        </div>
        <Dialog open={addModalOpen} onOpenChange={setAddModalOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Certification
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Certification</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <Field>
                <FieldLabel>Certification Name</FieldLabel>
                <Input placeholder="e.g., AWS Solutions Architect" />
              </Field>
              <Field>
                <FieldLabel>Issuing Organization</FieldLabel>
                <Input placeholder="e.g., Amazon Web Services" />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel>Issue Date</FieldLabel>
                  <Input type="date" />
                </Field>
                <Field>
                  <FieldLabel>Expiry Date (Optional)</FieldLabel>
                  <Input type="date" />
                </Field>
              </div>
              <Field>
                <FieldLabel>Credential ID</FieldLabel>
                <Input placeholder="Enter credential ID" />
              </Field>
              <Field>
                <FieldLabel>Certificate File</FieldLabel>
                <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors">
                  <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Drag and drop or click to upload
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    PDF, PNG or JPG (max 5MB)
                  </p>
                </div>
              </Field>
              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline" onClick={() => setAddModalOpen(false)}>Cancel</Button>
                <Button onClick={() => setAddModalOpen(false)}>Add Certification</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100">
                <Award className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">{mockCertifications.length}</p>
                <p className="text-sm text-muted-foreground">Total</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-100">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">{activeCount}</p>
                <p className="text-sm text-muted-foreground">Active</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-100">
                <Clock className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">{expiringCount}</p>
                <p className="text-sm text-muted-foreground">Expiring Soon</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-100">
                <Award className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">Top 10%</p>
                <p className="text-sm text-muted-foreground">Profile Rank</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Certifications List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search certifications..." 
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {mockCertifications.map((cert) => (
            <Card key={cert.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <img 
                      src={cert.logo} 
                      alt={cert.issuer}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-medium">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          Issued: {new Date(cert.issueDate).toLocaleDateString()}
                        </span>
                        {cert.expiryDate && (
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            Expires: {new Date(cert.expiryDate).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Credential ID: {cert.credentialId}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={
                        cert.status === "active" ? "default" :
                        cert.status === "expiring" ? "secondary" : "destructive"
                      }
                      className={
                        cert.status === "active" ? "bg-green-100 text-green-700" :
                        cert.status === "expiring" ? "bg-amber-100 text-amber-700" : ""
                      }
                    >
                      {cert.status === "active" ? "Active" :
                       cert.status === "expiring" ? "Expiring Soon" : "Expired"}
                    </Badge>
                    <Button variant="ghost" size="icon">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recommended Certifications */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recommended for You</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recommendedCertifications.map((cert, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <h4 className="font-medium text-sm">{cert.name}</h4>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-blue-600 mt-1">{cert.relevance}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Expiring Soon Alert */}
          {expiringCount > 0 && (
            <Card className="border-amber-200 bg-amber-50">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-amber-800">Renewal Reminder</h4>
                    <p className="text-sm text-amber-700 mt-1">
                      {expiringCount} certification{expiringCount > 1 ? 's' : ''} expiring soon. Consider renewing to maintain your profile strength.
                    </p>
                    <Button size="sm" variant="outline" className="mt-2">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
