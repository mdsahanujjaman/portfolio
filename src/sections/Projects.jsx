import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaRobot, FaStethoscope, FaTrashAlt, FaMapMarked, FaUserEdit, FaSearch, FaCode, FaBolt, FaLayerGroup, FaArrowRight, FaHeart, FaLeaf } from "react-icons/fa"
import { usePortfolioData } from "../hooks/usePortfolioData"
import { KEYS, DEFAULTS } from "../data/portfolioData"

// Icon mapping for projects
const getProjectIcon = (id) => {
  const icons = [<FaHeart />, <FaLeaf />, <FaLayerGroup />, <FaCode />, <FaBolt />]
  return icons[(id - 1) % icons.length]
}

const getIconBg = (id) => {
  const bgs = ["from-primary to-green-500", "from-teal-500 to-cyan-500", "from-violet-500 to-purple-600", "from-emerald-500 to-green-600", "from-blue-500 to-cyan-500"]
  return bgs[(id - 1) % bgs.length]
}

const getAccentColor = (id) => {
  const colors = ["from-primary/20 via-green-500/10 to-transparent", "from-teal-500/20 via-cyan-500/10 to-transparent", "from-violet-500/20 to-transparent", "from-emerald-500/20 to-transparent", "from-blue-500/20 to-transparent"]
  return colors[(id - 1) % colors.length]
}

// Large hero card
const LargeCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`group relative col-span-1 lg:col-span-2 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-gray-800/60 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/10 cursor-default h-full`}
    style={{ minHeight: "240px" }}
  >
    {/* Full bleed image */}
    <motion.img
      src={project.image}
      alt={project.title}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Layered gradient: strong bottom, subtle top */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"></div>
    <div className={`absolute inset-0 bg-gradient-to-tr ${getAccentColor(project.id)} mix-blend-screen opacity-60`}></div>

    {/* Content */}
    <div className="relative z-10 h-full flex flex-col justify-between p-5 md:p-7" style={{ minHeight: "240px" }}>
      {/* Top row */}
      <div className="flex items-start justify-between">
        <div className={`w-12 h-12 bg-gradient-to-br ${getIconBg(project.id)} rounded-2xl flex items-center justify-center text-white text-xl shadow-xl`}>
          {getProjectIcon(project.id)}
        </div>
        <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.3em] bg-primary text-white shadow-lg`}>
          {project.id === 1 ? "★ Patent Under Process" : "Featured Project"}
        </span>
      </div>

      {/* Bottom content */}
      <div className="grid md:grid-cols-[1fr_auto] gap-6 items-end">
        <div>
          <p className="text-white/50 text-[9px] font-black uppercase tracking-[0.4em] mb-2">{project.date}</p>
          <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none mb-0.5">
            {project.title}
          </h3>
          <p className="text-primary font-bold text-[10px] mb-1.5 tracking-wider uppercase">{project.subtitle}</p>
          <p className="text-white/70 text-[11px] leading-relaxed max-w-lg mb-2">{project.description}</p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5">
            {(project.tech || []).map((t, i) => (
              <span key={i} className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[8px] font-bold text-white uppercase tracking-wider">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {project.github && (
            <motion.a
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href={project.github}
              target="_blank"
              className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white text-xl hover:bg-white/15 transition-all"
            >
              <FaGithub />
            </motion.a>
          )}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.live}
            className="px-6 py-3 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-2xl flex items-center gap-2 shadow-2xl hover:bg-green-400 transition-colors"
          >
            Explore <FaExternalLinkAlt className="text-[8px]" />
          </motion.a>
        </div>
      </div>
    </div>
  </motion.div>
)

// Standard card for medium/small
const StandardCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="group relative rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-gray-800/60 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/5 cursor-default flex flex-col h-full"
  >
    {/* Image container */}
    <div className="relative h-48 overflow-hidden">
      <motion.img
        src={project.image}
        alt={project.title}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      <div className={`absolute top-4 left-4 w-10 h-10 bg-gradient-to-br ${getIconBg(project.id)} rounded-xl flex items-center justify-center text-white text-lg`}>
        {getProjectIcon(project.id)}
      </div>
    </div>

    {/* Content */}
    <div className="p-6 md:p-8 flex-grow flex flex-col bg-white dark:bg-[#0d1520]">
      <div className="flex-grow">
        <div className="flex items-center justify-between mb-3">
          <p className="text-gray-400 text-[8px] font-black uppercase tracking-[0.4em]">{project.date}</p>
          <div className="flex gap-2">
            {project.github && (
              <a href={project.github} target="_blank" className="text-gray-400 hover:text-primary transition-colors">
                <FaGithub size={14} />
              </a>
            )}
            <a href={project.live} className="text-gray-400 hover:text-primary transition-colors">
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
        </div>
        <h3 className="text-lg md:text-xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-tight mb-1 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-primary/70 font-bold text-[9px] mb-3 tracking-widest uppercase italic">{project.subtitle}</p>
        <p className="text-gray-500 dark:text-gray-400 text-[10px] leading-relaxed line-clamp-2 md:line-clamp-3 mb-4">
          {project.description}
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {(project.tech || []).slice(0, 3).map((t, i) => (
          <span key={i} className="px-3 py-1 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 text-[7px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
            {t}
          </span>
        ))}
        {project.tech && project.tech.length > 3 && (
          <span className="text-[7px] font-black text-primary/40 uppercase tracking-widest">+{project.tech.length - 3}</span>
        )}
      </div>
    </div>
  </motion.div>
)

function Projects() {
  const data = usePortfolioData(KEYS.PROJECTS, DEFAULTS.projects)

  return (
    <div id="projects" className="py-20 relative transition-all duration-300">
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-teal-500/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[9px] font-black uppercase tracking-[0.4em] border border-primary/10 mb-6 antialiased">
              Coded Solutions
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-gray-900 dark:text-white leading-[0.8] italic">
              Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-500 to-teal-500">Inventory.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:text-right max-w-sm"
          >
            <p className="text-gray-400 font-bold text-xs uppercase tracking-[0.3em] leading-relaxed antialiased">
              Engineering high-fidelity <span className="text-primary italic">MERN</span> ecosystems and AI-driven triage prototypes.
            </p>
          </motion.div>
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data.map((project, idx) => (
            idx === 0
              ? <LargeCard key={project.id || idx} project={project} />
              : <StandardCard key={project.id || idx} project={project} />
          ))}
        </div>

        {/* Global Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href="https://github.com/mdsahanujjaman"
            target="_blank"
            className="inline-flex items-center gap-4 px-8 py-4 rounded-[2rem] bg-[#0d1520] border border-gray-800 text-gray-400 font-black uppercase tracking-[0.3em] text-[10px] hover:border-primary/40 hover:text-white transition-all group"
          >
            Explore All Repositories <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects