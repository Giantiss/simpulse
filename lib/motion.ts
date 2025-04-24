'use client';

import React from 'react';
import { useEffect, useState, ReactNode, useRef } from 'react';
import { cn } from '@/lib/utils';

type MotionProps = {
  children: ReactNode;
  initial?: {
    opacity?: number;
    y?: number;
    x?: number;
  };
  whileInView?: {
    opacity?: number;
    y?: number;
    x?: number;
  };
  transition?: {
    duration?: number;
    delay?: number;
  };
  viewport?: {
    once?: boolean;
  };
  className?: string;
};

export function motion(Component: any) {
  // For div elements
  if (Component === 'div') {
    return function MotionDiv({
      children,
      initial,
      whileInView,
      transition,
      viewport,
      className,
      ...props
    }: MotionProps & React.HTMLAttributes<HTMLDivElement>) {
      const [isVisible, setIsVisible] = useState(false);
      const ref = useRef<HTMLDivElement>(null);

      useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              if (viewport?.once) {
                observer.disconnect();
              }
            } else if (!viewport?.once) {
              setIsVisible(false);
            }
          },
          { threshold: 0.1 }
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
      }, [viewport?.once]);

      const motionStyles = {
        opacity: isVisible
          ? whileInView?.opacity
          : initial?.opacity,
        transform: `translate(${isVisible ? (whileInView?.x || 0) : (initial?.x || 0)}px, ${
          isVisible ? (whileInView?.y || 0) : (initial?.y || 0)
        }px)`,
        transition: `all ${transition?.duration || 0.3}s ease-out ${transition?.delay || 0}s`,
      };

      return React.createElement('div', {
        ref,
        className,
        style: motionStyles,
        ...props,
        children
      });
    };
  }

  // Return unmodified component if not handled
  return Component;
}

motion.div = motion('div');