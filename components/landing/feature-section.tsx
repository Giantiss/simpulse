'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, TrendingUp, Shield, Zap } from 'lucide-react';

const features = [
  {
    title: 'Smart Payments',
    description: 'Accept payments globally with intelligent routing and fraud protection.',
    icon: CreditCard,
    color: 'text-blue-500',
    bgColor: 'bg-blue-100 dark:bg-blue-900/20',
  },
  {
    title: 'Financial Analytics',
    description: 'Real-time insights and forecasting to optimize your cash flow.',
    icon: TrendingUp,
    color: 'text-green-500',
    bgColor: 'bg-green-100 dark:bg-green-900/20',
  },
  {
    title: 'Bank-Grade Security',
    description: 'Enterprise-level security with SOC 2 compliance and encryption.',
    icon: Shield,
    color: 'text-red-500',
    bgColor: 'bg-red-100 dark:bg-red-900/20',
  },
  {
    title: 'Instant Transfers',
    description: 'Lightning-fast money movement with real-time settlement.',
    icon: Zap,
    color: 'text-amber-500',
    bgColor: 'bg-amber-100 dark:bg-amber-900/20',
  },
];

export function FeatureSection() {
  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 bg-muted/40">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Everything You Need to Scale Your Business
          </h2>
          <p className="mx-auto max-w-[700px] text-base sm:text-lg text-gray-500 dark:text-gray-400">
            Powerful financial tools designed for modern businesses. From payments to analytics, we've got you covered.
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="relative overflow-hidden h-full transition-transform hover:scale-105">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${feature.bgColor}`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl leading-tight">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm sm:text-base">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}