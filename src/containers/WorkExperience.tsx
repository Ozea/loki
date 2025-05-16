// components/TimelineExperience.js
import React from 'react'
import Image from 'next/image'

const TimelineExperience = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 font-sans">
      <div className="flex flex-col items-center">
        <span className="gradient-background text-center block h-[5px] w-[70px] bg-black" />
        <h1 className="text-3xl px-5 mb-12 text-gray-900 text-center mt-3">
          My{' '}
          <span className="text-gradient pr-1">
            Work <i>Experience</i>{' '}
          </span>
        </h1>
      </div>

      <div className="relative mt-5">
        {/* Dashed timeline line - hidden on md */}
        <div
          className="hidden md:block absolute left-1/2 h-[calc(100%-30%)] w-0.5 transform -translate-x-1/2"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #9CA3AF 50%, transparent 50%)',
            backgroundSize: '1px 8px',
            backgroundRepeat: 'repeat-y',
          }}
        ></div>

        <div className="space-y-12 max-w-3xl mx-auto">
          {/* Technical University Dublin */}
          <div className="flex flex-col md:flex-row w-full items-start relative">
            <div className="w-full md:w-1/2 md:pr-8">
              <h2 className="text-xl font-semibold text-gray-900">Technical University Dublin</h2>
              <p className="text-gray-400">Sep 2021 - May 2025</p>
              <div className="md:hidden mt-2">
                <h2 className="text-xl font-medium text-gray-900">Bachelors of Arts</h2>
                <p className="text-gray-400 mt-1">Creative digital media field</p>
              </div>
            </div>

            {/* Dot - hidden on md */}
            <div className="hidden md:flex w-16 justify-center">
              <div className="relative z-10 w-8 h-8">
                <Image src="/gradient-dot.svg" alt="Timeline dot" width={30} height={30} className="w-full h-full" />
              </div>
            </div>

            <div className="hidden md:block w-1/2 pl-8">
              <h2 className="text-xl font-medium text-gray-900">Bachelors of Arts</h2>
              <p className="text-gray-400 mt-1">Creative digital media field</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full items-start relative">
            <div className="w-full md:w-1/2 md:pr-8">
              <h2 className="text-xl font-semibold text-gray-900">GagaMuller</h2>
              <p className="text-gray-400">February 2024 - July 2024</p>
              <div className="md:hidden mt-2">
                <h2 className="text-xl font-medium text-gray-900">Executive Marketing</h2>
                <p className="text-gray-400 mt-1">
                  Worked on designing brochures, business cards, illustration library, brand identity, video editing, filming and more
                </p>
              </div>
            </div>

            {/* Dot - hidden on md */}
            <div className="hidden md:flex w-16 justify-center">
              <div className="relative z-10 w-8 h-8">
                <Image src="/regular-dot.svg" alt="Timeline dot" width={30} height={30} className="w-full h-full" />
              </div>
            </div>

            <div className="hidden md:block w-1/2 pl-8">
              <h2 className="text-xl font-medium text-gray-900">Executive Marketing</h2>
              <p className="text-gray-400 mt-1">
                Worked on designing brochures, business cards, illustration library, brand identity, video editing, filming and more
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full items-start relative">
            <div className="w-full md:w-1/2 md:pr-8">
              <h2 className="text-xl font-semibold text-gray-900">SR Paint</h2>
              <p className="text-gray-400">December 2024 - Ongoing</p>
              <div className="md:hidden mt-2">
                <h2 className="text-xl font-medium text-gray-900">Digital & Visual Designer</h2>
                <p className="text-gray-400 mt-1">
                  At SR Paint, I led the design and development of the company’s website, created social media content, and brand identity to
                  strengthen the brand’s online presence.
                </p>
              </div>
            </div>

            {/* Dot - hidden on md */}
            <div className="hidden md:flex w-16 justify-center">
              <div className="relative z-10 w-8 h-8">
                <Image src="/gradient-dot.svg" alt="Timeline dot" width={30} height={30} className="w-full h-full" />
              </div>
            </div>

            <div className="hidden md:block w-1/2 pl-8">
              <h2 className="text-xl font-medium text-gray-900">Digital & Visual Designer</h2>
              <p className="text-gray-400 mt-1">
                At SR Paint, I led the design and development of the company’s website, created social media content, and brand identity to strengthen
                the brand’s online presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TimelineExperience
