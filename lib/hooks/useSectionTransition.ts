'use client'

import { useEffect, RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface TransitionConfig {
  fadeDistance?: number
  scaleFrom?: number
  blurAmount?: number
  parallaxDistance?: number
  fadeOutOpacity?: number
  scrubDuration?: number
}

export function useSectionTransition(
  sectionRef: RefObject<HTMLElement>,
  contentRef: RefObject<HTMLElement>,
  config: TransitionConfig = {}
) {
  const {
    fadeDistance = 120,
    scaleFrom = 0.92,
    blurAmount = 8,
    parallaxDistance = -30,
    fadeOutOpacity = 0.3,
    scrubDuration = 1.8,
  } = config

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    if (!section || !content) return

    const ctx = gsap.context(() => {
      // Main fade-in + slide animation
      gsap.fromTo(
        section,
        { opacity: 0, y: fadeDistance },
        {
          opacity: 1,
          y: 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            end: 'top 15%',
            scrub: scrubDuration,
          },
        }
      )

      // Scale and blur effect
      gsap.fromTo(
        content,
        { scale: scaleFrom, filter: `blur(${blurAmount}px)` },
        {
          scale: 1,
          filter: 'blur(0px)',
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            end: 'top 25%',
            scrub: 1.5,
          },
        }
      )

      // Parallax effect
      gsap.to(content, {
        y: parallaxDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      })

      // Fade out when scrolling past
      gsap.to(section, {
        opacity: fadeOutOpacity,
        y: -50,
        ease: 'power2.in',
        scrollTrigger: {
          trigger: section,
          start: 'bottom 30%',
          end: 'bottom top',
          scrub: 1.5,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [
    fadeDistance,
    scaleFrom,
    blurAmount,
    parallaxDistance,
    fadeOutOpacity,
    scrubDuration,
  ])
}
