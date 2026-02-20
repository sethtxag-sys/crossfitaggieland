'use client'

import { useEffect, useRef, useState } from 'react'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function FadeIn({ children, className = '', delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isVisible) return

    const el = ref.current
    if (!el) return

    // Very aggressive observer — 500px lookahead so fast-scrolling never skips content
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0, rootMargin: '200px 0px 500px 0px' }
    )

    observer.observe(el)

    // Nuclear fallback: if element is STILL hidden after 2.5s, force it visible.
    // This prevents any content from ever staying invisible on fast scrolls or
    // edge cases where IntersectionObserver doesn't fire.
    const fallback = setTimeout(() => {
      setIsVisible(true)
    }, 2500)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [isVisible])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-6'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
