import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'

export default function Home() {
    return (
        <div className="mx-auto px-10 flex flex-col min-h-screen items-center bg-background font-sans dark:bg-navy max-w-5xl">
            <Navbar />
            <HeroSection />
        </div>
    )
}
