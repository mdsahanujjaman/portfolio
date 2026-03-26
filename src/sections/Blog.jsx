import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiArrowRight, FiClock, FiZap, FiLayout, FiShield, FiTrendingUp, FiChevronUp, FiChevronDown } from "react-icons/fi"
import { usePortfolioData } from "../hooks/usePortfolioData"
import { KEYS, DEFAULTS } from "../data/portfolioData"

const BLOG_ICONS = [<FiZap />, <FiLayout />, <FiShield />, <FiTrendingUp />]
const BLOG_COLORS = [
    "from-blue-600 via-primary to-emerald-500",
    "from-emerald-500 via-teal-500 to-cyan-500",
    "from-purple-600 via-indigo-500 to-blue-500",
    "from-orange-500 via-red-500 to-yellow-500"
]

function Blog() {
    const [showAll, setShowAll] = useState(false);
    const posts = usePortfolioData(KEYS.BLOGS, DEFAULTS.blogs)

    const visiblePosts = showAll ? posts : posts.slice(0, 4);

    return (
        <section id="blog" className="py-24 relative overflow-hidden transition-all duration-300">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[9px] font-black uppercase tracking-[0.4em] border border-primary/10 mb-6 antialiased">
                            Thought Leadership
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-gray-900 dark:text-white leading-[0.8] italic">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-400 to-emerald-500">Logbook.</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 dark:text-gray-400 font-bold text-xs md:text-sm max-w-sm uppercase tracking-[0.2em] leading-relaxed"
                    >
                        Exploring the intersection of <span className="text-primary italic">Scalable Architecture</span> and human-centric ecosystems.
                    </motion.p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <AnimatePresence>
                        {visiblePosts.map((post, index) => (
                            <motion.div
                                key={post.id || index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="group relative bg-white dark:bg-[#0d1520] border border-gray-100 dark:border-gray-800/40 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 shadow-xl hover:shadow-2xl hover:border-primary/20"
                            >
                                {/* Trending Badge */}
                                {post.isTrending && (
                                    <div className="absolute top-8 right-8 flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-[8px] font-black uppercase tracking-widest border border-orange-500/20">
                                        <FiZap className="animate-pulse" /> Trending
                                    </div>
                                )}

                                {/* Card Content */}
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${BLOG_COLORS[index % 4]} flex items-center justify-center text-white text-2xl shadow-lg group-hover:rotate-6 transition-transform duration-500`}>
                                            {BLOG_ICONS[index % 4]}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-gray-400 text-[9px] font-black uppercase tracking-[0.4em]">{post.date}</span>
                                            <div className="flex items-center gap-2 mt-1">
                                                <FiClock className="text-primary text-[10px]" />
                                                <span className="text-gray-500 dark:text-gray-400 text-[9px] font-black uppercase tracking-widest">{post.readTime}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-tight mb-4 group-hover:text-primary transition-colors italic">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm font-medium leading-relaxed mb-8 line-clamp-2 md:line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between pt-8 border-t border-gray-50 dark:border-gray-800/50">
                                        <div className="flex gap-2">
                                            {(post.tags || []).map((tag, i) => (
                                                <span key={i} className="px-3 py-1 rounded-full bg-gray-50 dark:bg-white/5 text-[8px] font-black text-gray-400 uppercase tracking-widest group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                        <motion.button
                                            whileHover={{ x: 5 }}
                                            className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px]"
                                        >
                                            Deep Read <FiArrowRight />
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Show More Trigger */}
                {posts.length > 4 && (
                    <div className="mt-16 text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0d1520] border border-gray-800 text-gray-400 font-black uppercase tracking-[0.3em] text-[10px] hover:border-primary/40 hover:text-white transition-all group"
                        >
                            {showAll ? (
                                <>Collapse Feed <FiChevronUp /></>
                            ) : (
                                <>Access Full Database ({posts.length}) <FiChevronDown /></>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Blog
