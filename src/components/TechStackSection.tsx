import { RiNextjsFill } from 'react-icons/ri'
import { FaReact, FaVuejs, FaPython } from 'react-icons/fa'
import { SiNuxt, SiFastapi } from 'react-icons/si'
import { BiLogoPostgresql } from 'react-icons/bi'

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
            <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(100px,1fr))]">
                {techStack.map((tech) => (
                    <div
                        className="flex flex-col items-center group gap-2"
                        key={tech.name}
                    >
                        <div className="p-4 h-auto text-blue dark:text-soft-cream transform transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1 bg-soft-cream dark:bg-navy rounded-sm shadow-md dark:shadow-none dark:border-2 shadow-baby-blue">
                            <tech.icon className="text-xl size-10 text-blue-strong transform transition-transform duration-300 ease-out group-hover:scale-110" />
                        </div>
                        <span className="text-blue-strong dark:text-soft-blue lowercase transform transition-transform duration-300 ease-out group-hover:scale-110">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechStackSection
