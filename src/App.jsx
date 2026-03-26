import { Suspense, lazy, useState, useEffect } from 'react'
import { motion as Motion } from "framer-motion"
import TypewriterModule from "react-simple-typewriter"
const Typewriter = TypewriterModule.Typewriter || TypewriterModule;

// Components
import ParticlesBackground from "./components/ParticlesBackground"
import CustomCursor from "./components/CustomCursor"
import Navbar from "./components/Navbar"
import FloatingThemeToggle from "./components/FloatingThemeToggle"
import SectionWrapper from "./components/SectionWrapper"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

// Sections
import HealthHorizonJourney from "./sections/HealthHorizonJourney"
const About = lazy(() => import("./sections/About"))
const Skills = lazy(() => import("./sections/Skills"))
const Projects = lazy(() => import("./sections/Projects"))
const Experience = lazy(() => import("./sections/Experience"))
const Achievements = lazy(() => import("./sections/Achievements"))
const GithubStats = lazy(() => import("./sections/GithubStats"))
const Resume = lazy(() => import("./sections/Resume"))
const Activity = lazy(() => import("./sections/Activity"))
const Blog = lazy(() => import("./sections/Blog"))
const Contact = lazy(() => import("./sections/Contact"))
const Admin = lazy(() => import("./sections/Admin"))
const CoCurricular = lazy(() => import("./sections/CoCurricular"))

