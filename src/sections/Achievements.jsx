import { motion } from "framer-motion"
import { FaAward, FaCertificate, FaLightbulb, FaRobot, FaExternalLinkAlt, FaBolt } from "react-icons/fa"
import { usePortfolioData } from "../hooks/usePortfolioData"
import { KEYS, DEFAULTS } from "../data/portfolioData"

const ICONS = [<FaCertificate />, <FaAward />, <FaRobot />, <FaLightbulb />, <FaCertificate />, <FaBolt />]

const AchievementCard = ({ title, subtitle, category, date, color, link, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -8, scale: 1.02 }} className="relative group h-full">
    <a href={link || "#"} target={link ? "_blank" : undefined} rel={link ? "noopener noreferrer" : undefined} className="block h-full cursor-pointer">
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-[2rem] opacity-10 group-hover:opacity-40 transition duration-500 blur-sm`}></div>
      <div className="relative bg-white dark:bg-[#0d1520] border border-gray-100 dark:border-gray-800/40 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-xl h-full flex flex-col items-center text-center overflow-hidden transition-all duration-500">
        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${color} opacity-[0.03] group-hover:opacity-[0.1] transition-opacity rounded-bl-full`}></div>
        <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center text-3xl text-white mb-6 shadow-lg transform group-hover:rotate-12 transition-transform duration-500`}>
          {ICONS[index % ICONS.length]}
        </div>
        <div className="flex flex-col items-center mb-5 border-b border-gray-100 dark:border-gray-800/50 pb-5 w-full">
          <span className={`text-[10px] font-black uppercase tracking-[0.4em] bg-clip-text text-transparent bg-gradient-to-r ${color} mb-1 drop-shadow-sm`}>{category}</span>
          <span className="text-[10px] font-black text-gray-400 group-hover:text-primary transition-colors italic tracking-widest">{date}</span>
        </div>
        <h3 className="text-xl font-black dark:text-white mb-4 font-headings uppercase tracking-tight leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-green-400 transition-all">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed font-bold opacity-75 group-hover:opacity-100 transition-opacity flex-grow underline decoration-primary/5 decoration-4 mb-6">{subtitle}</p>
        <div className="text-primary/40 text-[9px] font-black uppercase tracking-[0.3em] flex items-center gap-2 group-hover:text-primary transition-colors">
          {link ? 'View Document' : 'Official Entry'} <FaExternalLinkAlt className="text-[8px] animate-pulse" />
        </div>
      </div>
    </a>
  </motion.div>
)

function Achievements() {
  const data = usePortfolioData(KEYS.ACHIEVEMENTS, DEFAULTS.achievements)

  return (
    <div id="achievements" className="relative transition-all duration-300">
      <div className="absolute top-1/2 left-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] -z-10 opacity-70"></div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[9px] font-black uppercase tracking-[0.4em] border border-primary/10 mb-6 antialiased">
            Validation & Milestones
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-1 font-headings uppercase tracking-tighter text-gray-900 dark:text-white leading-[0.8] italic">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-500 to-teal-500">Mastery</span>
          </h2>
          <p className="max-w-xl mx-auto text-[10px] md:text-sm text-gray-400 font-bold uppercase tracking-[0.5em] mt-6 leading-relaxed">
            Certifications & innovative patents that drive technical excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, i) => (
            <AchievementCard key={item.id || i} {...item} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Achievements
