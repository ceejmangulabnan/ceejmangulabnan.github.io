import ThemeToggle from './ThemeToggle'

const Navbar = () => {
    return (
        <div className="flex items-center justify-between w-full font-mono text-blue-strong py-6 mb-10">
            <nav>
                <ul className="flex gap-8 dark:text-sky">
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
            <ThemeToggle />
        </div>
    )
}

export default Navbar
