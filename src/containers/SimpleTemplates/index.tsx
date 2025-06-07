import React from 'react'
import { LazyPortfolioVideo } from '@/components/OptimisedVideo'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

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

                {project.href && (
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800  font-medium text-sm  transition-colors duration-200 group mt-6"
                  >
                    <span className="underline decoration-1 underline-offset-2 hover:decoration-2">View Full Page</span>
                    <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                )}
              </div>

              {/* Phone Mockups */}
              <div className="flex-1 relative">
                <div className="relative p-2">
                  <LazyPortfolioVideo
                    videoName={project.src}
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
          ))}
        </div>
      </div>
    </div>
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
