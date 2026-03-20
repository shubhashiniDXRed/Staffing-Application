"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SubmitTimesheetModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SubmitTimesheetModal({ open, onOpenChange }: SubmitTimesheetModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Submit Timesheet</DialogTitle>
          <DialogDescription>
            Enter your work hours for the week.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Project</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select project" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="acme">Acme Corp - CMS Migration</SelectItem>
                <SelectItem value="techstart">TechStart - Frontend Development</SelectItem>
                <SelectItem value="global">Global Retail - Commerce Platform</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Week Ending</label>
              <Input type="date" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Total Hours</label>
              <Input type="number" placeholder="40" min="0" max="168" required />
            </div>
          </div>

          <div className="p-4 bg-muted/50 rounded-lg space-y-2">
            <h4 className="text-sm font-medium text-foreground">Daily Breakdown (Optional)</h4>
            <div className="grid grid-cols-7 gap-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <div key={day} className="space-y-1">
                  <label className="text-xs text-muted-foreground">{day}</label>
                  <Input type="number" className="h-8 text-center" placeholder="8" min="0" max="24" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Notes (Optional)</label>
            <Textarea 
              placeholder="Add any notes about the work completed..."
              className="min-h-[80px]"
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Timesheet"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
