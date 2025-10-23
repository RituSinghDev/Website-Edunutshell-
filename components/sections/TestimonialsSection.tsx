'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'


// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const TestimonialsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      handle: '@sarahjohnson',
      role: 'Software Engineer',
      image: '/api/placeholder/80/80',
      text: 'EDUNUTSHELL transformed my career completely. The AI-powered learning paths helped me master full-stack development in just 6 months. The platform is intuitive and the support is exceptional.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      handle: '@michaelchen',
      role: 'Data Scientist',
      image: '/api/placeholder/80/80',
      text: 'The quality of courses and the interactive learning experience is unmatched. I went from a complete beginner to landing my dream job in data science. Highly recommended!',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      handle: '@emilyrodriguez',
      role: 'UX Designer',
      image: '/api/placeholder/80/80',
      text: 'What sets EDUNUTSHELL apart is the personalized learning experience. The AI recommendations were spot-on, and the community support made learning enjoyable and effective.',
    },
    {
      id: 4,
      name: 'David Kim',
      handle: '@davidkim',
      role: 'Product Manager',
      image: '/api/placeholder/80/80',
      text: 'The comprehensive curriculum and real-world projects prepared me perfectly for my current role. The certification I earned here opened doors I never thought possible.',
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      handle: '@lisathompson',
      role: 'Marketing Specialist',
      image: '/api/placeholder/80/80',
      text: 'Flexible learning schedule and top-notch content quality. I could learn at my own pace while working full-time. The investment in my education paid off tremendously.',
    },
  ]

  return (
    <section ref={ref} className="py-8 md:py-12 bg-dark-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">What Our</span> <span className="gradient-text">Students</span> <span className="text-white">Say</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Hear from thousands of successful learners
            who have transformed their careers with EDUNUTSHELL.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            slidesPerGroup={1}
            watchSlidesProgress={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-neon-blue/30',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-neon-blue',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
            className="testimonials-swiper pb-10"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <div className="flex flex-col h-full min-h-[180px] bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-neon-blue/30 transition-all duration-300">
                  {/* Header with Profile */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-xs">
                        {testimonial.handle}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-white text-sm leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: '4.9/5', label: 'Average Rating' },
              { metric: '50K+', label: 'Reviews' },
              { metric: '98%', label: 'Would Recommend' },
              { metric: '95%', label: 'Course Completion' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                  {stat.metric}
                </div>
                <div className="text-text-secondary text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .testimonials-swiper {
          overflow: hidden !important;
        }
        .testimonials-swiper .swiper-wrapper {
          display: flex !important;
        }
        .testimonials-swiper .swiper-slide {
          height: auto !important;
          flex-shrink: 0 !important;
        }
        .testimonials-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        .testimonials-swiper .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          transform: scale(1.2) !important;
        }
        @media (min-width: 1024px) {
          .testimonials-swiper .swiper-slide {
            width: calc((100% - 60px) / 3) !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .testimonials-swiper .swiper-slide {
            width: calc((100% - 30px) / 2) !important;
          }
        }
      `}</style>
    </section>
  )
}

export default TestimonialsSection