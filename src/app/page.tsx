import ContactSection from '@/components/ContactSection'
import ExperienceEducationSection from '@/components/ExperienceEducationSection'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import TechStackSection from '@/components/TechStackSection'

export default function Home() {
    return (
        <div className="mx-auto md:px-10 pt-16 px-4 flex flex-col min-h-screen items-center bg-background font-sans dark:bg-navy max-w-5xl">
            <HeroSection />
            <TechStackSection />
            <ExperienceEducationSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    )
}
