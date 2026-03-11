"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";
import React from "react";

type ThemeId = "blue" | "purple" | "cyan" | "rose";

interface Project {
    title: string;
    category: string;
    description: string;
    themeId: ThemeId;
}

const projects: Project[] = [
    {
        title: "Krypton Web3 Platform",
        category: "Web Development",
        description: "A high-conversion marketing site built with Next.js and Tailwind CSS featuring a complete unified design system and complex 3D integration.",
        themeId: "blue"
    },
    {
        title: "Aether AI Assistant",
        category: "AI Integration",
        description: "An intelligent customer support bot capable of handling natural language queries 24/7 with zero hallucinations and real-time context retrieval.",
        themeId: "purple"
    },
    {
        title: "Nexus ERP System",
        category: "Business Automation",
        description: "A custom internal tool workflow processing data between CRM and billing systems automatically, saving over 40 hours a week in manual entry.",
        themeId: "cyan"
    },
    {
        title: "Onyx Analytics",
        category: "Data Visualization",
        description: "A comprehensive dashboard rendering millions of real-time server events into actionable, high-performance webGL charts.",
        themeId: "rose"
    }
];

export default function Portfolio() {
    const container = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    return (
        <section
            ref={container}
            className="w-full relative z-20 bg-[#fafafa] overflow-hidden"
            id="portfolio"
        >
            {/* ── Blueprint Grid (Light Theme) ── */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <svg className="absolute inset-0 w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="light-blueprint-small-portfolio" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" className="stroke-slate-200/50" strokeWidth="0.5" />
                        </pattern>
                        <pattern id="light-blueprint-large-portfolio" width="100" height="100" patternUnits="userSpaceOnUse">
                            <rect width="100" height="100" fill="url(#light-blueprint-small-portfolio)" />
                            <path d="M 100 0 L 0 0 0 100" fill="none" className="stroke-slate-200" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#light-blueprint-large-portfolio)" />
                </svg>
            </div>

            {/* Left Interactive Decoration (Portfolio) */}
            <div className="absolute top-[10%] left-[-20px] w-48 h-48 opacity-30 hover:opacity-80 transition-all duration-700 hover:translate-x-[30px] z-0 hidden lg:block group">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-slate-400 group-hover:text-blue-500 transition-colors duration-700 animate-float-3">
                    <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="1" className="group-hover:rotate-90 origin-center transition-transform duration-1000" />
                    <rect x="35" y="35" width="30" height="30" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="group-hover:-rotate-90 origin-center transition-transform duration-1000 delay-100" />
                    <circle cx="50" cy="50" r="5" fill="currentColor" />
                </svg>
            </div>

            {/* Right Interactive Decoration (Portfolio) */}
            <div className="absolute top-[40%] right-[-60px] w-64 h-64 opacity-20 hover:opacity-70 transition-all duration-700 hover:-translate-x-[50px] z-0 hidden lg:block group">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-slate-400 group-hover:text-fuchsia-500 transition-colors duration-700 animate-float-1">
                    <path d="M 50 10 L 90 90 L 10 90 Z" stroke="currentColor" strokeWidth="1" className="group-hover:rotate-12 origin-center transition-transform duration-[1200ms]" />
                    <path d="M 50 30 L 70 80 L 30 80 Z" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="group-hover:-rotate-12 origin-center transition-transform duration-1000" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 pt-32 pb-8 relative z-10">
                <div className="mb-8 md:mb-0">
                    <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight font-[family-name:var(--font-outfit)] drop-shadow-md">Selected Work</h2>
                    <p className="text-slate-500 text-lg md:text-xl mt-6 max-w-2xl leading-relaxed drop-shadow-md">
                        A curated deck of digital products, scalable architectures, and intelligent systems we've engineered.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 pb-32">
                {projects.map((project, i) => {
                    const targetScale = 1 - ((projects.length - i) * 0.05);

                    return (
                        <Card
                            key={i}
                            i={i}
                            {...project}
                            progress={scrollYProgress}
                            range={[i * (1 / projects.length), 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
        </section>
    );
}

interface CardProps extends Project {
    i: number;
    progress: MotionValue<number>;
    range: number[];
    targetScale: number;
}

const Card = ({ i, title, description, category, themeId, progress, range, targetScale }: CardProps) => {
    const container = useRef<HTMLDivElement>(null);

    // Independent scroll progress just for this card's own bounding box
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    // Parallax entering the screen
    const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

    // Scale for shrinking effect when scrolled past
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-[550px] md:h-[650px] w-full mb-12 md:mb-16 flex justify-center sticky top-[10vh] md:top-[7vh]">
            <motion.div
                style={{
                    scale,
                    top: `calc(5vh + ${i * 25}px)`
                }}
                className="flex flex-col md:flex-row w-full h-full border border-slate-200/60 bg-white/90 backdrop-blur-sm rounded-[2rem] overflow-hidden shadow-[0_45px_100px_-20px_rgba(0,0,0,0.12)] origin-top relative group will-change-transform"
            >
                {/* Text Content */}
                <div className="w-full md:w-[45%] p-8 md:p-14 flex flex-col justify-center h-full order-2 md:order-1 relative z-10 bg-white/60">
                    <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-6 flex items-center gap-3">
                        <div className="w-6 h-[1px] bg-slate-300"></div>
                        {category}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 font-[family-name:var(--font-outfit)] leading-[1.1] tracking-tight drop-shadow-md">{title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-10 drop-shadow-md">{description}</p>
                    <div>
                        <button className="flex items-center gap-3 text-slate-900 font-bold hover:text-blue-600 transition-colors group/btn drop-shadow-md">
                            Explore Case Study
                            <span className="material-symbols-outlined text-sm transform group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>
                </div>

                {/* Abstract Glassmorphic Visuals */}
                <div className="w-full md:w-[55%] h-64 md:h-full relative overflow-hidden order-1 md:order-2 border-l border-slate-100/50 bg-slate-50">
                    <AbstractArt themeId={themeId} scale={imageScale} />
                </div>
            </motion.div>
        </div>
    );
};

const AbstractArt = ({ themeId, scale }: { themeId: ThemeId, scale: MotionValue<number> }) => {
    // Parallax scaling disabled to dramatically improve scroll performance on glassmorphic elements
    return (
        <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
            {themeId === "blue" && (
                <React.Fragment>
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent blur-xl" />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent blur-xl" />
                    <div className="w-48 h-64 md:w-64 md:h-80 bg-white/80 backdrop-blur-md border border-white/80 rounded-3xl shadow-2xl transform -rotate-6 absolute transition-transform duration-700 group-hover:-translate-y-4 group-hover:rotate-[-8deg] will-change-transform" />
                    <div className="w-48 h-64 md:w-64 md:h-80 bg-blue-500/10 backdrop-blur-md border border-white/60 rounded-3xl shadow-xl transform rotate-6 absolute ml-16 md:ml-32 mt-12 transition-transform duration-700 group-hover:-translate-y-2 group-hover:rotate-[8deg] will-change-transform" />
                </React.Fragment>
            )}
            {themeId === "purple" && (
                <React.Fragment>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-400/10 via-transparent to-transparent blur-xl" />
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 blur-xl absolute transition-transform duration-700 group-hover:scale-110 will-change-transform" />
                    <div className="w-32 h-32 md:w-48 md:h-48 bg-white/80 backdrop-blur-md border border-white/90 rounded-full shadow-2xl relative z-10 transform -translate-y-8 -translate-x-8 transition-transform duration-700 group-hover:-translate-y-12 will-change-transform" />
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-white/60 backdrop-blur-md border border-white/60 rounded-full shadow-xl absolute z-20 transform translate-y-12 translate-x-12 transition-transform duration-700 group-hover:translate-y-16 will-change-transform" />
                </React.Fragment>
            )}
            {themeId === "cyan" && (
                <React.Fragment>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent blur-xl" />
                    <div className="w-full h-full flex flex-col gap-4 p-12 md:p-24 absolute inset-0 transform -rotate-12 scale-110 opacity-60">
                        <div className="w-full h-12 bg-white/70 backdrop-blur-sm border border-white/60 rounded-lg shadow-sm transition-transform duration-500 group-hover:translate-x-4 will-change-transform" />
                        <div className="w-3/4 h-12 bg-white/90 backdrop-blur-sm border border-white/90 rounded-lg shadow-md transition-transform duration-700 delay-75 group-hover:translate-x-8 will-change-transform" />
                        <div className="w-full h-32 bg-cyan-500/10 backdrop-blur-sm border border-white/60 rounded-lg shadow-sm transition-transform duration-[900ms] delay-150 group-hover:translate-x-2 will-change-transform" />
                    </div>
                </React.Fragment>
            )}
            {themeId === "rose" && (
                <React.Fragment>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-rose-400/20 via-transparent to-transparent blur-xl" />
                    <div className="w-48 h-48 rounded-3xl bg-gradient-to-tr from-rose-400/30 to-orange-300/30 blur-xl absolute bottom-1/4 right-1/4 transition-transform duration-700 group-hover:scale-125 will-change-transform" />

                    <div className="flex items-end gap-3 md:gap-6 h-64 w-full px-12 md:px-24">
                        <div className="w-1/4 h-[40%] bg-white/60 backdrop-blur-sm border border-white/60 rounded-t-xl shadow-lg transition-all duration-500 group-hover:h-[50%]" />
                        <div className="w-1/4 h-[70%] bg-white/80 backdrop-blur-sm border border-white/80 rounded-t-xl shadow-xl transition-all duration-700 delay-75 group-hover:h-[85%]" />
                        <div className="w-1/4 h-[100%] bg-rose-500/10 backdrop-blur-md border border-white/90 rounded-t-xl shadow-2xl relative z-10 transition-all duration-[900ms] delay-150 group-hover:h-[110%]" />
                        <div className="w-1/4 h-[55%] bg-white/60 backdrop-blur-sm border border-white/60 rounded-t-xl shadow-lg transition-all duration-500 delay-200 group-hover:h-[65%]" />
                    </div>
                </React.Fragment>
            )}
        </div>
    );
};
