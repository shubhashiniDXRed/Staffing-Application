'use client'

import { useState } from 'react'
import { X, Save } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { FieldGroup, FieldLabel } from '@/components/ui/field'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface EditProfileModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (data: ProfileFormData) => void
  initialData: ProfileFormData
  userRole?: 'staffing' | 'customer' | 'freelancer'
}

export interface ProfileFormData {
  name: string
  email: string
  phone: string
  location: string
  bio: string
  website?: string
  company?: string
  title?: string
}

export function EditProfileModal({
  isOpen,
  onClose,
  onSave,
  initialData,
  userRole = 'freelancer',
}: EditProfileModalProps) {
  const [formData, setFormData] = useState<ProfileFormData>(initialData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSaving, setIsSaving] = useState(false)

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

  const handleChange = (
    field: keyof ProfileFormData,
    value: string
  ) => {
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
    await new Promise(resolve => setTimeout(resolve, 500))
    
    onSave(formData)
    setIsSaving(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>Edit Profile</DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-6 w-6 p-0"
          >
            <X className="w-4 h-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-6">
          {/* Profile Picture Section */}
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="" alt={formData.name} />
              <AvatarFallback className="text-lg">
                {formData.name
                  .split(' ')
                  .map(n => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
            <Button variant="outline" size="sm">
              Change Photo
            </Button>
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

            <div className="grid grid-cols-2 gap-4">
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

            <div className="grid grid-cols-2 gap-4">
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

              {formData.website !== undefined && (
                <FieldGroup>
                  <FieldLabel htmlFor="website">Website</FieldLabel>
                  <Input
                    id="website"
                    value={formData.website || ''}
                    onChange={e => handleChange('website', e.target.value)}
                    placeholder="https://example.com"
                  />
                </FieldGroup>
              )}
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
                className="min-h-[100px] resize-none"
              />
            </FieldGroup>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 border-t pt-4">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={isSaving}
              className="bg-[var(--color-blue-600)] hover:bg-[var(--color-blue-700)]"
            >
              {isSaving ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
