import React, { useEffect, useRef } from 'react'

export default function SimpleTemplates() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Video autoplay failed:', error)
      })
    }
  }, [])

  const projects = [
    {
      title: 'Smarter Travel Award',
      description:
        'Designed a user-friendly mobile app to support the Smarter Travel programme, aimed at promoting sustainable travel for students. The app helps students plan their commute by showing live weather updates, road news, and different travel options such as cycling, driving, public transport, and carpooling with fellow students. The car-sharing feature allows drivers to earn money and helps passengers save time, encouraging smarter and more eco-friendly commuting choices.',
      src: '/portfolio/smart-travel-award.mp4',
    },
    {
      title: 'AI & The environment',
      description:
        'Designed a web page exploring how artificial intelligence, while aimed at helping the planet, could also harm it - such as through energy use and resource demands. The project was inspired by the ideas of James Bridle.  The layout was designed for easy reading and visual impact, encouraging critical thinking through design and content.',
      src: '/portfolio/ai-and-environment.mp4',
    },
    {
      title: 'BookShelf',
      description:
        'Designed a warm and inviting library app showcasing popular books, complete with descriptions and user ratings. The design focused on creating a cozy, book-like feel using soft colors, clean layouts, and consistent visual elements. The user experience was built to be intuitive and relaxing, encouraging users to explore and discover new reads.',
      src: '/portfolio/book-shelf.mp4',
    },
    {
      title: 'Energy choices',
      description:
        'Designed an educational web page to explain the impact of non-renewable vs. renewable energy. Focused on clear structure, engaging visuals, and easy navigation. Included sections on energy sources, practical tips, and ways to get involved in sustainability efforts in Ireland. The design aimed to be informative, user-friendly, and visually consistent.',
      src: '/portfolio/ai-choices.mp4',
    },
  ]

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Text Content */}
              <div className="flex-1 lg:max-w-xl bg-gray-50 p-6 rounded-xl">
                <h2 className={`text-3xl lg:text-4xl xl:text-3xl ${getTitleColor(index)} font-bold  mb-6 lg:mb-8`}>{project.title}</h2>
                <p className="text-gray-600 text-base lg:text-md leading-relaxed">{project.description}</p>
              </div>

              {/* Phone Mockups */}
              <div className="flex-1 relative">
                <div className="relative p-2">
                  <video ref={videoRef} className="w-full h-auto rounded-xl" loop muted playsInline autoPlay>
                    <source src={project.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function getTitleColor(index: number) {
  if (index === 2) {
    return 'text-black'
  }

  if (index === 3) {
    return 'text-[#ABA7F9]'
  }

  return 'text-[#4494B9]'
}
