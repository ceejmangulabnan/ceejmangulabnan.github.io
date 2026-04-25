'use client'

import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import { ScrollReveal } from './ScrollReveal'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`sticky top-0 left-0 right-0 z-50 font-mono transition-all duration-300 ${
                scrolled
                    ? 'bg-background/10 dark:bg-navy/80 backdrop-blur-md'
                    : ''
            }`}
        >
            <ScrollReveal direction="down" duration={400}>
                <nav className="mx-auto max-w-5xl flex items-center justify-center sm:justify-start px-4 md:px-10 text-xs md:text-base font-mono text-blue-strong dark:text-sky py-6">
                    <ul className="flex gap-4 md:gap-8 dark:text-sky">
                        <li className="hover:underline underline-offset-4 decoration-2">
                            <a href="#home">// home</a>
                        </li>
                        <li className="hover:underline underline-offset-4 decoration-2">
                            <a href="#about">// about</a>
                        </li>
                        <li className="hover:underline underline-offset-4 decoration-2">
                            <a href="#projects">// projects</a>
                        </li>
                        <li className="hover:underline underline-offset-4 decoration-2">
                            <a href="#contact">// contact</a>
                        </li>
                    </ul>
                </nav>
            </ScrollReveal>

            <div className="fixed top-5 right-4 z-50 text-blue dark:text-sky">
                <ThemeToggle />
            </div>
        </header>
    )
}

export default Navbar
