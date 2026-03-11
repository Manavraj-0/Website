"use client";

import Link from "next/link";
import Image from "next/image";
import HeroVisual from "./HeroVisual";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacityBackground = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Slower parallax for the content container
    const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const opacityContent = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="w-full max-w-7xl mx-auto min-h-screen pt-32 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-visible flex items-center"
            id="home"
        >
            {/* ── Fixed Colored Blueprint Background ── */}
            <div className="fixed inset-0 w-[100vw] h-[100vh] -z-20 bg-blue-600 pointer-events-none">
                {/* Texture via SVG Filter for realistic blueprint feel */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.15] mix-blend-overlay pointer-events-none">
                    <filter id="noise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noise)" />
                </svg>

                {/* Base soft lighting gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400/40 via-transparent to-blue-900/60" />

                {/* Blueprint Grid */}
                <svg className="absolute inset-0 w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="blueprint-small" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" className="stroke-white/[0.07]" strokeWidth="0.5" />
                        </pattern>
                        <pattern id="blueprint-large" width="100" height="100" patternUnits="userSpaceOnUse">
                            <rect width="100" height="100" fill="url(#blueprint-small)" />
                            <path d="M 100 0 L 0 0 0 100" fill="none" className="stroke-white/[0.15]" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#blueprint-large)" />
                </svg>
            </div>


            <motion.div
                style={{ y: yContent, opacity: opacityContent }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full relative z-10"
            >
                <header className="lg:col-span-6 flex flex-col gap-8 z-10">
                    {/* ── Headline with staggered entrance ── */}
                    <div className="flex flex-col gap-6 ">
                        {/* Premium Typography styling inspired by Figma guidelines: Tighter tracking, specific leading, and balanced contrast */}
                        <h1 className="text-5xl lg:text-[4.5rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-white/95 drop-shadow-[0_8px_32px_rgba(0,20,60,0.6)] font-[family-name:var(--font-outfit)]">
                            <span className="hero-fade-up hero-stagger-1 block">
                                Accelerate Growth with
                            </span>
                            <span className="hero-fade-up hero-stagger-2 block text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-blue-200 mt-1 pb-2">
                                Next-Generation Digital Systems
                            </span>
                        </h1>

                        {/* Subheading — readable line-height, softer blue color */}
                        <p className="hero-fade-up hero-stagger-3 text-[1.125rem] font-medium text-blue-100/90 max-w-xl leading-[1.65] tracking-[-0.01em] drop-shadow-[0_4px_16px_rgba(0,20,60,0.5)]">
                            We engineer conversion-optimized websites, smart automation
                            platforms, and AI-powered solutions designed to turn visitors
                            into loyal customers.
                        </p>
                    </div>

                    {/* ── CTAs — redesigned with premium micro-interactions ── */}
                    <div className="hero-fade-up hero-stagger-4 flex flex-wrap items-center gap-4 pt-2">
                        {/* Primary CTA — magnetic hover with inner glow and outer expanding halo */}
                        <Link
                            href="#contact"
                            className="hero-btn-primary group relative overflow-visible bg-white text-blue-600 text-base font-bold rounded-full h-12 px-8 flex items-center gap-2.5 cursor-pointer shadow-lg transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                        >
                            {/* Inner shine container */}
                            <span className="absolute inset-0 rounded-full overflow-hidden block">
                                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                            </span>

                            <span className="relative z-10 flex items-center gap-2">
                                Start Your Project
                                <span className="material-symbols-outlined text-sm transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
                                    arrow_forward
                                </span>
                            </span>
                        </Link>

                        {/* Secondary CTA — internal warm glow from bottom right on hover */}
                        <Link
                            href="#portfolio"
                            className="hero-btn-ghost group relative bg-blue-700/30 text-white text-base font-bold rounded-full h-12 px-8 flex items-center gap-2.5 cursor-pointer overflow-hidden backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700/40 hover:border-blue-400/60 transition-all duration-500"
                        >
                            {/* Bottom-right expanding warm gradient */}
                            <span className="absolute -bottom-4 -right-4 w-12 h-12 bg-amber-400/0 blur-xl rounded-full transition-all duration-500 ease-out group-hover:w-28 group-hover:h-28 group-hover:bg-amber-400/30 pointer-events-none" />

                            <span className="relative z-10 flex items-center gap-2 transition-colors duration-300">
                                <span className="material-symbols-outlined text-sm transition-all duration-300 group-hover:translate-x-1 group-hover:text-white text-blue-200">
                                    play_arrow
                                </span>
                                View Our Work
                            </span>
                        </Link>
                    </div>

                    {/* ── Honest trust signal ── */}
                    <div className="hero-fade-up hero-stagger-5 pt-6 border-t border-blue-500/60 mt-2">
                        <div className="flex flex-wrap items-center gap-4 text-[13px] text-blue-100/80 font-semibold tracking-wide uppercase drop-shadow-md">
                            <span className="flex items-center gap-1.5">
                                <span
                                    className="material-symbols-outlined text-blue-300"
                                    style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1, 'wght' 500" }}
                                >
                                    bolt
                                </span>
                                <span className="mt-[2px]">Modern Tech Stack</span>
                            </span>

                            <span className="text-blue-400/50" aria-hidden="true">•</span>

                            <span className="flex items-center gap-1.5">
                                <span
                                    className="material-symbols-outlined text-blue-300"
                                    style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1, 'wght' 500" }}
                                >
                                    handshake
                                </span>
                                <span className="mt-[2px]">Startup Friendly</span>
                            </span>

                            <span className="text-blue-400/50 hidden sm:inline" aria-hidden="true">•</span>

                            <span className="hidden sm:flex items-center gap-1.5">
                                <span
                                    className="material-symbols-outlined text-blue-300"
                                    style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1, 'wght' 500" }}
                                >
                                    rocket_launch
                                </span>
                                <span className="mt-[2px]">End-to-End Delivery</span>
                            </span>
                        </div>
                    </div>
                </header>

                {/* ── Hero Visual ── */}
                <figure className="lg:col-span-6 relative h-[600px] w-full hidden lg:block overflow-visible">
                    <HeroVisual />
                </figure>
            </motion.div>
        </section>
    );
}
