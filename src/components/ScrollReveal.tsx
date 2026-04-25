'use client'

import { ReactNode } from 'react'
import { useInView } from '@/hooks/use-scroll-animation'

interface ScrollRevealProps {
    children: ReactNode
    direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
    delay?: number
    duration?: number
    threshold?: number
    className?: string
}

export function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 500,
    threshold = 0.1,
    className = '',
}: ScrollRevealProps) {
    const [ref, isInView] = useInView({ threshold, triggerOnce: true })

    return (
        <div
            ref={ref}
            className={`${className}`}
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView
                    ? 'translate(0)'
                    : direction === 'up'
                      ? 'translateY(50px)'
                      : direction === 'down'
                        ? '-translateY(50px)'
                        : direction === 'left'
                          ? 'translateX(50px)'
                          : direction === 'right'
                            ? '-translateX(50px)'
                            : 'none',
                transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    )
}

interface StaggerItemProps {
    children: ReactNode
    index: number
    baseDelay?: number
    staggerDelay?: number
    className?: string
}

export function StaggerItem({
    children,
    index,
    baseDelay = 0,
    staggerDelay = 50,
    className = '',
}: StaggerItemProps) {
    const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true })
    const delay = baseDelay + index * staggerDelay

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 400ms ease-out, transform 400ms ease-out`,
                transitionDelay: isInView ? `${delay}ms` : '0ms',
            }}
        >
            {children}
        </div>
    )
}
