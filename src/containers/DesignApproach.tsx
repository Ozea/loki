import Image from 'next/image'
import { motion } from 'framer-motion'

export function DesignApproach() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  }

  const iconVariants = {
    hidden: {
      scale: 0.8,
      rotate: 15,
      opacity: 0,
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay: 0.1,
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: 0.2,
      },
    },
  }

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-16"
      variants={containerVariants}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
    >
      {/* Header Section */}
      <motion.div
        className="flex flex-col justify-center items-center text-center mb-5"
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
          className="text-3xl font-bold px-5 mb-12 text-gray-900 text-center mt-3"
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          variants={headerVariants}
        >
          My design and <br />
          <span className="font-normal">
            development <span className="text-gradient font-bold">apporach</span>
          </span>
        </motion.h2>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Logo Design */}
        <motion.div
          className="bg-[#FAFAFA] rounded-xl p-8 shadow-sm"
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <div className="flex items-start">
            <motion.div
              className="bg-[#ABA7F9] p-2 rounded-lg mr-4"
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              variants={iconVariants}
            >
              <Image src="/logo-design-approach.svg" alt="Website Design" width={125} height={125} className="text-white" />
            </motion.div>
            <motion.div variants={textVariants}>
              <h2 className="text-xl font-bold mb-3">Logo Design</h2>
              <p className="text-gray-600">
                I create lasting first impressions with unique and professional logos. My custom logo design services capture the essence of your
                brand, ensuring your visual identity is both memorable and meaningful.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Branding */}
        <motion.div
          className="bg-[#FAFAFA] rounded-xl p-8 shadow-sm"
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <div className="flex items-start">
            <motion.div
              className="bg-[#6CE4C0] p-2 rounded-lg mr-4"
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              variants={iconVariants}
            >
              <Image src="/branding-approach.svg" alt="Website Design" width={125} height={125} className="text-white" />
            </motion.div>
            <motion.div variants={textVariants}>
              <h2 className="text-xl font-bold mb-3">Branding</h2>
              <p className="text-gray-600">
                I build strong, memorable brand identities. My comprehensive branding services ensure your business stands out with a cohesive and
                impactful brand strategy that resonates with your target audience.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* UI/UX Design */}
        <motion.div
          className="bg-[#FAFAFA] rounded-xl p-8 shadow-sm"
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <div className="flex items-start">
            <motion.div
              className="bg-[#4494B9] p-2 rounded-lg mr-4"
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              variants={iconVariants}
            >
              <Image src="/ui-ux-design-approach.svg" alt="Website Design" width={125} height={125} className="text-white" />
            </motion.div>
            <motion.div variants={textVariants}>
              <h2 className="text-xl font-bold mb-3">UI/UX Design</h2>
              <p className="text-gray-600">
                I enhance user satisfaction with intuitive and engaging interfaces. My UI/UX design services focus on creating seamless and enjoyable
                user experiences that keep your audience coming back.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Graphic Design */}
        <motion.div
          className="bg-[#FAFAFA] rounded-xl p-8 shadow-sm"
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <div className="flex items-start">
            <motion.div
              className="bg-[#ABA7F9] p-2 rounded-lg mr-4"
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              variants={iconVariants}
            >
              <Image src="/graphic-design-approach.svg" alt="Website Design" width={125} height={125} className="text-white" />
            </motion.div>
            <motion.div variants={textVariants}>
              <h2 className="text-xl font-bold mb-3">Graphic Design</h2>
              <p className="text-gray-600">
                I create visually compelling designs that capture attention and communicate your brand&apos;s message effectively. From logos to
                marketing materials, my designs ensure consistency and professionalism across all platforms.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Social Media Management - Centered in a new row */}
      <div className="mt-8 flex justify-center">
        <motion.div
          className="bg-[#FAFAFA] rounded-xl p-8 shadow-sm max-w-2xl"
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <div className="flex items-start">
            <motion.div
              className="bg-[#4494B9] p-2 rounded-lg mr-4"
              variants={iconVariants}
              whileHover={{
                rotate: 12,
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              <Image src="/social-media-approach.svg" alt="Website Design" width={125} height={125} className="text-white" />
            </motion.div>
            <motion.div variants={textVariants}>
              <h2 className="text-xl font-bold mb-3">Social Media Management</h2>
              <p className="text-gray-600">
                I develop content and strategies that drive growth and interaction on TikTok and Instagram. By crafting creative posts, trends, and
                campaigns, I help brands connect with their audience and build a strong online presence.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
