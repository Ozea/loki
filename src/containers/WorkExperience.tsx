'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const ParticlesBackground = dynamic(() => import('@/components/ParticlesBackground'), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />,
})

const TimelineExperience = () => {
  const timelineItems = [
    {
      organization: 'Technical University Dublin',
      period: 'Sep 2021 - May 2025',
      title: 'Bachelors of Arts',
      description: 'Creative digital media field',
    },
    {
      organization: 'GagaMuller',
      period: 'February 2024 - July 2024',
      title: 'Executive Marketing',
      description: 'Worked on designing brochures, business cards, illustration library, brand identity, video editing, filming and more',
    },
    {
      organization: 'SR Paint',
      period: 'December 2024 - Ongoing',
      title: 'Digital & Visual Designer',
      description:
        "At SR Paint, I led the design and development of the company's website, created social media content, and brand identity to strengthen the brand's online presence.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const lineVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  }

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (index: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.7 + index * 0.3,
        duration: 0.5,
        type: 'spring',
        stiffness: 200,
      },
    }),
  }

  return (
    <div className="relative">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      <section className="relative max-w-5xl mx-auto px-4 py-12 font-sans overflow-hidden">
        <motion.div
          className="flex flex-col items-center"
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            className="block h-[5px] w-[70px] gradient-background"
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={{
              hidden: { width: 0 },
              visible: { width: 70 },
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.h1
            className="text-3xl px-5 mb-12 text-gray-900 text-center mt-3"
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            My{' '}
            <span className="bg-clip-text text-gradient pr-1">
              Work <i>Experience</i>{' '}
            </span>
          </motion.h1>
        </motion.div>

        <div className="relative mt-5">
          {/* Animated dashed timeline line */}
          <motion.div
            className="block h-[calc(100%-32%)] left-[8%] absolute md:left-1/2 md:h-[calc(100%-30%)] w-0.5 transform -translate-x-1/2 bg-gradient-to-b from-purple-500 to-pink-500"
            style={{
              backgroundImage: 'linear-gradient(to bottom, #9CA3AF 50%, transparent 50%)',
              backgroundSize: '1px 8px',
              backgroundRepeat: 'repeat-y',
            }}
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          <motion.div
            className="space-y-12 max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {timelineItems.map((item, index) => (
              <motion.div key={index} className="flex flex-row-reverse md:flex-col md:flex-row w-full items-start relative" variants={itemVariants}>
                <motion.div className="w-full md:w-1/2 md:pr-8" transition={{ duration: 0.2 }}>
                  <h2 className="text-xl font-semibold text-gray-900">{item.organization}</h2>
                  <p className="text-gray-400">{item.period}</p>
                  <div className="md:hidden mt-2">
                    <h2 className="text-xl font-medium text-gray-900">{item.title}</h2>
                    <p className="text-gray-400 mt-1">{item.description}</p>
                  </div>
                </motion.div>

                {/* Animated dot */}
                <div className="flex w-16 justify-center">
                  <motion.div className="relative z-10 w-8 h-8" custom={index} variants={dotVariants}>
                    {index % 2 === 0 ? (
                      <Image src="/gradient-dot.svg" alt="Timeline dot" width={30} height={30} className="w-full h-full" />
                    ) : (
                      <Image src="/regular-dot.svg" alt="Timeline dot" width={30} height={30} className="w-full h-full" />
                    )}
                  </motion.div>
                </div>

                <motion.div className="hidden md:block w-1/2 pl-8" transition={{ duration: 0.2 }}>
                  <h2 className="text-xl font-medium text-gray-900">{item.title}</h2>
                  <p className="text-gray-400 mt-1">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TimelineExperience
