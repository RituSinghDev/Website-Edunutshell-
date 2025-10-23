# Visual Flow: Section Transitions

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        Homepage (app/page.tsx)               │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │              LenisScroll Component                  │    │
│  │  • Smooth scroll provider                          │    │
│  │  • GSAP ScrollTrigger integration                  │    │
│  │  • Global scroll management                        │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │         SectionTransition Wrapper                   │    │
│  │  ┌──────────────────────────────────────────────┐  │    │
│  │  │           Hero Section                        │  │    │
│  │  └──────────────────────────────────────────────┘  │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │         SectionTransition Wrapper                   │    │
│  │  ┌──────────────────────────────────────────────┐  │    │
│  │  │           Stats Section                       │  │    │
│  │  └──────────────────────────────────────────────┘  │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │         SectionTransition Wrapper                   │    │
│  │  ┌──────────────────────────────────────────────┐  │    │
│  │  │      Popular Courses Section                  │  │    │
│  │  └──────────────────────────────────────────────┘  │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
│  ... (Partners, Features, Testimonials, Inquiry Form)       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Animation Timeline

```
Scroll Progress: 0% ──────────────────────────────────────► 100%

Section Position:
                    ┌─────────────────────────────────┐
                    │     Section in Viewport         │
                    └─────────────────────────────────┘
                    ▲                                 ▲
                  85%                               15%

Entry Animation (85% → 15%):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Opacity:    0 ═══════════════════════════════════► 1
Y Position: 120px ═══════════════════════════════► 0px
Scale:      0.92 ════════════════════════════════► 1.0
Blur:       8px ═════════════════════════════════► 0px

Active State (15% → 30%):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Parallax:   0 ═══════════════════════════════════► -30px
            (Continuous throughout scroll)

Exit Animation (30% → 0%):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Opacity:    1 ═══════════════════════════════════► 0.3
Y Position: 0 ═══════════════════════════════════► -50px
```

## Component Structure

```
SectionTransition.tsx
│
├─ sectionRef (outer container)
│  │
│  ├─ Animations:
│  │  ├─ Fade In/Out (opacity)
│  │  └─ Slide Up (y position)
│  │
│  └─ contentRef (inner container)
│     │
│     └─ Animations:
│        ├─ Scale (zoom effect)
│        ├─ Blur (depth of field)
│        └─ Parallax (slow movement)
│
└─ Children (actual section content)
```

## Data Flow

```
User Scrolls
     │
     ▼
Lenis Smooth Scroll
     │
     ├─ Updates scroll position
     │
     ▼
GSAP ScrollTrigger
     │
     ├─ Detects section position
     ├─ Calculates progress (0-1)
     │
     ▼
Animation Timeline
     │
     ├─ Updates CSS transforms
     ├─ Updates opacity
     ├─ Updates filters
     │
     ▼
Browser Rendering
     │
     └─ GPU-accelerated animations
        (60fps target)
```

## Performance Optimization

```
┌─────────────────────────────────────────┐
│         Performance Strategy             │
├─────────────────────────────────────────┤
│                                          │
│  Hardware Acceleration:                 │
│  • will-change: transform, opacity      │
│  • transform: translateZ(0)             │
│  • backface-visibility: hidden          │
│                                          │
│  Efficient Animations:                  │
│  • Transform (GPU)                      │
│  • Opacity (GPU)                        │
│  • Filter: blur (GPU)                   │
│                                          │
│  Scrub Animations:                      │
│  • Linked to scroll position            │
│  • No requestAnimationFrame overhead    │
│  • Smooth 60fps performance             │
│                                          │
│  Context Management:                    │
│  • GSAP context for cleanup             │
│  • Automatic memory management          │
│  • No memory leaks                      │
│                                          │
└─────────────────────────────────────────┘
```

## User Experience Flow

```
1. Page Load
   └─ Lenis initializes smooth scroll
   └─ ScrollTriggers set up for each section

2. User Scrolls Down
   └─ Section enters viewport (85%)
      └─ Fade in begins
      └─ Slide up begins
      └─ Scale up begins
      └─ Blur clears
   
3. Section Fully Visible (15%)
   └─ All entry animations complete
   └─ Parallax effect active
   └─ Content fully readable

4. Continue Scrolling
   └─ Parallax creates depth
   └─ Section moves slower than scroll

5. Section Exits (30%)
   └─ Fade out begins
   └─ Slide up accelerates
   └─ Next section enters

6. Repeat for Each Section
   └─ Seamless transitions
   └─ Premium feel maintained
```

## Customization Points

```
SectionTransition.tsx
│
├─ Entry Trigger
│  ├─ start: 'top 85%'  ← Adjust when animation starts
│  └─ end: 'top 15%'    ← Adjust when animation ends
│
├─ Animation Values
│  ├─ y: 120            ← Slide distance
│  ├─ scale: 0.92       ← Initial scale
│  ├─ blur: 8px         ← Blur amount
│  └─ opacity: 0        ← Initial opacity
│
├─ Timing
│  ├─ scrub: 1.8        ← Animation smoothness
│  └─ ease: 'power3'    ← Easing function
│
└─ Exit Animation
   ├─ opacity: 0.3      ← Exit opacity
   └─ y: -50            ← Exit slide distance
```

---

**Visual Guide Complete**
Use this diagram to understand the flow and architecture of the section transitions.
