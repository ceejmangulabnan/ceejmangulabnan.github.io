'use client'

import { Toaster } from 'sonner'
import { useTheme } from 'next-themes'

export function ToasterWithTheme() {
    const { resolvedTheme } = useTheme()
    return (
        <Toaster
            position="bottom-right"
            richColors
            theme={resolvedTheme as 'light' | 'dark'}
        />
    )
}
