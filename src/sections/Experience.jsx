import { motion as Motion } from "framer-motion"
import { FaGraduationCap, FaCode, FaCheckCircle } from "react-icons/fa"
import { usePortfolioData } from "../hooks/usePortfolioData"
import { KEYS, DEFAULTS } from "../data/portfolioData"

const COLORS = [
  "from-primary to-green-400",
  "from-blue-600 to-indigo-500",
  "from-purple-500 to-pink-400",
  "from-orange-500 to-yellow-400",
  "from-teal-500 to-emerald-400",
]
const SHADOWS = [
  "shadow-primary/30", "shadow-blue-600/30", "shadow-purple-500/30",
  "shadow-orange-500/30", "shadow-teal-500/30"
]

function Experience() {
  const timelineData = usePortfolioData(KEYS.EXPERIENCE, DEFAULTS.experience)

  return (
    <div id="experience" className="relative transition-all duration-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.08] dark:bg-primary/5 rounded-full blur-[140px] -z-10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[9px] font-black uppercase tracking-[0.4em] border border-primary/10 mb-6 antialiased">
              Growth & Pedigree
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-1 font-headings uppercase tracking-tighter text-gray-900 dark:text-white leading-[0.8] italic">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-500 to-teal-500">Journey</span>
            </h2>
            <p className="max-w-xl mx-auto text-[10px] md:text-sm text-gray-400 font-bold uppercase tracking-[0.5em] mt-6 leading-relaxed">
              A timeline of professional evolution and academic milestones.
            </p>
          </Motion.div>
        </div>

        <div className="relative mt-20 max-w-5xl mx-auto pl-4 md:pl-0">
          <div className="absolute left-[38px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-500 to-purple-600 rounded-full transform md:-translate-x-1/2 opacity-20 hidden md:block"></div>
          <div className="absolute left-[38px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-500 to-purple-600 rounded-full opacity-20 md:hidden"></div>

          <div className="space-y-16">
            {timelineData.map((item, index) => {
              const color = COLORS[index % COLORS.length]
              const shadow = SHADOWS[index % SHADOWS.length]
              const hasDetails = item.score || item.subjects || item.gains
              return (
                <Motion.div key={item.id || index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                  <div className={`absolute left-[14px] md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${color} shadow-2xl ${shadow} z-20 border-4 border-white dark:border-[#0a0f16] transition-transform duration-500`}>
                    <span className="text-white text-xl">
                      {item.type === "Work" ? <FaCode className="text-white text-xl" /> : <FaGraduationCap className="text-white text-xl" />}
                    </span>
                  </div>

                  <div className={`ml-16 md:ml-0 md:w-1/2 w-full ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                    <Motion.div whileHover={{ scale: 1.02 }}
                      className="bg-white dark:bg-[#0d1520] p-6 lg:p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 dark:border-gray-800/60 group relative overflow-hidden transition-all duration-500">
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color} opacity-[0.03] group-hover:opacity-[0.1] transition-opacity rounded-bl-full`}></div>

                      <div className={`flex flex-col ${index % 2 === 0 ? 'items-start' : 'items-start md:items-end'} mb-4`}>
                        {item.date && (
                          <span className={`inline-block px-3 py-1 mb-3 text-[9px] font-black uppercase tracking-widest rounded-full bg-gradient-to-r ${color} text-white shadow-md`}>{item.date}</span>
                        )}
                        <span className={`text-[8px] font-black uppercase tracking-[0.3em] bg-clip-text text-transparent bg-gradient-to-r ${color}`}>{item.type}</span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-2 font-headings uppercase tracking-tighter leading-none italic group-hover:text-primary transition-colors">{item.title}</h3>
                      <h4 className="text-xs md:text-sm font-black text-primary mb-5 opacity-90 italic">{item.institution}</h4>

                      {hasDetails ? (
                        <div className={`space-y-3 relative z-10 text-[11px] font-bold ${index % 2 === 0 ? '' : 'md:flex md:flex-col md:items-end'}`}>
                          {item.score && <p className="text-gray-700 dark:text-gray-400 max-w-sm"><span className="text-primary opacity-60 uppercase italic tracking-widest mr-2">Status:</span>{item.score}</p>}
                          {item.gains && <p className="text-gray-700 dark:text-gray-400 max-w-sm"><span className="text-primary opacity-60 uppercase italic tracking-widest mr-2">Competency:</span>{item.gains}</p>}
                        </div>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400 text-[11px] md:text-sm leading-relaxed relative z-10 font-bold opacity-80 group-hover:opacity-100 transition-opacity">{item.description}</p>
                      )}

                      <div className={`mt-6 pt-4 border-t border-gray-100 dark:border-gray-800/50 flex ${index % 2 === 0 ? 'justify-start' : 'justify-start md:justify-end'} items-center gap-2`}>
                        <FaCheckCircle className="text-primary text-[10px] animate-pulse" />
                        <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Verified Log Entry</span>
                      </div>
                    </Motion.div>
                  </div>
                </Motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
