'use client'

import { useState, useEffect, useRef, RefObject } from 'react'

interface UseInViewOptions extends IntersectionObserverInit {
    triggerOnce?: boolean
}

export function useInView(
    options: UseInViewOptions = {}
): [RefObject<HTMLDivElement>, boolean] {
    const [isInView, setIsInView] = useState(false)
    const ref = useRef<HTMLDivElement>(null!)
    const { triggerOnce = true, threshold = 0.1, rootMargin = '0px' } = options

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                    if (triggerOnce) {
                        observer.unobserve(element)
                    }
                } else if (!triggerOnce) {
                    setIsInView(false)
                }
            },
            { threshold, rootMargin }
        )

        observer.observe(element)

        return () => {
            observer.unobserve(element)
        }
    }, [threshold, rootMargin, triggerOnce])

    return [ref, isInView]
}

export function useScrollProgress(): number {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight
            const scrollPercent =
                docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
            setProgress(scrollPercent)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return progress
}
