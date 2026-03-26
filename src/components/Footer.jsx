import { motion } from "framer-motion"
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi"

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <footer className="footer-compact relative py-12 bg-white dark:bg-[#0a0f16] border-t border-gray-100 dark:border-white/5 transition-all duration-700 overflow-hidden">
            {/* Minimalist Backdrop Pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -z-10"></div>

            <div className="max-w-full mx-auto px-6 md:px-20 relative z-10">

                {/* Main Identity & Navigation Row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-10 pb-10 border-b border-gray-50 dark:border-white/5">

                    {/* Brand Identity (Compact) */}
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl border border-primary/20 shadow-inner">
                            <span className="font-black italic tracking-tighter">MS</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-black dark:text-white uppercase tracking-tighter italic leading-none">
                                Md <span className="text-primary italic">Sahanujjaman</span>
                            </h3>
                            <div className="text-[8px] font-black text-gray-400 uppercase tracking-[0.4em] mt-1.5 antialiased">
                                Full-Stack Architect v4.2
                            </div>
                        </div>
                    </div>

                    {/* Navigation Portal (Horizontal) */}
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        {[
                            { name: "About", href: "#about" },
                            { name: "Skills", href: "#skills" },
                            { name: "Projects", href: "#projects" },
                            { name: "Contact", href: "#contact" }
                        ].map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-primary transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] bg-primary transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Social Hub (High-Fidelity Glow-Box Design) */}
                    <div className="flex gap-4">
                        {[
                            { icon: <FiGithub />, href: "https://github.com/mdsahanujjaman", color: "hover:text-white hover:bg-white/10 hover:border-white/30" },
                            { icon: <FiLinkedin />, href: "https://linkedin.com/in/mdsahanujjaman", color: "hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/30" },
                            { icon: <FiMail />, href: "mailto:mdsahanujjaman17@gmail.com", color: "hover:text-primary hover:bg-primary/10 hover:border-primary/30" }
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className={`w-10 h-10 rounded-xl bg-gray-50/50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center text-gray-400 transition-all shadow-sm ${social.color}`}
                            >
                                <span className="text-lg">{social.icon}</span>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Status Bar & Action Row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start gap-1.5">
                        <div className="text-[17px] font-bold text-gray-400 dark:text-gray-500 flex items-center gap-2">
                            © {new Date().getFullYear()} Md Sahanujjaman. All Rights Reserved.
                        </div>
                        <div className="flex items-center gap-3 text-[9px] font-bold text-gray-300 dark:text-gray-700 uppercase tracking-widest">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500/40 border border-green-500/20 animate-pulse"></div>
                            Operational Protocol: Nominal
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="text-[13px] font-black text-gray-400 dark:text-gray-600 uppercase tracking-widest italic select-none">
                            Built with <span className="text-primary opacity-60">React &amp; Tailwind</span>
                        </div>
                        <button
                            onClick={() => window.location.hash = 'admin'}
                            className="text-[9px] font-black text-gray-400 hover:text-primary uppercase tracking-[0.4em] transition-colors pr-6 md:pr-24"
                        >
                            Admin
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
