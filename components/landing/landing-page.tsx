'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HardHat, Package2, Users, MessageSquare, ChevronRight, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { HeroBanner } from './hero-banner';
import { FeatureSection } from './feature-section';
import { TestimonialSection } from './testimonial-section';
import { FooterSection } from './footer-section';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <HardHat className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SitePulse</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
            <Button asChild variant="outline" size="sm">
              <Link href="/dashboard">
                Login
              </Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/dashboard">
                Get Started
              </Link>
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Mobile menu */}
        <div className={cn(
          "fixed inset-0 top-16 z-50 flex flex-col bg-background md:hidden",
          mobileMenuOpen ? "block" : "hidden"
        )}>
          <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-4 p-6">
            <Link 
              href="#features" 
              className="text-base font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#testimonials" 
              className="text-base font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              href="#contact" 
              className="text-base font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild variant="outline" className="w-full mt-2">
              <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                Login
              </Link>
            </Button>
            <Button asChild className="w-full mt-2">
              <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full">
        <HeroBanner />
        <FeatureSection />
        <TestimonialSection />
      </main>

      <FooterSection />
    </div>
  );
}