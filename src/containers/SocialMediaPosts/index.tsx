import { CenteredFullWidthImage } from '@/components/Image/CenteredFullWidthImage'
import { LazyPortfolioVideo } from '@/components/OptimisedVideo'
import { motion } from 'framer-motion'
import React from 'react'

interface Post {
  id: number
  companyLogo: string
  videoUrl: string
}

export const SocialMediaPosts = () => {
  const posts: Post[] = [
    {
      id: 1,
      companyLogo: '/logos/gaga-muller.png',
      videoUrl: 'gaga-muller-post',
    },
    {
      id: 2,
      companyLogo: '/logos/sr-paint.png',
      videoUrl: 'sr-paint-post',
    },
    {
      id: 3,
      companyLogo: '/logos/tetra.png',
      videoUrl: 'tetra-post',
    },
  ]

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  // Individual post card animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  }

  // Logo animation variants
  const logoVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 12,
        delay: 0.2,
      },
    },
  }

  // Video animation variants
  const videoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: 0.4,
      },
    },
  }

  return (
    <motion.div className="p-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
      <div className="max-w-7xl mx-auto">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
          {posts.map((post) => (
            <motion.div
              key={post.id}
              className="flex flex-col justify-end space-y-6"
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
            >
              {/* Company Logo Section */}
              <motion.div
                variants={logoVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 },
                }}
              >
                <CenteredFullWidthImage imageUrl={post.companyLogo} maxWidth="max-w-[8rem] lg:max-w-[10rem]" />
              </motion.div>

              {/* Post Content Section */}
              <motion.div
                variants={videoVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <LazyPortfolioVideo
                  videoName={post.videoUrl}
                  className="w-full"
                  videoClassName="rounded-lg"
                  quality="1080p"
                  autoPlay
                  muted
                  loop
                  controls={false}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
