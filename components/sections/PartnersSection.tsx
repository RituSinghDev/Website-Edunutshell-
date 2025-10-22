'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'

const PartnersSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const partners = [
    {
      name: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      fallback: 'MS'
    },
    {
      name: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      fallback: 'G'
    },
    {
      name: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      fallback: 'A'
    },
    {
      name: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
      fallback: 'IBM'
    },
    {
      name: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
      fallback: 'O'
    },
    {
      name: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
      fallback: 'SF'
    },
    {
      name: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg',
      fallback: 'Ad'
    },
    {
      name: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
      fallback: 'M'
    },
    {
      name: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
      fallback: 'N'
    },
    {
      name: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
      fallback: 'S'
    },
  ]

  const universities = [
    {
      name: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Harvard_University_logo.svg',
      fallback: 'HU'
    },
    {
      name: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Stanford_University_Logo.svg',
      fallback: 'SU'
    },
    {
      name: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg',
      fallback: 'MIT'
    },
    {
      name: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/240px-Oxford-University-Circlet.svg.png',
      fallback: 'OX'
    },
    {
      name: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/University_of_Cambridge_coat_of_arms.svg/240px-University_of_Cambridge_coat_of_arms.svg.png',
      fallback: 'CAM'
    },
    {
      name: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Yale_University_logo.svg',
      fallback: 'YU'
    },
    {
      name: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/240px-Princeton_seal.svg.png',
      fallback: 'PU'
    },
    {
      name: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Columbia_University_logo.svg',
      fallback: 'CU'
    },
    {
      name: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/240px-Seal_of_University_of_California%2C_Berkeley.svg.png',
      fallback: 'UCB'
    },
    {
      name: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Caltech_logo.svg',
      fallback: 'CIT'
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            <span className="text-white">Trusted by </span>
            <span className="gradient-text">Industry Leaders and Universities</span>
            <br />
            <span className="text-white">across the world</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Join the ranks of top companies and institutions that trust EDUNUTSHELL
            for their learning and development needs.
          </p>
        </motion.div>

        {/* Partners Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="partners-swiper"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center h-24 bg-dark-card/50 
                              border border-dark-border rounded-xl hover:border-accent-blue/30
                              transition-all duration-300 group p-3 space-y-2">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-8 max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                      // Fallback to text logo if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallbackDiv = document.createElement('div');
                      fallbackDiv.className = 'w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300';
                      fallbackDiv.innerHTML = `<span class="text-white font-bold text-xs">${partner.fallback}</span>`;
                      target.parentNode?.appendChild(fallbackDiv);
                    }}
                  />
                  <span className="text-text-secondary text-sm font-medium tracking-wide font-mono group-hover:text-accent-blue transition-colors duration-300">
                    {partner.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Universities Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: true,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="partners-swiper"
          >
            {universities.map((university, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center h-24 bg-dark-card/50 
                              border border-dark-border rounded-xl hover:border-accent-blue/30
                              transition-all duration-300 group p-3 space-y-2">
                  <img
                    src={university.logo}
                    alt={university.name}
                    className="max-h-12 max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                      // Fallback to text logo if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallbackDiv = document.createElement('div');
                      fallbackDiv.className = 'w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300';
                      fallbackDiv.innerHTML = `<span class="text-white font-bold text-sm">${university.fallback}</span>`;
                      target.parentNode?.appendChild(fallbackDiv);
                    }}
                  />
                  <span className="text-text-secondary text-sm font-medium tracking-wide font-mono group-hover:text-accent-blue transition-colors duration-300">
                    {university.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

export default PartnersSection