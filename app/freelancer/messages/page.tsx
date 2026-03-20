"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Send, Paperclip, MoreVertical } from "lucide-react"

const mockConversations = [
  {
    id: "1",
    name: "Acme Corp",
    role: "HR Team",
    avatar: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=80&h=80&fit=crop",
    lastMessage: "We'd love to schedule an interview with you!",
    timestamp: "10:30 AM",
    unread: 2,
  },
  {
    id: "2",
    name: "TechStart Inc",
    role: "Hiring Manager",
    avatar: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=80&h=80&fit=crop",
    lastMessage: "Your application has been reviewed.",
    timestamp: "Yesterday",
    unread: 0,
  },
  {
    id: "3",
    name: "Command Staffing",
    role: "Jennifer Smith",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
    lastMessage: "I have a new opportunity that matches your profile.",
    timestamp: "2 days ago",
    unread: 1,
  },
]

const mockMessages = [
  {
    id: "1",
    senderId: "company",
    text: "Hi Sarah, we've reviewed your application for the Senior CMS Developer position and are impressed with your background!",
    timestamp: "9:00 AM",
  },
  {
    id: "2",
    senderId: "freelancer",
    text: "Thank you for considering my application! I'm very excited about this opportunity.",
    timestamp: "9:15 AM",
  },
  {
    id: "3",
    senderId: "company",
    text: "Would you be available for a technical interview this week?",
    timestamp: "9:30 AM",
  },
  {
    id: "4",
    senderId: "company",
    text: "We'd love to schedule an interview with you!",
    timestamp: "10:30 AM",
  },
]

export default function FreelancerMessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(mockConversations[0])
  const [newMessage, setNewMessage] = useState("")

  return (
    <div className="h-[calc(100vh-140px)]">
      <div className="flex h-full gap-4">
        {/* Conversations List */}
        <Card className="w-80 flex flex-col">
          <div className="p-4 border-b">
            <h2 className="font-semibold mb-3">Messages</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search messages..." className="pl-9" />
            </div>
          </div>
          <div className="flex-1 overflow-auto">
            {mockConversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation)}
                className={`p-4 border-b cursor-pointer hover:bg-muted/50 transition-colors ${
                  selectedConversation.id === conversation.id ? "bg-muted" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <Avatar>
                    <AvatarImage src={conversation.avatar} alt={conversation.name} />
                    <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium truncate">{conversation.name}</h3>
                      <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{conversation.role}</p>
                    <p className="text-sm text-muted-foreground truncate mt-1">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unread > 0 && (
                    <Badge className="bg-blue-600 text-white h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                      {conversation.unread}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Chat Window */}
        <Card className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={selectedConversation.avatar} alt={selectedConversation.name} />
                <AvatarFallback>{selectedConversation.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">{selectedConversation.name}</h3>
                <p className="text-sm text-muted-foreground">{selectedConversation.role}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-auto p-4 space-y-4">
            {mockMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.senderId === "freelancer" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.senderId === "freelancer"
                      ? "bg-blue-600 text-white"
                      : "bg-muted"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.senderId === "freelancer" ? "text-blue-100" : "text-muted-foreground"
                  }`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Input 
                placeholder="Type a message..." 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1"
              />
              <Button>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
