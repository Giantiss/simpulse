'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO',
    company: 'TechStart Inc',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    content: 'FinFlow transformed our payment processing. We reduced transaction costs by 40% and improved cash flow visibility.',
  },
  {
    name: 'Marcus Johnson',
    role: 'CFO',
    company: 'GrowthCorp',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    content: 'The analytics dashboard gives us insights we never had before. Financial forecasting has never been easier.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Finance Director',
    company: 'ScaleUp Solutions',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    content: 'Security and compliance were our biggest concerns. FinFlow exceeded our expectations on both fronts.',
  },
];

export function TestimonialSection() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Trusted by Finance Leaders
          </h2>
          <p className="mx-auto max-w-[700px] text-base sm:text-lg text-gray-500 dark:text-gray-400">
            See what finance professionals are saying about FinFlow.
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="relative overflow-hidden h-full transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-12 w-12 border-2 border-muted">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10">{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-base sm:text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground leading-tight">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground leading-tight">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}