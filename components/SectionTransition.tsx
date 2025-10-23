'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SectionTransitionProps {
  children: ReactNode
  id: string
  className?: string
}

export default function SectionTransition({ children, id, className = '' }: SectionTransitionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      // Main timeline for enter/exit animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          end: 'bottom 15%',
          scrub: 1.2,
          onUpdate: (self) => {
            // Smooth transitions for both directions
            const progress = self.progress
            
            // Fade in from bottom (scrolling down)
            if (progress < 0.15) {
              gsap.set(section, {
                opacity: progress / 0.15,
                y: 60 * (1 - progress / 0.15),
              })
            }
            // Fully visible in middle
            else if (progress >= 0.15 && progress <= 0.85) {
              gsap.set(section, {
                opacity: 1,
                y: 0,
              })
            }
            // Fade out to top (scrolling down past section)
            else if (progress > 0.85) {
              const fadeProgress = (progress - 0.85) / 0.15
              gsap.set(section, {
                opacity: 1 - fadeProgress,
                y: -30 * fadeProgress,
              })
            }
          },
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      id={id}
      className={`section-transition ${className}`}
      style={{
        willChange: 'transform, opacity',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {children}
    </div>
  )
}
