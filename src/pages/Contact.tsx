import { useState } from "react";
import { Phone, Mail, MessageSquare, Send, FileText, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  const [emailSubject, setEmailSubject] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [progressNotes, setProgressNotes] = useState("");
  const [selectedClient, setSelectedClient] = useState("");

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Contact & Communications</h1>
        <p className="text-muted-foreground">Contact support and submit progress notes</p>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Phone Support
            </CardTitle>
            <CardDescription>Direct phone assistance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="font-medium">General Support</p>
              <p className="text-lg text-muted-foreground">(555) 123-4567</p>
            </div>
            <div>
              <p className="font-medium">Emergency Line</p>
              <p className="text-lg text-muted-foreground">(555) 911-HELP</p>
            </div>
            <p className="text-sm text-muted-foreground">Available: Mon-Fri 8AM-6PM</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Email Addresses
            </CardTitle>
            <CardDescription>Direct email contacts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="font-medium">General Inquiries</p>
              <p className="text-sm text-muted-foreground">support@nexuscare.com</p>
            </div>
            <div>
              <p className="font-medium">Provider Communications</p>
              <p className="text-sm text-muted-foreground">providers@nexuscare.com</p>
            </div>
            <div>
              <p className="font-medium">Billing Inquiries</p>
              <p className="text-sm text-muted-foreground">billing@nexuscare.com</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Live Chat
            </CardTitle>
            <CardDescription>Instant messaging support</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Get instant help with our live chat feature
            </p>
            <Button className="w-full">
              <MessageSquare className="w-4 h-4 mr-2" />
              Start Live Chat
            </Button>
            <p className="text-xs text-muted-foreground">Available: Mon-Fri 9AM-5PM</p>
          </CardContent>
        </Card>
      </div>

      {/* Email Provider */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Email Provider
          </CardTitle>
          <CardDescription>Send direct messages to care providers</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email-subject">Subject</Label>
              <Input
                id="email-subject"
                placeholder="Enter email subject..."
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="provider-select">Select Provider</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a provider" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dr-smith">Dr. Sarah Smith - Support Coordinator</SelectItem>
                  <SelectItem value="nurse-jones">Nurse Mike Jones - Home Care</SelectItem>
                  <SelectItem value="therapist-brown">Lisa Brown - Physiotherapist</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label htmlFor="email-message">Message</Label>
            <Textarea
              id="email-message"
              placeholder="Type your message here..."
              value={emailMessage}
              onChange={(e) => setEmailMessage(e.target.value)}
              rows={4}
            />
          </div>
          <Button>
            <Send className="w-4 h-4 mr-2" />
            Send Email to Provider
          </Button>
        </CardContent>
      </Card>

      {/* Progress Notes Submission */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Submit Progress Notes
          </CardTitle>
          <CardDescription>Submit client progress notes and updates</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="client-select">Select Client</Label>
              <Select value={selectedClient} onValueChange={setSelectedClient}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a client" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cli-001">Sarah Johnson (CLI-001)</SelectItem>
                  <SelectItem value="cli-002">Michael Chen (CLI-002)</SelectItem>
                  <SelectItem value="cli-003">Emma Wilson (CLI-003)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="session-date">Session Date</Label>
              <Input
                id="session-date"
                type="date"
                defaultValue={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="progress-notes">Progress Notes</Label>
            <Textarea
              id="progress-notes"
              placeholder="Enter detailed progress notes, observations, and recommendations..."
              value={progressNotes}
              onChange={(e) => setProgressNotes(e.target.value)}
              rows={6}
            />
          </div>
          <div className="flex gap-2">
            <Button>
              <Send className="w-4 h-4 mr-2" />
              Submit Progress Notes
            </Button>
            <Button variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Save as Draft
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;