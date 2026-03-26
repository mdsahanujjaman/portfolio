import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiArrowUp } from "react-icons/fi"

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [scrollPercent, setScrollPercent] = useState(0)

    const handleScroll = () => {
        const scrollTop = window.pageYOffset
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const percent = Math.round((scrollTop / docHeight) * 100)
        setScrollPercent(percent)
        setIsVisible(scrollTop > 300)
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // SVG circle progress
    const radius = 22
    const circumference = 2 * Math.PI * radius
    const strokeDashoffset = circumference - (scrollPercent / 100) * circumference

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0, y: 20 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    onClick={scrollToTop}
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.92 }}
                    aria-label="Back to top"
                    className="fixed bottom-10 right-10 z-[999] group"
                >
                    {/* Outer Glow Ring */}
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* SVG Progress Ring */}
                    <div className="relative w-[60px] h-[60px]">
                        <svg
                            className="absolute inset-0 w-full h-full -rotate-90"
                            viewBox="0 0 52 52"
                        >
                            {/* Track */}
                            <circle
                                cx="26" cy="26" r={radius}
                                fill="none"
                                stroke="rgba(34,197,94,0.15)"
                                strokeWidth="2.5"
                            />
                            {/* Progress */}
                            <circle
                                cx="26" cy="26" r={radius}
                                fill="none"
                                stroke="rgb(34,197,94)"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                className="transition-all duration-300"
                            />
                        </svg>

                        {/* Inner Button Core */}
                        <div className="absolute inset-[6px] rounded-full bg-white dark:bg-[#0a0f16] border border-gray-100 dark:border-white/10 shadow-2xl flex items-center justify-center overflow-hidden group-hover:bg-primary transition-colors duration-300">
                            {/* Shimmer on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <FiArrowUp className="text-base text-primary group-hover:text-white transition-colors duration-300 group-hover:-translate-y-0.5 transform transition-transform" />
                        </div>
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    )
}

export default ScrollToTop
