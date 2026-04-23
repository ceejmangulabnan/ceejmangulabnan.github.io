'use client'

import { ExternalLink, Github } from 'lucide-react'
import { Button } from './ui/button'
import useRepo from '@/hooks/use-repo'

interface Project {
    title: string
    description: string
    tags: string[]
    // stars: number
    status: string
    link: string
    github: string
    image?: string
}

const ProjectsSection = () => {
    const { repoData } = useRepo()
    console.log(repoData)

    const projects: Project[] = [
        {
            title: 'watchqueue',
            description: 'A full-stack watchlist tracker for movies and shows.',
            tags: ['React', 'FastAPI', 'PostgreSQL'],
            status: 'Live',
            link: 'https://watchqueue.netlify.app/',
            github: 'https://github.com/ceejmangulabnan/watchqueue',
            image: 'bg-gradient-to-br from-blue to-blue-strong',
        },
        {
            title: 'SNC Tabulation System',
            description:
                'A web-based tabulation system developed for my college, designed to streamline scoring, ranking, and result computation for school events.',
            tags: ['Nuxt', 'Vuetify', 'Strapi', 'PostgreSQL'],
            status: 'Active',
            link: '#',
            github: '#',
            image: 'bg-gradient-to-br from-sky to-blue',
        },
        // {
        //     title: '',
        //     description: 'Beautiful visualization with forecasts and maps',
        //     tags: ['React', 'D3.js', 'API'],
        //     status: 'Live',
        //     link: '#',
        //     github: '#',
        //     image: 'bg-gradient-to-br from-soft-blue to-sky',
        // },
        // {
        //     title: 'Game Stats Tracker',
        //     description: 'Track gaming achievements with detailed analytics',
        //     tags: ['Python', 'MongoDB', 'Chart.js'],
        //     status: 'Beta',
        //     link: '#',
        //     github: '#',
        //     image: 'bg-gradient-to-br from-blue-strong to-navy',
        // },
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
                        className="group bg-soft-cream dark:bg-navy-soft rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-border dark:border-border/20 flex flex-col"
                    >
                        <div
                            className={`h-36 ${project.image} dark:opacity-80 shrink-0`}
                        />
                        <div className="p-4 flex flex-col flex-1">
                            <div className="flex items-start justify-between gap-2">
                                <h3 className="mb-2 font-serif font-bold text-blue dark:text-soft-blue text-lg group-hover:text-blue-strong dark:group-hover:text-sky transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                            <p className="mb-4 text-sm text-muted-foreground dark:text-sky font-sans line-clamp-4">
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
                            <div className="flex mt-4 gap-4 pt-2 border-t border-border dark:border-border/20">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-blue-strong dark:hover:text-sky transition-colors"
                                >
                                    <ExternalLink className="w-3 h-3" />
                                    Demo
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
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
