import ThemeToggle from './ThemeToggle'

const Navbar = () => {
    return (
        <header className="w-full font-mono">
            <nav className="flex items-center justify-center sm:justify-start w-full text-xs md:text-base font-mono text-blue-strong py-6 mb-10">
                <ul className="flex gap-4 md:gap-8 dark:text-sky">
                    <li className="hover:underline underline-offset-4 decoration-2">
                        <a href="#home">// home</a>
                    </li>
                    <li className="hover:underline underline-offset-4 decoration-2">
                        <a href="#about">// about</a>
                    </li>
                    <li className="hover:underline underline-offset-4 decoration-2">
                        <a href="#projects">// projects</a>
                    </li>
                    <li className="hover:underline underline-offset-4 decoration-2">
                        <a href="#contact">// contact</a>
                    </li>
                </ul>
            </nav>

            <div className="fixed top-4 right-4 z-50 text-blue dark:text-sky">
                <ThemeToggle />
            </div>
        </header>
    )
}

export default Navbar
