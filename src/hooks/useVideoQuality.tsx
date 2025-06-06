// hooks/useVideoQuality.js
import { useState, useEffect } from 'react'

export const useVideoQuality = (preferredQuality = 'auto') => {
  const [quality, setQuality] = useState('720p') // Safe default

  useEffect(() => {
    if (preferredQuality !== 'auto') {
      setQuality(preferredQuality)
      return
    }

    const detectQuality = () => {
      // Method 1: Screen-based detection (most reliable)
      const screenWidth = window.innerWidth
      const pixelRatio = window.devicePixelRatio || 1
      const effectiveWidth = screenWidth * pixelRatio

      // Method 2: Check if user is on mobile
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

      // Method 3: Check reduced motion preference (users on slow connections often enable this)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      // Decision logic
      if (isMobile || prefersReducedMotion) {
        return '480p' // Conservative for mobile/slow connections
      }

      if (effectiveWidth >= 1920) {
        return '1080p' // High-res screens
      } else if (effectiveWidth >= 1280) {
        return '720p' // Standard screens
      } else {
        return '480p' // Smaller screens
      }
    }

    if (typeof window !== 'undefined') {
      setQuality(detectQuality())
    }
  }, [preferredQuality])

  return [quality, setQuality]
}

// Alternative: Even simpler hook based on just screen size
export const useSimpleVideoQuality = () => {
  const [quality, setQuality] = useState('720p')

  useEffect(() => {
    const updateQuality = () => {
      const width = window.innerWidth

      if (width >= 1440) {
        setQuality('1080p')
      } else if (width >= 768) {
        setQuality('720p')
      } else {
        setQuality('480p')
      }
    }

    if (typeof window !== 'undefined') {
      updateQuality()
      window.addEventListener('resize', updateQuality)
      return () => window.removeEventListener('resize', updateQuality)
    }
  }, [])

  return [quality, setQuality]
}

// Hook with user preference storage
export const useVideoQualityWithPreference = () => {
  const [quality, setQuality] = useState('720p')

  useEffect(() => {
    // Check if user has a saved preference
    const savedQuality = localStorage.getItem('videoQuality')
    if (savedQuality && ['480p', '720p', '1080p'].includes(savedQuality)) {
      setQuality(savedQuality)
    } else {
      // Auto-detect based on screen size
      const width = window.innerWidth
      const autoQuality = width >= 1440 ? '1080p' : width >= 768 ? '720p' : '480p'
      setQuality(autoQuality)
    }
  }, [])

  const updateQuality = (newQuality: string) => {
    setQuality(newQuality)
    localStorage.setItem('videoQuality', newQuality)
  }

  return [quality, updateQuality]
}
