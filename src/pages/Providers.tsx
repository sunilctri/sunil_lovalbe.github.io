import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Calendar,
  MessageCircle,
  Award,
  Clock,
  Heart
} from "lucide-react";

const providers = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Registered Nurse",
    specialties: ["Home Care", "Wound Care", "Medication Management"],
    rating: 4.9,
    reviews: 127,
    experience: "8 years",
    contact: {
      phone: "(555) 123-4567",
      email: "sarah.johnson@nexuscare.com"
    },
    location: "Downtown Medical District",
    availability: "Mon-Fri, 8AM-6PM",
    services: ["Home Care Nursing"],
    nextAvailable: "Tomorrow, 10:00 AM",
    status: "active",
    image: "SJ",
    bio: "Sarah is a dedicated RN with 8 years of experience in home healthcare. She specializes in chronic disease management and has helped over 200 patients improve their quality of life.",
    certifications: ["RN License", "CPR Certified", "Wound Care Specialist"]
  },
  {
    id: 2,
    name: "Dr. Emily Martinez",
    title: "Physical Therapist",
    specialties: ["Orthopedic Therapy", "Balance Training", "Pain Management"],
    rating: 4.8,
    reviews: 89,
    experience: "12 years",
    contact: {
      phone: "(555) 234-5678",
      email: "emily.martinez@healthfirst.com"
    },
    location: "HealthFirst Rehabilitation Center",
    availability: "Mon-Wed-Fri, 9AM-5PM",
    services: ["Physical Therapy"],
    nextAvailable: "Today, 2:00 PM",
    status: "active",
    image: "EM",
    bio: "Dr. Martinez is a licensed physical therapist with extensive experience in rehabilitation. She helps patients regain mobility and strength through personalized treatment plans.",
    certifications: ["DPT License", "Orthopedic Certified", "Manual Therapy"]
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Pharmacist",
    specialties: ["Medication Review", "Drug Interactions", "Compliance Management"],
    rating: 4.7,
    reviews: 156,
    experience: "10 years",
    contact: {
      phone: "(555) 345-6789",
      email: "michael.chen@carepharmacy.com"
    },
    location: "CarePharmacy Plus",
    availability: "Daily, 7AM-9PM",
    services: ["Medication Management"],
    nextAvailable: "Available now",
    status: "active",
    image: "MC",
    bio: "Michael is a clinical pharmacist who specializes in medication therapy management. He works closely with patients to optimize their medication regimens.",
    certifications: ["PharmD License", "MTM Certified", "Immunization Certified"]
  },
  {
    id: 4,
    name: "Dr. Robert Kim",
    title: "Telemedicine Specialist",
    specialties: ["Remote Monitoring", "Chronic Care", "Health Analytics"],
    rating: 4.6,
    reviews: 94,
    experience: "6 years",
    contact: {
      phone: "(555) 456-7890",
      email: "robert.kim@vitalcheck.com"
    },
    location: "VitalCheck Systems (Remote)",
    availability: "24/7 Monitoring",
    services: ["Telehealth Monitoring"],
    nextAvailable: "Always available",
    status: "active",
    image: "RK",
    bio: "Dr. Kim is a pioneer in telemedicine and remote patient monitoring. He uses advanced technology to provide continuous care and early intervention.",
    certifications: ["MD License", "Telemedicine Certified", "Digital Health"]
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-healthcare-success/10 text-healthcare-success border-healthcare-success/20";
    case "busy":
      return "bg-healthcare-warning/10 text-healthcare-warning border-healthcare-warning/20";
    case "offline":
      return "bg-muted text-muted-foreground border-border";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

export default function Providers() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Care Providers</h1>
          <p className="text-muted-foreground">
            Connect with your healthcare team and manage appointments
          </p>
        </div>
        <Button className="bg-gradient-primary">
          <Heart className="w-4 h-4 mr-2" />
          Find New Provider
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="healthcare-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Providers</p>
                <p className="text-2xl font-bold">4</p>
              </div>
              <Heart className="w-8 h-8 text-healthcare-info" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="healthcare-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
                <p className="text-2xl font-bold">4.8</p>
              </div>
              <Star className="w-8 h-8 text-healthcare-warning" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="healthcare-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Next Appointment</p>
                <p className="text-lg font-bold">Today 2PM</p>
              </div>
              <Calendar className="w-8 h-8 text-healthcare-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="healthcare-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Reviews</p>
                <p className="text-2xl font-bold">466</p>
              </div>
              <MessageCircle className="w-8 h-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Providers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {providers.map((provider) => (
          <Card key={provider.id} className="healthcare-card">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="relative">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-primary text-white text-lg font-bold">
                      {provider.image}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1">
                    <Badge 
                      variant="outline" 
                      className={`${getStatusColor(provider.status)} text-xs px-2 py-0`}
                    >
                      {provider.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">{provider.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current text-healthcare-warning" />
                      <span className="font-medium">{provider.rating}</span>
                      <span className="text-sm text-muted-foreground">({provider.reviews})</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{provider.title}</p>
                  
                  <div className="flex flex-wrap gap-1 mt-2">
                    {provider.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Bio */}
              <p className="text-sm text-muted-foreground line-clamp-2">
                {provider.bio}
              </p>

              {/* Contact & Availability */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>{provider.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="truncate">{provider.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{provider.location}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{provider.availability}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="w-4 h-4 text-muted-foreground" />
                    <span>{provider.experience} experience</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-healthcare-success">
                      Next: {provider.nextAvailable}
                    </span>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="space-y-2">
                <h5 className="text-sm font-medium">Current Services</h5>
                <div className="flex flex-wrap gap-1">
                  {provider.services.map((service, index) => (
                    <Badge key={index} variant="outline" className="text-xs bg-primary/5">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-2">
                <h5 className="text-sm font-medium">Certifications</h5>
                <div className="flex flex-wrap gap-1">
                  {provider.certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <Button variant="default" size="sm" className="flex-1">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Provider Reviews Section */}
      <Card className="healthcare-card">
        <CardHeader>
          <CardTitle>Recent Reviews</CardTitle>
          <CardDescription>
            What other patients are saying about your providers
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
              <Avatar className="w-10 h-10">
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm">Mary Roberts</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 fill-current text-healthcare-warning" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-1">
                  "Sarah Johnson provided exceptional care during my recovery. Very professional and caring."
                </p>
                <p className="text-xs text-muted-foreground">2 days ago</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
              <Avatar className="w-10 h-10">
                <AvatarFallback>DP</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm">David Parker</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 fill-current text-healthcare-warning" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-1">
                  "Dr. Martinez helped me regain my mobility after surgery. Highly recommend her expertise."
                </p>
                <p className="text-xs text-muted-foreground">1 week ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}