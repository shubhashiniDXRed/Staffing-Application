"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Globe, 
  Palette,
  Camera,
  Mail,
  Phone
} from "lucide-react"
import { Field, FieldLabel } from "@/components/ui/field"
import { useAuth } from "@/lib/auth-context"

export function SettingsPage() {
  const { user } = useAuth()
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [marketingEmails, setMarketingEmails] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile" className="gap-2">
            <User className="h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-2">
            <Shield className="h-4 w-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="billing" className="gap-2">
            <CreditCard className="h-4 w-4" />
            Billing
          </TabsTrigger>
          <TabsTrigger value="preferences" className="gap-2">
            <Palette className="h-4 w-4" />
            Preferences
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal details and profile photo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar Section */}
              <div className="flex items-center gap-6">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback className="text-2xl">
                      {user?.name?.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <Button 
                    size="icon" 
                    variant="outline" 
                    className="absolute bottom-0 right-0 h-8 w-8 rounded-full"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <div>
                  <h3 className="font-medium">{user?.name}</h3>
                  <p className="text-sm text-muted-foreground">{user?.email}</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Change Photo
                  </Button>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel>First Name</FieldLabel>
                  <Input defaultValue={user?.name?.split(' ')[0]} />
                </Field>
                <Field>
                  <FieldLabel>Last Name</FieldLabel>
                  <Input defaultValue={user?.name?.split(' ')[1]} />
                </Field>
                <Field>
                  <FieldLabel className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Address
                  </FieldLabel>
                  <Input type="email" defaultValue={user?.email} />
                </Field>
                <Field>
                  <FieldLabel className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone Number
                  </FieldLabel>
                  <Input type="tel" placeholder="+1 (555) 000-0000" />
                </Field>
                <Field className="md:col-span-2">
                  <FieldLabel>Job Title</FieldLabel>
                  <Input defaultValue={user?.title} />
                </Field>
                <Field className="md:col-span-2">
                  <FieldLabel>Company</FieldLabel>
                  <Input defaultValue={user?.company} />
                </Field>
              </div>

              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose how you want to be notified</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Email Notifications</h4>
                  <p className="text-sm text-muted-foreground">Receive updates via email</p>
                </div>
                <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Push Notifications</h4>
                  <p className="text-sm text-muted-foreground">Receive push notifications in browser</p>
                </div>
                <Switch checked={pushNotifications} onCheckedChange={setPushNotifications} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Marketing Emails</h4>
                  <p className="text-sm text-muted-foreground">Receive tips and product updates</p>
                </div>
                <Switch checked={marketingEmails} onCheckedChange={setMarketingEmails} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your password and security options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Field>
                  <FieldLabel>Current Password</FieldLabel>
                  <Input type="password" />
                </Field>
                <Field>
                  <FieldLabel>New Password</FieldLabel>
                  <Input type="password" />
                </Field>
                <Field>
                  <FieldLabel>Confirm New Password</FieldLabel>
                  <Input type="password" />
                </Field>
              </div>
              <div className="flex justify-end">
                <Button>Update Password</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>Add an extra layer of security to your account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Enable 2FA</h4>
                  <p className="text-sm text-muted-foreground">Secure your account with two-factor authentication</p>
                </div>
                <Button variant="outline">Setup 2FA</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment options</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 border rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center text-white text-xs font-bold">
                    VISA
                  </div>
                  <div>
                    <p className="font-medium">Visa ending in 4242</p>
                    <p className="text-sm text-muted-foreground">Expires 12/25</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Edit</Button>
              </div>
              <Button variant="outline" className="mt-4">
                <CreditCard className="h-4 w-4 mr-2" />
                Add Payment Method
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Preferences Tab */}
        <TabsContent value="preferences" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Display Preferences</CardTitle>
              <CardDescription>Customize your experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium">Language</h4>
                    <p className="text-sm text-muted-foreground">Select your preferred language</p>
                  </div>
                </div>
                <select className="border rounded-md px-3 py-2 text-sm">
                  <option>English (US)</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Palette className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium">Theme</h4>
                    <p className="text-sm text-muted-foreground">Choose your color theme</p>
                  </div>
                </div>
                <select className="border rounded-md px-3 py-2 text-sm">
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System</option>
                </select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
