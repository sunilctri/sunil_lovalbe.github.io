import { useState } from "react";
import { Package, Upload, Download, Mail, FileSpreadsheet, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Batch = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const batches = [
    {
      id: "BATCH-001",
      name: "NDIS Monthly Claims - January",
      type: "ndis",
      status: "completed",
      items: 24,
      date: "2024-01-15",
      uploadMethod: "email"
    },
    {
      id: "BATCH-002", 
      name: "Weekly Service Reports",
      type: "excel",
      status: "processing",
      items: 12,
      date: "2024-01-14",
      uploadMethod: "upload"
    },
    {
      id: "BATCH-003",
      name: "Invoice Batch - Week 2",
      type: "invoice",
      status: "failed",
      items: 8,
      date: "2024-01-12",
      uploadMethod: "email"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'processing': return <Clock className="w-4 h-4 text-blue-600" />;
      case 'failed': return <AlertCircle className="w-4 h-4 text-red-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'default';
      case 'processing': return 'secondary';
      case 'failed': return 'destructive';
      default: return 'secondary';
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Batch Upload</h1>
        <p className="text-muted-foreground">Bulk processing for invoices and NDIS claims</p>
      </div>

      {/* Upload Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Email Upload
            </CardTitle>
            <CardDescription>Send files directly via email for processing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">Email Address:</p>
              <code className="bg-muted px-3 py-2 rounded text-sm">batch@nexuscare.com</code>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Attach your Excel files or NDIS templates and they will be automatically processed.
              </p>
            </div>
            <Button className="w-full">
              <Mail className="w-4 h-4 mr-2" />
              Open Email Client
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5" />
              File Upload
            </CardTitle>
            <CardDescription>Upload files directly through the portal</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="file-upload">Select File</Label>
              <Input
                id="file-upload"
                type="file"
                accept=".xlsx,.xls,.csv"
                onChange={handleFileUpload}
                className="mt-1"
              />
              {selectedFile && (
                <p className="text-sm text-muted-foreground mt-2">
                  Selected: {selectedFile.name}
                </p>
              )}
            </div>
            <Button className="w-full" disabled={!selectedFile}>
              <Upload className="w-4 h-4 mr-2" />
              Upload and Process
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Templates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileSpreadsheet className="w-5 h-5" />
            Download Templates
          </CardTitle>
          <CardDescription>Standard templates for different batch operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="flex items-center justify-center gap-2 h-20">
              <FileSpreadsheet className="w-6 h-6 text-green-600" />
              <div className="text-left">
                <p className="font-medium">Excel Template</p>
                <p className="text-sm text-muted-foreground">Standard invoice format</p>
              </div>
            </Button>
            
            <Button variant="outline" className="flex items-center justify-center gap-2 h-20">
              <FileSpreadsheet className="w-6 h-6 text-blue-600" />
              <div className="text-left">
                <p className="font-medium">NDIS Template</p>
                <p className="text-sm text-muted-foreground">NDIS claim format</p>
              </div>
            </Button>
            
            <Button variant="outline" className="flex items-center justify-center gap-2 h-20">
              <FileSpreadsheet className="w-6 h-6 text-purple-600" />
              <div className="text-left">
                <p className="font-medium">Service Report</p>
                <p className="text-sm text-muted-foreground">Weekly report template</p>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Batches */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5" />
            Recent Batch Operations
          </CardTitle>
          <CardDescription>Track your recent batch uploads and processing status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {batches.map((batch) => (
              <div key={batch.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    {getStatusIcon(batch.status)}
                  </div>
                  <div>
                    <p className="font-medium">{batch.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {batch.id} • {batch.items} items • {batch.date} • via {batch.uploadMethod}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={getStatusColor(batch.status)}>
                    {batch.status}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Button variant="outline">View All Batches</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Batch;