'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FieldGroup, FieldLabel } from '@/components/ui/field'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CheckCircle2 } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  location: string
  bio: string
  website?: string
  company?: string
  title?: string
}

export default function EditProfilePage() {
  const { user } = useAuth()
  const [formData, setFormData] = useState<FormData>({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    location: user?.location || '',
    bio: user?.bio || '',
    website: user?.website || '',
    company: user?.company || '',
    title: user?.title || '',
  })
  const [isSaving, setIsSaving] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (formData.email.trim() && !formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.location.trim()) newErrors.location = 'Location is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const handleSave = async () => {
    if (!validateForm()) return

    setIsSaving(true)
    await new Promise(resolve => setTimeout(resolve, 800))
    setIsSaving(false)
    
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <div className="max-w-2xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-1">Edit Profile</h1>
        <p className="text-muted-foreground">Update your personal information and preferences</p>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
          <p className="text-sm text-green-700">Profile updated successfully!</p>
        </div>
      )}

      {/* Profile Card */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Avatar Section */}
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src="" alt={formData.name} />
              <AvatarFallback className="text-xl">
                {formData.name
                  .split(' ')
                  .slice(0, 2)
                  .map(n => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
            <Button variant="outline">Change Photo</Button>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <FieldGroup>
              <FieldLabel htmlFor="name">Full Name *</FieldLabel>
              <Input
                id="name"
                value={formData.name}
                onChange={e => handleChange('name', e.target.value)}
                className={errors.name ? 'border-red-500' : ''}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
            </FieldGroup>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FieldGroup>
                <FieldLabel htmlFor="email">Email *</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={e => handleChange('email', e.target.value)}
                  className={errors.email ? 'border-red-500' : ''}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </FieldGroup>

              <FieldGroup>
                <FieldLabel htmlFor="phone">Phone *</FieldLabel>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={e => handleChange('phone', e.target.value)}
                  className={errors.phone ? 'border-red-500' : ''}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone}</p>
                )}
              </FieldGroup>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FieldGroup>
                <FieldLabel htmlFor="location">Location *</FieldLabel>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={e => handleChange('location', e.target.value)}
                  className={errors.location ? 'border-red-500' : ''}
                  placeholder="San Francisco, CA"
                />
                {errors.location && (
                  <p className="text-sm text-red-500">{errors.location}</p>
                )}
              </FieldGroup>

              <FieldGroup>
                <FieldLabel htmlFor="website">Website</FieldLabel>
                <Input
                  id="website"
                  value={formData.website || ''}
                  onChange={e => handleChange('website', e.target.value)}
                  placeholder="https://example.com"
                />
              </FieldGroup>
            </div>

            {formData.title !== undefined && (
              <FieldGroup>
                <FieldLabel htmlFor="title">Job Title</FieldLabel>
                <Input
                  id="title"
                  value={formData.title || ''}
                  onChange={e => handleChange('title', e.target.value)}
                  placeholder="e.g., Senior Developer"
                />
              </FieldGroup>
            )}

            {formData.company !== undefined && (
              <FieldGroup>
                <FieldLabel htmlFor="company">Company</FieldLabel>
                <Input
                  id="company"
                  value={formData.company || ''}
                  onChange={e => handleChange('company', e.target.value)}
                  placeholder="e.g., Your Company"
                />
              </FieldGroup>
            )}

            <FieldGroup>
              <FieldLabel htmlFor="bio">Bio</FieldLabel>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={e => handleChange('bio', e.target.value)}
                placeholder="Tell us about yourself..."
                className="min-h-[120px] resize-none"
              />
            </FieldGroup>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 border-t pt-6">
            <Button variant="outline">Cancel</Button>
            <Button
              onClick={handleSave}
              disabled={isSaving}
              className="bg-[var(--color-blue-600)] hover:bg-[var(--color-blue-700)]"
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
