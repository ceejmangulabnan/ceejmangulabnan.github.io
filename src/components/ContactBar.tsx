import { motion } from 'motion/react'
import { Github, Linkedin, Mail } from 'lucide-react'

export function ContactBar() {
    const socials = [
        {
            icon: Github,
            label: 'GitHub',
            link: 'https://github.com/ceejmangulabnan',
            handle: '@ceejmangulabnan',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            link: 'https://www.linkedin.com/in/cheljee-mangulabnan/',
            handle: '/in/cheljee-mangulabnan',
        },
        {
            icon: Mail,
            label: 'Email',
            link: 'mailto:cheljee.mangulabnan@gmail.com',
            handle: 'cheljee.mangulabnan@gmail.com',
        },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4 hover:border-[#ff6b35] transition-all lg:flex lg:flex-col"
        >
            <div className="flex md:flex-col items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#ff6b35] rounded-full animate-pulse" />
                    <span className="text-sm text-[#f5f5f5]">
                        Available for new opportunities
                    </span>
                </div>

                <div className="flex flex-wrap gap-2 justify-start">
                    {socials.map((social, index) => (
                        <motion.a
                            key={social.label}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.05 }}
                            whileHover={{ y: -2 }}
                            className="flex items-center gap-2 bg-[#0a0a0a] border border-[#2a2a2a] px-4 py-2 rounded-lg text-[#9a9a9a] hover:text-[#ff6b35] hover:border-[#ff6b35] transition-all group text-wrap"
                        >
                            <social.icon className="w-4 h-4" />
                            <span className="text-sm hidden sm:inline text-wrap">
                                {social.handle}
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
