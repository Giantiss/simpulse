'use client';

import { Button } from '@/components/ui/button';
import { HardHat } from 'lucide-react';
import Link from 'next/link';

export function HeroBanner() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl/none">
                Revolutionize Your Construction Site Management
              </h1>
              <p className="max-w-[600px] text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 mx-auto lg:mx-0">
                Streamline operations, enhance safety, and boost productivity with our comprehensive construction management platform.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row justify-center lg:justify-start">
              <Button asChild size="lg" className="inline-flex gap-2 w-full sm:w-auto">
                <Link href="/dashboard">
                  Get Started <HardHat className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="#features">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center order-first lg:order-last">
            <div className="relative h-[250px] w-full sm:h-[300px] md:h-[400px] lg:h-[500px] max-w-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
              <div className="relative h-full w-full bg-[url('https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg')] bg-cover bg-center rounded-xl shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}