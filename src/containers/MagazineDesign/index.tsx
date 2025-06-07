import React from 'react'
import Image from 'next/image'

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

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-2 space-y-2">
          {publications.map((pub) => (
            <div key={pub.id} className="break-inside-avoid mb-2">
              <div className={`${pub.height} w-full shadow-md cursor-pointer relative overflow-hidden`}>
                <Image
                  src={pub.imageUrl}
                  alt={pub.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover hover:scale-[1.075] duration-200"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
