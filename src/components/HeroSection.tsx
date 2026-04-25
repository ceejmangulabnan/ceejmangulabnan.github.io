'use client'

import { Button } from './ui/button'
import { IoLogoGithub } from 'react-icons/io'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { ScrollReveal } from './ScrollReveal'

const HeroSection = () => {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const textStroke = {
        WebkitTextStroke: '1px var(--color-blue-strong)',
    }

    return (
        <ScrollReveal>
            <section
                id="#hero-section"
                className="flex flex-col gap-2 sm:gap-1 font-sans rounded-sm bg-soft-cream text-blue dark:text-soft-blue dark:bg-navy-soft p-4 sm:p-6 shadow-md dark:shadow-none dark:border-2"
            >
                <div className="flex-1 flex gap-8">
                    <div className="flex-1">
                        <ScrollReveal delay={100}>
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
                                    Ceej Mangulabnan
                                </span>
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="my-2 sm:my-4 mb-4 sm:mb-8 text-xs sm:text-sm font-mono dark:text-sky text-shadow">
                                I'm a full-stack developer based in Pampanga,
                                Philippines, with a focus on Next.js. I'm
                                currently a 3rd-year Computer Science student. I
                                build web applications that solve real problems
                                and deliver practical value.
                            </p>
                        </ScrollReveal>
                    </div>

                    <nav className="flex flex-col gap-2 sm:gap-4 dark:text-sky">
                        <ScrollReveal delay={300} direction="right">
                            <a
                                href="https://github.com/ceejmangulabnan"
                                target="_blank"
                                className="hover:text-blue-strong dark:hover:text-sky transition-colors"
                            >
                                <IoLogoGithub className="size-6 sm:size-10 transform transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1" />
                            </a>
                        </ScrollReveal>
                        <ScrollReveal delay={350} direction="right">
                            <a
                                href="https://www.linkedin.com/in/cheljee-mangulabnan/"
                                target="_blank"
                                className="hover:text-blue-strong dark:hover:text-sky transition-colors"
                            >
                                <FaLinkedin className="size-6 sm:size-10 transform transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1" />
                            </a>
                        </ScrollReveal>
                        <ScrollReveal delay={400} direction="right">
                            <a
                                href="mailto:cheljee.mangulabnan@gmail.com"
                                className="hover:text-blue-strong dark:hover:text-sky transition-colors"
                            >
                                <MdEmail className="size-6 sm:size-10 transform transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1" />
                            </a>
                        </ScrollReveal>
                    </nav>
                </div>

                <div className="flex flex-col sm:flex-row font-sans gap-2 sm:gap-4">
                    <ScrollReveal delay={500}>
                        <Button
                            size={'lg'}
                            className="bg-soft-cream text-blue dark:bg-navy dark:text-cream dark:inset-ring-0 inset-ring-1 ring-blue-strong hover:bg-blue hover:text-cream text-xs sm:text-sm"
                        >
                            SEE MY WORK
                        </Button>
                    </ScrollReveal>
                    <ScrollReveal delay={550}>
                        <Button
                            size={'lg'}
                            className="bg-blue text-cream dark:bg-soft-blue dark:text-navy-soft inset-ring-1 dark:inset-ring-0 ring-blue hover:bg-blue-strong text-xs sm:text-sm"
                        >
                            WORK WITH ME
                        </Button>
                    </ScrollReveal>
                </div>
            </section>
        </ScrollReveal>
    )
}

export default HeroSection
