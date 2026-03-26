import { motion } from "framer-motion"
import ActivityCard from "../components/ActivityCard"

function Activity() {
    const activities = [
        {
            id: 1,
            category: "Milestone",
            date: "Mar 2025",
            title: "Patent Submitted",
            description: "Legally documented the 'Health Horizon' AI-powered healthcare solution for rural accessibility.",
            image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=500&auto=format&fit=crop",
            delay: 0.1
        },
        {
            id: 2,
            category: "Update",
            date: "Recent",
            title: "Completed Health Horizon",
            description: "Finalized the interactive dashboard and diagnostic interface using React and Framer Motion.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop",
            delay: 0.2
        },
        {
            id: 3,
            category: "Deployment",
            date: "Recent",
            title: "Production Pushed",
            description: "Successfully pushed the full-stack architecture to production with automated CI/CD pipelines.",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500&auto=format&fit=crop",
            delay: 0.3
        }
    ]

    return (
        <div id="activity" className="relative transition-all duration-300">
            {/* Background Orbs */}
            <div className="absolute top-1/2 left-[-10%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>

            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[9px] font-black uppercase tracking-[0.4em] border border-primary/10 mb-6 antialiased">
                        Live Engineering Log
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-1 font-headings uppercase tracking-tighter text-gray-900 dark:text-white leading-[0.8] italic">
                        Updates & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-500 to-teal-500">Activity</span>
                    </h2>
                    <p className="max-w-xl mx-auto text-[10px] md:text-sm text-gray-400 font-bold uppercase tracking-[0.5em] mt-6 leading-relaxed">
                        Real-time insights into my development sprint & milestones.
                    </p>
                </motion.div>

                <div className="space-y-4 max-w-2xl mx-auto">
                    {activities.map((activity) => (
                        <ActivityCard key={activity.id} {...activity} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Activity
