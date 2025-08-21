import { useState } from "react";
import { FileText, Plus, Search, Edit, Eye, Download, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Invoice = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const invoices = [
    {
      id: "INV-2024-001",
      clientName: "Sarah Johnson",
      clientId: "CLI-001",
      date: "2024-01-15",
      dueDate: "2024-02-15",
      status: "paid",
      items: [
        { description: "Support Coordination - Week 1", quantity: 5, rate: 150.00, total: 750.00 },
        { description: "Travel Allowance", quantity: 2, rate: 45.00, total: 90.00 }
      ],
      subtotal: 840.00,
      gst: 84.00,
      total: 924.00
    },
    {
      id: "INV-2024-002",
      clientName: "Michael Chen",
      clientId: "CLI-002",
      date: "2024-01-10",
      dueDate: "2024-02-10",
      status: "sent",
      items: [
        { description: "Core Support Services", quantity: 8, rate: 85.00, total: 680.00 },
        { description: "Equipment Maintenance", quantity: 1, rate: 120.00, total: 120.00 }
      ],
      subtotal: 800.00,
      gst: 80.00,
      total: 880.00
    },
    {
      id: "INV-2024-003",
      clientName: "Emma Wilson",
      clientId: "CLI-003",
      date: "2024-01-08",
      dueDate: "2024-02-08",
      status: "overdue",
      items: [
        { description: "Capacity Building Sessions", quantity: 6, rate: 95.00, total: 570.00 },
        { description: "Resource Materials", quantity: 1, rate: 45.00, total: 45.00 }
      ],
      subtotal: 615.00,
      gst: 61.50,
      total: 676.50
    }
  ];

  const filteredInvoices = invoices.filter(invoice => 
    invoice.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    invoice.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'default';
      case 'sent': return 'secondary';
      case 'overdue': return 'destructive';
      default: return 'secondary';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Invoice Management</h1>
          <p className="text-muted-foreground">Record keeping and management of invoices</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Invoice
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Outstanding</CardTitle>
            <FileText className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">$1,556.50</div>
            <p className="text-xs text-muted-foreground">2 overdue invoices</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Paid This Month</CardTitle>
            <Calendar className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">$2,480.50</div>
            <p className="text-xs text-muted-foreground">8 invoices paid</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$880.00</div>
            <p className="text-xs text-muted-foreground">1 invoice sent</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Invoices</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">This year</p>
          </CardContent>
        </Card>
      </div>

      {/* Invoice List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Invoice Records
          </CardTitle>
          <CardDescription>Detailed invoice tracking and management</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search invoices by client name or invoice ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {filteredInvoices.map((invoice) => (
              <Card key={invoice.id} className="p-0">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{invoice.id}</h3>
                      <p className="text-sm text-muted-foreground">
                        Client: {invoice.clientName} ({invoice.clientId})
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Date: {invoice.date} • Due: {invoice.dueDate}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-lg font-bold">${invoice.total.toFixed(2)}</p>
                        <Badge variant={getStatusColor(invoice.status)}>
                          {invoice.status}
                        </Badge>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">Qty</TableHead>
                        <TableHead className="text-right">Rate</TableHead>
                        <TableHead className="text-right">Total</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {invoice.items.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.description}</TableCell>
                          <TableCell className="text-right">{item.quantity}</TableCell>
                          <TableCell className="text-right">${item.rate.toFixed(2)}</TableCell>
                          <TableCell className="text-right">${item.total.toFixed(2)}</TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell colSpan={3} className="text-right font-medium">Subtotal:</TableCell>
                        <TableCell className="text-right">${invoice.subtotal.toFixed(2)}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell colSpan={3} className="text-right font-medium">GST (10%):</TableCell>
                        <TableCell className="text-right">${invoice.gst.toFixed(2)}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell colSpan={3} className="text-right font-bold">Total:</TableCell>
                        <TableCell className="text-right font-bold">${invoice.total.toFixed(2)}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-6">
            <Button variant="outline">Load More Invoices</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Invoice;