import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Download, 
  CreditCard, 
  Calendar, 
  DollarSign,
  CheckCircle,
  Clock,
  AlertCircle,
  Plus,
  Eye
} from "lucide-react";

const invoices = [
  {
    id: "INV-2024-001",
    date: "2024-11-15",
    amount: 2450.00,
    status: "paid",
    dueDate: "2024-11-30",
    services: ["Home Care Nursing", "Physical Therapy", "Medication Management", "Telehealth Monitoring"]
  },
  {
    id: "INV-2024-002",
    date: "2024-10-15",
    amount: 2450.00,
    status: "paid",
    dueDate: "2024-10-30",
    services: ["Home Care Nursing", "Physical Therapy", "Medication Management", "Telehealth Monitoring"]
  },
  {
    id: "INV-2024-003",
    date: "2024-09-15",
    amount: 2200.00,
    status: "paid",
    dueDate: "2024-09-30",
    services: ["Home Care Nursing", "Physical Therapy", "Medication Management"]
  }
];

const upcomingPayments = [
  {
    id: "UP-001",
    description: "Monthly Care Services",
    amount: 2450.00,
    dueDate: "2024-12-15",
    status: "scheduled",
    services: 4
  },
  {
    id: "UP-002",
    description: "Physical Therapy Co-pay",
    amount: 25.00,
    dueDate: "2024-12-20",
    status: "pending",
    services: 1
  }
];

const paymentMethods = [
  {
    id: "pm-001",
    type: "credit_card",
    brand: "visa",
    last4: "4242",
    expiryMonth: 12,
    expiryYear: 2026,
    isDefault: true
  },
  {
    id: "pm-002",
    type: "bank_account",
    bank: "Chase Bank",
    last4: "1234",
    isDefault: false
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "paid":
      return <CheckCircle className="w-4 h-4 text-healthcare-success" />;
    case "pending":
      return <Clock className="w-4 h-4 text-healthcare-warning" />;
    case "overdue":
      return <AlertCircle className="w-4 h-4 text-healthcare-urgent" />;
    default:
      return <Clock className="w-4 h-4 text-muted-foreground" />;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "paid":
      return <Badge className="bg-healthcare-success/10 text-healthcare-success border-healthcare-success/20">Paid</Badge>;
    case "pending":
      return <Badge className="bg-healthcare-warning/10 text-healthcare-warning border-healthcare-warning/20">Pending</Badge>;
    case "overdue":
      return <Badge className="bg-healthcare-urgent/10 text-healthcare-urgent border-healthcare-urgent/20">Overdue</Badge>;
    case "scheduled":
      return <Badge className="bg-healthcare-info/10 text-healthcare-info border-healthcare-info/20">Scheduled</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export default function Billing() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Billing & Payments</h1>
          <p className="text-muted-foreground">
            Manage your invoices, payments, and billing preferences
          </p>
        </div>
        <Button className="bg-gradient-primary">
          <Download className="w-4 h-4 mr-2" />
          Download Statement
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="healthcare-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Current Balance</p>
                <p className="text-2xl font-bold">$0.00</p>
              </div>
              <CheckCircle className="w-8 h-8 text-healthcare-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="healthcare-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Next Payment</p>
                <p className="text-2xl font-bold">$2,450</p>
              </div>
              <Calendar className="w-8 h-8 text-healthcare-info" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="healthcare-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">This Month</p>
                <p className="text-2xl font-bold">$2,450</p>
              </div>
              <DollarSign className="w-8 h-8 text-healthcare-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="healthcare-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">YTD Total</p>
                <p className="text-2xl font-bold">$27,250</p>
              </div>
              <DollarSign className="w-8 h-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="invoices" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="invoices">Recent Invoices</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Payments</TabsTrigger>
          <TabsTrigger value="methods">Payment Methods</TabsTrigger>
        </TabsList>

        {/* Invoices Tab */}
        <TabsContent value="invoices" className="space-y-4">
          <Card className="healthcare-card">
            <CardHeader>
              <CardTitle>Recent Invoices</CardTitle>
              <CardDescription>
                Your billing history and invoice details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between p-4 border border-border rounded-lg bg-background/50">
                  <div className="flex items-center gap-4">
                    {getStatusIcon(invoice.status)}
                    <div>
                      <h4 className="font-medium">{invoice.id}</h4>
                      <p className="text-sm text-muted-foreground">
                        {new Date(invoice.date).toLocaleDateString()} • {invoice.services.length} services
                      </p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {invoice.services.slice(0, 2).map((service, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                        {invoice.services.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{invoice.services.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-medium">${invoice.amount.toFixed(2)}</p>
                      {getStatusBadge(invoice.status)}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        PDF
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Upcoming Payments Tab */}
        <TabsContent value="upcoming" className="space-y-4">
          <Card className="healthcare-card">
            <CardHeader>
              <CardTitle>Upcoming Payments</CardTitle>
              <CardDescription>
                Scheduled payments and due dates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingPayments.map((payment) => (
                <div key={payment.id} className="flex items-center justify-between p-4 border border-border rounded-lg bg-background/50">
                  <div className="flex items-center gap-4">
                    <Calendar className="w-8 h-8 text-healthcare-info" />
                    <div>
                      <h4 className="font-medium">{payment.description}</h4>
                      <p className="text-sm text-muted-foreground">
                        Due: {new Date(payment.dueDate).toLocaleDateString()} • {payment.services} services
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-medium">${payment.amount.toFixed(2)}</p>
                      {getStatusBadge(payment.status)}
                    </div>
                    <Button variant="outline" size="sm">
                      Pay Now
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payment Methods Tab */}
        <TabsContent value="methods" className="space-y-4">
          <Card className="healthcare-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>
                    Manage your saved payment methods
                  </CardDescription>
                </div>
                <Button variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Method
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {paymentMethods.map((method) => (
                <div key={method.id} className="flex items-center justify-between p-4 border border-border rounded-lg bg-background/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-gradient-primary rounded flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">
                        {method.type === 'credit_card' 
                          ? `${method.brand?.toUpperCase()} ****${method.last4}`
                          : `${method.bank} ****${method.last4}`
                        }
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {method.type === 'credit_card' 
                          ? `Expires ${method.expiryMonth}/${method.expiryYear}`
                          : 'Bank Account'
                        }
                      </p>
                    </div>
                    {method.isDefault && (
                      <Badge variant="secondary">Default</Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive">
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="healthcare-card bg-accent/50">
            <CardHeader>
              <CardTitle>Auto-Pay Settings</CardTitle>
              <CardDescription>
                Automatically pay your monthly care services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Automatic Payments</p>
                  <p className="text-sm text-muted-foreground">
                    Pay automatically on the 15th of each month
                  </p>
                </div>
                <Badge className="bg-healthcare-success/10 text-healthcare-success border-healthcare-success/20">
                  Enabled
                </Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}