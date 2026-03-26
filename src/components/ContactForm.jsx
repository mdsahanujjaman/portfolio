import { useState } from "react"
import { motion as Motion } from "framer-motion"

function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" })
    const [status, setStatus] = useState("") // "sending", "success", "error"

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus("sending")

        // Simulating a form submission
        setTimeout(() => {
            setStatus("success")
            setFormData({ name: "", email: "", message: "" })
        }, 1500)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    if (status === "success") {
        return (
            <Motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl border border-green-200 dark:border-green-800 text-center"
            >
                <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">Message Sent!</h3>
                <p className="text-green-600 dark:text-green-500">I'll get back to you as soon as possible.</p>
                <button
                    onClick={() => setStatus("")}
                    className="mt-6 text-sm font-semibold text-green-700 dark:text-green-400 underline"
                >
                    Send another message
                </button>
            </Motion.div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 transition-all outline-none"
                    placeholder="John Doe"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 transition-all outline-none"
                    placeholder="john@example.com"
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 transition-all outline-none resize-none"
                    placeholder="Hello, I'd like to talk about..."
                ></textarea>
            </div>
            <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 disabled:opacity-50 transition-all transform hover:scale-[1.02]"
            >
                {status === "sending" ? "Sending..." : "Send Message"}
            </button>
        </form>
    )
}

export default ContactForm
