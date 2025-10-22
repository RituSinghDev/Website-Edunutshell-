'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Brain,
  Users,
  BookOpen,
  Award,
  MessageSquare,
  BarChart3
} from 'lucide-react'

const FeaturesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Personalized learning paths with intelligent recommendations and adaptive content.',
    },
    {
      icon: Users,
      title: 'Collaborative Learning',
      description: 'Connect with peers, join study groups, and learn together in virtual classrooms.',
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Courses',
      description: 'Access 750+ courses across multiple domains with expert-curated content.',
    },
    {
      icon: Award,
      title: 'Industry Certifications',
      description: 'Earn recognized certificates that boost your career prospects.',
    },
    {
      icon: MessageSquare,
      title: '24/7 AI Support',
      description: 'Get instant help with our intelligent chatbot and expert mentors.',
    },
    {
      icon: BarChart3,
      title: 'Progress Tracking',
      description: 'Monitor your learning journey with detailed analytics and insights.',
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-[#0a0a0a]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Powerful <span className="gradient-text">Features</span> for Modern Learning
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Container - Flat Style */}
              <div className="relative mb-6">
                {/* Outer glow */}
                <div className="absolute inset-0 bg-slate-700/20 rounded-full blur-2xl scale-110" />

                {/* Main Icon Circle */}
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-b from-slate-600 to-slate-700 
                              flex items-center justify-center shadow-2xl
                              transform transition-all duration-300 
                              group-hover:scale-105 group-hover:shadow-slate-600/50">
                  {/* Top highlight */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-6 
                                bg-gradient-to-b from-slate-400/40 to-transparent 
                                rounded-full blur-md" />

                  {/* Icon */}
                  <feature.icon className="w-10 h-10 text-slate-200 relative z-10" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection