import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    FaLightbulb, FaSearch, FaFigma, FaCode, FaServer,
    FaRobot, FaFileContract, FaRocket, FaChevronRight, FaChevronLeft, FaBookOpen
} from "react-icons/fa"

const PaperOverlay = () => (
    <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-soft-light"></div>
)

const PageContent = ({ title, description, year, icon, color, role, isCurrent, isLeftPage, flipDir }) => (
    <motion.div
        key={title}
        initial={{ opacity: 0, x: flipDir === 'next' ? 20 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: flipDir === 'next' ? -20 : 20 }}
        transition={{ duration: 0.4 }}
        className={`flex flex-col h-full p-6 md:p-8 lg:p-10 relative z-10 overflow-hidden ${isLeftPage ? 'border-r border-gray-900/10 dark:border-white/5' : ''}`}
    >
        {/* Top: year + icon */}
        <div className="flex items-start justify-between mb-4 flex-shrink-0">
            <div>
                <span className={`text-[9px] font-black uppercase tracking-[0.4em] ${isCurrent ? 'text-primary' : 'text-gray-500 dark:text-gray-400'}`}>{year}</span>
                <div className="w-8 h-[2px] bg-gray-300 dark:bg-gray-700 rounded-full mt-1"></div>
            </div>
            <div className={`text-2xl p-3 rounded-2xl bg-white/70 dark:bg-white/10 border border-white/60 dark:border-white/10 shadow-md ${isCurrent ? 'text-primary' : 'text-gray-400'} transition-all`}>
                {icon}
            </div>
        </div>

        {/* Role label */}
        <div className="flex items-center gap-3 mb-3 flex-shrink-0">
            <h4 className="text-[9px] font-black uppercase tracking-[0.5em] text-primary/50 italic">{role}</h4>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/10 to-transparent"></div>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 text-gray-900 dark:text-white font-headings uppercase tracking-tighter leading-[0.85] italic flex-shrink-0">
            {title}
        </h3>

        {/* Description */}
        <div className="flex-1 min-h-0 mb-4 overflow-y-auto pr-2 scrollbar-none">
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed font-semibold italic">
                "{description}"
            </p>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-dashed border-gray-300/60 dark:border-white/10 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-sm"></div>
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">Archival Log HH-{year.split(' ')[1]}</span>
            </div>
            <div className="text-[14px] font-black text-gray-200 dark:text-white/10 italic">BIO-SYNC</div>
        </div>
    </motion.div>
)

