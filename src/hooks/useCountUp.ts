import { useEffect, useRef, useState } from 'react'

interface CountUpOptions {
  duration?: number
  start?: boolean
}

/** Animated number counter (easeOutCubic). Respects reduced-motion. */
export function useCountUp(target: number, { duration = 1600, start = true }: CountUpOptions = {}) {
  const [value, setValue] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!start) return

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      rafRef.current = requestAnimationFrame(() => setValue(target))
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
      }
    }

    const startTime = performance.now()
    const tick = (now: number) => {
      const progress = Math.min(1, (now - startTime) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [target, duration, start])

  return value
}
