'use client'

import { Button } from './ui/button'
import { IoLogoGithub } from 'react-icons/io'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const HeroSection = () => {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true)
    }, [])

    const textStroke = {
        WebkitTextStroke: '1px var(--color-blue-strong)',
    }

    return (
        <section
            id="#hero-section"
            className="flex flex-col gap-2 sm:gap-1 font-sans rounded-sm bg-soft-cream text-blue dark:text-soft-blue dark:bg-navy-soft p-4 sm:p-6 shadow-md shadow-sky dark:shadow-none dark:border-2"
        >
            <div className="flex-1 flex gap-8">
                <div className="flex-1">
                    <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-mono text-blue-strong dark:text-soft-blue">
                        hi, i&apos;m
                        <span
                            className="mt-2 block font-serif font-bold text-blue dark:text-soft-blue text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-shadow-md"
                            style={
                                mounted && theme === 'light'
                                    ? textStroke
                                    : undefined
                            }
                        >
                            Guest Mangulabnan
                        </span>
                    </h1>
                    <p className="my-2 sm:my-4 mb-4 sm:mb-8 text-xs sm:text-sm font-mono dark:text-sky">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean imperdiet mattis nisl vitae euismod. Nulla eu
                        nulla euismod, pretium lectus eget, rhoncus enim. Donec
                        non maximus est, sit amet aliquam neque. Mauris sit amet
                        tincidunt leo. Pellentesque nec dui sed nibh viverra
                        consectetur. Etiam pellentesque ullamcorper nunc at
                        mollis. Donec mollis leo sit amet risus laoreet, ac
                        tincidunt ante eleifend. Nunc malesuada viverra sem, eu
                        accumsan tellus volutpat in.
                    </p>
                </div>

                <nav className="flex flex-col gap-2 sm:gap-4 dark:text-sky">
                    <a
                        href="https://github.com/ceejmangulabnan"
                        target="_blank"
                    >
                        <IoLogoGithub className="size-6 sm:size-10 transform transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/cheljee-mangulabnan/"
                        target="_blank"
                    >
                        <FaLinkedin className="size-6 sm:size-10 transform transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1" />
                    </a>
                    <a href="mailto:cheljee.mangulabnan@gmail.com">
                        <MdEmail className="size-6 sm:size-10 transform transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1" />
                    </a>
                </nav>
            </div>

            <div className="flex flex-col sm:flex-row font-sans gap-2 sm:gap-4">
                <Button
                    size={'lg'}
                    className="bg-soft-cream text-blue dark:bg-navy dark:text-cream dark:inset-ring-0 inset-ring-1 ring-blue-strong hover:bg-blue hover:text-cream text-xs sm:text-sm"
                >
                    SEE MY WORK
                </Button>
                <Button
                    size={'lg'}
                    className="bg-blue text-cream dark:bg-soft-blue dark:text-navy-soft inset-ring-1 dark:inset-ring-0 ring-blue hover:bg-blue-strong text-xs sm:text-sm"
                >
                    WORK WITH ME
                </Button>
            </div>
        </section>
    )
}

export default HeroSection