function App() {
  const [route, setRoute] = useState("home")

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      setRoute(hash === "admin" ? "admin" : "home")
    }
    window.addEventListener("hashchange", handleHashChange)
    handleHashChange()
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  if (route === "admin") {
    return (
      <div className="bg-gray-100 dark:bg-[#0a0f16] min-h-screen">
        <Suspense fallback={<div className="h-screen flex items-center justify-center dark:text-white">Loading Admin...</div>}>
          <Admin />
        </Suspense>
        <div className="fixed bottom-6 left-6 z-[100]">
          <button
            onClick={() => window.location.hash = ""}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm shadow-xl"
          >
            ← Back to Site
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-[#0a0f16] text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-700 font-body relative overflow-hidden antialiased">
      <ParticlesBackground />
      <CustomCursor />
      <FloatingThemeToggle />
      <ScrollToTop />

      {/* Background Neon Gradients for All Modes */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[140px] -z-10 pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 dark:bg-accent/10 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse"></div>

      <Navbar />

      {/* Hero Section */}
      <section id="home" className="flex items-center justify-center min-h-[96vh] px-6 relative z-10 pt-20">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 md:gap-20 items-center">

          {/* Text Side: Branded Identity Hub */}
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-left relative"
          >
            {/* Background Narrative Watermark */}
            <div className="absolute top-[-40px] left-0 text-[60px] sm:text-[80px] md:text-[120px] font-black text-primary/[0.08] dark:text-primary/5 select-none pointer-events-none uppercase tracking-tighter italic">
              MS.
            </div>

            <Motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-3 px-5 py-2 mb-10 text-[10px] font-black uppercase tracking-[0.4em] text-primary/80 dark:text-primary bg-primary/[0.03] dark:bg-primary/5 rounded-2xl border border-primary/20 dark:border-primary/10 shadow-inner group"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="group-hover:translate-x-1 transition-transform">Looking for new opportunities</span>
            </Motion.div>

            <div className="relative mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-headings uppercase italic tracking-tighter text-gray-900 dark:text-white leading-[0.85] relative z-10">
                Md <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#4ade80] to-cyan-400 italic drop-shadow-2xl filter saturate-200">
                  Sahanujjaman
                </span>
              </h1>
              {/* Ultra-High-Fidelity Branded Glow */}
              <div className="absolute top-1/2 left-0 w-48 h-48 bg-primary/20 blur-[100px] -z-10 animate-pulse"></div>
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-cyan-500/10 blur-[60px] -z-10"></div>
            </div>

            <div className="text-xl md:text-2xl lg:text-3xl font-black text-gray-800 dark:text-gray-100 mb-8 min-h-[1.5em] tracking-tight antialiased flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mt-8 md:mt-0">
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-black uppercase tracking-[0.4em] opacity-40 mb-1 leading-none">Status_Exec</span>
                <span className="text-gray-400 font-normal italic leading-none">_iam</span>
              </div>
              <span className="text-primary italic underline decoration-primary/20 decoration-8 underline-offset-8 text-xl md:text-3xl">
                <Typewriter
                  words={['Full-Stack Developer', 'AI Innovator', 'Code Artisan', 'Problem Solver']}
                  loop={0}
                  cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={2000}
                />
              </span>
            </div>

            <div className="relative max-w-md mb-12">
              {/* Technical Bracketing */}
              <div className="hidden md:block absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-transparent to-primary/40"></div>

              <p className="text-base md:text-lg text-gray-700 dark:text-gray-400 leading-relaxed font-bold tracking-tight md:pl-2">
                Architecting scalable, real-world solutions through modern full-stack engineering. Currently scaling <span className="text-primary italic font-black">Health Horizon</span>—an AI-driven healthcare ecosystem.
              </p>

              {/* Branded Engineering Logic Stickers */}
              <div className="mt-8 flex flex-wrap items-center gap-4 md:gap-6 opacity-80 dark:opacity-60">
                <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest bg-gray-50 dark:bg-white/5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> FULL_STACK
                </div>
                <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest bg-gray-50 dark:bg-white/5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> AI_READY
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-start w-full md:w-auto">
              <a
                href="#contact"
                className="group w-full sm:w-auto text-center relative px-8 md:px-10 py-4 md:py-5 bg-primary text-white font-black rounded-2xl shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-widest text-[10px] md:text-[11px] antialiased overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                Let's Collaborate
              </a>
              <a
                href="#resume"
                className="w-full sm:w-auto text-center px-8 md:px-10 py-4 md:py-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-black rounded-2xl border-2 border-gray-100 dark:border-gray-700 hover:border-primary transition-all shadow-xl hover:-translate-y-1 active:scale-95 text-[10px] md:text-[11px] uppercase tracking-widest antialiased"
              >
                View Resume
              </a>
            </div>
          </Motion.div>

          {/* Image Side: Technical Multi-Layer Avatar */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] group">
              {/* Layer 1: Outer Engineering Rings */}
              <div className="absolute inset-0 border-[1px] border-primary/20 rounded-[2.5rem] rotate-6 group-hover:rotate-12 transition-transform duration-700"></div>
              <div className="absolute inset-0 border-[1px] border-dashed border-primary/10 rounded-[3rem] -rotate-3 group-hover:-rotate-6 transition-transform duration-700"></div>

              {/* Layer 2: Glowing Backdrop Orbs */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-cyan-500/20 blur-[80px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity animate-pulse"></div>

              {/* Layer 3: Main Image Container (Asymmetric Morph) */}
              <Motion.div
                className="relative w-full h-full bg-white dark:bg-gray-800 rounded-[3rem] overflow-hidden border-[8px] border-white dark:border-[#0f172a] shadow-2xl z-10 transition-all duration-700"
              >
                {/* Digital Scanline Effect */}
                <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-transparent via-primary/5 to-transparent h-1/2 w-full animate-scanline opacity-30"></div>

                <img
                  src="/profile.jpg"
                  alt="Md Sahanujjaman"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 contrast-110"
                />

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-primary m-6 z-30 opacity-60"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-primary m-6 z-30 opacity-60"></div>
              </Motion.div>
            </div>
          </Motion.div>
        </div>

        {/* Scroll Indicator */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Scroll Down</span>
          <div className="w-7 h-12 border-2 border-gray-200 dark:border-gray-800 rounded-full flex justify-center p-2 shadow-sm">
            <Motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-2 bg-primary rounded-full"
            />
          </div>
        </Motion.div>
      </section>

      {/* Main Content Sections: Premium Glassmorphism & Depth */}
      <div className="relative z-10 bg-slate-50/50 dark:bg-transparent backdrop-blur-[100px] transition-colors duration-1000">
        <Suspense fallback={
          <div className="h-screen flex items-center justify-center dark:text-white font-black italic uppercase tracking-widest text-lg text-center px-6">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
            Md. Sahanujjaman Portfolio...
          </div>
        }>
          <SectionWrapper id="about">
            <About />
          </SectionWrapper>

          <SectionWrapper id="skills">
            <Skills />
          </SectionWrapper>

          <SectionWrapper id="projects">
            <Projects />
          </SectionWrapper>

          <SectionWrapper id="story">
            <HealthHorizonJourney />
          </SectionWrapper>

          <SectionWrapper id="experience">
            <Experience />
          </SectionWrapper>

          <SectionWrapper id="achievements">
            <Achievements />
          </SectionWrapper>

          <SectionWrapper id="beyond">
            <CoCurricular />
          </SectionWrapper>

          <SectionWrapper id="github">
            <GithubStats />
          </SectionWrapper>

          <SectionWrapper id="activity">
            <Activity />
          </SectionWrapper>

          <SectionWrapper id="blog">
            <Blog />
          </SectionWrapper>

          <SectionWrapper id="resume">
            <Resume />
          </SectionWrapper>

          <SectionWrapper id="contact">
            <Contact />
          </SectionWrapper>

          <Footer />
        </Suspense>
      </div>
    </div>
  )
}

export default App