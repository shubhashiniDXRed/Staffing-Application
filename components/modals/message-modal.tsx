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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Recipient {
  name: string
  title?: string
  avatar?: string
}

interface MessageModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  recipient?: Recipient
  isBulk?: boolean
}

export function MessageModal({ open, onOpenChange, recipient, isBulk = false }: MessageModalProps) {
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
          <DialogTitle>{isBulk ? "Send Bulk Message" : "Send Message"}</DialogTitle>
          <DialogDescription>
            {isBulk 
              ? "Send a message to all selected candidates."
              : "Send a direct message to the candidate."
            }
          </DialogDescription>
        </DialogHeader>

        {recipient && !isBulk && (
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
            <Avatar className="w-10 h-10">
              <AvatarImage src={recipient.avatar} />
              <AvatarFallback>{recipient.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-foreground">{recipient.name}</p>
              {recipient.title && (
                <p className="text-sm text-muted-foreground">{recipient.title}</p>
              )}
            </div>
          </div>
        )}

        {isBulk && (
          <div className="p-3 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              This message will be sent to <span className="font-medium text-foreground">23 candidates</span>
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Subject</label>
            <Input placeholder="Enter message subject" required />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Message</label>
            <Textarea 
              placeholder="Type your message here..."
              className="min-h-[150px]"
              required
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
