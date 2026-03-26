import { motion as Motion } from "framer-motion"
import { FaBookmark, FaHeart, FaCircle, FaTerminal } from "react-icons/fa"

function ActivityCard({ title, date, category, description, image, delay }) {
    return (
        <Motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ x: 6 }}
            className="group relative flex flex-col md:flex-row gap-6 p-4 md:p-6 bg-white dark:bg-[#0d1520] border border-gray-100 dark:border-gray-800/60 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {image && (
                <div className="relative w-full md:w-56 h-36 md:h-28 rounded-2xl overflow-hidden shrink-0 shadow-lg group-hover:scale-[1.02] transition-transform duration-500">
                    <img src={image} alt={title} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                </div>
            )}

            <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80">
                            {category}
                        </span>
                    </div>
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{date}</span>
                </div>

                <div>
                    <h3 className="text-lg md:text-xl font-black dark:text-white mb-2 font-headings uppercase tracking-tight leading-none italic group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-[11px] md:text-xs leading-relaxed font-bold opacity-80 group-hover:opacity-100 transition-opacity">
                        {description}
                    </p>
                </div>

                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800/50">
                    <div className="flex items-center gap-1.5 text-gray-400 text-[9px] font-black uppercase tracking-widest hover:text-primary transition-colors cursor-pointer">
                        <FaTerminal /> Logged
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400 text-[9px] font-black uppercase tracking-widest hover:text-red-500 transition-colors cursor-pointer ml-auto">
                        <FaHeart /> Impactful
                    </div>
                </div>
            </div>
        </Motion.div>
    )
}

export default ActivityCard
