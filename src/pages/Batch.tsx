import { Package, Upload, Download, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Batch = () => {
  const batches = [
    {
      id: "BATCH-001",
      name: "Weekly Service Updates",
      status: "completed",
      items: 12,
      date: "2024-01-15"
    },
    {
      id: "BATCH-002", 
      name: "Payment Processing",
      status: "processing",
      items: 8,
      date: "2024-01-14"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Batch Operations</h1>
          <p className="text-muted-foreground">Manage bulk operations and processing</p>
        </div>
        <Button>
          <Upload className="w-4 h-4 mr-2" />
          New Batch
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {batches.map((batch) => (
          <Card key={batch.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{batch.name}</CardTitle>
                <Badge variant={batch.status === 'completed' ? 'default' : 'secondary'}>
                  {batch.status}
                </Badge>
              </div>
              <CardDescription>{batch.id} • {batch.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span>{batch.items} items</span>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Batch;