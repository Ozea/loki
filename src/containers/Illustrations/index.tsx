import Image from 'next/image'
import { motion } from 'framer-motion'

interface Illustration {
  id: number
  imageUrl: string
  alt: string
  gridClasses: string
  heightClasses: string
}

export function Illustrations() {
  const illustrations: Illustration[] = [
    {
      id: 1,
      imageUrl: '/visual-designs/ill-1.png',
      alt: 'Digital Art Illustration 1',
      gridClasses: 'col-span-1',
      heightClasses: 'h-75',
    },
    {
      id: 2,
      imageUrl: '/visual-designs/ill-2.png',
      alt: 'Digital Art Illustration 2',
      gridClasses: 'col-span-1',
      heightClasses: 'h-75 lg:h-70',
    },
    {
      id: 3,
      imageUrl: '/visual-designs/ill-3.png',
      alt: 'Digital Art Illustration 3',
      gridClasses: 'col-span-1',
      heightClasses: 'h-75 lg:h-70',
    },
    {
      id: 4,
      imageUrl: '/visual-designs/ill-4.png',
      alt: 'Digital Art Illustration 4',
      gridClasses: 'col-span-1 md:col-span-1 lg:col-span-1',
      heightClasses: 'h-75',
    },
    {
      id: 5,
      imageUrl: '/visual-designs/ill-5.png',
      alt: 'Digital Art Illustration 5 - Featured',
      gridClasses: 'col-span-1 md:col-span-2',
      heightClasses: 'h-80 lg:transform-[translateY(-1.25rem))]',
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

  // Individual illustration animation variants
  const illustrationVariants = {
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
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2" variants={containerVariants}>
          {illustrations.map((illustration) => (
            <motion.div
              key={illustration.id}
              className={illustration.gridClasses}
              variants={illustrationVariants}
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
                className={`${illustration.heightClasses} w-full shadow-md cursor-pointer relative overflow-hidden`}
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
                  <Image src={illustration.imageUrl} alt={illustration.alt} fill className="object-cover" />
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
