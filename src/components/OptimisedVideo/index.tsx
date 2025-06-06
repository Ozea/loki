'use client';

// components/PortfolioVideo.jsx
import { useVideoQuality } from '@/hooks/useVideoQuality'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface PortfolioVideoProps {
  videoName: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  quality?: string
}

// Basic portfolio video component
export const PortfolioVideo = ({
  videoName,
  className = '',
  autoPlay = false,
  muted = true,
  loop = false,
  controls = true,
  quality = 'auto',
}: PortfolioVideoProps) => {
  const [selectedQuality] = useVideoQuality(quality)

  return (
    <video
      className={className}
      controls={controls}
      preload="metadata"
      poster={`/portfolio/videos/thumbnails/${videoName}.jpg`}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline
    >
      <source src={`/portfolio/videos/${videoName}-${selectedQuality}.webm`} type="video/webm" />
      <source src={`/portfolio/videos/${videoName}-${selectedQuality}.mp4`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

interface LazyPortfolioVideoProps extends PortfolioVideoProps {
  placeholderClassName?: string
  videoClassName?: string
}

// Lazy-loaded video component
export const LazyPortfolioVideo = ({ videoName, className = '', placeholderClassName = 'bg-gray-100', ...videoProps }: LazyPortfolioVideoProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px',
  })

  return (
    <div ref={ref} className={className}>
      {inView ? (
        <PortfolioVideo videoName={videoName} className={`w-full h-auto ${videoProps.videoClassName}`} {...videoProps} />
      ) : (
        <div className={`${placeholderClassName} flex items-center justify-center text-gray-500`} style={{ aspectRatio: '16/9' }}>
          <div className="text-center">
            <div className="animate-pulse mb-2">🎬</div>
            <div>Loading video...</div>
          </div>
        </div>
      )}
    </div>
  )
}

interface PortfolioVideoWithQualityProps extends PortfolioVideoProps {
  videoName: string
  className?: string
}

// Video with quality selector
export const PortfolioVideoWithQuality = ({ videoName, className = '' }: PortfolioVideoWithQualityProps) => {
  const [quality, setQuality] = useState('720p')
  const [isLoading, setIsLoading] = useState(false)

  const handleQualityChange = (newQuality: string) => {
    setIsLoading(true)
    setQuality(newQuality)
  }

  return (
    <div className={className}>
      {/* Quality selector */}
      <div className="flex gap-2 mb-2">
        {['480p', '720p', '1080p'].map((q) => (
          <button
            key={q}
            onClick={() => handleQualityChange(q)}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              quality === q ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {q}
          </button>
        ))}
      </div>

      {/* Video */}
      <div className="relative">
        {isLoading && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
            <div className="text-white">Loading...</div>
          </div>
        )}
        <video
          key={`${videoName}-${quality}`} // Force re-render on quality change
          className="w-full h-auto"
          controls
          preload="metadata"
          poster={`/portfolio/videos/thumbnails/${videoName}.jpg`}
          onLoadedData={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        >
          <source src={`/portfolio/videos/${videoName}-${quality}.webm`} type="video/webm" />
          <source src={`/portfolio/videos/${videoName}-${quality}.mp4`} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

interface PortfolioVideoGalleryProps {
  videos: {
    name: string
    title?: string
    description?: string
    props?: PortfolioVideoProps
  }[]
  className?: string
}

// Video gallery component
export const PortfolioVideoGallery = ({ videos, className = '' }: PortfolioVideoGalleryProps) => {
  return (
    <div className={`grid gap-6 ${className}`}>
      {videos.map((video, index) => (
        <div key={video.name || index} className="space-y-2">
          {video.title && <h3 className="text-lg font-semibold">{video.title}</h3>}
          {video.description && <p className="text-gray-600 text-sm">{video.description}</p>}
          <LazyPortfolioVideo videoName={video.name} className="rounded-lg overflow-hidden shadow-lg" {...video.props} />
        </div>
      ))}
    </div>
  )
}
