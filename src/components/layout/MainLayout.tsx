import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Bell, Search, Settings, User, ChevronRight, Calendar, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useLocation } from "react-router-dom";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();
  
  // Get page title based on current route
  const getPageInfo = () => {
    const path = location.pathname;
    switch (path) {
      case '/':
        return { title: 'Dashboard', subtitle: 'Overview of your care services' };
      case '/services':
        return { title: 'My Services', subtitle: 'Manage your active care services' };
      case '/billing':
        return { title: 'Billing & Payments', subtitle: 'View invoices and manage payments' };
      case '/providers':
        return { title: 'Care Providers', subtitle: 'Your healthcare provider directory' };
      case '/reports':
        return { title: 'Reports & Analytics', subtitle: 'Track your care service data' };
      case '/settings':
        return { title: 'Account Settings', subtitle: 'Manage your account preferences' };
      default:
        return { title: 'NexusCare Portal', subtitle: 'Healthcare management made simple' };
    }
  };

  const currentPage = getPageInfo();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Top Navigation Header */}
          <header className="h-16 border-b border-border bg-gradient-card shadow-healthcare flex items-center justify-between px-6">
            {/* Left Section - Sidebar Toggle & Breadcrumbs */}
            <div className="flex items-center gap-4">
              <SidebarTrigger className="text-muted-foreground hover:text-primary" />
              
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">NexusCare</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                <span className="font-medium text-foreground">{currentPage.title}</span>
              </div>
            </div>

            {/* Center Section - Search */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search services, providers, or invoices..." 
                  className="pl-10 bg-background/50 border-border/50 focus:bg-background"
                />
              </div>
            </div>

            {/* Right Section - Actions & Profile */}
            <div className="flex items-center gap-3">
              {/* Quick Actions */}
              <Button variant="ghost" size="sm" className="hidden lg:flex">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule
              </Button>

              <Button variant="ghost" size="sm" className="hidden lg:flex">
                <HelpCircle className="w-4 h-4 mr-2" />
                Help
              </Button>

              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-4 h-4" />
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs"
                >
                  3
                </Badge>
              </Button>

              {/* User Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 px-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-gradient-primary text-white text-sm">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <div className="hidden lg:block text-left">
                      <p className="text-sm font-medium text-foreground">John Doe</p>
                      <p className="text-xs text-muted-foreground">Patient #12345</p>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="w-4 h-4 mr-2" />
                    Profile Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="w-4 h-4 mr-2" />
                    Account Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell className="w-4 h-4 mr-2" />
                    Notifications
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <HelpCircle className="w-4 h-4 mr-2" />
                    Help & Support
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          {/* Page Header with Title and Subtitle */}
          <div className="bg-gradient-card border-b border-border/50 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground">{currentPage.title}</h1>
                <p className="text-sm text-muted-foreground mt-1">{currentPage.subtitle}</p>
              </div>
              
              {/* Mobile Search */}
              <div className="md:hidden">
                <Button variant="ghost" size="sm">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <main className="flex-1 p-6 bg-muted/30">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}