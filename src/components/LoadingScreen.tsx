import { motion } from 'motion/react'
import { Gamepad2 } from 'lucide-react'
import { useState, useEffect } from 'react'

interface LoadingScreenProps {
    onLoadComplete: () => void
}

export function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
    const [progress, setProgress] = useState(0)
    const [loadingText, setLoadingText] = useState('Initializing')

    const loadingSteps = [
        { text: 'Initializing', progress: 0 },
        { text: 'Loading assets', progress: 20 },
        { text: 'Compiling skills', progress: 45 },
        { text: 'Loading projects', progress: 65 },
        { text: 'Building experience tree', progress: 85 },
        { text: 'Ready!', progress: 100 },
    ]

    useEffect(() => {
        let currentStep = 0
        const interval = setInterval(() => {
            if (currentStep < loadingSteps.length) {
                setLoadingText(loadingSteps[currentStep].text)
                setProgress(loadingSteps[currentStep].progress)
                currentStep++
            } else {
                clearInterval(interval)
                setTimeout(() => {
                    onLoadComplete()
                }, 500)
            }
        }, 400)

        return () => clearInterval(interval)
    }, [])

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0a0a0a] flex items-center justify-center"
        >
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.1, 0.2, 0.1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute w-96 h-96 bg-[#ff6b35]/20 rounded-full blur-3xl top-1/4 left-1/4"
                />
                <motion.div
                    animate={{
                        scale: [1.5, 1, 1.5],
                        opacity: [0.1, 0.2, 0.1],
                        rotate: [360, 180, 0],
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute w-96 h-96 bg-[#ff6b35]/20 rounded-full blur-3xl bottom-1/4 right-1/4"
                />
            </div>

            {/* Loading content */}
            <div className="relative z-10 text-center">
                {/* Logo/Icon */}
                <motion.div
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        rotate: {
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear',
                        },
                        scale: { duration: 1, repeat: Infinity },
                    }}
                    className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#ff8555] p-1"
                >
                    <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center">
                        <Gamepad2 className="w-12 h-12 text-[#ff6b35]" />
                    </div>
                </motion.div>

                {/* Loading text */}
                <motion.div
                    key={loadingText}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h2 className="text-2xl text-[#f5f5f5] mb-2">
                        {loadingText}
                    </h2>
                    <div className="flex items-center justify-center gap-1">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    opacity: [0.3, 1, 0.3],
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                }}
                                className="w-2 h-2 bg-[#ff6b35] rounded-full"
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Progress bar */}
                <div className="w-80 mx-auto">
                    <div className="h-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.3 }}
                            className="h-full bg-gradient-to-r from-[#ff6b35] to-[#ff8555] relative"
                        >
                            <motion.div
                                animate={{
                                    x: ['-100%', '100%'],
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            />
                        </motion.div>
                    </div>
                    <div className="mt-2 text-sm text-[#9a9a9a]">
                        {progress}%
                    </div>
                </div>

                {/* Flavor text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-8 text-xs text-[#4a4a4a]"
                >
                    Press any key to skip... just kidding, almost there!
                </motion.div>
            </div>
        </motion.div>
    )
}
