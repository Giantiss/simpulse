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
  CreditCard,
  TrendingUp,
  DollarSign,
  Users,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function DashboardView() {
  return (
    <div className="w-full space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Financial Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your business financial metrics and performance.
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
              title="Total Revenue"
              value="$45,231"
              change="+20.1%"
              trend="up"
              description="from last month"
              icon={DollarSign}
              iconColor="text-green-500"
              iconBg="bg-green-100 dark:bg-green-900/20"
            />
            <StatsCard 
              title="Transactions"
              value="2,350"
              change="+180"
              trend="up"
              description="this month"
              icon={CreditCard}
              iconColor="text-blue-500"
              iconBg="bg-blue-100 dark:bg-blue-900/20"
            />
            <StatsCard 
              title="Active Customers"
              value="573"
              change="+12%"
              trend="up"
              description="from last month"
              icon={Users}
              iconColor="text-purple-500"
              iconBg="bg-purple-100 dark:bg-purple-900/20"
            />
            <StatsCard 
              title="Growth Rate"
              value="12.5%"
              change="-2.1%"
              trend="down"
              description="vs last quarter"
              icon={TrendingUp}
              iconColor="text-amber-500"
              iconBg="bg-amber-100 dark:bg-amber-900/20"
            />
          </div>

          {/* Charts Section */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Monthly revenue for the past 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                  Revenue chart will be displayed here
                </div>
                <Link href="/dashboard/analytics">
                  <Button variant="outline" size="sm" className="mt-4 w-full">
                    View Detailed Analytics
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Latest payment activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4 p-3 border rounded-lg">
                      <CreditCard className="h-8 w-8 text-blue-500" />
                      <div className="flex-1">
                        <h3 className="font-medium">Payment #{i}234</h3>
                        <p className="text-sm text-muted-foreground">Customer payment received</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">+$1,234</p>
                        <p className="text-xs text-muted-foreground">2 min ago</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/dashboard/payments">
                  <Button variant="outline" size="sm" className="mt-4 w-full">
                    View All Payments
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Button asChild className="h-20 flex-col gap-2">
                  <Link href="/dashboard/payments/new">
                    <CreditCard className="h-6 w-6" />
                    Create Payment
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-20 flex-col gap-2">
                  <Link href="/dashboard/reports/generate">
                    <TrendingUp className="h-6 w-6" />
                    Generate Report
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-20 flex-col gap-2">
                  <Link href="/dashboard/accounts/new">
                    <DollarSign className="h-6 w-6" />
                    Add Account
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-20 flex-col gap-2">
                  <Link href="/dashboard/settings">
                    <Users className="h-6 w-6" />
                    Manage Users
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Analytics</CardTitle>
              <CardDescription>
                Detailed financial performance metrics and insights.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-6">
                Advanced analytics dashboard coming soon.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Reports</CardTitle>
              <CardDescription>
                Generate and view comprehensive financial reports.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-6">
                Report generation features coming soon.
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
              ? 'text-emerald-500 dark:text-emerald-400' 
              : trend === 'down' 
                ? 'text-rose-500 dark:text-rose-400' 
                : 'text-muted-foreground'
          }>
            {change}
          </span>
          {trend === 'up' && <ArrowUpRight className="ml-1 h-3 w-3 text-emerald-500 dark:text-emerald-400" />}
          {trend === 'down' && <ArrowDownRight className="ml-1 h-3 w-3 text-rose-500 dark:text-rose-400" />}
          <span className="ml-2 text-muted-foreground">{description}</span>
        </div>
      </CardContent>
    </Card>
  );
}