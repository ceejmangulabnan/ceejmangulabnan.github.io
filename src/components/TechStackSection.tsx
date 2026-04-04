import { RiNextjsFill } from 'react-icons/ri'
import { FaReact, FaVuejs, FaPython } from 'react-icons/fa'
import { SiNuxt, SiFastapi } from 'react-icons/si'
import { BiLogoPostgresql } from 'react-icons/bi'
import { Button } from '@/components/ui/button'

const techStack = [
    { name: 'Next.js', icon: RiNextjsFill },
    { name: 'React', icon: FaReact },
    { name: 'Vue.js', icon: FaVuejs },
    { name: 'Nuxt', icon: SiNuxt },
    { name: 'Python', icon: FaPython },
    { name: 'FastAPI', icon: SiFastapi },
    { name: 'PostgreSQL', icon: BiLogoPostgresql },
]

const TechStackSection = () => {
    return (
        <section className="py-10 w-full">
            <h2 className="mb-4 font-mono text-blue font-bold text-xl">
                // tech i use
            </h2>
            <div className="flex flex-wrap gap-3 justify-between">
                {techStack.map((tech) => (
                    <Button
                        key={tech.name}
                        variant="outline"
                        className="flex items-center gap-2 px-4 py-2 h-auto text-blue dark:text-soft-cream"
                    >
                        <tech.icon className="text-xl text-blue-strong" />
                        <span>{tech.name}</span>
                    </Button>
                ))}
            </div>
        </section>
    )
}

export default TechStackSection
