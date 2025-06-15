'use client'

import Image from 'next/image'
import { GradientButton } from '@/components/Button/Gradient'
import { motion } from 'framer-motion'
import { DesignApproach } from '@/containers/DesignApproach'
import WorkExperience from '@/containers/WorkExperience'
import WorkTogether from '@/containers/WorkTogether'

export default function Home() {
  return (
    <div className="bg-white flex flex-col text-black">
      <main>
        <section className="min-h-screen relative flex items-center container mx-auto px-4 w-full overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full z-10 relative">
            <div className="order-2 lg:order-1">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Making Your Brand{' '}
                <motion.span
                  className="text-transparent bg-clip-text text-gradient"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Shine
                </motion.span>
                <br />
                <motion.span className="font-normal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.1 }}>
                  with Great{' '}
                  <motion.span
                    className="text-transparent bg-clip-text text-gradient font-bold"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                  >
                    Design
                  </motion.span>
                </motion.span>
              </motion.h1>

              <motion.p
                className="mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.2 }}
              >
                Specialising in Branding, Graphic Design, Logo Creation, Custom Web Design and Marketing Social media for Modern Businesses.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GradientButton linkProps={{ href: 'https://www.linkedin.com/in/dashmills0609/', target: '_blank', rel: 'noopener noreferrer' }}>
                  Get Started
                </GradientButton>
              </motion.div>
            </div>

            <motion.div
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 50 }}
            >
              <motion.div
                className="relative w-full max-w-md lg:max-w-full"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }}
              >
                <Image src="/hero-image.svg" alt="Hero Image" width={600} height={400} className="w-full h-auto" priority />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <WorkExperience />
        <WorkTogether />
        <DesignApproach />
      </main>
    </div>
  )
}
