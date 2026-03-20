"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Send, Paperclip, MoreVertical, Users } from "lucide-react"
import { mockCandidates } from "@/lib/mock-data"

const mockConversations = [
  {
    id: "1",
    type: "candidate",
    name: mockCandidates[0].name,
    role: mockCandidates[0].title,
    avatar: mockCandidates[0].avatar,
    lastMessage: "I'm available for the interview next week.",
    timestamp: "10:30 AM",
    unread: 2,
  },
  {
    id: "2",
    type: "candidate",
    name: mockCandidates[1].name,
    role: mockCandidates[1].title,
    avatar: mockCandidates[1].avatar,
    lastMessage: "Thank you for considering me for the position.",
    timestamp: "Yesterday",
    unread: 0,
  },
  {
    id: "3",
    type: "customer",
    name: "Acme Corp",
    role: "Michael Chen - HR Director",
    avatar: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=80&h=80&fit=crop",
    lastMessage: "Can we discuss the new requirements?",
    timestamp: "2 days ago",
    unread: 1,
  },
]

const mockMessages = [
  {
    id: "1",
    senderId: "manager",
    text: "Hi Sarah, we have a great opportunity at Acme Corp that matches your profile perfectly!",
    timestamp: "9:00 AM",
  },
  {
    id: "2",
    senderId: "other",
    text: "That sounds exciting! Can you tell me more about the role?",
    timestamp: "9:15 AM",
  },
  {
    id: "3",
    senderId: "manager",
    text: "It's a Senior CMS Developer position. They need expertise in Optimizely CMS 12 and cloud deployments. $120-150/hr contract.",
    timestamp: "9:30 AM",
  },
  {
    id: "4",
    senderId: "other",
    text: "I'm available for the interview next week.",
    timestamp: "10:30 AM",
  },
]

export default function StaffingMessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(mockConversations[0])
  const [newMessage, setNewMessage] = useState("")
  const [filter, setFilter] = useState<"all" | "candidates" | "customers">("all")

  const filteredConversations = mockConversations.filter(c => {
    if (filter === "all") return true
    if (filter === "candidates") return c.type === "candidate"
    if (filter === "customers") return c.type === "customer"
    return true
  })

  return (
    <div className="h-[calc(100vh-140px)]">
      <div className="flex h-full gap-4">
        {/* Conversations List */}
        <Card className="w-80 flex flex-col">
          <div className="p-4 border-b">
            <h2 className="font-semibold mb-3">Messages</h2>
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search conversations..." className="pl-9" />
            </div>
            <div className="flex gap-2">
              <Button 
                variant={filter === "all" ? "default" : "outline"} 
                size="sm"
                onClick={() => setFilter("all")}
              >
                All
              </Button>
              <Button 
                variant={filter === "candidates" ? "default" : "outline"} 
                size="sm"
                onClick={() => setFilter("candidates")}
              >
                Candidates
              </Button>
              <Button 
                variant={filter === "customers" ? "default" : "outline"} 
                size="sm"
                onClick={() => setFilter("customers")}
              >
                Customers
              </Button>
            </div>
          </div>
          <div className="flex-1 overflow-auto">
            {filteredConversations.map((conversation) => (
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
                    <AvatarFallback>
                      {conversation.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium truncate">{conversation.name}</h3>
                        {conversation.type === "customer" && (
                          <Badge variant="outline" className="text-xs">Customer</Badge>
                        )}
                      </div>
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
                <AvatarFallback>
                  {selectedConversation.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{selectedConversation.name}</h3>
                  {selectedConversation.type === "customer" && (
                    <Badge variant="outline" className="text-xs">Customer</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{selectedConversation.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Users className="h-4 w-4 mr-2" />
                View Profile
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-auto p-4 space-y-4">
            {mockMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.senderId === "manager" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.senderId === "manager"
                      ? "bg-blue-600 text-white"
                      : "bg-muted"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.senderId === "manager" ? "text-blue-100" : "text-muted-foreground"
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
