'use client'

import { useState } from 'react'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { Button } from './ui/button'
import { Send, Copy, Check } from 'lucide-react'
import { toast } from 'sonner'
import { ScrollReveal } from './ScrollReveal'

const EMAIL = 'cheljee.mangulabnan@gmail.com'

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
        'idle'
    )
    const [copied, setCopied] = useState(false)

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(EMAIL)
        setCopied(true)
        toast.success('Email copied to clipboard!')
        setTimeout(() => setCopied(false), 2000)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('sending')

        const mailtoLink = `mailto:cheljee.mangulabnan@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`
        window.location.href = mailtoLink
        setStatus('sent')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 3000)
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <section id="contact" className="py-10 w-full scroll-mt-20">
            <ScrollReveal>
                <h2 className="mb-6 font-mono text-blue dark:text-sky font-bold text-base sm:text-lg md:text-xl">
                    // get in touch
                </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6">
                <ScrollReveal delay={100}>
                    <div className="flex flex-col gap-4">
                        <p className="text-sm text-muted-foreground font-sans">
                            Have a project in mind or want to collaborate?
                            I&apos;d love to hear from you. Send me a message
                            and let&apos;s create something amazing together.
                        </p>
                        <div className="flex flex-col gap-3 mt-2">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-3 flex-1">
                                    <a
                                        href={`mailto:${EMAIL}`}
                                        className="flex items-center gap-3 text-blue dark:text-sky hover:text-blue-strong dark:hover:text-sky transition-colors group"
                                    >
                                        <div className="p-2 bg-soft-cream dark:bg-navy rounded-sm shadow-md dark:shadow-none dark:border-2">
                                            <MdEmail className="size-5" />
                                        </div>
                                        <span className="text-sm font-mono group-hover:underline">
                                            {EMAIL}
                                        </span>
                                    </a>

                                    <button
                                        onClick={copyToClipboard}
                                        className="p-2 dark:bg-navy rounded-sm dark:shadow-none  text-blue dark:text-sky hover:text-blue-strong transition-colors"
                                    >
                                        {copied ? (
                                            <Check className="size-3 text-green-500 dark:text-green-400" />
                                        ) : (
                                            <Copy className="size-3" />
                                        )}
                                    </button>
                                </div>
                            </div>
                            <a
                                href="https://github.com/ceejmangulabnan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-blue dark:text-sky hover:text-blue-strong dark:hover:text-soft-blue transition-colors group"
                            >
                                <div className="p-2 bg-soft-cream dark:bg-navy rounded-sm shadow-md dark:shadow-none dark:border-2">
                                    <IoLogoGithub className="size-5" />
                                </div>
                                <span className="text-sm font-mono group-hover:underline">
                                    github.com/ceejmangulabnan
                                </span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/cheljee-mangulabnan/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-blue dark:text-sky hover:text-blue-strong dark:hover:text-soft-blue transition-colors group"
                            >
                                <div className="p-2 bg-soft-cream dark:bg-navy rounded-sm shadow-md dark:shadow-none dark:border-2">
                                    <IoLogoLinkedin className="size-5" />
                                </div>
                                <span className="text-sm font-mono group-hover:underline">
                                    linkedin.com/in/cheljee-mangulabnan
                                </span>
                            </a>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4 bg-soft-cream dark:bg-navy-soft p-4 sm:p-6 rounded-sm shadow-md dark:shadow-none dark:border-2"
                    >
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="name"
                                className="text-xs font-mono text-blue dark:text-sky"
                            >
                                NAME
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                                className="px-3 py-2 text-sm bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue dark:focus:ring-sky text-foreground placeholder:text-muted-foreground"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="email"
                                className="text-xs font-mono text-blue dark:text-sky"
                            >
                                EMAIL
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="john@example.com"
                                className="px-3 py-2 text-sm bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue dark:focus:ring-sky text-foreground placeholder:text-muted-foreground"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="message"
                                className="text-xs font-mono text-blue dark:text-sky"
                            >
                                MESSAGE
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                placeholder="Tell me about your project..."
                                className="px-3 py-2 text-sm bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue dark:focus:ring-sky text-foreground placeholder:text-muted-foreground resize-none"
                            />
                        </div>
                        <Button
                            type="submit"
                            size={'lg'}
                            disabled={status === 'sending'}
                            className="mt-2 bg-blue text-cream dark:bg-soft-blue dark:text-navy-soft hover:bg-blue-strong dark:hover:bg-sky text-xs sm:text-sm"
                        >
                            <Send className="size-4" />
                            {status === 'sending'
                                ? 'SENDING...'
                                : status === 'sent'
                                  ? 'SENT!'
                                  : 'SEND MESSAGE'}
                        </Button>
                    </form>
                </ScrollReveal>
            </div>
        </section>
    )
}

export default ContactSection
