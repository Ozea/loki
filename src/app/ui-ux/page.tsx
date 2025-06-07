'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SimpleTemplates from '@/containers/SimpleTemplates'
import { LazyPortfolioVideo } from '@/components/OptimisedVideo'
import Link from 'next/link'
import { CenteredFullWidthImage } from '@/components/Image/CenteredFullWidthImage'

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

export default function Portfolio() {
  return (
    <main className="bg-white text-black pt-40">
      <section className="container mx-auto px-4 w-full mb-25">
        <div className="gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10">
              Making Your Brand <span className="text-transparent bg-clip-text text-gradient">Shine</span>
              <br />
              <span className="font-normal">
                with Great <span className="text-transparent bg-clip-text text-gradient font-bold">Design</span>
              </span>
            </h1>
            <p className="max-w-4xl">
              Take a look at my design work! Here, you&apos;ll find a mix of templates I&apos;ve created and projects I&apos;ve done with different
              companies. I focus on making designs that look great and are easy to use, whether they&apos;re for websites, apps, or other digital
              spaces. My goal is to make sure every design feels simple, helpful, and enjoyable for people. Thanks for checking out my work!
            </p>
          </div>
        </div>
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
            className="text-3xl font-bold px-5 mb-5 text-gray-900 text-center mt-3"
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={headerVariants}
          >
            From Design to <br />
            <span className="font-normal">
              developed <span className="text-gradient font-bold">Website</span>
            </span>
          </motion.h2>
        </motion.div>

        <Link href="https://workersinc.com/" target="_blank" rel="noopener noreferrer">
          <CenteredFullWidthImage imageUrl="/workers-inc.png" maxWidth="max-w-[12rem] lg:max-w-sm" />
        </Link>

        <div className="max-w-7xl mx-auto px-4 mt-10">
          <div className="relative shadow-xl">
            <LazyPortfolioVideo
              videoName="workers-inc"
              className="w-full"
              videoClassName="rounded-lg"
              quality="1080p"
              autoPlay
              muted
              loop
              controls={false}
            />
          </div>
        </div>

        {/* Service cards section remains the same... */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FAFAFA] rounded-xl p-8 shadow-sm">
              <div className="flex items-start">
                <div className="bg-[#4494B9] p-2 rounded-lg mr-4">
                  <Image src="/portfolio/ux-ui-icon.svg" alt="Website Design" width={125} height={125} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-3">UI/UX Design</h2>
                  <p className="text-gray-600">
                    I focused on creating a user-friendly interface that guides visitors smoothly through the site, with intuitive navigation and
                    clear visual hierarchy to highlight important information. I aimed for a seamless user experience, ensuring accessibility and a
                    responsive design for all devices.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#FAFAFA] rounded-xl p-8 shadow-sm">
              <div className="flex items-start">
                <div className="bg-[#171748] p-2 rounded-lg mr-4">
                  <Image src="/portfolio/website-development-icon.svg" alt="Website Design" width={125} height={125} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-3">Website Development</h2>
                  <p className="text-gray-600">
                    I handled the website&apos;s development, optimising it for performance and SEO. Using modern, efficient development practices, I
                    ensured fast load times and functionality across browsers. The development approach was tailored to make future updates easy,
                    supporting the brand&apos;s adaptability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="bg-[#FAFAFA] rounded-xl p-8 shadow-sm max-w-2xl">
              <div className="flex items-start">
                <div className="bg-[#6CE4C0] p-2 rounded-lg mr-4">
                  <Image src="/portfolio/branding-icon.svg" alt="Website Design" width={125} height={125} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-3">Branding</h2>
                  <p className="text-gray-600">
                    I developed a cohesive visual identity that reflects the core values of Workers Inc. This involved selecting a color palette,
                    typography, and visual elements that convey professionalism, trust, and approachability, aligning the website&apos;s look and feel
                    with the company&apos;s mission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen w-full py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-center">
            <div className="order-1 w-full">
              <Link href="https://b00140468.github.io/Doggy-Paradise/index.html" target="_blank" rel="noopener noreferrer">
                <Image src="/portfolio/doggy-paradise.svg" alt="Logo" width={75} height={75} />
              </Link>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mt-8">
                Doggy <span className="text-gradient">Paradise</span>
              </h2>
              <p className="mb-8 text-lg">
                Furry Friends Training, Hotel, and Care in Dublin was created with a simple mission: to provide pets with the best possible care and
                attention, and to help them thrive in every way possible.
              </p>
              <p className="text-2xl mb-6">
                <span className="font-bolder">Design and</span> development <span className="text-gradient">approach</span>
              </p>
              <ul>
                <li className="flex items-center gap-2 mb-4">
                  <div className="bg-[#ABA7F9] p-2 rounded-lg mr-4 w-fit">
                    <Image src="/portfolio/dp-logo-design-icon.svg" alt="DP Logo Design" width={30} height={30} className="text-white" />
                  </div>
                  <span className="text-lg">Logo Design</span>
                </li>
                <li className="flex items-center gap-2 mb-4">
                  <div className="bg-[#4494B9] p-2 rounded-lg mr-4 w-fit">
                    <Image src="/portfolio/dp-ui-ux-icon.svg" alt="DP UI/UX Design" width={30} height={30} className="text-white" />
                  </div>
                  <span className="text-lg">UI/UX Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-[#6CE4C0] p-2 rounded-lg mr-4 w-fit">
                    <Image src="/portfolio/dp-branding-icon.svg" alt="Website Design" width={30} height={30} className="text-white" />
                  </div>
                  <span className="text-lg">Branding</span>
                </li>
              </ul>
            </div>
            <div className="order-2 col-span-2 flex justify-center lg:justify-end w-full">
              <div className="relative w-full">
                <LazyPortfolioVideo
                  videoName="doggy-paradise"
                  className="w-full"
                  videoClassName="rounded-lg"
                  quality="1080p"
                  autoPlay
                  muted
                  loop
                  controls={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <Link href="https://srpaint.ie/" target="_blank" rel="noopener noreferrer">
          <CenteredFullWidthImage imageUrl="/sr-paint.png" maxWidth="max-w-[8rem] lg:max-w-3xs" />
        </Link>

        <div className="max-w-7xl mx-auto px-4 mt-10">
          <p className="text-center max-w-4xl mx-auto mb-15 text-lg text-gray-600">
            SR Paint is a professional house painting company dedicated to delivering high-quality interior and exterior painting services for both
            residential and commercial clients across Dublin, Bray, Wicklow, and surrounding areas. Focused on customer satisfaction and excellence,
            SR Paint ensures every project is completed with precision and care.
          </p>

          <div className="relative shadow-2xl">
            <LazyPortfolioVideo
              videoName="sr-paint"
              className="w-full"
              videoClassName="rounded-lg"
              quality="1080p"
              autoPlay
              muted
              loop
              controls={false}
            />
          </div>
        </div>

        {/* Service cards section with animations... */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FAFAFA] rounded-xl p-8 shadow-sm">
              <div className="flex items-start">
                <div className="bg-[#6CE4C0] p-2 rounded-lg mr-4">
                  <Image src="/portfolio/branding-icon.svg" alt="Website Design" width={125} height={125} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-3">Branding</h2>
                  <p className="text-gray-600">
                    Worked closely with the founders to understand the company&apos;s goals and vision. Developed a complete brand identity, including
                    tone, color palette, and visual direction to ensure a strong and consistent look across all platforms.
                  </p>
                </div>
              </div>
            </div>

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
                    Created a clean and modern logo that reflects the company&apos;s values and services. The design process included research,
                    sketches, digital drafts, and final delivery of logo files for print and digital use.
                  </p>
                </motion.div>
              </div>
            </motion.div>

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
                    Designed a user-friendly and visually engaging website, focusing on clear structure and easy navigation. Included blog integration
                    and mobile responsiveness to support content updates and user engagement.
                  </p>
                </motion.div>
              </div>
            </motion.div>

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
                    Planned and created content for SR Paint&apos;s social media platforms. Designed posts, developed a consistent visual style, and
                    helped grow the brand&apos;s online presence through engaging and branded content.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="min-h-screen mt-10">
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
            className="text-3xl px-5 mb-5 text-gray-900 text-center mt-3"
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={headerVariants}
          >
            Simple <span className="text-gradient font-bold">Templates</span>
          </motion.h2>
        </motion.div>

        <SimpleTemplates />
      </section>
    </main>
  )
}