function HealthHorizonJourney() {
    const [isOpen, setIsOpen] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);
    const [flipDir, setFlipDir] = useState('next');

    const spreads = [
        {
            gradient: "from-[#f8fdf6] via-[#f0f9ed] to-[#fafff8] dark:from-[#121a11] dark:via-[#0e1a0c] dark:to-[#111711]",
            accent: "emerald-500",
            left: { year: "MAR 2025", title: "Core Barrier", description: "Identifying absolute fragility in rural emergency specialist connectivity.", icon: <FaLightbulb />, role: "The Vision" },
            right: { year: "MAY 2025", title: "Concept Sync", description: "Full digital-gap analysis resulting in our real-time triage protocol.", icon: <FaSearch />, role: "Validation" }
        },
        {
            gradient: "from-[#f4fbf6] via-[#eaf5ef] to-[#f6fdf8] dark:from-[#101a14] dark:via-[#0b1610] dark:to-[#111a13]",
            accent: "teal-500",
            left: { year: "JUL 2025", title: "UX Forge", description: "Precision Figma engineering for clinical UX and emergency triage tools.", icon: <FaFigma />, role: "Design" },
            right: { year: "SEP 2025", title: "API Core", description: "Distributed MERN architecture with MongoDB clustering for resilient data.", icon: <FaServer />, role: "Infrastructure" }
        },
        {
            gradient: "from-[#f2fcf8] via-[#e8f7f0] to-[#f4fcf9] dark:from-[#101c16] dark:via-[#0c1812] dark:to-[#111c15]",
            accent: "green-500",
            left: { year: "NOV 2025", title: "Stack Fuse", description: "Implementing real-time doctor-patient sync portals via full MERN stack.", icon: <FaCode />, role: "Implementation" },
            right: { year: "JAN 2026", title: "Beta Storm", description: "Mission-critical rollout of SOS emergency triage and notification modules.", icon: <FaRocket />, role: "Production" }
        },
        {
            gradient: "from-[#edfcf8] via-[#e0f8f2] to-[#f0fdf9] dark:from-[#0f1e1a] dark:via-[#0b1b15] dark:to-[#0e1c17]",
            accent: "cyan-500",
            left: { year: "FEB 2026", title: "AI Brain", description: "Building clinical AI agents for automated initial symptom triage.", icon: <FaRobot />, role: "Intelligence", isCurrent: true },
            right: { year: "MAY 2026", title: "Final Scale", description: "Patent filing (P) and final capstone scaling for LPU Showcase.", icon: <FaFileContract />, role: "Showcase", isCurrent: true }
        }
    ];

    const isLastPage = pageIndex === spreads.length - 1;
    const isFirstPage = pageIndex === 0;

    const nextSpread = () => {
        if (!isLastPage) {
            setFlipDir('next');
            setPageIndex(prev => prev + 1);
        }
    };
    const prevSpread = () => {
        if (!isFirstPage) {
            setFlipDir('prev');
            setPageIndex(prev => prev - 1);
        }
    };

    return (
        <div id="story" className="transition-colors duration-1000 relative overflow-hidden antialiased">
            <div className={`absolute left-0 right-0 top-0 h-[200px] bg-gradient-to-b from-${spreads[pageIndex].accent}/5 to-transparent transition-colors duration-1000`}></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-4">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-1 font-headings uppercase tracking-tighter text-gray-900 dark:text-white leading-[0.8] italic">
                        Journey <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-500 to-teal-500">Logbook</span>
                    </h2>
                    <p className="text-primary font-extrabold tracking-[0.5em] uppercase text-[9px]">Healthcare Innovation Odyssey</p>
                </motion.div>

                {/* Book area */}
                <div className="relative flex flex-col items-center justify-center">

                    <AnimatePresence mode="wait">
                        {!isOpen ? (
                            /* ── Closed Book Cover ── */
                            <motion.div
                                key="cover"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ rotateY: -110, opacity: 0, transition: { duration: 0.8 } }}
                                onClick={() => { setPageIndex(0); setIsOpen(true); }}
                                className="relative w-72 md:w-[420px] bg-[#1a2e1a] rounded-r-[3rem] shadow-[25px_25px_50px_-12px_rgba(0,0,0,0.5)] cursor-pointer overflow-hidden group perspective-[1000px]"
                                style={{ height: "580px" }}
                            >
                                {/* Artificial Spine for 3D depth */}
                                <div className="absolute left-0 top-0 bottom-0 w-8 bg-black/40 border-r border-white/10 z-20 shadow-inner"></div>

                                {/* Texture mapping */}
                                <div className="absolute inset-0 bg-[#1a2e1a] bg-[url('https://www.transparenttextures.com/patterns/leather.png')] opacity-60 mix-blend-multiply transition-opacity group-hover:opacity-80"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/60"></div>

                                {/* Content */}
                                <div className="h-full flex flex-col items-center justify-center p-12 text-center relative z-30 ml-8">
                                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-black/40 flex items-center justify-center mb-10 border border-white/10 group-hover:rotate-6 transition-transform duration-500 shadow-2xl">
                                        <FaBookOpen className="text-4xl text-primary" />
                                    </div>
                                    <h3 className="text-4xl md:text-6xl font-black uppercase leading-[0.8] mb-10 italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-primary via-green-400 to-green-900 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                                        Health<br />Horizon
                                    </h3>
                                    <div className="w-16 h-1.5 bg-primary/30 rounded-full mb-10"></div>
                                    <div className="px-10 py-4 rounded-full bg-white text-gray-900 font-black uppercase tracking-[0.4em] text-[11px] shadow-2xl group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-105">
                                        View Journey
                                    </div>
                                </div>

                                {/* Decorative corners */}
                                <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-white/5 rounded-tr-2xl"></div>
                                <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-white/5 rounded-br-2xl"></div>
                            </motion.div>
                        ) : (
                            /* ── Open Book ── */
                            <motion.div
                                key="open-book"
                                initial={{ opacity: 0, scale: 0.97 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.97 }}
                                className={`relative w-full max-w-6xl rounded-[3.5rem] shadow-3xl flex flex-col md:grid md:grid-cols-2 overflow-hidden border-[20px] border-white dark:border-gray-900 transition-all bg-gradient-to-br duration-700 ${spreads[pageIndex].gradient}`}
                                style={{ height: "580px" }}
                            >
                                <PaperOverlay />

                                {/* Centre spine */}
                                <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-gray-900/10 dark:bg-white/5 z-50"></div>

                                {/* Pages */}
                                <div className="contents">
                                    <div className="relative h-full overflow-hidden">
                                        <AnimatePresence mode="wait">
                                            <PageContent key={`left-${pageIndex}`} {...spreads[pageIndex].left} isLeftPage={true} flipDir={flipDir} />
                                        </AnimatePresence>
                                    </div>
                                    <div className="relative h-full overflow-hidden border-t md:border-t-0 border-gray-200/50 dark:border-white/5">
                                        <AnimatePresence mode="wait">
                                            <PageContent key={`right-${pageIndex}`} {...spreads[pageIndex].right} isLeftPage={false} flipDir={flipDir} />
                                        </AnimatePresence>
                                    </div>
                                </div>

                                {/* Close button */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-6 right-6 text-gray-400 hover:text-primary transition-colors z-[65] p-2"
                                >
                                    <FaBookOpen className="text-xl" />
                                </button>

                                {/* Page dots */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-white/50 dark:bg-black/20 backdrop-blur-xl px-6 py-2.5 rounded-full border border-gray-200/40 dark:border-white/10 z-[60]">
                                    <div className="flex gap-2">
                                        {spreads.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => { setFlipDir(i > pageIndex ? 'next' : 'prev'); setPageIndex(i); }}
                                                className={`h-1.5 transition-all duration-500 rounded-full ${i === pageIndex ? 'w-8 bg-primary shadow-sm shadow-primary/40' : 'w-1.5 bg-gray-400/30'}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/60 italic">Vol HH-0{pageIndex + 1}</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* ── Navigation Buttons — BELOW the book, centered ── */}
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-6 mt-8"
                        >
                            <button
                                onClick={prevSpread}
                                disabled={isFirstPage}
                                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider border transition-all ${isFirstPage
                                    ? 'opacity-30 cursor-not-allowed border-gray-200 dark:border-gray-800 text-gray-400'
                                    : 'border-primary/30 text-primary hover:bg-primary hover:text-white hover:border-primary shadow-sm hover:-translate-y-0.5'
                                    }`}
                            >
                                <FaChevronLeft size={11} /> Prev
                            </button>

                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 tabular-nums">
                                {pageIndex + 1} / {spreads.length}
                            </span>

                            {!isLastPage ? (
                                <button
                                    onClick={nextSpread}
                                    className="flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider bg-primary text-white hover:opacity-90 hover:-translate-y-0.5 shadow-md shadow-primary/20 transition-all font-headings"
                                >
                                    Next <FaChevronRight size={11} />
                                </button>
                            ) : (
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all"
                                >
                                    <FaBookOpen size={11} /> Close Archive
                                </button>
                            )}
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HealthHorizonJourney
