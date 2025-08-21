import { Wallet, CreditCard, PlusCircle, Eye, EyeOff } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Accounts = () => {
  const [showBalance, setShowBalance] = useState(true);

  const accounts = [
    {
      id: "ACC-001",
      type: "Primary",
      name: "Health Savings Account",
      balance: 2840.50,
      last4: "4521",
      status: "active"
    },
    {
      id: "ACC-002",
      type: "Secondary", 
      name: "Credit Card - Visa",
      balance: -156.00,
      last4: "8934",
      status: "active"
    },
    {
      id: "ACC-003",
      type: "Insurance",
      name: "Medicare Coverage",
      balance: 0,
      last4: "N/A",
      status: "active"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Accounts</h1>
          <p className="text-muted-foreground">Manage your payment methods and accounts</p>
        </div>
        <Button>
          <PlusCircle className="w-4 h-4 mr-2" />
          Add Account
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accounts.map((account) => (
          <Card key={account.id} className="relative">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{account.name}</CardTitle>
                  <CardDescription>{account.type} Account</CardDescription>
                </div>
                <Badge variant={account.status === 'active' ? 'default' : 'secondary'}>
                  {account.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Balance</span>
                  <div className="flex items-center gap-2">
                    <span className={`font-semibold ${account.balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {showBalance ? `$${Math.abs(account.balance).toFixed(2)}` : '••••••'}
                    </span>
                    <button 
                      onClick={() => setShowBalance(!showBalance)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {showBalance ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                
                {account.last4 !== 'N/A' && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Ending in</span>
                    <span className="font-mono">••••{account.last4}</span>
                  </div>
                )}

                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Account Summary</CardTitle>
          <CardDescription>Overview of all your connected accounts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">$2,684.50</div>
              <p className="text-sm text-muted-foreground">Total Available</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">$156.00</div>
              <p className="text-sm text-muted-foreground">Total Owed</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">3</div>
              <p className="text-sm text-muted-foreground">Active Accounts</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Accounts;