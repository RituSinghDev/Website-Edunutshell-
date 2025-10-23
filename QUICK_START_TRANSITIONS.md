# Quick Start: Section Transitions

## 🚀 Ready to Use!

The homepage transitions are already implemented and working. Just run:

```bash
npm run dev
```

Then visit http://localhost:3000 and scroll to see the magic! ✨

## 📦 What's Included

All sections now have smooth page-switch transitions:
- Hero → Stats → Popular Courses → Partners → Features → Testimonials → Inquiry Form

## 🎨 How It Works

Each section automatically:
1. **Fades in** as you scroll down
2. **Slides up** smoothly into view
3. **Scales** from 92% to 100%
4. **Blurs** from 8px to sharp
5. **Parallaxes** for depth
6. **Fades out** when scrolling past

## 🔧 Add to Other Pages

Want these transitions on other pages? Easy!

```tsx
import SectionTransition from '@/components/SectionTransition'

export default function MyPage() {
  return (
    <div>
      <SectionTransition id="section-1">
        <YourSection1 />
      </SectionTransition>
      
      <SectionTransition id="section-2">
        <YourSection2 />
      </SectionTransition>
    </div>
  )
}
```

## ⚙️ Customize Animations

Use the hook for custom settings:

```tsx
import { useSectionTransition } from '@/lib/hooks/useSectionTransition'

const sectionRef = useRef(null)
const contentRef = useRef(null)

useSectionTransition(sectionRef, contentRef, {
  fadeDistance: 150,      // How far to slide
  scaleFrom: 0.9,         // Starting scale
  blurAmount: 10,         // Blur intensity
  parallaxDistance: -40,  // Parallax movement
  scrubDuration: 2,       // Animation smoothness
})
```

## 🐛 Debug Mode

To see animation trigger points, edit `components/SectionTransition.tsx`:

```tsx
scrollTrigger: {
  trigger: section,
  start: 'top 85%',
  end: 'top 15%',
  scrub: 1.8,
  markers: true, // ← Uncomment this line
}
```

## 📚 More Info

- Full docs: `SECTION_TRANSITIONS.md`
- Visual guide: `TRANSITION_GUIDE.md`

## 💡 Tips

- Transitions work best with distinct section backgrounds
- Keep sections at least 50vh tall for best effect
- Adjust `scrub` values for faster/slower animations
- Use `markers: true` to fine-tune trigger points

Enjoy your premium transitions! 🎉
