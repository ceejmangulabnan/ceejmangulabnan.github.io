import ExperienceEducationSection from '@/components/ExperienceEducationSection'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import TechStackSection from '@/components/TechStackSection'

export default function Home() {
    return (
        <div className="mx-auto md:px-10 px-4 flex flex-col min-h-screen items-center bg-background font-sans dark:bg-navy max-w-5xl">
            <Navbar />
            <HeroSection />
            <TechStackSection />
            <ExperienceEducationSection />
        </div>
    )
}
