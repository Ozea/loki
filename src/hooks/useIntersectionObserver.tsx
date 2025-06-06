import { useEffect, useState } from 'react'

/* eslint-disable @typescript-eslint/no-explicit-any */
export function useIntersectionObserver(elementRef: any, options = { threshold: 0.1, rootMargin: '0px' }) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    if (!elementRef.current) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    observer.observe(elementRef.current)

    return () => observer.disconnect()
  }, [elementRef, options.threshold, options.rootMargin])

  return { isIntersecting }
}
