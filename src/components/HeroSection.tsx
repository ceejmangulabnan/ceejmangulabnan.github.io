'use client'

import { Button } from './ui/button'
import { IoLogoGithub } from 'react-icons/io'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useTheme } from 'next-themes'

const HeroSection = () => {
    const { theme } = useTheme()
    const textStroke = {
        WebkitTextStroke: '1px var(--color-blue-strong)',
    }
    return (
        <section
            id="#hero-section"
            className="flex gap-8 font-sans rounded-sm bg-soft-cream text-blue dark:text-soft-blue dark:bg-navy-soft p-6 shadow-md"
        >
            <div>
                <h1 className="text-xl font-mono text-blue-strong dark:text-soft-blue">
                    hi, i'm
                    <span
                        className="mt-2 block font-serif font-bold text-blue dark:text-soft-blue text-6xl text-shadow-md"
                        style={theme === 'light' ? textStroke : undefined}
                    >
                        Name LastName
                    </span>
                </h1>
                <p className="my-4 mb-8 text-sm font-mono">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean imperdiet mattis nisl vitae euismod. Nulla eu nulla
                    euismod, pretium lectus eget, rhoncus enim. Donec non
                    maximus est, sit amet aliquam neque. Mauris sit amet
                    tincidunt leo. Pellentesque nec dui sed nibh viverra
                    consectetur. Etiam pellentesque ullamcorper nunc at mollis.
                    Donec mollis leo sit amet risus laoreet, ac tincidunt ante
                    eleifend. Nunc malesuada viverra sem, eu accumsan tellus
                    volutpat in.
                </p>
                <div className="flex font-sans gap-4">
                    <Button
                        size={'lg'}
                        className="bg-soft-cream text-blue dark:bg-navy dark:text-cream dark:inset-ring-0 inset-ring-1 ring-blue-strong hover:bg-blue hover:text-cream"
                    >
                        CTA BUTTON
                    </Button>
                    <Button
                        size={'lg'}
                        className="bg-blue text-cream dark:bg-blue dark:text-navy inset-ring-1 ring-blue hover:bg-blue-strong"
                    >
                        CTA BUTTON
                    </Button>
                </div>
            </div>
            <nav className="flex flex-col gap-4">
                <a href="https://github.com/ceejmangulabnan" target="_blank">
                    <IoLogoGithub className="size-10" />
                </a>
                <a
                    href="https://www.linkedin.com/in/cheljee-mangulabnan/"
                    target="_blank"
                >
                    <FaLinkedin className="size-10" />
                </a>
                <a href="mailto:cheljee.mangulabnan@gmail.com">
                    <MdEmail className="size-10" />
                </a>
            </nav>
        </section>
    )
}

export default HeroSection
