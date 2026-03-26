import { motion as Motion } from "framer-motion"
import { useState, useEffect, useMemo } from "react"
import { FaTerminal } from "react-icons/fa"

function TerminalBio() {
  const [lines, setLines] = useState([]);

  const terminalData = useMemo(() => [
    { text: "visitor@portfolio:~$ cat about_me.json", type: "cmd", delay: 0 },
    { text: "{", type: "code", delay: 800 },
    { text: '  "name": "Md Sahanujjaman",', type: "code", delay: 1000 },
    { text: '  "role": "Full Stack Developer",', type: "code", delay: 1200 },
    { text: '  "education": "B.Tech IT (Lovely Professional University)",', type: "code", delay: 1400 },
    { text: '  "skills": ["JavaScript", "React", "Node.js", "MongoDB", "DevOps"],', type: "code", delay: 1600 },
    { text: '  "passion": "Building scalable web solutions and mastering DevOps.",', type: "code", delay: 1800 },
    { text: '  "openForWork": true', type: "code", delay: 2000 },
    { text: "}", type: "code", delay: 2200 },
    { text: "visitor@portfolio:~$ _", type: "cmd cursor-blink", delay: 2600 }
  ], []);

  useEffect(() => {
    const timeouts = terminalData.map((line) => {
      return setTimeout(() => {
        setLines(prev => [...prev, line]);
      }, line.delay);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [terminalData]);

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-[#0a0f16] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 relative z-10">

        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden shadow-2xl border border-gray-300 dark:border-gray-700 bg-gray-900 font-mono text-sm md:text-base relative group"
        >
          {/* Terminal Header */}
          <div className="flex items-center px-4 py-3 bg-gray-800 border-b border-gray-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
            </div>
            <div className="flex-1 text-center text-gray-400 text-xs font-semibold tracking-wider flex items-center justify-center gap-2">
              <FaTerminal /> visitor@mdsahanujjaman: ~
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 h-64 md:h-72 overflow-y-auto custom-scrollbar bg-[#0d1117] text-left">
            <div className="flex flex-col space-y-1.5">
              {lines.map((line, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={line.type === 'cmd' ? "text-green-400 font-bold" : "text-gray-300 pl-4"}
                >
                  <span className={line.type === 'cmd cursor-blink' ? "animate-pulse" : ""}>
                    {line.text}
                  </span>
                </Motion.div>
              ))}
            </div>
          </div>

          {/* Subtle Glow inside terminal */}
          <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
        </Motion.div>

      </div>
    </section>
  )
}

export default TerminalBio
