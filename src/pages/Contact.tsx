import { Phone, Mail, MessageSquare, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Contact Support</h1>
        <p className="text-muted-foreground">Get help when you need it</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Phone Support
            </CardTitle>
            <CardDescription>Available 24/7 for urgent matters</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">(555) CARE-911</p>
            <Button className="mt-3">Call Now</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Email Support
            </CardTitle>
            <CardDescription>Response within 24 hours</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">support@nexuscare.com</p>
            <Button className="mt-3">Send Email</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;