'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface Props {
  src: string
  poster?: string
  className?: string
  containerClassName?: string
  lazy?: boolean
  quality?: 'low' | 'medium' | 'high' | 'auto'
}

const OptimizedVideo = ({
  src,
  poster,
  className = '',
  containerClassName = '',
  lazy = true,
  quality = 'auto', // 'low', 'medium', 'high', 'auto'
}: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(!lazy)
  const [hasError, setHasError] = useState(false)

  // Intersection Observer for lazy loading
  const { isIntersecting } = useIntersectionObserver(videoRef, {
    threshold: 0.1,
    rootMargin: '50px',
  })

  // Load video when it enters viewport
  useEffect(() => {
    if (lazy && isIntersecting && !shouldLoad) {
      setShouldLoad(true)
    }
  }, [isIntersecting, lazy, shouldLoad])

  // Handle video loading and autoplay
  const handleVideoLoad = useCallback(async () => {
    if (!videoRef.current || !shouldLoad) return

    try {
      // Set loading state
      setIsLoaded(false)

      // Wait for video to be ready
      if (videoRef.current.readyState >= 3) {
        await videoRef.current.play()
        setIsLoaded(true)
      } else {
        videoRef.current.addEventListener(
          'canplaythrough',
          async () => {
            try {
              await videoRef.current?.play()
              setIsLoaded(true)
            } catch (error) {
              console.warn('Video autoplay prevented:', error)
              setIsLoaded(true) // Still show video even if autoplay fails
            }
          },
          { once: true }
        )
      }
    } catch (error) {
      console.error('Video loading error:', error)
      setHasError(true)
      setIsLoaded(true)
    }
  }, [shouldLoad])

  useEffect(() => {
    handleVideoLoad()
  }, [handleVideoLoad])

  // Get optimized video source based on quality and device
  const getOptimizedSource = (baseSrc: string) => {
    if (!baseSrc) return ''

    const [path, extension] = baseSrc.split(/\.(?=[^.]+$)/)

    // For external CDN URLs, return as-is
    if (baseSrc.startsWith('http')) {
      return baseSrc
    }

    // For local files, add quality suffix
    switch (quality) {
      case 'low':
        return `${path}-low.${extension}`
      case 'medium':
        return `${path}-medium.${extension}`
      case 'high':
        return `${path}-high.${extension}`
      default:
        return baseSrc
    }
  }

  if (hasError) {
    return (
      <div className={`bg-gray-100 rounded-xl flex items-center justify-center ${containerClassName}`}>
        <div className="text-gray-500 text-center p-8">
          <p>Video unavailable</p>
          {poster && <img src={poster} alt="Video thumbnail" className={`mt-4 rounded-lg ${className}`} />}
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${containerClassName}`}>
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 rounded-xl flex items-center justify-center">
          <div className="animate-pulse">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Video element */}
      {shouldLoad && (
        <video
          ref={videoRef}
          className={`w-full h-auto transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          loop
          muted
          playsInline
          preload={lazy ? 'none' : 'metadata'}
          poster={poster}
          onLoadStart={() => setIsLoaded(false)}
          onError={() => setHasError(true)}
        >
          <source src={getOptimizedSource(src)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  )
}

export default OptimizedVideo
