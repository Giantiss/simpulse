'use client';

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  HardHat,
  Package2,
  Users,
  MessageSquare,
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { SafetyMetricsChart } from './safety-metrics-chart';
import { MaterialStatusChart } from './material-status-chart';
import { AttendanceChart } from './attendance-chart';
import { RecentActivities } from './recent-activities';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function DashboardView() {
  return (
    <div className="w-full space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your construction site management metrics.
        </p>
      </div>
      
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          {/* Quick Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard 
              title="Safety Incidents"
              value="3"
              change="-25%"
              trend="down"
              description="Last 7 days"
              icon={HardHat}
              iconColor="text-red-500"
              iconBg="bg-red-100 dark:bg-red-900/20"
            />
            <StatsCard 
              title="Material Alerts"
              value="5"
              change="+2"
              trend="up"
              description="Low stock items"
              icon={Package2}
              iconColor="text-amber-500"
              iconBg="bg-amber-100 dark:bg-amber-900/20"
            />
            <StatsCard 
              title="Workforce Present"
              value="87%"
              change="+5%"
              trend="up"
              description="Today's attendance"
              icon={Users}
              iconColor="text-green-500"
              iconBg="bg-green-100 dark:bg-green-900/20"
            />
            <StatsCard 
              title="Messages Sent"
              value="12"
              change="Same"
              trend="neutral"
              description="Last 24 hours"
              icon={MessageSquare}
              iconColor="text-blue-500"
              iconBg="bg-blue-100 dark:bg-blue-900/20"
            />
          </div>

          {/* Charts Section */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Safety Metrics
                </CardTitle>
                <HardHat className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <SafetyMetricsChart />
                <Link href="/dashboard/safesite">
                  <Button variant="outline" size="sm" className="mt-4 w-full">
                    View SafeSite Module
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="col-span-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Material Status
                </CardTitle>
                <Package2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <MaterialStatusChart />
                <Link href="/dashboard/buildtrack">
                  <Button variant="outline" size="sm" className="mt-4 w-full">
                    View BuildTrack Module
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="col-span-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Weekly Attendance
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <AttendanceChart />
                <Link href="/dashboard/labourlink">
                  <Button variant="outline" size="sm" className="mt-4 w-full">
                    View LabourLink Module
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activities */}
          <RecentActivities />
        </TabsContent>
        
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>
                Detailed analytics of your construction site performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-6">
                Detailed analytics are being developed for this view.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>
                Generate and view reports for all modules.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-6">
                Report generation features are being developed for this view.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function StatsCard({ 
  title, 
  value, 
  change, 
  trend, 
  description,
  icon: Icon,
  iconColor,
  iconBg
}: { 
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  iconBg: string;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${iconBg}`}>
          <Icon className={`h-4 w-4 ${iconColor}`} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center pt-1 text-xs">
          <span className={
            trend === 'up' 
              ? 'text-rose-500 dark:text-rose-400' 
              : trend === 'down' 
                ? 'text-emerald-500 dark:text-emerald-400' 
                : 'text-muted-foreground'
          }>
            {change}
          </span>
          {trend === 'up' && <ArrowUpRight className="ml-1 h-3 w-3 text-rose-500 dark:text-rose-400" />}
          {trend === 'down' && <ArrowDownRight className="ml-1 h-3 w-3 text-emerald-500 dark:text-emerald-400" />}
          <span className="ml-2 text-muted-foreground">{description}</span>
        </div>
      </CardContent>
    </Card>
  );
}