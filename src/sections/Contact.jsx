import { motion } from "framer-motion"
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiMessageSquare, FiSend, FiUser, FiAtSign } from "react-icons/fi"

function Contact() {
  const contactLinks = [
    {
      icon: <FiMail />,
      label: "Email Me",
      val: "mdsahanujjaman17@gmail.com",
      link: "mailto:mdsahanujjaman17@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FiPhone />,
      label: "Call Me",
      val: "+91-9933411500",
      link: "tel:+919933411500",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      val: "Md Sahanujjaman",
      link: "https://linkedin.com/in/mdsahanujjaman",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: <FiGithub />,
      label: "GitHub",
      val: "mdsahanujjaman",
      link: "https://github.com/mdsahanujjaman",
      color: "from-gray-700 to-black dark:from-gray-500 dark:to-gray-300"
    }
  ]

  return (
    <div id="contact" className="relative transition-all duration-300 pb-20">
      {/* Dynamic Kinetic Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-24 items-center">

          {/* Left: Heading & Information */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[9px] font-black uppercase tracking-[0.4em] border border-primary/10 mb-8 antialiased">
                Open for Collaboration
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 font-headings uppercase tracking-tighter text-gray-900 dark:text-white leading-[0.8] italic">
                Connect <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-400 to-teal-400">With Me </span>
              </h2>
              <p className="max-w-xl text-[10px] md:text-sm text-gray-400 font-bold uppercase tracking-[0.5em] mt-8 leading-relaxed">
                Strategic Engineering, AI Innovation, & Impactful Partnerships.
              </p>
            </motion.div>

            {/* High-Fidelity Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactLinks.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative bg-white dark:bg-[#0d1520] p-6 rounded-[2rem] border border-gray-100 dark:border-gray-800/60 shadow-xl overflow-hidden group transition-all"
                >
                  {/* Background Glow */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color} opacity-[0.03] group-hover:opacity-[0.1] transition-opacity rounded-bl-full`}></div>

                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white text-xl shadow-lg mb-4 group-hover:rotate-12 transition-transform duration-500`}>
                    {item.icon}
                  </div>
                  <h4 className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">{item.label}</h4>
                  <p className="text-sm font-black dark:text-white tracking-tighter italic truncate">{item.val}</p>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Message Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#0d1520] p-6 md:p-12 rounded-[2rem] md:rounded-[3.5rem] border border-gray-100 dark:border-gray-800 shadow-2xl relative overflow-hidden group"
          >
            {/* Form Decorative Header */}
            <div className="flex items-center justify-between mb-10 border-b border-gray-100 dark:border-gray-800/50 pb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-xl shadow-inner animate-pulse">
                  <FiMessageSquare />
                </div>
                <div>
                  <h3 className="text-lg font-black dark:text-white uppercase tracking-tighter italic leading-none">Send a Pulse</h3>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Direct Message Channel</span>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-4 flex items-center gap-2">
                    <FiUser className="text-primary" /> Name
                  </label>
                  <input
                    type="text"
                    placeholder="Identification"
                    className="w-full bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-gray-800/60 rounded-2xl px-6 py-4 text-sm font-bold focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all outline-none dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-4 flex items-center gap-2">
                    <FiAtSign className="text-primary" /> Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-gray-800/60 rounded-2xl px-6 py-4 text-sm font-bold focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all outline-none dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-4 flex items-center gap-2">
                  <FiMessageSquare className="text-primary" /> Message Body
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-gray-800/60 rounded-3xl px-6 py-4 text-sm font-bold focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all outline-none dark:text-white resize-none"
                ></textarea>
              </div>

              <button className="w-full relative group overflow-hidden bg-primary text-white font-black uppercase tracking-[0.3em] text-[12px] py-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(34,197,94,0.4)] hover:scale-[1.02] active:scale-95 transition-all antialiased flex items-center justify-center gap-3">
                <FiSend className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
