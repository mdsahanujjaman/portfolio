import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    FiLock, FiUnlock, FiPlus, FiTrash2, FiX, FiSave, FiEdit2,
    FiLogOut, FiCheckCircle, FiRefreshCw, FiUser, FiCode,
    FiBriefcase, FiAward, FiFolder, FiFileText, FiBook, FiList, FiTerminal
} from "react-icons/fi"
import { KEYS, DEFAULTS } from "../data/portfolioData"
import { writePortfolioKey } from "../hooks/usePortfolioData"

/* ── helpers ── */
const readKey = (key, def) => { try { const s = localStorage.getItem(key); return s ? JSON.parse(s) : def } catch { return def } }
const DEF = DEFAULTS

/* ── Toast ── */
function Toast({ msg, onDone }) {
    useEffect(() => { const t = setTimeout(onDone, 2200); return () => clearTimeout(t) }, [onDone])
    return (
        <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 60, opacity: 0 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[999] flex items-center gap-3 px-6 py-3 bg-green-500 text-white rounded-2xl shadow-2xl font-black text-sm uppercase tracking-widest">
            <FiCheckCircle /> {msg}
        </motion.div>
    )
}

/* ── Modal ── */
function Modal({ title, onClose, children, size = "max-w-2xl" }) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={e => e.target === e.currentTarget && onClose()}>
            <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                className={`w-full ${size} max-h-[90vh] overflow-y-auto bg-[#0d1520] border border-gray-700/60 rounded-3xl shadow-2xl`}>
                <div className="flex items-center justify-between px-8 py-5 border-b border-gray-800 sticky top-0 bg-[#0d1520] z-10">
                    <h3 className="text-base font-black text-white uppercase tracking-tight">{title}</h3>
                    <button onClick={onClose} className="w-8 h-8 rounded-xl bg-gray-800 hover:bg-red-500/20 hover:text-red-400 text-gray-400 flex items-center justify-center transition-all"><FiX /></button>
                </div>
                <div className="p-8">{children}</div>
            </motion.div>
        </motion.div>
    )
}

/* ── Field ── */
const F = ({ label, textarea, type = "text", ...p }) => (
    <div className="space-y-1.5">
        <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest">{label}</label>
        {textarea
            ? <textarea rows={3} {...p} className="w-full px-3 py-2.5 rounded-xl bg-gray-800/60 border border-gray-700/60 text-white text-sm outline-none focus:ring-2 focus:ring-green-500/40 resize-none placeholder:text-gray-600" />
            : <input type={type} {...p} className="w-full px-3 py-2.5 rounded-xl bg-gray-800/60 border border-gray-700/60 text-white text-sm outline-none focus:ring-2 focus:ring-green-500/40 placeholder:text-gray-600" />
        }
    </div>
)

/* ── File Field ── */
const FileField = ({ label, onChange, accept = ".pdf,image/*" }) => {
    const handleFile = (e) => {
        const file = e.target.files[0]
        if (!file) return
        const reader = new FileReader()
        reader.onload = (rev) => onChange(rev.target.result)
        reader.readAsDataURL(file)
    }
    return (
        <div className="space-y-1.5">
            <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest">{label}</label>
            <div className="relative group">
                <input type="file" accept={accept} onChange={handleFile}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                <div className="w-full px-3 py-2.5 rounded-xl bg-gray-800/60 border border-gray-700/60 text-gray-400 text-xs flex items-center gap-2 group-hover:border-green-500/50 transition-all">
                    <FiPlus size={14} className="text-green-500" />
                    <span>Click to upload file (PDF/Image)</span>
                </div>
            </div>
        </div>
    )
}

/* ── Save Btn ── */
const SaveBtn = ({ onClick, label = "Save Changes" }) => (
    <button onClick={onClick} className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-500 text-white font-black uppercase tracking-widest text-xs rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-500/20">
        <FiSave /> {label}
    </button>
)

const ResetBtn = ({ onClick }) => (
    <button onClick={onClick} className="flex items-center justify-center gap-2 w-full py-3 bg-gray-800 hover:bg-gray-700 text-gray-400 font-black uppercase tracking-widest text-xs rounded-2xl transition-all mt-2">
        <FiRefreshCw size={12} /> Reset to Default
    </button>
)

/* ═══════════════════════
   EDITOR: ABOUT
═══════════════════════ */
function AboutEditor({ notify }) {
    const [d, setD] = useState(() => readKey(KEYS.ABOUT, DEF.about))
    const set = (k, v) => setD(p => ({ ...p, [k]: v }))
    const setCard = (i, k, v) => setD(p => { const c = [...(p.cards || DEF.about.cards)]; c[i] = { ...c[i], [k]: v }; return { ...p, cards: c } })
    const save = () => { writePortfolioKey(KEYS.ABOUT, d); notify("About saved!") }
    const reset = () => { writePortfolioKey(KEYS.ABOUT, DEF.about); setD(DEF.about); notify("About reset!") }

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
                <F label="Full Name" value={d.name} onChange={e => set("name", e.target.value)} />
                <F label="CGPA" value={d.cgpa} onChange={e => set("cgpa", e.target.value)} />
                <F label="University" value={d.university} onChange={e => set("university", e.target.value)} />
                <F label="Degree" value={d.degree} onChange={e => set("degree", e.target.value)} />
                <F label="Tagline (subtitle)" value={d.tagline} onChange={e => set("tagline", e.target.value)} />
                <F label="Primary Role" value={d.role} onChange={e => set("role", e.target.value)} />
                <F label="Role (italic)" value={d.roleItalic} onChange={e => set("roleItalic", e.target.value)} />
                <F label="Years Experience" value={d.yearsExp} onChange={e => set("yearsExp", e.target.value)} />
                <F label="Patents" value={d.patents} onChange={e => set("patents", e.target.value)} />
                <div className="grid grid-cols-2 gap-3">
                    <F label="CV Link / PDF Path" value={d.cvLink} onChange={e => set("cvLink", e.target.value)} />
                    <FileField label="Or Upload New CV (PDF)" accept=".pdf" onChange={val => set("cvLink", val)} />
                </div>
            </div>
            <F label="Bio Paragraph" textarea value={d.bio} onChange={e => set("bio", e.target.value)} />
            <div>
                <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-3">Expertise Cards</p>
                <div className="space-y-3">
                    {(d.cards || DEF.about.cards).map((c, i) => (
                        <div key={i} className="grid grid-cols-2 gap-3 p-4 bg-gray-800/30 rounded-2xl">
                            <F label={`Card ${i + 1} Title`} value={c.title} onChange={e => setCard(i, "title", e.target.value)} />
                            <F label={`Card ${i + 1} Description`} value={c.desc} onChange={e => setCard(i, "desc", e.target.value)} />
                        </div>
                    ))}
                </div>
            </div>
            <SaveBtn onClick={save} />
            <ResetBtn onClick={reset} />
        </div>
    )
}

