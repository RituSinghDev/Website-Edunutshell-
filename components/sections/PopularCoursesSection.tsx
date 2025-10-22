'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useCourses } from '@/lib/hooks/useCourses'

const PopularCoursesSection = () => {
  const ref = useRef(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isPaused, setIsPaused] = useState(false)
  const { courses, isLoading } = useCourses()

  // Continuous infinite scroll animation
  useEffect(() => {
    const wrapper = scrollRef.current
    if (!wrapper || !isInView) return

    const getCardWidth = () => {
      const screenWidth = window.innerWidth
      if (screenWidth < 640) return 300
      if (screenWidth < 1024) return 320
      return 340
    }

    const cardWidth = getCardWidth()
    const totalCards = courses.length
    const scrollWidth = totalCards * cardWidth
    const speed = 30 // pixels per second

    let animationId: number
    let currentPosition = 0

    const animate = () => {
      if (!isPaused) {
        currentPosition -= speed / 60 // 60fps
        
        // Reset position seamlessly when one set scrolls out
        if (Math.abs(currentPosition) >= scrollWidth) {
          currentPosition = 0
        }

        wrapper.style.transform = `translate3d(${currentPosition}px, 0px, 0px)`
      }

      animationId = requestAnimationFrame(animate)
    }

    const startDelay = setTimeout(() => {
      animationId = requestAnimationFrame(animate)
    }, 500)

    const handleResize = () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      currentPosition = 0
      animationId = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(startDelay)
      window.removeEventListener('resize', handleResize)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isInView, isPaused, courses.length])

  // Pause on hover
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  // Show loading state if courses are still loading
  if (isLoading || courses.length === 0) {
    return (
      <section ref={ref} className="section-padding bg-dark-secondary">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular <span className="gradient-text">Courses</span>
            </h2>
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-blue"></div>
                <span className="ml-3 text-text-secondary">Loading courses...</span>
              </div>
            ) : (
              <p className="text-text-secondary">No courses available at the moment.</p>
            )}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={ref} className="py-8 md:py-12 bg-dark-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Popular</span> <span className="gradient-text">Courses</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Discover our most popular courses that have helped thousands of students
            advance their careers and master new skills.
          </p>
        </motion.div>

        {/* Horizontal Auto-scroll Courses */}
        <div className="relative overflow-hidden w-full">
          {/* Gradient Fade Effects */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-dark-secondary to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-dark-secondary to-transparent z-10 pointer-events-none"></div>

          <div
            className="auto-scroll-container w-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              ref={scrollRef}
              className="flex space-x-5 md:space-x-6 pb-4 px-2 md:px-4"
              style={{
                width: 'max-content',
                willChange: 'transform',
                backfaceVisibility: 'hidden'
              }}
            >
              {/* Triple courses for seamless infinite loop */}
              {[...courses, ...courses, ...courses].map((course, index) => (
                <motion.div
                  key={`${course._id}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: (index % courses.length) * 0.05 }}
                  className="group cursor-pointer flex-shrink-0"
                  whileHover={{ y: -4 }}
                  style={{
                    width: 'clamp(260px, 22vw, 300px)',
                    minWidth: '260px',
                    maxWidth: '300px'
                  }}
                >
                  {/* Modern Card with Glass Effect */}
                  <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-md border border-slate-700/50 hover:border-accent-blue/60 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-accent-blue/20">
                    {/* Image Section */}
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={course.image || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop'}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    </div>

                    {/* Content Section */}
                    <div className="p-4">
                      {/* Course Title */}
                      <h3 className="text-base font-bold text-white mb-2 line-clamp-2 min-h-[2.5rem] group-hover:text-accent-blue transition-colors duration-300">
                        {course.title}
                      </h3>

                      {/* Course Description */}
                      <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed mb-4">
                        {course.description}
                      </p>

                      {/* CTA Button */}
                      <Link
                        href={`/courses/${course._id}`}
                        className="inline-flex items-center justify-center w-full bg-gradient-to-r from-accent-blue to-blue-600 text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:from-blue-600 hover:to-accent-blue hover:shadow-lg hover:shadow-accent-blue/50 group/btn"
                      >
                        <span className="mr-2">Explore Course</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Courses Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8"
        >
          <Link href="/courses" className="btn-secondary inline-flex">
            <span className="mr-3">View All Courses</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default PopularCoursesSection