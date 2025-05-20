'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'

export default function Portfolio() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Video autoplay failed:', error)
      })
    }
  }, [])

  return (
    <main className="bg-white text-black pt-40">
      <section className="container mx-auto px-4 w-full">
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

      <div className="w-full h-full overflow-hidden">
        <Image src="/luminous.png" alt="Luminous" width={1920} height={500} priority className="w-full h-auto object-cover" sizes="100vw" />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col justify-center items-center text-center">
          <span className="gradient-background text-center block h-[5px] w-[70px] bg-black" />
          <h2 className="text-3xl font-bold px-5 mb-12 text-gray-900 text-center mt-3">
            From Design to <br />
            <span className="font-normal">
              developed <span className="text-gradient font-bold">Website</span>
            </span>
          </h2>
        </div>
      </div>

      <div className="w-full h-full overflow-hidden">
        <Image src="/office-space.png" alt="Luminous" width={1920} height={500} priority className="w-full h-auto object-cover" sizes="100vw" />
      </div>

      <CenteredFullWidthImage maxWidth={300} imageUrl="/workers-inc.png" altText="Workers INC" imageClasses="h-[30%]" containerClasses="mt-4" />

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
                  I focused on creating a user-friendly interface that guides visitors smoothly through the site, with intuitive navigation and clear
                  visual hierarchy to highlight important information. I aimed for a seamless user experience, ensuring accessibility and a responsive
                  design for all devices.
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

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-center">
            <div className="order-1 w-full">
              <Image src="/portfolio/doggy-paradise.svg" alt="Logo" width={75} height={75} />

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

                  <span className="text-lg font-bold">Logo Design</span>
                </li>
                <li className="flex items-center gap-2 mb-4">
                  <div className="bg-[#4494B9] p-2 rounded-lg mr-4 w-fit">
                    <Image src="/portfolio/dp-ui-ux-icon.svg" alt="DP UI/UX Design" width={30} height={30} className="text-white" />
                  </div>

                  <span className="text-lg font-bold">UI/UX Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-[#6CE4C0] p-2 rounded-lg mr-4 w-fit">
                    <Image src="/portfolio/dp-branding-icon.svg" alt="Website Design" width={30} height={30} className="text-white" />
                  </div>

                  <span className="text-lg font-bold">Branding</span>
                </li>
              </ul>
            </div>
            <div className="order-2 col-span-2 flex justify-center lg:justify-end w-full">
              <div className="relative w-full">
                <video ref={videoRef} className="w-full h-auto" loop muted playsInline autoPlay>
                  <source src="/portfolio/doggy-paradise.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const CenteredFullWidthImage = ({
  imageUrl = '/api/placeholder/1200/800',
  altText = 'Centered image',
  priority = true,
  maxWidth = 1200,
  containerClasses = '',
  imageClasses = '',
}) => {
  return (
    <section className={`w-full flex justify-center ${containerClasses}`}>
      <div className="relative w-full max-w-screen-xl px-4 md:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className={`relative w-full ${maxWidth ? `max-w-${maxWidth}` : ''}`}>
            <Image
              src={imageUrl}
              alt={altText}
              width={maxWidth}
              height={800}
              priority={priority}
              className={`mx-auto h-auto ${imageClasses}`}
              sizes={`(max-width: 768px) 100vw, (max-width: 1200px) 90vw, ${maxWidth}px`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
