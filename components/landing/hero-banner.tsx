'use client';

import { Button } from '@/components/ui/button';
import { CreditCard, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function HeroBanner() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
                <TrendingUp className="mr-2 h-4 w-4" />
                Trusted by 10,000+ businesses
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl/none">
                Modern Financial Management for Growing Businesses
              </h1>
              <p className="max-w-[600px] text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 mx-auto lg:mx-0">
                Streamline payments, manage cash flow, and scale your business with our comprehensive fintech platform. Built for the modern economy.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row justify-center lg:justify-start">
              <Button asChild size="lg" className="inline-flex gap-2 w-full sm:w-auto">
                <Link href="/dashboard">
                  Start Free Trial <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="#features">
                  See How It Works
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-8 text-sm text-muted-foreground justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                No setup fees
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Cancel anytime
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                24/7 support
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center order-first lg:order-last">
            <div className="relative h-[250px] w-full sm:h-[300px] md:h-[400px] lg:h-[500px] max-w-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
              <div className="relative h-full w-full bg-[url('https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg')] bg-cover bg-center rounded-xl shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}