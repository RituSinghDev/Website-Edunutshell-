# Seamless Section Transitions

## Overview
The homepage now features premium page-switch transitions between sections, creating a fluid, modern experience similar to sites like suno.com or unlox.com.

## Features
- **Smooth Scroll**: Powered by Lenis for buttery-smooth scrolling
- **GSAP ScrollTrigger**: Advanced scroll-based animations
- **Fade + Slide**: Each section fades in and slides up as you scroll
- **Depth Effect**: Subtle scale and blur effects create a sense of depth
- **Fade Out**: Sections gracefully fade out as you scroll past them

## Sections with Transitions
1. Hero Section
2. Stats Section
3. Popular Courses Section
4. Partners Section
5. Features Section
6. Testimonials Section
7. Student Inquiry Form

## Technical Implementation

### Components & Hooks
- `LenisScroll.tsx` - Smooth scroll provider with GSAP integration
- `SectionTransition.tsx` - Reusable transition wrapper component
- `useSectionTransition.ts` - Custom hook for advanced transition control

### Animation Details
- **Entry Animation**: Fade in + slide up (120px) with blur effect
- **Scale Effect**: Subtle zoom from 92% to 100%
- **Exit Animation**: Fade out + slide up when scrolling past
- **Timing**: 1.5-1.8s scrub duration for smooth, responsive feel

### Customization
To adjust animation parameters, edit `components/SectionTransition.tsx`:
- `start: 'top 85%'` - When animation starts
- `end: 'top 15%'` - When animation completes
- `scrub: 1.8` - Animation smoothness (higher = smoother)
- `y: 120` - Vertical slide distance
- `scale: 0.92` - Initial scale value

### Advanced Usage with Hook
For custom sections, use the `useSectionTransition` hook:

```tsx
import { useRef } from 'react'
import { useSectionTransition } from '@/lib/hooks/useSectionTransition'

function CustomSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  
  useSectionTransition(sectionRef, contentRef, {
    fadeDistance: 150,
    scaleFrom: 0.9,
    blurAmount: 10,
    parallaxDistance: -40,
    fadeOutOpacity: 0.2,
    scrubDuration: 2,
  })
  
  return (
    <section ref={sectionRef}>
      <div ref={contentRef}>
        {/* Your content */}
      </div>
    </section>
  )
}
```

### Debugging
Uncomment `markers: true` in ScrollTrigger config to see trigger points.

## Browser Support
- Modern browsers with GSAP and Lenis support
- Hardware acceleration enabled for optimal performance
- Fallback to standard scroll on older browsers
