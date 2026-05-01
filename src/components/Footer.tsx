'use client'

import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'

const EMAIL = 'cheljee.mangulabnan@gmail.com'

const Footer = () => {
    return (
        <footer className="w-full py-8 mt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                <p className="font-sans">
                    © {new Date().getFullYear()} Cheljee Mangulabnan. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                    <a
                        href={`mailto:${EMAIL}`}
                        className="text-blue dark:text-sky hover:text-blue-strong dark:hover:text-sky transition-colors"
                        aria-label="Email"
                    >
                        <MdEmail className="size-5" />
                    </a>
                    <a
                        href="https://github.com/ceejmangulabnan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue dark:text-sky hover:text-blue-strong dark:hover:text-soft-blue transition-colors"
                        aria-label="GitHub"
                    >
                        <IoLogoGithub className="size-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/cheljee-mangulabnan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue dark:text-sky hover:text-blue-strong dark:hover:text-soft-blue transition-colors"
                        aria-label="LinkedIn"
                    >
                        <IoLogoLinkedin className="size-5" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer