'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import { Users, BookOpen, Globe, Award, TrendingUp, Star } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'

const StatsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [startCount, setStartCount] = useState(false)

  const stats = [
    {
      icon: Users,
      number: 15000,
      suffix: '+',
      label: 'Active Students',
      description: 'Learning worldwide',
      color: 'text-accent-blue',
    },
    {
      icon: BookOpen,
      number: 750,
      suffix: '+',
      label: 'Courses Available',
      description: 'Across all domains',
      color: 'text-accent-blue',
    },
    {
      icon: Globe,
      number: 85,
      suffix: '+',
      label: 'Countries Reached',
      description: 'Global presence',
      color: 'text-accent-gray',
    },
    {
      icon: Award,
      number: 12000,
      suffix: '+',
      label: 'Certificates Issued',
      description: 'Career advancement',
      color: 'text-yellow-400',
    },
    {
      icon: TrendingUp,
      number: 98,
      suffix: '%',
      label: 'Completion Rate',
      description: 'Student success',
      color: 'text-accent-blue',
    },
    {
      icon: Star,
      number: 4.9,
      suffix: '/5',
      label: 'Average Rating',
      description: 'Student satisfaction',
      color: 'text-accent-blue',
    },
  ]

  useEffect(() => {
    if (isInView) {
      setStartCount(true)
    }
  }, [isInView])



  return (
    <section ref={ref} className="section-padding bg-dark-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Trusted by</span> <span className="gradient-text">Thousands</span> <span className="text-white">Worldwide</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Join our growing community of learners and professionals who are transforming
            their careers through our comprehensive educational platform.
          </p>
        </motion.div>

        {/* Stats Carousel - Modern Card Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="stats-swiper"
          >
            {stats.map((stat, index) => (
              <SwiperSlide key={index}>
                <div className="relative bg-gradient-to-br from-dark-card/80 to-dark-card/40 backdrop-blur-xl border border-white/5 rounded-3xl p-4 hover:border-white/10 transition-all duration-300 group h-full">
                  {/* Header with label and icon */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-text-secondary text-xs font-medium">
                      {stat.label}
                    </h3>
                    <div className={`p-1.5 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/5`}>
                      <stat.icon className={`w-3.5 h-3.5 ${stat.color}`} />
                    </div>
                  </div>

                  {/* Main value */}
                  <div className="mb-1">
                    <div className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {startCount ? (
                        <CountUp
                          end={stat.number}
                          duration={2.5}
                          decimals={stat.suffix === '/5' ? 1 : 0}
                          suffix={stat.suffix}
                        />
                      ) : (
                        `0${stat.suffix}`
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-muted text-xs">
                    {stat.description}
                  </p>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-3xl transition-all duration-300" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Achievement Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              'ISO 27001 Certified',
              'GDPR Compliant',
              'SOC 2 Type II',
              'Award Winner 2024',
            ].map((badge, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-dark-card/50 backdrop-blur-sm
                           border border-dark-border rounded-full px-4 py-2"
              >
                <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse" />
                <span className="text-text-secondary text-sm">{badge}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection