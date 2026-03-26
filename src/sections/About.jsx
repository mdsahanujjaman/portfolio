import { motion } from "framer-motion"
import { FiCode, FiCpu, FiLayout, FiActivity } from 'react-icons/fi'
import { usePortfolioData } from "../hooks/usePortfolioData"
import { KEYS, DEFAULTS } from "../data/portfolioData"

const iconMap = [<FiCode />, <FiLayout />, <FiCpu />, <FiActivity />]
const gradients = ["from-primary/10 to-transparent", "from-blue-500/10 to-transparent", "from-emerald-500/10 to-transparent", "from-teal-500/10 to-transparent"]

const About = () => {
    const about = usePortfolioData(KEYS.ABOUT, DEFAULTS.about)

    return (
        <div id="about" className="relative overflow-hidden w-full transition-all">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/[0.08] dark:bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-emerald-500/[0.08] dark:bg-emerald-500/5 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,128,0,0.03)_0,transparent_70%)] -z-10"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 md:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center"
                >
                    {/* Left */}
                    <div className="space-y-10">
                        <div className="flex items-center gap-4">
                            <span className="w-12 h-[3px] bg-primary rounded-full"></span>
                            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-primary/70">The Developer Persona</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white leading-[0.85] tracking-tighter uppercase italic drop-shadow-sm">
                            Crafting <br />Digital <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-400 to-emerald-500 underline decoration-primary/10 decoration-[16px] md:decoration-[20px] underline-offset-[-6px] md:underline-offset-[-10px]">Ecosystems.</span>
                        </h2>

                        <div className="flex flex-col gap-8">
                            <p className="text-gray-500 dark:text-gray-400 font-black uppercase tracking-[0.3em] text-xs border-l-4 border-primary/20 pl-6 leading-none antialiased">
                                {about.role} <br />
                                <span className="text-primary mt-2 block italic text-sm">{about.roleItalic}</span>
                            </p>

                            <div className="flex gap-6">
                                <motion.div whileHover={{ scale: 1.05 }} className="px-6 py-4 bg-white dark:bg-white/5 backdrop-blur-md rounded-3xl border border-gray-100 dark:border-white/10 shadow-xl">
                                    <span className="block text-3xl font-black text-primary leading-none">{about.yearsExp}</span>
                                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-2 block leading-none">Years Experience</span>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} className="px-6 py-4 bg-white dark:bg-white/5 backdrop-blur-md rounded-3xl border border-gray-100 dark:border-white/10 shadow-xl">
                                    <span className="block text-3xl font-black text-primary leading-none">{about.patents}</span>
                                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-2 block leading-none">Patent Pending</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h3 className="text-xl md:text-3xl font-black text-gray-900 dark:text-white tracking-tighter leading-tight uppercase italic">
                                I am <span className="text-primary">{about.name}</span><br />
                                <span className="text-xs md:text-base font-bold tracking-normal normal-case opacity-60">{about.tagline}</span>
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-lg font-medium leading-relaxed max-w-xl">
                                {about.bio}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {(about.cards || DEFAULTS.about.cards).map((val, i) => (
                                <motion.div key={i} whileHover={{ y: -6, scale: 1.02 }}
                                    className={`relative p-6 bg-white dark:bg-white/5 rounded-[1.8rem] border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden group transition-all duration-500`}>
                                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${gradients[i % 4]} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                                    <div className="text-primary text-3xl mb-5 group-hover:rotate-12 transition-transform duration-500">{iconMap[i % 4]}</div>
                                    <h4 className="text-lg font-black dark:text-white uppercase mb-2 tracking-tight italic">{val.title}</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 font-bold leading-relaxed">{val.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About
