import { useState } from "react";
import { UserCircle, Shield, FileCheck, Users, Lock, Key, Upload, Download, Edit } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const policeCheckData = {
    status: "valid",
    expiryDate: "2025-06-15",
    lastUpdated: "2024-01-15"
  };

  const insuranceData = {
    provider: "Professional Indemnity Plus",
    policyNumber: "PI-2024-789456",
    coverage: "$20,000,000",
    expiryDate: "2024-12-31",
    status: "active"
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Profile & Administration</h1>
        <p className="text-muted-foreground">Manage your profile, compliance documents and organizational settings</p>
      </div>

      {/* Profile Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <UserCircle className="w-5 h-5" />
              Personal Information
            </CardTitle>
            <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
              <Edit className="w-4 h-4 mr-2" />
              {isEditing ? 'Cancel' : 'Edit'}
            </Button>
          </div>
          <CardDescription>Your personal and organizational details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-6">
            <Avatar className="w-20 h-20">
              <AvatarImage src="" />
              <AvatarFallback className="bg-gradient-primary text-white text-2xl">JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    defaultValue="John Doe"
                    disabled={!isEditing}
                    className={!isEditing ? "bg-muted" : ""}
                  />
                </div>
                <div>
                  <Label htmlFor="title">Job Title</Label>
                  <Input
                    id="title"
                    defaultValue="Support Coordinator"
                    disabled={!isEditing}
                    className={!isEditing ? "bg-muted" : ""}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    defaultValue="john.doe@nexuscare.com"
                    disabled={!isEditing}
                    className={!isEditing ? "bg-muted" : ""}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    defaultValue="(555) 123-4567"
                    disabled={!isEditing}
                    className={!isEditing ? "bg-muted" : ""}
                  />
                </div>
              </div>
              {isEditing && (
                <div className="flex gap-2">
                  <Button>Save Changes</Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Compliance Documents */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Police Check
            </CardTitle>
            <CardDescription>Background check compliance status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Status</span>
              <Badge variant={policeCheckData.status === 'valid' ? 'default' : 'destructive'}>
                {policeCheckData.status}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Expiry Date</span>
              <span className="text-muted-foreground">{policeCheckData.expiryDate}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Last Updated</span>
              <span className="text-muted-foreground">{policeCheckData.lastUpdated}</span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Upload New
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCheck className="w-5 h-5" />
              Insurance
            </CardTitle>
            <CardDescription>Professional indemnity insurance details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Provider</span>
              <span className="text-muted-foreground">{insuranceData.provider}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Policy Number</span>
              <span className="text-muted-foreground">{insuranceData.policyNumber}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Coverage</span>
              <span className="text-muted-foreground">{insuranceData.coverage}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Status</span>
              <Badge variant={insuranceData.status === 'active' ? 'default' : 'destructive'}>
                {insuranceData.status}
              </Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Upload New
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Administrative Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Organization Administration
          </CardTitle>
          <CardDescription>Manage organizational settings and access</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Organization Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Organization:</span>
                    <span className="text-muted-foreground">NexusCare Services</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ABN:</span>
                    <span className="text-muted-foreground">12 345 678 901</span>
                  </div>
                  <div className="flex justify-between">
                    <span>NDIS Registration:</span>
                    <span className="text-muted-foreground">4050123456</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                <Edit className="w-4 h-4 mr-2" />
                Edit Organization Details
              </Button>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Security Settings</h4>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Lock className="w-4 h-4 mr-2" />
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Key className="w-4 h-4 mr-2" />
                    Two-Factor Authentication
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Manage User Access
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;