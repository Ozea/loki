import { CenteredFullWidthImage } from '@/components/Image/CenteredFullWidthImage'
import { LazyPortfolioVideo } from '@/components/OptimisedVideo'
import React from 'react'

interface Post {
  id: number
  companyLogo: string
  videoUrl: string
}

export const SocialMediaPosts = () => {
  const posts: Post[] = [
    {
      id: 1,
      companyLogo: '/logos/gaga-muller.png',
      videoUrl: 'gagamuller-post',
    },
    {
      id: 2,
      companyLogo: '/logos/sr-paint.png',
      videoUrl: 'sr-paint-post',
    },
    {
      id: 3,
      companyLogo: '/logos/tetra.png',
      videoUrl: 'tetra-post',
    },
  ]

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col justify-end space-y-6">
              {/* Company Logo Section */}
              <div>
                <CenteredFullWidthImage imageUrl={post.companyLogo} maxWidth="max-w-[8rem] lg:max-w-[10rem]" />
              </div>

              {/* Post Content Section */}
              <div>
                {/* <CenteredFullWidthImage imageUrl={post.imageUrl} maxWidth="max-w-lg lg:max-w-3xl" /> */}
                <LazyPortfolioVideo
                  videoName={post.videoUrl}
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
          ))}
        </div>
      </div>
    </div>
  )
}
