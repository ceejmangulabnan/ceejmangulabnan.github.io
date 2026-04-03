import HeroSection from '@/components/HeroSection'

export default function Home() {
    return (
        <div className="mx-auto px-10 flex flex-col min-h-screen items-center bg-background font-sans dark:bg-black max-w-5xl">
            {/* <DashboardView /> */}
            <HeroSection />
        </div>
    )
}
