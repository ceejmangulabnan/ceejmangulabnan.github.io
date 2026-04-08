'use client'

import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

interface Props {
    dropdownItem?: boolean
}

const ThemeToggle = ({ dropdownItem }: Props) => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const handleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    if (dropdownItem) {
        return (
            <>
                <Button
                    className={`${theme === 'dark' ? 'hidden' : ''}`}
                    onClick={handleTheme}
                >
                    <Sun />
                    Toggle Dark
                </Button>

                <Button
                    className={`${theme === 'light' ? 'hidden' : ''}`}
                    onClick={handleTheme}
                >
                    <Moon />
                    Toggle Light
                </Button>
            </>
        )
    }

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={handleTheme}
            className="hover:text-blue-strong"
        >
            <Sun
                className={`${theme === 'dark' ? 'hidden' : ''} h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0`}
            />
            <Moon
                className={`${theme === 'light' ? 'hidden' : ''} absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100`}
            />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}

export default ThemeToggle
