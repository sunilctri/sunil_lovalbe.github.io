import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, DollarSign, Calendar, Activity, ChevronRight, AlertCircle } from "lucide-react";
import heroImage from "@/assets/healthcare-hero.jpg";

const quickStats = [
  {
    title: "Active Services",
    value: "4",
    description: "Currently receiving care",
    icon: Heart,
    color: "text-healthcare-info",
    bgColor: "bg-healthcare-info/10"
  },
  {
    title: "Monthly Cost",
    value: "$2,450",
    description: "Current billing cycle",
    icon: DollarSign,
    color: "text-healthcare-success",
    bgColor: "bg-healthcare-success/10"
  },
  {
    title: "Next Payment",
    value: "Dec 15",
    description: "Automatic payment",
    icon: Calendar,
    color: "text-healthcare-warning",
    bgColor: "bg-healthcare-warning/10"
  },
  {
    title: "Care Score",
    value: "94%",
    description: "Quality rating",
    icon: Activity,
    color: "text-healthcare-success",
    bgColor: "bg-healthcare-success/10"
  }
];

const recentActivity = [
  {
    title: "Home Care Service",
    description: "Weekly visit completed by Sarah Johnson, RN",
    time: "2 hours ago",
    status: "completed"
  },
  {
    title: "Physical Therapy",
    description: "Session scheduled for tomorrow at 2:00 PM",
    time: "1 day ago",
    status: "scheduled"
  },
  {
    title: "Monthly Bill",
    description: "Invoice #INV-2024-001 processed successfully",
    time: "3 days ago",
    status: "paid"
  },
  {
    title: "Care Plan Update",
    description: "Dr. Martinez updated your care plan",
    time: "1 week ago",
    status: "updated"
  }
];

const activeServices = [
  {
    name: "Home Care Nursing",
    provider: "Sarah Johnson, RN",
    frequency: "3x per week",
    nextVisit: "Tomorrow, 10:00 AM",
    cost: "$1,200/month",
    status: "active"
  },
  {
    name: "Physical Therapy",
    provider: "HealthFirst Rehabilitation",
    frequency: "2x per week",
    nextVisit: "Today, 2:00 PM",
    cost: "$800/month",
    status: "active"
  },
  {
    name: "Medication Management",
    provider: "CarePharmacy Plus",
    frequency: "Daily delivery",
    nextVisit: "Weekly review",
    cost: "$300/month",
    status: "active"
  },
  {
    name: "Telehealth Monitoring",
    provider: "VitalCheck Systems",
    frequency: "Daily monitoring",
    nextVisit: "Continuous",
    cost: "$150/month",
    status: "active"
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-hero p-8 text-white">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
          <p className="text-white/90 text-lg mb-6">
            Here's an overview of your care services and recent activity.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="secondary" size="lg">
              <Heart className="w-4 h-4 mr-2" />
              View All Services
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Contact Care Team
            </Button>
          </div>
        </div>
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat) => (
          <Card key={stat.title} className="healthcare-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Services */}
        <div className="lg:col-span-2">
          <Card className="healthcare-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Active Services</CardTitle>
                  <CardDescription>
                    Your current care services and schedules
                  </CardDescription>
                </div>
                <Button variant="ghost" size="sm">
                  View All
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeServices.map((service) => (
                <div key={service.name} className="flex items-center justify-between p-4 border border-border rounded-lg bg-background/50">
                  <div className="space-y-1">
                    <h4 className="font-medium">{service.name}</h4>
                    <p className="text-sm text-muted-foreground">{service.provider}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{service.frequency}</span>
                      <span>•</span>
                      <span>{service.nextVisit}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sm">{service.cost}</p>
                    <Badge variant="secondary" className="mt-1">
                      {service.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div>
          <Card className="healthcare-card">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest updates on your care
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div className="space-y-1 flex-1">
                    <h4 className="text-sm font-medium">{activity.title}</h4>
                    <p className="text-xs text-muted-foreground">{activity.description}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Alerts & Notifications */}
      <Card className="healthcare-card border-healthcare-warning/20 bg-healthcare-warning/5">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-healthcare-warning" />
            <CardTitle className="text-healthcare-warning">Important Notice</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Your insurance pre-authorization for Physical Therapy sessions expires on December 31st. 
            Please contact your care coordinator to renew.
          </p>
          <Button size="sm" className="mt-3" variant="outline">
            Contact Coordinator
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}