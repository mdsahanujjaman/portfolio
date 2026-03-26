import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiSun, FiMoon } from "react-icons/fi"

const FloatingThemeToggle = () => {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }, [isDark]);

    // Handle system theme changes or external changes to classList
    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    const hasDarkClass = document.documentElement.classList.contains('dark')
                    if (hasDarkClass !== isDark) {
                        setIsDark(hasDarkClass)
                    }
                }
            })
        })
        observer.observe(document.documentElement, { attributes: true })
        return () => observer.disconnect()
    }, [isDark])

    const toggleTheme = () => setIsDark(!isDark);

    return (
        <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1, rotate: 12 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="fixed bottom-10 left-10 z-[999] w-[60px] h-[60px] rounded-full bg-white dark:bg-[#0a0f16] border border-gray-400 dark:border-white/10 shadow-2xl flex items-center justify-center overflow-hidden group transition-all duration-500 hover:shadow-primary/20"
        >
            {/* Inner Glow & Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <AnimatePresence mode="wait">
                {isDark ? (
                    <motion.div
                        key="sun"
                        initial={{ y: 20, opacity: 0, rotate: -90 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: -20, opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.3 }}
                        className="text-yellow-400 text-xl"
                    >
                        <FiSun />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        initial={{ y: 20, opacity: 0, rotate: -90 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: -20, opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.3 }}
                        className="text-primary text-xl"
                    >
                        <FiMoon />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    )
}

export default FloatingThemeToggle
