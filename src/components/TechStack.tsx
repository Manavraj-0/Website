"use client";

import { motion } from "framer-motion";
import { Server } from "lucide-react";
import {
    SiPython,
    SiDocker,
    SiReact,
    SiFlutter,
    SiN8N,
    SiGooglegemini,
    SiOpenai,
    SiFirebase,
    SiTypescript,
    SiGithub,
    SiHuggingface,
    SiAnthropic,
    SiSupabase,
    SiVercel,
    SiStripe
} from "react-icons/si";

export default function TechStack() {
    const techStack = [
        { name: "Python", icon: <SiPython className="w-10 h-10" /> },
        { name: "REST APIs", icon: <Server className="w-10 h-10" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-10 h-10" /> },
        { name: "React", icon: <SiReact className="w-10 h-10" /> },
        { name: "React Native", icon: <SiReact className="w-10 h-10" /> },
        { name: "Flutter", icon: <SiFlutter className="w-10 h-10" /> },
        { name: "Firebase", icon: <SiFirebase className="w-10 h-10" /> },
        { name: "Git & GitHub", icon: <SiGithub className="w-10 h-10" /> },
        { name: "Docker", icon: <SiDocker className="w-10 h-10" /> },
        { name: "Hugging Face", icon: <SiHuggingface className="w-10 h-10" /> },
        {
            name: "SpacetimeDB",
            icon: (
                <svg viewBox="0 0 36 32" className="w-10 h-10" fill="currentColor">
                    <path d="M28.8897 15.317C28.6423 9.53226 29.7222 6.19046 35.1088 0L24.3403 10.9106C26.9177 14.2552 26.6878 19.0995 23.6507 22.1767C20.6137 25.2538 15.8324 25.4867 12.5313 22.8754L10.5369 24.8962L10.5443 24.9024L7.3757 28.1361C9.76812 26.7321 13.4625 27.1349 15.6911 27.3779C16.3084 27.4452 16.8132 27.5003 17.1468 27.5013C20.1997 27.6534 23.3023 26.5483 25.6339 24.186C28.0333 21.7549 29.1186 18.4965 28.8897 15.317Z" />
                    <path d="M17.962 4.49871C18.2956 4.49971 18.8004 4.55476 19.4177 4.62207C21.6463 4.86508 25.3407 5.26792 27.7331 3.86395L24.5646 7.0976L24.572 7.10383L22.5775 9.12462C19.2764 6.51328 14.4951 6.74618 11.4581 9.82332C8.421 12.9005 8.19113 17.7448 10.7685 21.0894L0 32C5.38665 25.8095 6.46655 22.4677 6.21907 16.683C5.99019 13.5035 7.07548 10.2451 9.47494 7.81402C11.8065 5.45167 14.9091 4.34657 17.962 4.49871Z" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M24.8255 16C24.8255 20.0687 21.5701 23.367 17.5544 23.367C13.5387 23.367 10.2833 20.0687 10.2833 16C10.2833 11.9313 13.5387 8.63292 17.5544 8.63292C21.5701 8.63292 24.8255 11.9313 24.8255 16ZM17.5544 21.6C20.6392 21.6 23.1399 19.0928 23.1399 16C23.1399 12.9072 20.6392 10.4 17.5544 10.4C14.4696 10.4 11.9689 12.9072 11.9689 16C11.9689 19.0928 14.4696 21.6 17.5544 21.6Z" />
                </svg>
            )
        },
        { name: "Supabase", icon: <SiSupabase className="w-10 h-10" /> },
        { name: "Vercel", icon: <SiVercel className="w-10 h-10" /> },
        { name: "Stripe", icon: <SiStripe className="w-10 h-10" /> },
        { name: "n8n", icon: <SiN8N className="w-10 h-10" /> },
        { name: "Gemini APIs", icon: <SiGooglegemini className="w-10 h-10" /> },
        { name: "Anthropic Claude", icon: <SiAnthropic className="w-10 h-10" /> },
        { name: "OpenAI", icon: <SiOpenai className="w-10 h-10" /> }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 20 } }
    };

    return (
        <section className="w-full py-24 bg-white relative">
            {/* Bottom gradient: bridges into the dark CTA section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-100 to-transparent pointer-events-none" aria-hidden="true" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight drop-shadow-sm"
                    >
                        Modern Technology Stack
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        className="text-slate-600 text-lg max-w-2xl mx-auto drop-shadow-sm"
                    >
                        We use industry-leading tools and frameworks to ensure your digital presence is robust, scalable, and secure.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center"
                >
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="bg-white border border-slate-200 group flex flex-col items-center justify-center gap-4 cursor-pointer p-6 rounded-2xl hover:bg-slate-50 transition-all duration-300 w-full shadow-sm hover:shadow-xl hover:border-slate-300"
                        >
                            <div className="text-slate-600 group-hover:text-blue-600 transition-colors duration-300 flex items-center justify-center drop-shadow-sm">
                                {tech.icon}
                            </div>
                            <span className="text-sm font-semibold text-slate-600 transition-colors duration-300 group-hover:text-slate-900 text-center drop-shadow-sm">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}