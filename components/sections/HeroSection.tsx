'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Settings, Shield, Lock, CreditCard, MessageSquare, Layers, Sparkles, ArrowRight } from 'lucide-react'

const HeroSection = () => {
  // Orbital animation for icons
  const orbitIcons = [
    { icon: Settings, color: 'from-blue-500 to-cyan-500', delay: 0 },
    { icon: Shield, color: 'from-purple-500 to-pink-500', delay: 1.2 },
    { icon: Lock, color: 'from-slate-500 to-slate-600', delay: 2.4 },
    { icon: CreditCard, color: 'from-orange-500 to-amber-600', delay: 3.6 },
    { icon: MessageSquare, color: 'from-amber-600 to-orange-500', delay: 4.8 },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden w-full bg-[#000033]">
      {/* Vibrant blue gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(0,100,255,0.4)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_60%,rgba(0,80,255,0.3)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,120,255,0.2)_0%,transparent_70%)]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-blue-500/10 backdrop-blur-sm
                       border border-blue-500/20 rounded-full px-4 py-2"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">
                AI-Powered Learning Platform
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Transform Your <br />
              Learning Journey
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mx-auto lg:mx-0">
              Experience the future of education with our cutting-edge LMS platform,
              AI-powered support, and comprehensive learning programs.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 
                         text-white font-semibold rounded-lg hover:from-blue-500 
                         hover:to-blue-400 transition-all duration-300 group"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right - Orbital Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center h-[600px]"
          >
            {/* Center Icon */}
            <div className="relative z-20">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 
                            flex items-center justify-center shadow-2xl shadow-blue-500/30">
                <div className="absolute inset-3 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full" />
                <Layers className="w-20 h-20 text-white relative z-10" strokeWidth={1.5} />
              </div>
            </div>

            {/* Orbital Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Inner ring */}
              <div className="absolute w-80 h-80 border border-blue-500/30 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)]" />
              {/* Outer ring */}
              <div className="absolute w-[450px] h-[450px] border border-blue-400/20 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.2)]" />
            </div>

            {/* Orbiting Icons */}
            {orbitIcons.map((item, index) => {
              const angle = (index * 360) / orbitIcons.length
              const radius = 225 // Distance from center

              return (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    rotate: [angle, angle + 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: item.delay,
                  }}
                >
                  <div
                    style={{
                      transform: `translate(-50%, -50%) translateX(${radius}px)`,
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, -360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: item.delay,
                      }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} 
                                flex items-center justify-center shadow-lg`}
                    >
                      <item.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection