import React from 'react'
import Link from 'next/link'
import { GradientButton } from '@/components/Button/Gradient'
import Image from 'next/image'

const WorkTogether = () => {
  return (
    <section className="container mx-auto px-4 w-full py-5 my-5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end py-4 mb-6 gap-6 md:gap-0">
        <div className="w-full md:max-w-[65%]">
          <span className="gradient-background text-center block h-[5px] w-[70px] bg-black" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 mt-6">
            Let&apos;s work together {''}
            <span className="font-normal">
              with <span className="text-gradient font-bold">me</span>
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            Let me craft your unique brand identity with expert logo design, impactful branding strategies, and distinctive designs that set you
            apart. Whether starting fresh or refining, we&apos;ll ensure your business leaves a lasting impression.
          </p>
        </div>

        <div className="w-full md:w-auto">
          <GradientButton href="/get-started">Get Started</GradientButton>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-[#ABA7F9] rounded-3xl p-8 p-4 rounded md:w-7/12 w-full relative overflow-hidden">
              <div className="p-8w-full h-full flex">
                <div className="w-1/2 flex flex-col justify-center z-10">
                  <div className="bg-white/20 rounded-full p-4 w-15 h-15 flex items-center justify-center mb-10">
                    <Image src="/website-design-icon.svg" alt="Website Design" width={30} height={30} className="text-white" />
                  </div>

                  <h2 className="text-white text-4xl font-bold mb-6">Website Design</h2>
                  <p className="text-white text-md mb-8 leading-relaxed">
                    Crafting visually engaging user experiences that make websites seamless and user-friendly.
                  </p>

                  <div className="inline-flex items-center space-x-2 group text-white">
                    <Link href="/portfolio" className="hover:text-blue-300">
                      <u>View Portfolio</u>
                    </Link>
                    <Image src="/arrow-up-no-border.svg" alt="Arrow Up No Border" width={15} height={15} className="w-3 h-3 text-white" />
                  </div>
                </div>

                <div className="max-w-[45%] w-full h-[85%] absolute right-0 bottom-0">
                  <Image src="/website-design.svg" fill alt="Website Design Mockup" />
                </div>
              </div>
            </div>

            <div className="bg-[#4ca48a] rounded-3xl p-8 p-4 rounded md:w-5/12 w-full relative overflow-hidden">
              <div className="p-8w-full h-full flex">
                <div className="w-1/2 flex flex-col justify-center z-10">
                  <div className="bg-white/20 rounded-full p-4 w-15 h-15 flex items-center justify-center mb-10">
                    <Image src="/branding-icon.svg" alt="Website Design" width={30} height={30} className="text-white" />
                  </div>

                  <h2 className="text-white text-4xl font-bold mb-6">Website Design</h2>
                  <p className="text-white text-md mb-8 leading-relaxed">
                    Crafting visually engaging user experiences that make websites seamless and user-friendly.
                  </p>

                  <div className="inline-flex items-center space-x-2 group text-white">
                    <Link href="/portfolio" className="hover:text-blue-300">
                      <u>View Portfolio</u>
                    </Link>
                    <Image src="/arrow-up-no-border.svg" alt="Arrow Up No Border" width={15} height={15} className="w-3 h-3 text-white" />
                  </div>
                </div>

                <div className="max-w-[45%] w-full h-[85%] absolute right-0 bottom-0">
                  <Image src="/branding.svg" fill alt="Website Design Mockup" />
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-[#4494B9] rounded-3xl p-8 p-4 rounded md:w-5/12 w-full relative overflow-hidden">
              <div className="p-8w-full h-full flex">
                <div className="w-1/2 flex flex-col justify-center z-10">
                  <div className="bg-white/20 rounded-full p-4 w-15 h-15 flex items-center justify-center mb-10">
                    <Image src="/marketing-icon.svg" alt="Website Design" width={30} height={30} className="text-white" />
                  </div>

                  <h2 className="text-white text-4xl font-bold mb-6">Website Design</h2>
                  <p className="text-white text-md mb-8 leading-relaxed">
                    Crafting visually engaging user experiences that make websites seamless and user-friendly.
                  </p>

                  <div className="inline-flex items-center space-x-2 group text-white">
                    <Link href="/portfolio" className="hover:text-blue-300">
                      <u>View Portfolio</u>
                    </Link>
                    <Image src="/arrow-up-no-border.svg" alt="Arrow Up No Border" width={15} height={15} className="w-3 h-3 text-white" />
                  </div>
                </div>

                <div className="max-w-[45%] w-full h-[85%] absolute right-0 bottom-0">
                  <Image src="/marketing.svg" fill alt="Website Design Mockup" />
                </div>
              </div>
            </div>

            <div className="bg-[#171748] rounded-3xl p-8 p-4 rounded md:w-7/12 w-full relative overflow-hidden">
              <div className="p-8w-full h-full flex">
                <div className="w-1/2 flex flex-col justify-center z-10">
                  <div className="bg-white/20 rounded-full p-4 w-15 h-15 flex items-center justify-center mb-10">
                    <Image src="/graphic-design-icon.svg" alt="Website Design" width={30} height={30} className="text-white" />
                  </div>

                  <h2 className="text-white text-4xl font-bold mb-6">Website Design</h2>
                  <p className="text-white text-md mb-8 leading-relaxed">
                    Crafting visually engaging user experiences that make websites seamless and user-friendly.
                  </p>

                  <div className="inline-flex items-center space-x-2 group text-white">
                    <Link href="/portfolio" className="hover:text-blue-300">
                      <u>View Portfolio</u>
                    </Link>
                    <Image src="/arrow-up-no-border.svg" alt="Arrow Up No Border" width={15} height={15} className="w-3 h-3 text-white" />
                  </div>
                </div>

                <div className="max-w-[45%] w-full h-[85%] absolute right-0 bottom-0">
                  <Image src="/graphic-design.svg" fill alt="Website Design Mockup" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkTogether
