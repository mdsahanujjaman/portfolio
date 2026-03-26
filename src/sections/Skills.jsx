import { motion } from "framer-motion"
import { FaCode, FaSyncAlt, FaLightbulb, FaUsers, FaReact, FaBolt } from "react-icons/fa"
import { SiMongodb } from "react-icons/si"
import { usePortfolioData } from "../hooks/usePortfolioData"
import { KEYS, DEFAULTS } from "../data/portfolioData"

const CATEGORY_ICONS = {
  "Languages": <FaCode />,
  "Full Stack & Design": <FaReact />,
  "Backend & Cloud": <SiMongodb />,
  "Core Engineering": <FaBolt />,
}

const SkillChip = ({ name }) => (
  <motion.div whileHover={{ y: -4, scale: 1.05 }}
    className="group relative flex flex-col items-center justify-center gap-1.5 p-3 bg-gray-50/50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-primary/40 transition-all duration-400 cursor-default overflow-hidden">
    <span className="text-[8px] font-black uppercase tracking-[0.12em] text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors text-center relative z-10 leading-none">
      {name}
    </span>
  </motion.div>
)

const SkillCategory = ({ title, skills, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }} transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }} className="relative group h-full">
    <div className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-[2rem] opacity-20 group-hover:opacity-70 transition duration-700 blur-sm`}></div>
    <div className="relative bg-white dark:bg-[#0d1520] border border-gray-100 dark:border-gray-800/60 p-6 rounded-[2rem] h-full flex flex-col overflow-hidden">
      <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${color} opacity-[0.05] group-hover:opacity-[0.12] transition-opacity rounded-bl-full`}></div>
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center text-lg text-white shadow-lg group-hover:rotate-6 transition-transform duration-500 flex-shrink-0`}>
          {CATEGORY_ICONS[title] || <FaCode />}
        </div>
        <h3 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-tight italic">{title}</h3>
      </div>
      <div className="grid grid-cols-3 gap-2 flex-grow">
        {(skills || []).map((skill, i) => (
          <SkillChip key={i} name={typeof skill === "string" ? skill : skill.name} />
        ))}
      </div>
    </div>
  </motion.div>
)

function Skills() {
  const categories = usePortfolioData(KEYS.SKILLS, DEFAULTS.skills)

  return (
    <div id="skills" className="transition-all duration-300 relative">
      <div className="absolute top-1/3 -left-20 w-60 h-60 bg-primary/[0.08] dark:bg-primary/10 rounded-full blur-[80px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/3 -right-20 w-60 h-60 bg-cyan-400/[0.08] dark:bg-cyan-400/10 rounded-full blur-[80px] -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[9px] font-black uppercase tracking-[0.3em] border border-primary/10 mb-5">
            <FaBolt className="text-primary" /> Expertise & Arsenal
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 font-headings uppercase tracking-tighter text-gray-900 dark:text-white leading-none">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500 italic">Mastery</span>
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-green-500 mx-auto rounded-full mb-5"></div>
          <p className="max-w-xl mx-auto text-base text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
            Scalable architectures, distributed systems, and modern full-stack development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
          {categories.map((cat, idx) => (
            <SkillCategory key={idx} {...cat} delay={0.1 + idx * 0.05} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
