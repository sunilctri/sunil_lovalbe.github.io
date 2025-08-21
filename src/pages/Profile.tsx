import { UserCircle, Edit, Shield, Bell } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Profile</h1>
        <p className="text-muted-foreground">Manage your personal information and preferences</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="" />
              <AvatarFallback className="bg-gradient-primary text-white text-xl">JD</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>John Doe</CardTitle>
              <CardDescription>Patient ID: #12345</CardDescription>
            </div>
            <Button className="ml-auto">
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Email</label>
              <p className="text-muted-foreground">john.doe@email.com</p>
            </div>
            <div>
              <label className="text-sm font-medium">Phone</label>
              <p className="text-muted-foreground">(555) 123-4567</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;