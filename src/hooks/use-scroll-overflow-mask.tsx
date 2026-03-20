'use client'
import {
    useMotionValue,
    MotionValue,
    animate,
    useMotionValueEvent,
} from 'motion/react'

export const useScrollOverflowMask = (scrollYProgress: MotionValue<number>) => {
    const start = '0px'
    const end = 'calc(100% - 20px)'
    const startInset = '40px'
    const endInset = 'calc(100% - 20px)'
    const opaque = 'rgba(255, 255, 255, 1)'
    const transparent = 'rgba(255, 255, 255, 0)'
    const maskImage = useMotionValue(
        `linear-gradient(180deg, ${opaque}, ${opaque} ${start}, ${opaque} ${endInset}, ${transparent})`
    )

    let lastState = 'middle'

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        const isTop = value <= 0.01
        const isBottom = value >= 0.99
        const isNotScrollable = value == 1

        let nextState = 'middle'
        if (isTop) nextState = 'top'
        else if (isBottom) nextState = 'bottom'
        else if (isNotScrollable) nextState = 'notScrollable'

        if (nextState === lastState) return
        lastState = nextState

        if (nextState === 'top') {
            animate(
                maskImage,
                `linear-gradient(180deg, ${opaque}, ${opaque} ${start}, ${opaque} ${endInset}, ${transparent})`
            )
        } else if (nextState === 'bottom') {
            animate(
                maskImage,
                `linear-gradient(180deg, ${transparent}, ${opaque} ${startInset}, ${opaque} ${end}, ${opaque})`
            )
        } else if (nextState === 'notScrollable') {
            animate(
                maskImage,
                `linear-gradient(180deg, ${transparent}, 0 0, 0 0, 0)`
            )
        } else {
            animate(
                maskImage,
                `linear-gradient(180deg, ${transparent}, ${opaque} ${startInset}, ${opaque} ${endInset}, ${transparent})`
            )
        }
    })

    return maskImage
}
