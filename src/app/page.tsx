'use client'

import Image from 'next/image'
import { GradientButton } from '@/components/Button/Gradient'
import { motion, Variants } from 'framer-motion'
import { useEffect, useState } from 'react'
import { DesignApproach } from '@/containers/DesignApproach'
import WorkExperience from '@/containers/WorkExperience'
import WorkTogether from '@/containers/WorkTogether'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.5,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
        delay: 0.2,
      },
    },
  }

  return (
    <div className="bg-white flex flex-col text-black">
      <main>
        <motion.section
          className="min-h-screen flex items-center container mx-auto px-4 w-full"
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
            <motion.div className="order-2 lg:order-1" variants={containerVariants}>
              <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" variants={itemVariants}>
                <motion.span variants={itemVariants}>
                  Making Your Brand <span className="text-transparent bg-clip-text text-gradient">Shine</span>
                </motion.span>
                <br />
                <motion.span className="font-normal" variants={itemVariants}>
                  with Great <span className="text-transparent bg-clip-text text-gradient font-bold">Design</span>
                </motion.span>
              </motion.h1>

              <motion.p className="mb-8 max-w-lg" variants={itemVariants}>
                Specialising in Branding, Graphic Design, Logo Creation, Custom Web Design and Marketing Social media for Modern Businesses.
              </motion.p>

              <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <GradientButton href="/get-started">Get Started</GradientButton>
              </motion.div>
            </motion.div>

            <motion.div className="order-1 lg:order-2 flex justify-center lg:justify-end" variants={imageVariants}>
              <motion.div
                className="relative w-full max-w-md lg:max-w-full"
                initial={{ rotate: -5 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <Image src="/hero-image.svg" alt="Hero Image" width={600} height={400} className="w-full h-auto" priority />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        <WorkExperience />
        <WorkTogether />
        <DesignApproach />
      </main>
    </div>
  )
}
