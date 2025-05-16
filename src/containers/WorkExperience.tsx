// components/TimelineExperience.js
import React from 'react'
import Image from 'next/image'

const TimelineExperience = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 font-sans">
      <div className="flex flex-col items-center">
        <span className="gradient-background text-center block h-[5px] w-[70px] bg-black" />
        <h1 className="text-3xl px-5 mb-12 text-gray-800 text-center mt-3">
          My{' '}
          <span className="text-gradient pr-1">
            Work <i>Experience</i>{' '}
          </span>
        </h1>
      </div>

      <div className="relative mt-5">
        {/* Dashed timeline line */}
        <div
          className="absolute left-1/2 h-[calc(100%-30%)] w-0.5 transform -translate-x-1/2"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #9CA3AF 50%, transparent 50%)',
            backgroundSize: '1px 8px',
            backgroundRepeat: 'repeat-y',
          }}
        ></div>

        <div className="space-y-12 max-w-3xl mx-auto">
          {/* Technical University Dublin */}
          <div className="flex w-full items-start relative">
            <div className="w-1/2 pr-8">
              <h2 className="text-xl font-semibold text-gray-800">Technical University Dublin</h2>
              <p className="text-gray-500">Sep 2021 - May 2025</p>
            </div>

            <div className="w-16 flex justify-center">
              <div className="relative z-10 w-8 h-8">
                <Image src="/gradient-dot.svg" alt="Timeline dot" width={30} height={30} className="w-full h-full" />
              </div>
            </div>

            <div className="w-1/2 pl-8">
              <h3 className="text-lg font-medium text-gray-700">Bachelors of Arts</h3>
              <p className="text-gray-600 mt-1">Creative digital media field</p>
            </div>
          </div>

          {/* BagaMuller */}
          <div className="flex w-full items-start relative">
            <div className="w-1/2 pr-8">
              <h2 className="text-xl font-semibold text-gray-800">BagaMuller</h2>
              <p className="text-gray-500">February 2024 - July 2024</p>
            </div>

            <div className="w-16 flex justify-center">
              <div className="relative z-10 w-8 h-8">
                <Image src="/regular-dot.svg" alt="Timeline dot" width={30} height={30} className="w-full h-full" />
              </div>
            </div>

            <div className="w-1/2 pl-8">
              <h3 className="text-lg font-medium text-gray-700">Executive Marketing</h3>
              <p className="text-gray-600 mt-1">
                Worked on designing brochures, business cards, illustration library, brand identity, video editing, filming and more
              </p>
            </div>
          </div>

          {/* SR Paint */}
          <div className="flex w-full items-start relative">
            <div className="w-1/2 pr-8">
              <h2 className="text-xl font-semibold text-gray-800">SR Paint</h2>
              <p className="text-gray-500">December 2024 - Ongoing</p>
            </div>

            <div className="w-16 flex justify-center">
              <div className="relative z-10 w-8 h-8">
                <Image src="/gradient-dot.svg" alt="Timeline dot" width={30} height={30} className="w-full h-full" />
              </div>
            </div>

            <div className="w-1/2 pl-8">
              <h3 className="text-lg font-medium text-gray-700">Digital & Visual Designer</h3>
              <p className="text-gray-600 mt-1">
                At SR Paint, I led the design and development of the company's website, created social media content, and brand identity to strengthen
                the brands online presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TimelineExperience
