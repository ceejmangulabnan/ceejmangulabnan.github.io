'use client'

import { motion, Variants, useScroll, useMotionValueEvent } from 'motion/react'
import {
    ExternalLink,
    Github,
    ChevronDown,
    Star,
    TrendingUp,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useScrollOverflowMask } from '@/hooks/use-scroll-overflow-mask'
import { Button } from './ui/button'
import useRepo from '@/hooks/use-repo'

interface ProjectsGridProps {
    onHover: (isHovered: boolean) => void
}

export function ProjectsGrid({ onHover }: ProjectsGridProps) {
    const projectGridRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        container: projectGridRef,
    })
    const maskImage = useScrollOverflowMask(scrollYProgress)
    const [isScrolledToBottom, setIsScrolledToBottom] = useState(false)

    const { repoData } = useRepo()
    console.log('Repo Query Result:', repoData)

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        setIsScrolledToBottom(value < 0.9)
    })

    console.log('Scroll Y Progress', scrollYProgress)
    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((latest) => {
            console.log('Scroll Y Progress Changed:', latest)
        })
    }, [scrollYProgress])
    const projects = [
        {
            title: 'E-Commerce Platform',
            description:
                'Full-stack solution with real-time inventory and payments',
            tags: ['React', 'Node.js', 'PostgreSQL'],
            stars: 245,
            status: 'Live',
            link: '#',
            github: '#',
        },
        {
            title: 'Task Manager Pro',
            description: 'Collaborative tool with real-time team updates',
            tags: ['TypeScript', 'Firebase', 'Tailwind'],
            stars: 189,
            status: 'Active',
            link: '#',
            github: '#',
        },
        {
            title: 'Weather Dashboard',
            description: 'Beautiful visualization with forecasts and maps',
            tags: ['React', 'D3.js', 'API'],
            stars: 312,
            status: 'Live',
            link: '#',
            github: '#',
        },
        {
            title: 'Game Stats Tracker',
            description: 'Track gaming achievements with detailed analytics',
            tags: ['Python', 'MongoDB', 'Chart.js'],
            stars: 156,
            status: 'Beta',
            link: '#',
            github: '#',
        },
        {
            title: 'AI Chatbot Assistant',
            description: 'Smart chatbot with natural language processing',
            tags: ['React', 'OpenAI', 'Node.js'],
            stars: 423,
            status: 'Live',
            link: '#',
            github: '#',
        },
        {
            title: 'Portfolio Builder',
            description: 'No-code tool for creating developer portfolios',
            tags: ['Next.js', 'Tailwind', 'MDX'],
            stars: 267,
            status: 'Active',
            link: '#',
            github: '#',
        },
    ]

    const item: Variants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: () => ({
            opacity: 1,
            scale: 1,
            transition: {
                // delay: index * 0.1,
                duration: 0.05,
                ease: 'linear',
            },
        }),
    }

    const scrollToBottom = () => {
        if (projectGridRef.current) {
            projectGridRef.current.scrollTo({
                top: projectGridRef.current.scrollHeight,
                behavior: 'smooth',
            })
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onHoverStart={() => onHover(true)}
            onHoverEnd={() => onHover(false)}
            className="relative bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#ff6b35] transition-all h-full"
        >
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl text-[#f5f5f5]">
                    <span className="text-[#ff6b35]">//</span> Featured Projects
                </h2>
                <div className="flex items-center gap-2 text-sm text-[#9a9a9a]">
                    <TrendingUp className="w-4 h-4 text-[#ff6b35]" />
                    <span>6 Projects</span>
                </div>
            </div>

            <motion.div
                className="py-2 grid grid-cols-1 gap-4 max-h-[calc(100vh-12rem)] overflow-y-auto pr-2 no-scrollbar"
                style={{ maskImage }}
                ref={projectGridRef}
            >
                {!repoData.pending &&
                    repoData.data.map((repo, index) => {
                        return (
                            <motion.div
                                key={repo.id}
                                variants={item}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.02,
                                    transition: { ease: 'anticipate' },
                                }}
                                className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-4 hover:border-[#ff6b35] transition-all group mx-2"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex-1">
                                        <h3 className="text-[#f5f5f5] mb-1 group-hover:text-[#ff6b35] transition-colors">
                                            {repo.name ?? 'Project Title'}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs bg-[#2a2a2a] text-[#ff6b35] px-2 py-0.5 rounded">
                                                {/* {project.status} */}
                                            </span>
                                            <div className="flex items-center gap-1 text-[#9a9a9a]">
                                                <Star className="w-3 h-3 fill-current" />
                                                <span className="text-xs">
                                                    {repo.stargazers_count}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-sm text-[#9a9a9a] mb-3 line-clamp-2">
                                    {repo.description}
                                </p>

                                <div className="flex flex-wrap gap-1 mb-3">
                                    {/* {repo.tags.map((tag: string) => ( */}
                                    {/*     <span */}
                                    {/*         key={tag} */}
                                    {/*         className="text-xs bg-[#2a2a2a] text-[#9a9a9a] px-2 py-0.5 rounded" */}
                                    {/*     > */}
                                    {/*         {tag} */}
                                    {/*     </span> */}
                                    {/* ))} */}
                                </div>

                                <div className="flex gap-3">
                                    <a
                                        href={repo.html_url}
                                        className="flex items-center gap-1 text-xs text-[#9a9a9a] hover:text-[#ff6b35] transition-colors"
                                    >
                                        <ExternalLink className="w-3 h-3" />
                                        Demo
                                    </a>
                                    <a
                                        href={repo.html_url}
                                        className="flex items-center gap-1 text-xs text-[#9a9a9a] hover:text-[#ff6b35] transition-colors"
                                    >
                                        <Github className="w-3 h-3" />
                                        Code
                                    </a>
                                </div>
                            </motion.div>
                        )
                    })}
            </motion.div>

            <Button
                onClick={scrollToBottom}
                className={`size-10 shadow-lg/50 shadow-neutral-800 absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity hover:bg-[#1a1a1a]/90 rounded-full ${isScrolledToBottom ? 'opacity-100' : 'opacity-0'}`}
            >
                <ChevronDown className="size-8" />
            </Button>
        </motion.div>
    )
}