/* ═══════════════════════
   EDITOR: SKILLS
═══════════════════════ */
function SkillsEditor({ notify }) {
    const [cats, setCats] = useState(() => readKey(KEYS.SKILLS, DEF.skills))
    const setCatField = (ci, k, v) => setCats(p => { const n = [...p]; n[ci] = { ...n[ci], [k]: v }; return n })
    const setSkillName = (ci, si, v) => setCats(p => {
        const n = [...p]; const skills = [...(n[ci].skills || [])]; skills[si] = { ...skills[si], name: v }; n[ci] = { ...n[ci], skills }; return n
    })
    const addSkill = (ci) => setCats(p => { const n = [...p]; const skills = [...(n[ci].skills || []), { name: "New Skill" }]; n[ci] = { ...n[ci], skills }; return n })
    const removeSkill = (ci, si) => setCats(p => { const n = [...p]; const skills = (n[ci].skills || []).filter((_, i) => i !== si); n[ci] = { ...n[ci], skills }; return n })
    const addCat = () => setCats(p => [...p, { title: "New Category", color: "from-gray-400 to-gray-600", skills: [] }])
    const removeCat = (ci) => setCats(p => p.filter((_, i) => i !== ci))
    const save = () => { writePortfolioKey(KEYS.SKILLS, cats); notify("Skills saved!") }
    const reset = () => { writePortfolioKey(KEYS.SKILLS, DEF.skills); setCats(DEF.skills); notify("Skills reset!") }

    return (
        <div className="space-y-6">
            {cats.map((cat, ci) => (
                <div key={ci} className="p-5 bg-gray-800/30 rounded-2xl space-y-4 border border-gray-700/40">
                    <div className="flex items-center justify-between">
                        <p className="text-[9px] font-black text-green-400 uppercase tracking-widest">Category {ci + 1}</p>
                        <button onClick={() => removeCat(ci)} className="w-7 h-7 rounded-lg bg-red-500/10 hover:bg-red-500/30 text-red-400 flex items-center justify-center transition-all"><FiTrash2 size={12} /></button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <F label="Category Name" value={cat.title} onChange={e => setCatField(ci, "title", e.target.value)} />
                        <F label="Gradient (e.g. from-yellow-400 to-orange-500)" value={cat.color} onChange={e => setCatField(ci, "color", e.target.value)} />
                    </div>
                    <div>
                        <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-2">Skills</p>
                        <div className="flex flex-wrap gap-2">
                            {(cat.skills || []).map((sk, si) => (
                                <div key={si} className="flex items-center gap-1 bg-gray-800 rounded-xl px-3 py-1.5">
                                    <input value={typeof sk === "string" ? sk : sk.name} onChange={e => setSkillName(ci, si, e.target.value)}
                                        className="bg-transparent text-white text-xs font-bold w-24 outline-none" />
                                    <button onClick={() => removeSkill(ci, si)} className="text-red-400 hover:text-red-300 transition-colors"><FiX size={10} /></button>
                                </div>
                            ))}
                            <button onClick={() => addSkill(ci)} className="flex items-center gap-1 px-3 py-1.5 bg-green-500/10 hover:bg-green-500/20 text-green-400 rounded-xl text-xs font-black transition-all">
                                <FiPlus size={10} /> Add
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            <button onClick={addCat} className="flex items-center gap-2 w-full py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-400 rounded-2xl text-xs font-black uppercase tracking-widest justify-center transition-all">
                <FiPlus /> Add Category
            </button>
            <SaveBtn onClick={save} />
            <ResetBtn onClick={reset} />
        </div>
    )
}

/* ═══════════════════════
   EDITOR: EXPERIENCE
═══════════════════════ */
function ExperienceEditor({ notify }) {
    const [items, setItems] = useState(() => readKey(KEYS.EXPERIENCE, DEF.experience))
    const setField = (idx, k, v) => setItems(p => { const n = [...p]; n[idx] = { ...n[idx], [k]: v }; return n })
    const add = () => setItems(p => [...p, { id: Date.now(), type: "Work", title: "", institution: "", date: "", description: "", score: "", subjects: "", gains: "" }])
    const remove = (idx) => setItems(p => p.filter((_, i) => i !== idx))
    const save = () => { writePortfolioKey(KEYS.EXPERIENCE, items); notify("Experience saved!") }
    const reset = () => { writePortfolioKey(KEYS.EXPERIENCE, DEF.experience); setItems(DEF.experience); notify("Experience reset!") }

    return (
        <div className="space-y-5">
            {items.map((item, idx) => (
                <div key={item.id || idx} className="p-5 bg-gray-800/30 rounded-2xl space-y-3 border border-gray-700/40">
                    <div className="flex items-center justify-between mb-1">
                        <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest">Entry {idx + 1}</p>
                        <button onClick={() => remove(idx)} className="w-7 h-7 rounded-lg bg-red-500/10 hover:bg-red-500/30 text-red-400 flex items-center justify-center transition-all"><FiTrash2 size={12} /></button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <F label="Type (Work / Academic)" value={item.type} onChange={e => setField(idx, "type", e.target.value)} />
                        <F label="Date / Period" value={item.date} onChange={e => setField(idx, "date", e.target.value)} />
                        <F label="Title / Role" value={item.title} onChange={e => setField(idx, "title", e.target.value)} />
                        <F label="Institution / Company" value={item.institution} onChange={e => setField(idx, "institution", e.target.value)} />
                        <F label="Score / CGPA / Status" value={item.score} onChange={e => setField(idx, "score", e.target.value)} />
                        <F label="Subjects / Stack" value={item.subjects} onChange={e => setField(idx, "subjects", e.target.value)} />
                    </div>
                    <F label="Key Gains / Competency" value={item.gains} onChange={e => setField(idx, "gains", e.target.value)} />
                    <F label="Description (for Work type)" textarea value={item.description} onChange={e => setField(idx, "description", e.target.value)} />
                </div>
            ))}
            <button onClick={add} className="flex items-center gap-2 w-full py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-400 rounded-2xl text-xs font-black uppercase tracking-widest justify-center transition-all">
                <FiPlus /> Add Entry
            </button>
            <SaveBtn onClick={save} />
            <ResetBtn onClick={reset} />
        </div>
    )
}

/* ═══════════════════════
   EDITOR: ACHIEVEMENTS / CERTS
═══════════════════════ */
function AchievementsEditor({ notify }) {
    const [items, setItems] = useState(() => readKey(KEYS.ACHIEVEMENTS, DEF.achievements))
    const setField = (idx, k, v) => setItems(p => { const n = [...p]; n[idx] = { ...n[idx], [k]: v }; return n })
    const add = () => setItems(p => [...p, { id: Date.now(), title: "", subtitle: "", category: "", date: "", color: "from-blue-600 to-indigo-500", link: "" }])
    const remove = (idx) => setItems(p => p.filter((_, i) => i !== idx))
    const save = () => { writePortfolioKey(KEYS.ACHIEVEMENTS, items); notify("Achievements saved!") }
    const reset = () => { writePortfolioKey(KEYS.ACHIEVEMENTS, DEF.achievements); setItems(DEF.achievements); notify("Achievements reset!") }

    return (
        <div className="space-y-5">
            {items.map((item, idx) => (
                <div key={item.id || idx} className="p-5 bg-gray-800/30 rounded-2xl space-y-3 border border-gray-700/40">
                    <div className="flex items-center justify-between mb-1">
                        <p className="text-[9px] font-black text-yellow-400 uppercase tracking-widest">Certificate / Achievement {idx + 1}</p>
                        <button onClick={() => remove(idx)} className="w-7 h-7 rounded-lg bg-red-500/10 hover:bg-red-500/30 text-red-400 flex items-center justify-center transition-all"><FiTrash2 size={12} /></button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <F label="Title" value={item.title} onChange={e => setField(idx, "title", e.target.value)} />
                        <F label="Category / Platform" value={item.category} onChange={e => setField(idx, "category", e.target.value)} />
                        <F label="Date" value={item.date} onChange={e => setField(idx, "date", e.target.value)} />
                        <F label="Gradient Color (e.g. from-blue-600 to-indigo-500)" value={item.color} onChange={e => setField(idx, "color", e.target.value)} />
                        <F label="Certificate/PDF Link (/certificates/...)" value={item.link} onChange={e => setField(idx, "link", e.target.value)} />
                        <FileField label="Or Upload PDF" accept=".pdf" onChange={val => setField(idx, "link", val)} />
                    </div>
                    <F label="Description / Subtitle" textarea value={item.subtitle} onChange={e => setField(idx, "subtitle", e.target.value)} />
                </div>
            ))}
            <button onClick={add} className="flex items-center gap-2 w-full py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-400 rounded-2xl text-xs font-black uppercase tracking-widest justify-center transition-all">
                <FiPlus /> Add Certificate / Achievement
            </button>
            <SaveBtn onClick={save} />
            <ResetBtn onClick={reset} />
        </div>
    )
}

/* ═══════════════════════
   EDITOR: PROJECTS
═══════════════════════ */
function ProjectsEditor({ notify }) {
    const [items, setItems] = useState(() => readKey(KEYS.PROJECTS, DEF.projects))
    const setField = (idx, k, v) => setItems(p => { const n = [...p]; n[idx] = { ...n[idx], [k]: v }; return n })
    const setTech = (idx, v) => setField(idx, "tech", v.split(",").map(s => s.trim()).filter(Boolean))
    const add = () => setItems(p => [...p, { id: Date.now(), title: "", subtitle: "", description: "", date: "", tech: [], live: "#", github: "", image: "" }])
    const remove = (idx) => setItems(p => p.filter((_, i) => i !== idx))
    const save = () => { writePortfolioKey(KEYS.PROJECTS, items); notify("Projects saved!") }
    const reset = () => { writePortfolioKey(KEYS.PROJECTS, DEF.projects); setItems(DEF.projects); notify("Projects reset!") }

    return (
        <div className="space-y-5">
            {items.map((item, idx) => (
                <div key={item.id || idx} className="p-5 bg-gray-800/30 rounded-2xl space-y-3 border border-gray-700/40">
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            {item.image && <img src={item.image} className="w-10 h-10 rounded-xl object-cover" alt="" />}
                            <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest">Project {idx + 1}{item.title ? ` — ${item.title}` : ""}</p>
                        </div>
                        <button onClick={() => remove(idx)} className="w-7 h-7 rounded-lg bg-red-500/10 hover:bg-red-500/30 text-red-400 flex items-center justify-center transition-all"><FiTrash2 size={12} /></button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <F label="Title" value={item.title} onChange={e => setField(idx, "title", e.target.value)} />
                        <F label="Subtitle" value={item.subtitle} onChange={e => setField(idx, "subtitle", e.target.value)} />
                        <F label="Date / Period" value={item.date} onChange={e => setField(idx, "date", e.target.value)} />
                        <F label="Tech (comma separated)" value={Array.isArray(item.tech) ? item.tech.join(", ") : item.tech} onChange={e => setTech(idx, e.target.value)} />
                        <F label="Live URL" value={item.live} onChange={e => setField(idx, "live", e.target.value)} />
                        <F label="GitHub URL" value={item.github} onChange={e => setField(idx, "github", e.target.value)} />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <F label="Image URL" value={item.image} onChange={e => setField(idx, "image", e.target.value)} />
                        <FileField label="Or Upload Image" accept="image/*" onChange={val => setField(idx, "image", val)} />
                    </div>
                    <F label="Description" textarea value={item.description} onChange={e => setField(idx, "description", e.target.value)} />
                </div>
            ))}
            <button onClick={add} className="flex items-center gap-2 w-full py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-400 rounded-2xl text-xs font-black uppercase tracking-widest justify-center transition-all">
                <FiPlus /> Add Project
            </button>
            <SaveBtn onClick={save} />
            <ResetBtn onClick={reset} />
        </div>
    )
}

/* ═══════════════════════
   EDITOR: BLOGS
═══════════════════════ */
function BlogsEditor({ notify }) {
    const [items, setItems] = useState(() => readKey(KEYS.BLOGS, DEF.blogs))
    const setField = (idx, k, v) => setItems(p => { const n = [...p]; n[idx] = { ...n[idx], [k]: v }; return n })
    const setTags = (idx, v) => setField(idx, "tags", v.split(",").map(s => s.trim()).filter(Boolean))
    const add = () => setItems(p => [...p, { id: Date.now(), title: "", excerpt: "", date: "", readTime: "", tags: [], isTrending: false }])
    const remove = (idx) => setItems(p => p.filter((_, i) => i !== idx))
    const save = () => { writePortfolioKey(KEYS.BLOGS, items); notify("Blog saved!") }
    const reset = () => { writePortfolioKey(KEYS.BLOGS, DEF.blogs); setItems(DEF.blogs); notify("Blog reset!") }

    return (
        <div className="space-y-5">
            {items.map((item, idx) => (
                <div key={item.id || idx} className="p-5 bg-gray-800/30 rounded-2xl space-y-3 border border-gray-700/40">
                    <div className="flex items-center justify-between mb-1">
                        <p className="text-[9px] font-black text-purple-400 uppercase tracking-widest">Article {idx + 1}{item.title ? ` — ${item.title}` : ""}</p>
                        <button onClick={() => remove(idx)} className="w-7 h-7 rounded-lg bg-red-500/10 hover:bg-red-500/30 text-red-400 flex items-center justify-center transition-all"><FiTrash2 size={12} /></button>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <F label="Date" value={item.date} onChange={e => setField(idx, "date", e.target.value)} />
                        <F label="Read Time" value={item.readTime} onChange={e => setField(idx, "readTime", e.target.value)} />
                        <F label="Tags (comma separated)" value={Array.isArray(item.tags) ? item.tags.join(", ") : item.tags} onChange={e => setTags(idx, e.target.value)} />
                    </div>
                    <F label="Title" value={item.title} onChange={e => setField(idx, "title", e.target.value)} />
                    <F label="Excerpt" textarea value={item.excerpt} onChange={e => setField(idx, "excerpt", e.target.value)} />
                    <label className="flex items-center gap-3 cursor-pointer">
                        <div onClick={() => setField(idx, "isTrending", !item.isTrending)}
                            className={`w-10 h-5 rounded-full transition-all duration-300 flex items-center px-0.5 ${item.isTrending ? "bg-green-500" : "bg-gray-700"}`}>
                            <div className={`w-4 h-4 rounded-full bg-white shadow transition-transform duration-300 ${item.isTrending ? "translate-x-5" : "translate-x-0"}`} />
                        </div>
                        <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Mark as Trending 🔥</span>
                    </label>
                </div>
            ))}
            <button onClick={add} className="flex items-center gap-2 w-full py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-400 rounded-2xl text-xs font-black uppercase tracking-widest justify-center transition-all">
                <FiPlus /> Add Article
            </button>
            <SaveBtn onClick={save} />
            <ResetBtn onClick={reset} />
        </div>
    )
}

/* ═══════════════════════
   TABS CONFIG
═══════════════════════ */
const TABS = [
    { id: "about", label: "About", icon: <FiUser />, color: "text-green-400", Editor: AboutEditor },
    { id: "skills", label: "Skills", icon: <FiCode />, color: "text-cyan-400", Editor: SkillsEditor },
    { id: "experience", label: "Experience", icon: <FiBriefcase />, color: "text-blue-400", Editor: ExperienceEditor },
    { id: "achievements", label: "Certs & Awards", icon: <FiAward />, color: "text-yellow-400", Editor: AchievementsEditor },
    { id: "projects", label: "Projects", icon: <FiFolder />, color: "text-purple-400", Editor: ProjectsEditor },
    { id: "blogs", label: "Blog", icon: <FiBook />, color: "text-pink-400", Editor: BlogsEditor },
    { id: "resume", label: "Resume Diff", icon: <FiTerminal />, color: "text-orange-400", Editor: ResumeEditor },
]

/* ═══════════════════════
   MAIN ADMIN
═══════════════════════ */
/* ── EDITOR: RESUME ── */
function ResumeEditor({ notify }) {
    const [d, setD] = useState(() => readKey(KEYS.ABOUT, DEF.about))
    const [diff, setDiff] = useState(d.resumeDiff || DEF.about.resumeDiff || [])
    const setLine = (idx, field, val) => {
        const next = [...diff]; next[idx] = { ...next[idx], [field]: val }; setDiff(next)
    }
    const save = () => { writePortfolioKey(KEYS.ABOUT, { ...d, resumeDiff: diff }); notify("Resume Diff saved!") }
    const reset = () => { 
        const original = DEF.about.resumeDiff;
        setDiff(original);
        writePortfolioKey(KEYS.ABOUT, { ...d, resumeDiff: original });
        notify("Resume Diff reset!") 
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest italic">Terminal Diff Content</p>
                <button onClick={() => setDiff([...diff, { line: "00", content: "", type: "plain" }])}
                    className="px-3 py-1.5 rounded-lg bg-green-500/10 text-green-500 text-[9px] font-black uppercase tracking-widest hover:bg-green-500/20 transition-all flex items-center gap-2">
                    <FiPlus /> Add Line
                </button>
            </div>
            {diff.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-end bg-gray-900/40 p-3 rounded-2xl border border-gray-800/40 group">
                    <div className="w-12">
                        <F label="Line" value={item.line} onChange={e => setLine(idx, "line", e.target.value)} />
                    </div>
                    <div className="flex-1">
                        <F label="Content" value={item.content} onChange={e => setLine(idx, "content", e.target.value)} />
                    </div>
                    <div className="w-24">
                        <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Type</label>
                        <select value={item.type} onChange={e => setLine(idx, "type", e.target.value)}
                            className="w-full mt-1.5 px-3 py-2.5 rounded-xl bg-gray-800/60 border border-gray-700/60 text-white text-xs outline-none focus:ring-2 focus:ring-green-500/40">
                            <option value="plain">Plain</option>
                            <option value="add">Add (+)</option>
                            <option value="del">Del (-)</option>
                            <option value="info">Info (@@)</option>
                        </select>
                    </div>
                    <button onClick={() => setDiff(diff.filter((_, i) => i !== idx))}
                        className="mb-1 p-2.5 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500/20 opacity-0 group-hover:opacity-100 transition-all">
                        <FiTrash2 size={14} />
                    </button>
                </div>
            ))}
            <SaveBtn onClick={save} />
            <ResetBtn onClick={reset} />
        </div>
    )
}

function Admin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [password, setPassword] = useState("")
    const [activeTab, setActiveTab] = useState("about")
    const [toast, setToast] = useState(null)
    const notify = (msg) => setToast(msg)

    const handleLogin = (e) => {
        e.preventDefault()
        if (password === "admin123") setIsLoggedIn(true)
        else alert("Incorrect Key")
    }

    if (!isLoggedIn) return (
        <div id="admin" className="min-h-screen flex items-center justify-center bg-[#060b12] px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-sm p-8 bg-[#0d1520] border border-gray-800 rounded-3xl shadow-2xl">
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 text-2xl mb-6 mx-auto">
                    <FiLock />
                </div>
                <h2 className="text-xl font-black text-white text-center uppercase tracking-tight mb-2">Developer Access</h2>
                <p className="text-[10px] text-gray-500 text-center uppercase tracking-widest font-bold mb-8">Admin Control Panel</p>
                <form onSubmit={handleLogin} className="space-y-4">
                    <input type="password" placeholder="Enter Admin Key" value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-2xl bg-gray-800/60 border border-gray-700 text-white outline-none focus:ring-2 focus:ring-green-500/50 text-sm placeholder:text-gray-600 transition-all" />
                    <button className="w-full py-3.5 bg-green-600 hover:bg-green-500 text-white font-black rounded-2xl uppercase tracking-widest text-xs transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-500/20">
                        Unlock Terminal
                    </button>
                </form>
            </motion.div>
        </div>
    )

    const ActiveEditor = TABS.find(t => t.id === activeTab)?.Editor

    return (
        <div id="admin" className="min-h-screen bg-[#060b12] px-4 py-12">
            <div className="max-w-5xl mx-auto space-y-8">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[9px] font-black uppercase tracking-widest mb-3">
                            <FiUnlock size={9} /> Full Control Panel
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                            Admin <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-primary">Dashboard</span>
                        </h1>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-2">Edit every section of your portfolio live</p>
                    </div>
                    <button onClick={() => setIsLoggedIn(false)}
                        className="flex items-center gap-2 px-5 py-2.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 rounded-2xl font-black text-xs uppercase tracking-widest transition-all">
                        <FiLogOut /> Logout
                    </button>
                </div>

                {/* Tab Bar */}
                <div className="flex flex-wrap gap-2">
                    {TABS.map(tab => (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-200 ${activeTab === tab.id
                                ? "bg-white/10 text-white border border-white/20"
                                : "bg-gray-800/40 text-gray-500 hover:bg-gray-800 hover:text-gray-300 border border-transparent"}`}>
                            <span className={activeTab === tab.id ? tab.color : ""}>{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Editor Panel */}
                <AnimatePresence mode="wait">
                    <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                        className="bg-[#0d1520] border border-gray-800/60 rounded-3xl p-8">
                        <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <FiList size={10} />
                            Editing: {TABS.find(t => t.id === activeTab)?.label} — Changes save to localStorage and reflect instantly on the site
                        </p>
                        {ActiveEditor && <ActiveEditor notify={notify} />}
                    </motion.div>
                </AnimatePresence>

            </div>

            <AnimatePresence>
                {toast && <Toast msg={toast} onDone={() => setToast(null)} />}
            </AnimatePresence>
        </div>
    )
}

export default Admin
