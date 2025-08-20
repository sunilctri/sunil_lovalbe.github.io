import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  MapPin, 
  Clock, 
  DollarSign, 
  Phone, 
  Calendar,
  Pause,
  X,
  Edit3,
  Star
} from "lucide-react";

const services = [
  {
    id: 1,
    name: "Home Care Nursing",
    type: "Skilled Nursing",
    provider: {
      name: "Sarah Johnson, RN",
      rating: 4.9,
      phone: "(555) 123-4567",
      image: "SJ"
    },
    schedule: {
      frequency: "3 times per week",
      duration: "2 hours per visit",
      nextVisit: "Tomorrow, 10:00 AM",
      time: "10:00 AM - 12:00 PM"
    },
    cost: {
      rate: "$75/hour",
      monthly: "$1,200",
      nextBill: "Dec 15, 2024"
    },
    status: "active",
    services: ["Medication management", "Wound care", "Vital signs monitoring", "Patient education"],
    location: "Your Home"
  },
  {
    id: 2,
    name: "Physical Therapy",
    type: "Rehabilitation",
    provider: {
      name: "HealthFirst Rehabilitation",
      rating: 4.8,
      phone: "(555) 234-5678",
      image: "HR"
    },
    schedule: {
      frequency: "2 times per week",
      duration: "45 minutes per session",
      nextVisit: "Today, 2:00 PM",
      time: "2:00 PM - 2:45 PM"
    },
    cost: {
      rate: "$100/session",
      monthly: "$800",
      nextBill: "Dec 15, 2024"
    },
    status: "active",
    services: ["Mobility exercises", "Pain management", "Strength training", "Balance therapy"],
    location: "HealthFirst Center, 123 Medical Way"
  },
  {
    id: 3,
    name: "Medication Management",
    type: "Pharmacy Services",
    provider: {
      name: "CarePharmacy Plus",
      rating: 4.7,
      phone: "(555) 345-6789",
      image: "CP"
    },
    schedule: {
      frequency: "Daily delivery",
      duration: "Ongoing service",
      nextVisit: "Weekly review",
      time: "Flexible"
    },
    cost: {
      rate: "$10/day",
      monthly: "$300",
      nextBill: "Dec 15, 2024"
    },
    status: "active",
    services: ["Medication delivery", "Pill organization", "Refill management", "Drug interaction monitoring"],
    location: "Delivered to your home"
  },
  {
    id: 4,
    name: "Telehealth Monitoring",
    type: "Remote Care",
    provider: {
      name: "VitalCheck Systems",
      rating: 4.6,
      phone: "(555) 456-7890",
      image: "VC"
    },
    schedule: {
      frequency: "24/7 monitoring",
      duration: "Continuous",
      nextVisit: "Always active",
      time: "Continuous"
    },
    cost: {
      rate: "$5/day",
      monthly: "$150",
      nextBill: "Dec 15, 2024"
    },
    status: "active",
    services: ["Heart rate monitoring", "Blood pressure tracking", "Emergency alerts", "Health reports"],
    location: "Remote monitoring device"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-healthcare-success/10 text-healthcare-success border-healthcare-success/20";
    case "paused":
      return "bg-healthcare-warning/10 text-healthcare-warning border-healthcare-warning/20";
    case "cancelled":
      return "bg-muted text-muted-foreground border-border";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

export default function Services() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">My Care Services</h1>
          <p className="text-muted-foreground">
            Manage your active care services and appointments
          </p>
        </div>
        <Button className="bg-gradient-primary">
          <Heart className="w-4 h-4 mr-2" />
          Request New Service
        </Button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="healthcare-card">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <span>{service.type}</span>
                    <Badge 
                      variant="outline" 
                      className={getStatusColor(service.status)}
                    >
                      {service.status}
                    </Badge>
                  </CardDescription>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="w-8 h-8">
                    <Edit3 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-8 h-8">
                    <Pause className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-8 h-8 text-destructive">
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Provider Info */}
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-medium">
                  {service.provider.image}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{service.provider.name}</h4>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="w-3 h-3 fill-current text-healthcare-warning" />
                    <span>{service.provider.rating}</span>
                    <span>•</span>
                    <Phone className="w-3 h-3" />
                    <span>{service.provider.phone}</span>
                  </div>
                </div>
              </div>

              {/* Schedule & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium">Schedule</span>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>{service.schedule.frequency}</p>
                    <p>{service.schedule.duration}</p>
                    <p className="font-medium text-foreground">
                      Next: {service.schedule.nextVisit}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium">Location</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {service.location}
                  </p>
                </div>
              </div>

              {/* Services Provided */}
              <div className="space-y-2">
                <h5 className="text-sm font-medium">Services Included</h5>
                <div className="flex flex-wrap gap-1">
                  {service.services.map((item, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Cost Info */}
              <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Cost</span>
                  </div>
                  <p className="text-lg font-bold">{service.cost.monthly}</p>
                  <p className="text-xs text-muted-foreground">{service.cost.rate}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Next bill</p>
                  <p className="text-sm font-medium">{service.cost.nextBill}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Card */}
      <Card className="healthcare-card bg-gradient-card">
        <CardHeader>
          <CardTitle>Service Summary</CardTitle>
          <CardDescription>
            Overview of your monthly care services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">4</p>
              <p className="text-sm text-muted-foreground">Active Services</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-healthcare-success">$2,450</p>
              <p className="text-sm text-muted-foreground">Total Monthly Cost</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-healthcare-info">Dec 15</p>
              <p className="text-sm text-muted-foreground">Next Payment Due</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}