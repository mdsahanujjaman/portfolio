import { motion } from "framer-motion"
import { FiDownload, FiEye, FiGitBranch, FiGitCommit, FiPlus, FiTerminal } from "react-icons/fi"
import { usePortfolioData } from "../hooks/usePortfolioData"
import { KEYS, DEFAULTS } from "../data/portfolioData"

const DiffLine = ({ line, content, type }) => (
    <div className={`flex gap-4 px-6 py-1.5 font-mono text-[10px] md:text-xs border-l-4 ${type === 'add' ? 'bg-green-500/10 border-green-500 text-green-500/90' :
        type === 'del' ? 'bg-red-500/10 border-red-500 text-red-500/90' :
            type === 'info' ? 'bg-blue-500/5 border-blue-500/30 text-blue-400' :
                'bg-transparent border-transparent text-gray-500'
        }`}>
        <span className="w-6 opacity-30 select-none">{line || '00'}</span>
        <span className="w-4 select-none">{type === 'add' ? '+' : type === 'del' ? '-' : ' '}</span>
        <span className="flex-1 tracking-tight">{content}</span>
    </div>
)

function Resume() {
    const about = usePortfolioData(KEYS.ABOUT, DEFAULTS.about)
    const resumeData = about.resumeDiff || DEFAULTS.about.resumeDiff
    const cvLink = about.cvLink || DEFAULTS.about.cvLink

    return (
        <div id="resume" className="relative transition-all duration-300">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -z-10"></div>

            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[9px] font-black uppercase tracking-[0.4em] border border-primary/10 mb-6 antialiased">
                        System Log: Credentials
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-1 font-headings uppercase tracking-tighter text-gray-900 dark:text-white leading-[0.8] italic">
                        Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-primary to-teal-500">Resume</span>
                    </h2>
                    <p className="max-w-xl mx-auto text-[10px] md:text-sm text-gray-400 font-bold uppercase tracking-[0.5em] mt-8 leading-relaxed">
                        Analyzing the latest professional deployment.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center max-w-5xl mx-auto">

                    {/* The "Git Diff" Terminal Window */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0b0f15] rounded-3xl border border-gray-800 shadow-2xl overflow-hidden group"
                    >
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between px-6 py-4 bg-[#141b24] border-b border-gray-800">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30"></div>
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                                <FiTerminal /> git diff --staged
                            </div>
                            <div className="flex gap-4">
                                <FiGitBranch className="text-gray-600 text-xs" />
                                <FiGitCommit className="text-gray-600 text-xs" />
                            </div>
                        </div>

                        {/* Terminal Content (The Diff) */}
                        <div className="py-6 overflow-hidden">
                            {resumeData.map((line, i) => (
                                <DiffLine key={i} {...line} />
                            ))}
                        </div>

                        {/* Animated Footer Bar */}
                        <div className="px-6 py-4 bg-[#141b24]/50 border-t border-gray-800 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-[9px] font-mono text-green-500/80 uppercase tracking-widest">Success: Deployment Complete</span>
                            </div>
                            <span className="text-[9px] font-mono text-gray-600">
                                {resumeData.filter(l => l.type === 'add').length} insertions(+), {resumeData.filter(l => l.type === 'del').length} deletion(-)
                            </span>
                        </div>
                    </motion.div>

                    {/* Action Hub */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-2xl md:text-4xl font-black dark:text-white uppercase tracking-tighter leading-none italic flex items-center gap-4">
                                <FiPlus className="text-green-500 text-3xl animate-bounce" /> Commit <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-primary">Changes</span>
                            </h3>
                            <p className="text-[11px] md:text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest leading-relaxed text-center lg:text-left">
                                Review the technical evolution and download the final production build of my credentials.
                            </p>
                        </div>

                        {/* Control Buttons */}
                        <div className="flex flex-col gap-4">
                            <motion.a
                                href={cvLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, x: 10 }}
                                className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800/10 border border-gray-100 dark:border-gray-800 rounded-2xl group transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <FiEye className="text-xl" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Preview Protocol</span>
                                    <span className="text-sm font-black dark:text-white uppercase tracking-tighter italic">Open CV</span>
                                </div>
                            </motion.a>

                            <motion.a
                                href={cvLink}
                                download="Md_Sahanujjaman_CV.pdf"
                                whileHover={{ scale: 1.05, x: 10 }}
                                className="flex items-center gap-4 p-5 bg-blue-600 text-white rounded-2xl group transition-all shadow-[0_20px_40px_-10px_rgba(37,99,235,0.3)]"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl group-hover:translate-y-1 transition-transform">
                                    <FiDownload />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black text-white/60 uppercase tracking-widest leading-none mb-1">Download Archive</span>
                                    <span className="text-sm font-black uppercase tracking-tighter italic">Download CV</span>
                                </div>
                            </motion.a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Resume
