'use client'
import {
    useMotionValue,
    MotionValue,
    animate,
    useMotionValueEvent,
} from 'motion/react'
import { useEffect } from 'react'

export const useScrollOverflowMask = (scrollYProgress: MotionValue<number>) => {
    const start = '0px'
    const end = 'calc(100% - 20px)'
    const startInset = '40px'
    const endInset = 'calc(100% - 20px)'
    const opaque = 'rgba(0, 255, 0, 1)'
    const transparent = 'rgba(0, 255, 0, 0)'

    const maskImage = useMotionValue(
        `linear-gradient(180deg, ${opaque}, ${opaque} ${start}, ${opaque} ${endInset}, ${opaque})`
    )

    // ✅ FIX 1: Set the correct initial mask synchronously on mount,
    // before any scroll event fires. This handles the non-scrollable case
    // where scrollYProgress stays at 0 forever and 'change' never fires.
    useEffect(() => {
        const value = scrollYProgress.get()
        const isTop = value <= 0.01
        const isBottom = value >= 0.99

        // If scrollYProgress is 0 AND 1 simultaneously, the container
        // has no overflow — make the mask fully opaque (no fading).
        const isNotScrollable = isTop && isBottom

        if (isNotScrollable) {
            console.log('not scroll')
            maskImage.set(
                `linear-gradient(${opaque}, ${opaque} ${start}, ${opaque} ${end}, ${opaque})`
            )
        } else if (isTop) {
            console.log('top scroll')
            maskImage.set(
                `linear-gradient(${opaque}, ${opaque} ${start}, ${opaque} ${endInset}, ${transparent})`
            )
        } else if (isBottom) {
            console.log('bottom scroll')
            maskImage.set(
                `linear-gradient(${transparent}, ${opaque} ${startInset}, ${opaque} ${end}, ${opaque})`
            )
        } else {
            console.log('else scroll')
            maskImage.set(
                `linear-gradient(${transparent}, ${opaque} ${startInset}, ${opaque} ${endInset}, ${transparent})`
            )
        }
    }, [scrollYProgress])

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        const isTop = value <= 0.01
        const isBottom = value >= 0.99

        if (isTop) {
            animate(
                maskImage,
                `linear-gradient(${opaque}, ${opaque} ${start}, ${opaque} ${endInset}, ${transparent})`
            )
        } else if (isBottom) {
            animate(
                maskImage,
                `linear-gradient(${transparent}, ${opaque} ${startInset}, ${opaque} ${end}, ${opaque})`
            )
        } else {
            animate(
                maskImage,
                `linear-gradient(${transparent}, ${opaque} ${startInset}, ${opaque} ${endInset}, ${transparent})`
            )
        }
    })

    return maskImage
}
