import { motion as Motion } from "framer-motion"
import { useEffect, useState } from "react"
import { SiLeetcode, SiCodechef, SiGithub } from "react-icons/si"
import { FaCodeBranch, FaStar, FaBolt, FaTerminal } from "react-icons/fa"
import GitHubCalendarModule from "react-github-calendar"

const GitHubCalendar = GitHubCalendarModule.default ? GitHubCalendarModule.default : GitHubCalendarModule;

function GithubStats() {
  const [isDark, setIsDark] = useState(() =>
    typeof document !== 'undefined' ? document.documentElement.classList.contains('dark') : false
  )

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'))
        }
      })
    })
    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      label: "GitHub Repos",
      val: "45+",
      icon: <SiGithub />,
      color: "from-gray-700 to-black dark:from-gray-400 dark:to-white",
      link: "https://github.com/mdsahanujjaman",
      desc: "Full-stack archetectures & prototypes."
    },
    {
      label: "LeetCode",
      val: "200+",
      icon: <SiLeetcode />,
      color: "from-orange-400 to-orange-600",
      link: "https://leetcode.com/u/mdsahanujjaman/",
      desc: "Algorithm & Data Structure mastery."
    },
    {
      label: "CodeChef",
      val: "Star Rated",
      icon: <SiCodechef />,
      color: "from-yellow-500 to-yellow-700",
      link: "https://www.codechef.com/users/mdsahanujjaman",
      desc: "Competitive programming excellence."
    }
  ]

  return (
    <div id="github" className="relative transition-all duration-300">
      {/* Background kinetic energy */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Premium Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.4em] border border-primary/10 mb-6 antialiased">
            <FaTerminal className="text-primary animate-pulse" /> Engineering Activity
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-1 font-headings uppercase tracking-tighter text-gray-900 dark:text-white leading-[0.8] italic">
            Coding <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-500 to-teal-500">Activity</span>
          </h2>
          <p className="max-w-xl mx-auto text-[10px] md:text-sm text-gray-400 font-bold uppercase tracking-[0.5em] mt-6">
            Real-time contribution mapping & competitive mastery.
          </p>
        </Motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* Main GitHub Contributions Window */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white dark:bg-[#0d1520] p-6 md:p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-800/60 shadow-2xl relative overflow-hidden group"
          >
            {/* Header for the window */}
            <div className="flex items-center justify-between mb-8 border-b border-gray-100 dark:border-gray-800/50 pb-6">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/30"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400/20 border border-yellow-400/30"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400/20 border border-green-400/30"></div>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.1em] text-gray-400 bg-gray-100 dark:bg-gray-800/50 px-3 py-1 rounded-md">git-log --graph</span>
              </div>
              <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-wider">
                <FaBolt className="animate-pulse" /> Live Status
              </div>
            </div>

            <div className="flex justify-center overflow-x-auto scrollbar-hide">
              <GitHubCalendar
                username="mdsahanujjaman"
                colorScheme={isDark ? "dark" : "light"}
                blockSize={12}
                blockMargin={5}
                fontSize={12}
                theme={{
                  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                }}
              />
            </div>

            {/* Subtle overlay decorative */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-[80px] -z-10 group-hover:bg-primary/10 transition-colors"></div>
          </Motion.div>

          {/* Stats Row */}
          {stats.map((stat, i) => (
            <Motion.a
              key={i}
              href={stat.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white dark:bg-[#0d1520] p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800/60 shadow-xl group transition-all duration-500 flex flex-col justify-between h-64 overflow-hidden relative"
            >
              {/* Corner Icon Glow */}
              <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${stat.color} opacity-[0.03] group-hover:opacity-[0.12] transition-opacity rounded-bl-full`}></div>

              <div className="relative z-10 flex justify-between items-start">
                <div className={`text-4xl bg-clip-text text-transparent bg-gradient-to-br ${stat.color} group-hover:scale-110 transition-transform duration-500`}>
                  {stat.icon}
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Status</span>
                  <div className="flex items-center gap-1 mt-1 text-primary">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-[8px] font-bold uppercase tracking-tighter">Verified</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-Auto">
                <h3 className="text-3xl font-black dark:text-white uppercase tracking-tighter mb-1 leading-none">
                  {stat.val}
                </h3>
                <p className={`text-[11px] font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.color} uppercase tracking-wider mb-2`}>
                  {stat.label}
                </p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold leading-tight opacity-70 group-hover:opacity-100 transition-opacity">
                  {stat.desc}
                </p>
              </div>

              {/* Hover arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 transition-transform">
                <FaCodeBranch className="text-primary text-sm" />
              </div>
            </Motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GithubStats
