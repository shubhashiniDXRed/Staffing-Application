"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { 
  Plus, 
  Trash2, 
  GripVertical, 
  FileText, 
  Download, 
  Eye,
  Briefcase,
  GraduationCap,
  Award,
  Code
} from "lucide-react"

export default function FreelancerResumePage() {
  const [skills, setSkills] = useState(["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"])
  const [newSkill, setNewSkill] = useState("")

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()])
      setNewSkill("")
    }
  }

  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Resume Builder</h1>
          <p className="text-muted-foreground">Build and customize your professional resume</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export PDF
          </Button>
          <Button>
            <FileText className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Professional Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Professional Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea 
                placeholder="Write a brief summary of your professional background and career objectives..."
                className="min-h-[120px]"
                defaultValue="Experienced full-stack developer with 8+ years of expertise in building scalable web applications. Specialized in React, Node.js, and cloud technologies. Passionate about clean code and delivering exceptional user experiences."
              />
            </CardContent>
          </Card>

          {/* Work Experience */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Work Experience
              </CardTitle>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-1" />
                Add Position
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Experience Item */}
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab" />
                    <div>
                      <Input defaultValue="Senior Full-Stack Developer" className="font-medium border-0 p-0 h-auto text-base" />
                      <div className="flex gap-2 mt-1">
                        <Input defaultValue="TechCorp Inc." className="text-sm text-muted-foreground border-0 p-0 h-auto w-32" />
                        <span className="text-muted-foreground">|</span>
                        <Input defaultValue="2021 - Present" className="text-sm text-muted-foreground border-0 p-0 h-auto w-28" />
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <Textarea 
                  defaultValue="Led development of microservices architecture serving 1M+ users. Mentored junior developers and established coding standards."
                  className="text-sm"
                  rows={2}
                />
              </div>

              {/* Experience Item 2 */}
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab" />
                    <div>
                      <Input defaultValue="Full-Stack Developer" className="font-medium border-0 p-0 h-auto text-base" />
                      <div className="flex gap-2 mt-1">
                        <Input defaultValue="StartupXYZ" className="text-sm text-muted-foreground border-0 p-0 h-auto w-32" />
                        <span className="text-muted-foreground">|</span>
                        <Input defaultValue="2018 - 2021" className="text-sm text-muted-foreground border-0 p-0 h-auto w-28" />
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <Textarea 
                  defaultValue="Built and maintained customer-facing applications. Implemented CI/CD pipelines and improved deployment efficiency by 60%."
                  className="text-sm"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Education
              </CardTitle>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-1" />
                Add Education
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab" />
                    <div>
                      <Input defaultValue="Bachelor of Science in Computer Science" className="font-medium border-0 p-0 h-auto text-base" />
                      <div className="flex gap-2 mt-1">
                        <Input defaultValue="University of Technology" className="text-sm text-muted-foreground border-0 p-0 h-auto w-40" />
                        <span className="text-muted-foreground">|</span>
                        <Input defaultValue="2014 - 2018" className="text-sm text-muted-foreground border-0 p-0 h-auto w-28" />
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Code className="h-5 w-5" />
                Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input 
                  placeholder="Add a skill..." 
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                />
                <Button onClick={addSkill} size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground transition-colors"
                    onClick={() => removeSkill(skill)}
                  >
                    {skill}
                    <Trash2 className="h-3 w-3 ml-1" />
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Award className="h-5 w-5" />
                Certifications
              </CardTitle>
              <Button variant="ghost" size="sm">
                <Plus className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 border rounded-lg">
                <p className="font-medium text-sm">AWS Solutions Architect</p>
                <p className="text-xs text-muted-foreground">Amazon Web Services | 2023</p>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="font-medium text-sm">Optimizely Certified Developer</p>
                <p className="text-xs text-muted-foreground">Optimizely | 2022</p>
              </div>
            </CardContent>
          </Card>

          {/* Resume Completeness */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Resume Strength</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Completeness</span>
                  <span className="font-medium">85%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }} />
                </div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                    Add portfolio links
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                    Add more certifications
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
