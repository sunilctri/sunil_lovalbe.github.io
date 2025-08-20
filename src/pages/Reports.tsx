import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, Download, TrendingUp, Calendar, DollarSign } from "lucide-react";

export default function Reports() {
  const reports = [
    {
      title: "Monthly Service Usage",
      description: "Track your care service utilization over time",
      type: "Usage",
      lastGenerated: "Dec 15, 2024",
      status: "Ready"
    },
    {
      title: "Annual Cost Analysis",
      description: "Comprehensive breakdown of yearly healthcare expenses",
      type: "Financial",
      lastGenerated: "Dec 01, 2024",
      status: "Ready"
    },
    {
      title: "Provider Performance",
      description: "Review ratings and service quality metrics",
      type: "Quality",
      lastGenerated: "Dec 10, 2024",
      status: "Ready"
    },
    {
      title: "Tax Report 2024",
      description: "Medical expense summary for tax purposes",
      type: "Tax",
      lastGenerated: "Pending",
      status: "Generating"
    }
  ];

  const stats = [
    { label: "Total Reports Generated", value: "24", icon: BarChart3 },
    { label: "Average Monthly Cost", value: "$1,245", icon: DollarSign },
    { label: "Most Used Service", value: "Home Care", icon: TrendingUp },
    { label: "Reports This Year", value: "18", icon: Calendar }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
        <p className="text-muted-foreground mt-2">
          Generate and download detailed reports about your care services and expenses.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="healthcare-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <Icon className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Available Reports */}
      <Card className="healthcare-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            Available Reports
          </CardTitle>
          <CardDescription>
            Generate and download comprehensive reports about your care management.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report) => (
              <div key={report.title} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-foreground">{report.title}</h3>
                    <Badge variant={report.type === "Tax" ? "destructive" : "secondary"}>
                      {report.type}
                    </Badge>
                    <Badge variant={report.status === "Ready" ? "default" : "outline"}>
                      {report.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{report.description}</p>
                  <p className="text-xs text-muted-foreground">Last generated: {report.lastGenerated}</p>
                </div>
                <div className="flex gap-2">
                  {report.status === "Ready" && (
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  )}
                  <Button 
                    variant="default" 
                    size="sm"
                    disabled={report.status === "Generating"}
                  >
                    {report.status === "Generating" ? "Generating..." : "Generate"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="healthcare-card">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common report generation tasks.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="font-medium">Monthly Summary</div>
                <div className="text-sm text-muted-foreground">Generate current month report</div>
              </div>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start gap-2">
              <DollarSign className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="font-medium">Cost Breakdown</div>
                <div className="text-sm text-muted-foreground">Detailed expense analysis</div>
              </div>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="font-medium">Custom Date Range</div>
                <div className="text-sm text-muted-foreground">Select specific time period</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}