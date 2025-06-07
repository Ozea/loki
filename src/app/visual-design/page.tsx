'use client'

import { Illustrations } from '@/containers/Illustrations'
import { MagazineDesign } from '@/containers/MagazineDesign'
import { SocialMediaPosts } from '@/containers/SocialMediaPosts'
import { motion } from 'framer-motion'

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: 0.2,
    },
  },
}

export default function VisualDesign() {
  return (
    <main className="bg-white text-black pt-40">
      {/* Hero Section */}
      <motion.section className="container mx-auto px-4 w-full mb-25" initial="hidden" animate="visible" variants={staggerContainer}>
        <div className="gap-8">
          <div>
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10" variants={fadeInUpVariants}>
              <div className="mb-5">Visual storytelling through</div>
              <span className="font-normal">
                <span className="text-transparent bg-clip-text text-gradient font-bold">illustration, layout</span> and{' '}
                <span className="text-transparent bg-clip-text text-gradient font-bold">Design</span>
              </span>
            </motion.h1>
            <motion.p className="max-w-4xl" variants={fadeInUpVariants}>
              Take a look at my design work! Here, you&apos;ll find a mix of templates I&apos;ve created and projects I&apos;ve done with different
              companies. I focus on making designs that look great and are easy to use, whether they&apos;re for websites, apps, or other digital
              spaces. My goal is to make sure every design feels simple, helpful, and enjoyable for people. Thanks for checking out my work!
            </motion.p>
          </div>
        </div>
      </motion.section>

      <section className="mb-25">
        {/* Header Section */}
        <motion.div
          className="flex flex-col justify-center items-center text-center"
          variants={headerVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
        >
          <motion.span
            className="gradient-background text-center block h-[5px] w-[70px] bg-black"
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={lineVariants}
          />
          <motion.h2
            className="text-3xl font-normal px-5 mb-5 text-gray-900 text-center mt-3"
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={headerVariants}
          >
            Social
            <span className="text-gradient font-bold px-3">
              <i>Media</i>
            </span>
            Posts
          </motion.h2>
        </motion.div>

        {/* Social Media Posts Section */}
        <SocialMediaPosts />
      </section>

      <section className="mb-25">
        {/* Header Section */}
        <motion.div
          className="flex flex-col justify-center items-center text-center"
          variants={headerVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
        >
          <motion.span
            className="gradient-background text-center block h-[5px] w-[70px] bg-black"
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={lineVariants}
          />
          <motion.h2
            className="text-3xl font-normal px-5 mb-5 text-gray-900 text-center mt-3"
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={headerVariants}
          >
            Magazine
            <span className="text-gradient font-bold px-3">
              <i>Design</i>
            </span>
          </motion.h2>
        </motion.div>

        {/* Social Media Posts Section */}
        <MagazineDesign />
      </section>

      <section>
        {/* Header Section */}
        <motion.div
          className="flex flex-col justify-center items-center text-center"
          variants={headerVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
        >
          <motion.span
            className="gradient-background text-center block h-[5px] w-[70px] bg-black"
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={lineVariants}
          />
          <motion.h2
            className="text-3xl font-normal px-5 mb-5 text-gray-900 text-center mt-3"
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={headerVariants}
          >
            Illustrations
          </motion.h2>
        </motion.div>

        {/* Social Media Posts Section */}
        <Illustrations />
      </section>
    </main>
  )
}
