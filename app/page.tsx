'use client'

import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import PopularCoursesSection from '@/components/sections/PopularCoursesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import PartnersSection from '@/components/sections/PartnersSection'
import StudentInquiryForm from '@/components/sections/StudentInquiryForm'
import SectionTransition from '@/components/SectionTransition'

export default function Home() {
  return (
    <div className="pt-16 w-full bg-dark-primary" style={{ overflow: 'hidden' }}>
      <SectionTransition id="hero">
        <HeroSection />
      </SectionTransition>
      
      <SectionTransition id="stats">
        <StatsSection />
      </SectionTransition>
      
      <SectionTransition id="popular-courses">
        <PopularCoursesSection />
      </SectionTransition>
      
      <SectionTransition id="partners">
        <PartnersSection />
      </SectionTransition>
      
      <SectionTransition id="features">
        <FeaturesSection />
      </SectionTransition>
      
      <SectionTransition id="testimonials">
        <TestimonialsSection />
      </SectionTransition>
      
      <SectionTransition id="inquiry-form">
        <StudentInquiryForm />
      </SectionTransition>
    </div>
  )
}