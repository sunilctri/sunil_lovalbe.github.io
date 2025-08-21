import { useState } from "react";
import { Users, Edit, Plus, Search, Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Accounts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const clients = [
    {
      id: "CLI-001",
      name: "Sarah Johnson",
      ndisNumber: "NDIS-2024-001",
      planType: "Core Support",
      planValue: "$25,000",
      status: "active",
      email: "sarah.j@email.com",
      phone: "(555) 123-4567",
      address: "123 Main St, Melbourne VIC 3000",
      lastService: "2024-01-15"
    },
    {
      id: "CLI-002", 
      name: "Michael Chen",
      ndisNumber: "NDIS-2024-002",
      planType: "Support Coordination",
      planValue: "$8,500",
      status: "active",
      email: "m.chen@email.com",
      phone: "(555) 987-6543",
      address: "456 Oak Ave, Sydney NSW 2000",
      lastService: "2024-01-12"
    },
    {
      id: "CLI-003",
      name: "Emma Wilson",
      ndisNumber: "NDIS-2024-003",
      planType: "Capacity Building",
      planValue: "$15,750",
      status: "pending",
      email: "emma.wilson@email.com",
      phone: "(555) 456-7890",
      address: "789 Pine Rd, Brisbane QLD 4000",
      lastService: "2024-01-10"
    }
  ];

  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.ndisNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Client Management</h1>
          <p className="text-muted-foreground">Manage your clients and customer information</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add New Client
        </Button>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Client Directory
          </CardTitle>
          <CardDescription>Search and manage client information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search clients by name or NDIS number..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {filteredClients.map((client) => (
              <Card key={client.id} className="p-0">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-gradient-primary text-white">
                          {client.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-3">
                        <div>
                          <h3 className="text-lg font-semibold">{client.name}</h3>
                          <p className="text-sm text-muted-foreground">Client ID: {client.id}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-medium">NDIS Number</p>
                            <p className="text-muted-foreground">{client.ndisNumber}</p>
                          </div>
                          <div>
                            <p className="font-medium">Plan Type</p>
                            <p className="text-muted-foreground">{client.planType}</p>
                          </div>
                          <div>
                            <p className="font-medium">Plan Value</p>
                            <p className="text-muted-foreground">{client.planValue}</p>
                          </div>
                          <div>
                            <p className="font-medium">Last Service</p>
                            <p className="text-muted-foreground">{client.lastService}</p>
                          </div>
                        </div>

                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-muted-foreground" />
                            <span>{client.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-muted-foreground" />
                            <span>{client.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                            <span>{client.address}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Badge variant={client.status === 'active' ? 'default' : 'secondary'}>
                        {client.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Client
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-6">
            <Button variant="outline">Load More Clients</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Accounts;