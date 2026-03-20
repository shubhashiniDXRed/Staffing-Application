import { Plus, DollarSign, Clock, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { InvoicesClient } from "@/components/staffing/invoices-client"
import { mockInvoices } from "@/lib/mock-data"

export default function InvoicesPage() {
  const totalPaid = mockInvoices.filter((i) => i.status === "paid").reduce((acc, i) => acc + i.amount, 0)
  const totalPending = mockInvoices.filter((i) => i.status === "pending").reduce((acc, i) => acc + i.amount, 0)
  const totalOverdue = mockInvoices.filter((i) => i.status === "overdue").reduce((acc, i) => acc + i.amount, 0)

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">Invoices</h1>
          <p className="text-sm text-muted-foreground">{mockInvoices.length} total invoices</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Invoice
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">${totalPaid.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Paid</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <Clock className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">${totalPending.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Pending</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">${totalOverdue.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Overdue</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <InvoicesClient invoices={mockInvoices} />
    </div>
  )
}
