import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaPills, FaUsers, FaHeart, FaRibbon, FaChevronDown, FaCheckCircle, FaStar } from "react-icons/fa"

const ActivityCard = ({ title, institution, date, description, shortDesc, icon, color, delay, impactPoints }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="relative group h-full"
        >
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-[2rem] opacity-10 group-hover:opacity-40 transition duration-500 blur-sm`}></div>

            <div className="relative bg-white dark:bg-[#0d1520] border border-gray-100 dark:border-gray-800/50 p-6 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl h-full flex flex-col overflow-hidden transition-all duration-500">
                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${color} opacity-[0.03] group-hover:opacity-[0.1] transition-opacity rounded-bl-full`}></div>

                <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center text-2xl text-white shadow-lg transform group-hover:rotate-6 transition-transform duration-500`}>
                        {icon}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-gradient-to-r ${color} text-white shadow-sm`}>
                        {date}
                    </span>
                </div>

                <h3 className="text-xl md:text-2xl font-black dark:text-white mb-1 font-headings uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className={`text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r ${color} mb-4`}>
                    {institution}
                </p>

                <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed mb-6 flex-grow font-medium italic opacity-85">
                    "{shortDesc}"
                </p>

                {/* Impact Button & Expanded Content */}
                <div className="mt-auto">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={`w-full py-2.5 rounded-xl border flex items-center justify-between px-5 transition-all duration-300 ${isExpanded
                            ? `bg-gradient-to-r ${color} text-white border-transparent`
                            : 'bg-primary/5 border-primary/10 text-primary hover:bg-primary/10'
                            }`}
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                            <FaRibbon className={isExpanded ? 'animate-spin' : ''} />
                            {isExpanded ? 'Hide Impact' : 'View Impact'}
                        </span>
                        <FaChevronDown className={`transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="pt-5 space-y-3">
                                    {impactPoints.map((point, idx) => (
                                        <div key={idx} className="flex gap-3 items-start">
                                            <FaCheckCircle className={`mt-0.5 text-xs flex-shrink-0 text-primary dark:text-white/60`} />
                                            <p className={`text-[11px] leading-tight font-bold text-gray-700 dark:text-white/90`}>{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    )
}

function CoCurricular() {
    const activities = [
        {
            title: "Intern Pharmacist",
            institution: "Habra State General Hospital",
            date: "Aug 2023 - Oct 2023",
            shortDesc: "Medicine dispensing & inventory management in a high-volume clinical environment.",
            impactPoints: [
                "Managed OPD/IPD pharmacy with 100% precision in dispensing.",
                "Verified 50+ prescriptions daily ensuring patient safety.",
                "Provided critical dosage guidance to rural emergency patients."
            ],
            icon: <FaPills />,
            color: "from-cyan-500 to-blue-600",
            delay: 0.1
        },
        {
            title: "Community Volunteer",
            institution: "IQ City Medical NGO",
            date: "June 2024",
            shortDesc: "Mentorship and public health literacy for underprivileged students.",
            impactPoints: [
                "Organized community sanitation campaigns for 200+ families.",
                "Empowered students through foundational literacy programs.",
                "Led large-scale public health awareness drives in rural belts."
            ],
            icon: <FaUsers />,
            color: "from-rose-500 to-pink-600",
            delay: 0.2
        }
    ]

    return (
        <div id="beyond" className="relative overflow-hidden transition-all duration-300">
            {/* Subtle Orbs */}
            <div className="absolute top-[-10%] left-[-5%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-[300px] h-[300px] bg-rose-400/5 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-6xl mx-auto px-6 py-10 md:py-20 lg:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.4em] border border-primary/10 mb-6 antialiased">
                        <FaHeart className="text-red-500 animate-pulse" /> Holistic Development
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-2 font-headings uppercase tracking-tighter text-gray-900 dark:text-white leading-[0.8] italic">
                        Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-500 to-emerald-500">Curriculum</span>
                    </h2>
                    <p className="max-w-xl mx-auto text-xs md:text-base text-gray-400 font-bold uppercase tracking-[0.5em] mt-6">
                        Cultivating empathy & leadership through clinical domain experience.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {activities.map((item, i) => (
                        <ActivityCard key={i} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CoCurricular
