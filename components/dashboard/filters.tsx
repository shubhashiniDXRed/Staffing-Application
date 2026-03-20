"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Filters() {
  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <label className="block text-sm text-[#374151] mb-1.5">Position</label>
        <Select defaultValue="all">
          <SelectTrigger className="w-full bg-white border-[#e5e7eb]">
            <SelectValue placeholder="All Positions" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Positions</SelectItem>
            <SelectItem value="cms-developer">CMS Developer</SelectItem>
            <SelectItem value="commerce">Commerce</SelectItem>
            <SelectItem value="frontend">Frontend</SelectItem>
            <SelectItem value="architect">Architect</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1">
        <label className="block text-sm text-[#374151] mb-1.5">Skills</label>
        <Select defaultValue="all">
          <SelectTrigger className="w-full bg-white border-[#e5e7eb]">
            <SelectValue placeholder="All Skills" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Skills</SelectItem>
            <SelectItem value="cms-12">CMS 12</SelectItem>
            <SelectItem value="dotnet-core">.NET Core</SelectItem>
            <SelectItem value="react">React</SelectItem>
            <SelectItem value="azure">Azure</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1">
        <label className="block text-sm text-[#374151] mb-1.5">Availability</label>
        <Select defaultValue="all">
          <SelectTrigger className="w-full bg-white border-[#e5e7eb]">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="immediate">Immediate</SelectItem>
            <SelectItem value="1-week">1 Week</SelectItem>
            <SelectItem value="2-weeks">2 Weeks</SelectItem>
            <SelectItem value="1-month">1 Month</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1">
        <label className="block text-sm text-[#374151] mb-1.5">Rating</label>
        <Select defaultValue="all">
          <SelectTrigger className="w-full bg-white border-[#e5e7eb]">
            <SelectValue placeholder="All Ratings" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Ratings</SelectItem>
            <SelectItem value="5">5 Stars</SelectItem>
            <SelectItem value="4">4+ Stars</SelectItem>
            <SelectItem value="3">3+ Stars</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
