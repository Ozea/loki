import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const MagazineDesign = () => {
  const publications = [
    {
      id: 1,
      bgColor: 'bg-purple-600',
      height: 'h-50',
      title: 'Gaming Magazine',
      imageUrl: '/visual-designs/book-1.png',
      alt: 'Gaming Magazine Cover',
    },
    {
      id: 2,
      bgColor: 'bg-blue-500',
      height: 'h-100',
      title: 'Tech Publication',
      imageUrl: '/visual-designs/book-4.png',
      alt: 'Tech Publication Cover',
    },
    {
      id: 3,
      bgColor: 'bg-yellow-400',
      height: 'h-75',
      title: 'Design Guide',
      imageUrl: '/visual-designs/book-2.png',
      alt: 'Design Guide Cover',
    },
    {
      id: 4,
      bgColor: 'bg-teal-500',
      height: 'h-75',
      title: 'Creative Magazine',
      imageUrl: '/visual-designs/book-5.png',
      alt: 'Creative Magazine Cover',
    },
    {
      id: 5,
      bgColor: 'bg-pink-500',
      height: 'h-80',
      title: 'VR Publication',
      imageUrl: '/visual-designs/book-3.png',
      alt: 'VR Publication Cover',
    },
    {
      id: 6,
      bgColor: 'bg-indigo-600',
      height: 'h-70',
      title: 'Gaming Guide',
      imageUrl: '/visual-designs/book-6.png',
      alt: 'Gaming Guide Cover',
    },
  ]

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  // Individual magazine animation variants
  const magazineVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
      rotateX: 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  }

  return (
    <motion.div className="p-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
      <div className="max-w-6xl mx-auto">
        {/* Masonry Grid */}
        <motion.div className="columns-1 md:columns-2 lg:columns-3 gap-2 space-y-2" variants={containerVariants}>
          {publications.map((pub) => (
            <motion.div
              key={pub.id}
              className="break-inside-avoid mb-2"
              variants={magazineVariants}
              whileHover={{
                y: -12,
                scale: 1.02,
                rotateY: 5,
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                },
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 },
              }}
            >
              <motion.div
                className={`${pub.height} w-full shadow-md cursor-pointer relative overflow-hidden`}
                whileHover={{
                  boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.25)',
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="w-full h-full"
                  whileHover={{
                    scale: 1.075,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Image
                    src={pub.imageUrl}
                    alt={pub.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>

                {/* Hover overlay effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
