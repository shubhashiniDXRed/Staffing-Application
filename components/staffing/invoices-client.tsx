"use client"

import { useState } from "react"
import { FileText, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Invoice } from "@/lib/types"

const statusColors: Record<string, string> = {
  paid: "bg-green-100 text-green-700",
  pending: "bg-amber-100 text-amber-700",
  overdue: "bg-red-100 text-red-700",
}

export function InvoicesClient({ invoices }: { invoices: Invoice[] }) {
  const [filter, setFilter] = useState<"all" | "paid" | "pending" | "overdue">("all")

  const filtered = invoices.filter((inv) => filter === "all" || inv.status === filter)

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex gap-2">
        {(["all", "paid", "pending", "overdue"] as const).map((tab) => (
          <Button
            key={tab}
            variant={filter === tab ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Button>
        ))}
      </div>

      {/* Invoices Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">All Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Invoice</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Client</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Issued</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Due Date</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Amount</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((invoice) => (
                  <tr key={invoice.id} className="border-b border-border last:border-0">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-muted flex items-center justify-center">
                          <FileText className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <span className="font-medium text-foreground">{invoice.invoiceNumber}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{invoice.clientName}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">
                      {new Date(invoice.issuedDate).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">
                      {new Date(invoice.dueDate).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 text-sm font-medium text-foreground">${invoice.amount.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <Badge className={statusColors[invoice.status]}>
                        {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
