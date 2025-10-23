# Homepage Section Transitions - Quick Guide

## What Was Implemented

✅ **Seamless page-switch transitions** between all homepage sections
✅ **Lenis smooth scroll** integration with GSAP ScrollTrigger
✅ **Premium animations**: fade, slide, scale, blur, and parallax effects
✅ **Reusable components** for easy implementation across the site

## Animation Flow

```
User Scrolls Down
     ↓
Section enters viewport (85% visible)
     ↓
[Fade In] Opacity: 0 → 1
[Slide Up] Y: 120px → 0px
[Scale] 92% → 100%
[Blur] 8px → 0px
     ↓
Section fully visible
     ↓
[Parallax] Content moves slower than scroll
     ↓
Section exits viewport (30% visible)
     ↓
[Fade Out] Opacity: 1 → 0.3
[Slide Up] Y: 0 → -50px
```

## Files Created/Modified

### New Files
- `components/SectionTransition.tsx` - Main transition wrapper
- `lib/hooks/useSectionTransition.ts` - Custom hook for advanced control
- `SECTION_TRANSITIONS.md` - Full documentation
- `TRANSITION_GUIDE.md` - This quick guide

### Modified Files
- `app/page.tsx` - Wrapped all sections with SectionTransition
- `components/LenisScroll.tsx` - Integrated GSAP ScrollTrigger
- `app/globals.css` - Added transition styles

## Testing

1. Run the development server: `npm run dev`
2. Open http://localhost:3000
3. Scroll through the homepage
4. Observe smooth transitions between sections

## Performance

- Hardware acceleration enabled
- Will-change properties optimized
- Backface visibility hidden for smooth rendering
- Scrub animations for 60fps performance

## Customization

Edit `components/SectionTransition.tsx` to adjust:
- Animation timing
- Fade distances
- Scale amounts
- Blur intensity
- Parallax speed

Or use the `useSectionTransition` hook for per-section customization.
