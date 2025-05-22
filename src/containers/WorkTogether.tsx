import React from 'react'
import Link from 'next/link'
import { GradientButton } from '@/components/Button/Gradient'
import Image from 'next/image'
import { motion } from 'framer-motion'

const WorkTogether = () => {
  return (
    <motion.section
      className="container mx-auto px-4 w-full py-5 my-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-end py-4 mb-6 gap-6 md:gap-0"
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="w-full md:max-w-[65%]">
          <motion.span
            className="gradient-background text-center block h-[5px] w-[70px] bg-black"
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
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 mt-6"
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Let&apos;s work together {''}
            <span className="font-normal">
              with <span className="text-gradient font-bold">me</span>
            </span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600"
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Let me craft your unique brand identity with expert logo design, impactful branding strategies, and distinctive designs that set you
            apart. Whether starting fresh or refining, we&apos;ll ensure your business leaves a lasting impression.
          </motion.p>
        </div>

        <motion.div
          className="w-full md:w-auto"
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <GradientButton linkProps={{ href: 'https://www.linkedin.com/in/dashmills0609/', target: '_blank', rel: 'noopener noreferrer' }}>
            Get Started
          </GradientButton>
        </motion.div>
      </motion.div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <motion.div
              className="bg-[#ABA7F9] rounded-3xl p-8 p-4 rounded md:w-7/12 w-full relative overflow-hidden"
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 100, rotateX: -15 },
                visible: { opacity: 1, y: 0, rotateX: 0 },
              }}
              transition={{ duration: 0.8, delay: 0, ease: 'easeOut' }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-8w-full h-full flex">
                <div className="w-1/2 flex flex-col justify-center z-10">
                  <motion.div
                    className="bg-white/20 rounded-full p-4 w-15 h-15 flex items-center justify-center mb-10"
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { scale: 0, rotate: -180 },
                      visible: { scale: 1, rotate: 0 },
                    }}
                    transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 200 }}
                  >
                    <Image src="/website-design-icon.svg" alt="Website Design" width={30} height={30} className="text-white" />
                  </motion.div>

                  <motion.h2
                    className="text-white text-4xl font-bold mb-6"
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    Website Design
                  </motion.h2>
                  <motion.p
                    className="text-white text-md mb-8 leading-relaxed"
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Crafting visually engaging user experiences that make websites seamless and user-friendly.
                  </motion.p>

                  <motion.div
                    className="inline-flex items-center space-x-2 group text-white"
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <Link href="/portfolio" className="hover:text-blue-300">
                      <u>View Portfolio</u>
                    </Link>
                    <Image src="/arrow-up-no-border.svg" alt="Arrow Up No Border" width={15} height={15} className="w-3 h-3 text-white" />
                  </motion.div>
                </div>

                <div className="max-w-[45%] w-full h-[85%] absolute right-0 bottom-0">
                  <Image src="/website-design.svg" fill alt="Website Design Mockup" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-[#4ca48a] rounded-3xl p-8 p-4 rounded md:w-5/12 w-full relative overflow-hidden"
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 100, rotateX: -15 },
                visible: { opacity: 1, y: 0, rotateX: 0 },
              }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-8w-full h-full flex">
                <div className="w-1/2 flex flex-col justify-center z-10">
                  <motion.div
                    className="bg-white/20 rounded-full p-4 w-15 h-15 flex items-center justify-center mb-10"
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { scale: 0, rotate: -180 },
                      visible: { scale: 1, rotate: 0 },
                    }}
                    transition={{ duration: 0.6, delay: 0.5, type: 'spring', stiffness: 200 }}
                  >
                    <Image src="/branding-icon.svg" alt="Website Design" width={30} height={30} className="text-white" />
                  </motion.div>

                  <motion.h2
                    className="text-white text-4xl font-bold mb-6"
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    Branding
                  </motion.h2>
                  <motion.p
                    className="text-white text-md mb-8 leading-relaxed"
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    Developing unique brand identities through logos, brand guidelines, and cohesive visuals that leave a lasting impression.
                  </motion.p>

                  <motion.div
                    className="inline-flex items-center space-x-2 group text-white"
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <Link href="/portfolio" className="hover:text-blue-300">
                      <u>View Portfolio</u>
                    </Link>
                    <Image src="/arrow-up-no-border.svg" alt="Arrow Up No Border" width={15} height={15} className="w-3 h-3 text-white" />
                  </motion.div>
                </div>

                <div className="max-w-[45%] w-full h-[85%] absolute right-0 bottom-0">
                  <Image src="/branding.svg" fill alt="Website Design Mockup" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row gap-4">
            <motion.div
              className="bg-[#4494B9] rounded-3xl p-8 p-4 rounded md:w-5/12 w-full relative overflow-hidden"
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 100, rotateX: -15 },
                visible: { opacity: 1, y: 0, rotateX: 0 },
              }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-8w-full h-full flex">
                <div className="w-1/2 flex flex-col justify-center z-10">
                  <motion.div
                    className="bg-white/20 rounded-full p-4 w-15 h-15 flex items-center justify-center mb-10"
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { scale: 0, rotate: -180 },
                      visible: { scale: 1, rotate: 0 },
                    }}
                    transition={{ duration: 0.6, delay: 0.7, type: 'spring', stiffness: 200 }}
                  >
                    <Image src="/marketing-icon.svg" alt="Website Design" width={30} height={30} className="text-white" />
                  </motion.div>

                  <motion.h2
                    className="text-white text-4xl font-bold mb-6"
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    Marketing
                  </motion.h2>
                  <motion.p
                    className="text-white text-md mb-8 leading-relaxed"
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    I create social media content and strategies that drive growth and help brands connect with their audience.
                  </motion.p>

                  <motion.div
                    className="inline-flex items-center space-x-2 group text-white"
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                  >
                    <Link href="/portfolio" className="hover:text-blue-300">
                      <u>View Portfolio</u>
                    </Link>
                    <Image src="/arrow-up-no-border.svg" alt="Arrow Up No Border" width={15} height={15} className="w-3 h-3 text-white" />
                  </motion.div>
                </div>

                <div className="max-w-[45%] w-full h-[85%] absolute right-0 bottom-0">
                  <Image src="/marketing.svg" fill alt="Website Design Mockup" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-[#171748] rounded-3xl p-8 p-4 rounded md:w-7/12 w-full relative overflow-hidden"
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 100, rotateX: -15 },
                visible: { opacity: 1, y: 0, rotateX: 0 },
              }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-8w-full h-full flex">
                <div className="w-1/2 flex flex-col justify-center z-10">
                  <motion.div
                    className="bg-white/20 rounded-full p-4 w-15 h-15 flex items-center justify-center mb-10"
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { scale: 0, rotate: -180 },
                      visible: { scale: 1, rotate: 0 },
                    }}
                    transition={{ duration: 0.6, delay: 0.9, type: 'spring', stiffness: 200 }}
                  >
                    <Image src="/graphic-design-icon.svg" alt="Website Design" width={30} height={30} className="text-white" />
                  </motion.div>

                  <motion.h2
                    className="text-white text-4xl font-bold mb-6"
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                  >
                    Graphic Design
                  </motion.h2>
                  <motion.p
                    className="text-white text-md mb-8 leading-relaxed"
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    Designing stunning brochures, pitch decks, business cards, presentations, and social media posts for your brand.
                  </motion.p>

                  <motion.div
                    className="inline-flex items-center space-x-2 group text-white"
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                  >
                    <Link href="/portfolio" className="hover:text-blue-300">
                      <u>View Portfolio</u>
                    </Link>
                    <Image src="/arrow-up-no-border.svg" alt="Arrow Up No Border" width={15} height={15} className="w-3 h-3 text-white" />
                  </motion.div>
                </div>

                <div className="max-w-[45%] w-full h-[85%] absolute right-0 bottom-0">
                  <Image src="/graphic-design.svg" fill alt="Website Design Mockup" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default WorkTogether
