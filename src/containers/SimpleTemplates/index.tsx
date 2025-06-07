import React from 'react'
import { LazyPortfolioVideo } from '@/components/OptimisedVideo'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface Project {
  title: string
  description: string
  src: string
  href?: string
}

export default function SimpleTemplates() {
  const projects: Project[] = [
    {
      title: 'Smarter Travel Award',
      description:
        'Designed a user-friendly mobile app to support the Smarter Travel programme, aimed at promoting sustainable travel for students. The app helps students plan their commute by showing live weather updates, road news, and different travel options such as cycling, driving, public transport, and carpooling with fellow students. The car-sharing feature allows drivers to earn money and helps passengers save time, encouraging smarter and more eco-friendly commuting choices.',
      src: 'smart-travel-award',
    },
    {
      title: 'AI & The environment',
      description:
        'Designed a web page exploring how artificial intelligence, while aimed at helping the planet, could also harm it - such as through energy use and resource demands. The project was inspired by the ideas of James Bridle.  The layout was designed for easy reading and visual impact, encouraging critical thinking through design and content.',
      src: 'ai-and-environment',
      href: 'https://www.behance.net/gallery/227603827/AI-The-Enviroment-landing-page',
    },
    {
      title: 'BookShelf',
      description:
        'Designed a warm and inviting library app showcasing popular books, complete with descriptions and user ratings. The design focused on creating a cozy, book-like feel using soft colors, clean layouts, and consistent visual elements. The user experience was built to be intuitive and relaxing, encouraging users to explore and discover new reads.',
      src: 'book-shelf',
    },
    {
      title: 'Energy choices',
      description:
        'Designed an educational web page to explain the impact of non-renewable vs. renewable energy. Focused on clear structure, engaging visuals, and easy navigation. Included sections on energy sources, practical tips, and ways to get involved in sustainability efforts in Ireland. The design aimed to be informative, user-friendly, and visually consistent.',
      src: 'ai-choices',
      href: 'https://www.behance.net/gallery/227603551/Energy-Choices-Landing-Page',
    },
    {
      title: 'Portfolio',
      description:
        'Designed a clean and modern landing page for a senior software engineer. The layout emphasises clarity and professionalism, featuring a bold hero section, structured content blocks for skills and experience, and a minimalist contact section. The design balances white space, typography, and color to reflect technical expertise and approachability.',
      src: 'portfolio',
      href: 'https://www.behance.net/gallery/227603317/Senior-Software-Engineer-Portfolio',
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  }

  const projectVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
      },
    },
  }

  const textContentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: 'easeOut',
      },
    },
  }

  const videoContentVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: 0.3,
        ease: 'easeOut',
      },
    },
  }

  const titleVariants = {
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

  const descriptionVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1,
        ease: 'easeOut',
      },
    },
  }

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.2,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.div className="min-h-screen py-16 px-4" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="max-w-7xl mx-auto">
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
              variants={projectVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{
                once: true,
                amount: 0.3,
                margin: '-100px',
              }}
            >
              {/* Text Content */}
              <motion.div
                className="flex-1 lg:max-w-xl bg-gray-50 p-6 rounded-xl"
                variants={textContentVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: { duration: 0.3 },
                }}
              >
                <motion.h2 className={`text-3xl lg:text-4xl xl:text-3xl ${getTitleColor(index)} font-bold mb-6 lg:mb-8`} variants={titleVariants}>
                  {project.title}
                </motion.h2>

                <motion.p className="text-gray-600 text-base lg:text-md leading-relaxed" variants={descriptionVariants}>
                  {project.description}
                </motion.p>

                {project.href && (
                  <motion.div variants={linkVariants}>
                    <Link
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200 group mt-6"
                    >
                      <motion.span
                        className="underline decoration-1 underline-offset-2 hover:decoration-2"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        View Full Page
                      </motion.span>
                      <motion.div
                        whileHover={{
                          x: 2,
                          y: -2,
                          rotate: 15,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowUpRight size={16} />
                      </motion.div>
                    </Link>
                  </motion.div>
                )}
              </motion.div>

              {/* Phone Mockups */}
              <motion.div className="flex-1 relative" variants={videoContentVariants}>
                <motion.div
                  className="relative p-2"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.4, ease: 'easeOut' },
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, rotateX: -15 }}
                    whileInView={{
                      opacity: 1,
                      rotateX: 0,
                      transition: {
                        duration: 0.8,
                        delay: 0.2,
                        ease: 'easeOut',
                      },
                    }}
                    viewport={{ once: true }}
                  >
                    <LazyPortfolioVideo
                      videoName={project.src}
                      className="w-full"
                      videoClassName="rounded-lg shadow-2xl"
                      quality="1080p"
                      autoPlay
                      muted
                      loop
                      controls={false}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function getTitleColor(index: number) {
  if (index === 1) {
    return 'text-[#3BB993]'
  }

  if (index === 2) {
    return 'text-black'
  }

  if (index === 3) {
    return 'text-[#ABA7F9]'
  }

  return 'text-[#4494B9]'
}
