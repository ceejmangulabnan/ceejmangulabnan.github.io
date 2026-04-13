'use client'

import { ExternalLink, Github, Star } from 'lucide-react'
import { Button } from './ui/button'

interface Project {
    title: string
    description: string
    tags: string[]
    stars: number
    status: string
    link: string
    github: string
    image?: string
}

const ProjectsSection = () => {
    const projects: Project[] = [
        {
            title: 'E-Commerce Platform',
            description:
                'Full-stack solution with real-time inventory and payments',
            tags: ['React', 'Node.js', 'PostgreSQL'],
            stars: 245,
            status: 'Live',
            link: '#',
            github: '#',
            image: 'bg-gradient-to-br from-blue to-blue-strong',
        },
        {
            title: 'Task Manager Pro',
            description: 'Collaborative tool with real-time team updates',
            tags: ['TypeScript', 'Firebase', 'Tailwind'],
            stars: 189,
            status: 'Active',
            link: '#',
            github: '#',
            image: 'bg-gradient-to-br from-sky to-blue',
        },
        {
            title: 'Weather Dashboard',
            description: 'Beautiful visualization with forecasts and maps',
            tags: ['React', 'D3.js', 'API'],
            stars: 312,
            status: 'Live',
            link: '#',
            github: '#',
            image: 'bg-gradient-to-br from-soft-blue to-sky',
        },
        {
            title: 'Game Stats Tracker',
            description: 'Track gaming achievements with detailed analytics',
            tags: ['Python', 'MongoDB', 'Chart.js'],
            stars: 156,
            status: 'Beta',
            link: '#',
            github: '#',
            image: 'bg-gradient-to-br from-blue-strong to-navy',
        },
        {
            title: 'AI Chatbot Assistant',
            description: 'Smart chatbot with natural language processing',
            tags: ['React', 'OpenAI', 'Node.js'],
            stars: 423,
            status: 'Live',
            link: '#',
            github: '#',
            image: 'bg-gradient-to-br from-navy-soft to-blue-strong',
        },
        {
            title: 'Portfolio Builder',
            description: 'No-code tool for creating developer portfolios',
            tags: ['Next.js', 'Tailwind', 'MDX'],
            stars: 267,
            status: 'Active',
            link: '#',
            github: '#',
            image: 'bg-gradient-to-br from-baby-blue to-soft-blue',
        },
    ]

    return (
        <section className="py-10 w-full">
            <h2 className="mb-6 font-mono text-blue dark:text-sky font-bold text-base sm:text-lg md:text-xl">
                {'// projects'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group bg-soft-cream dark:bg-navy-soft rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-border dark:border-border/20"
                    >
                        <div
                            className={`h-36 ${project.image} dark:opacity-80`}
                        />
                        <div className="p-4 flex flex-col gap-3">
                            <div className="flex items-start justify-between gap-2">
                                <h3 className="font-serif font-bold text-blue dark:text-soft-blue text-lg group-hover:text-blue-strong dark:group-hover:text-sky transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex items-center gap-1 text-muted-foreground shrink-0">
                                    <Star className="w-3 h-3" />
                                    <span className="text-xs">
                                        {project.stars}
                                    </span>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground font-sans line-clamp-2">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto pt-2">
                                {project.tags.map((tag) => (
                                    <Button
                                        key={tag}
                                        variant="outline"
                                        size="sm"
                                        className="text-xs font-mono h-6 px-2 border-blue dark:border-sky text-blue dark:text-sky hover:bg-blue hover:text-cream dark:hover:bg-sky dark:hover:text-navy transition-colors"
                                    >
                                        {tag}
                                    </Button>
                                ))}
                            </div>
                            <div className="flex gap-4 pt-2 border-t border-border dark:border-border/20">
                                <a
                                    href={project.link}
                                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-blue-strong dark:hover:text-sky transition-colors"
                                >
                                    <ExternalLink className="w-3 h-3" />
                                    Demo
                                </a>
                                <a
                                    href={project.github}
                                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-blue-strong dark:hover:text-sky transition-colors"
                                >
                                    <Github className="w-3 h-3" />
                                    Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectsSection
