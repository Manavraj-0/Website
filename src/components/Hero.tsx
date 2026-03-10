import Link from "next/link";
import Image from "next/image";
import HeroVisual from "./HeroVisual";

export default function Hero() {
    return (
        <section
            className="w-full max-w-7xl mx-auto pt-32 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-visible"
            id="home"
        >
            {/* ── Animated Scalable Abstract Background ── */}
            <div className="absolute inset-0 w-[100vw] h-[120%] left-1/2 -translate-x-1/2 -z-20 overflow-hidden pointer-events-none">
                {/* Base soft gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-50 via-white to-white" />

                {/* High-Fidelity Animated SVG Geometry */}
                <svg className="absolute inset-0 w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <style>
                        {`
                          @keyframes floatSlow {
                            0%, 100% { transform: translate(0px, 0px); }
                            50% { transform: translate(-10px, 15px); }
                          }
                          @keyframes floatMid {
                            0%, 100% { transform: translate(0px, 0px); }
                            50% { transform: translate(15px, -10px); }
                          }
                          @keyframes floatFast {
                            0%, 100% { transform: translate(0px, 0px); }
                            50% { transform: translate(-5px, -20px); }
                          }
                          @keyframes spinSlow {
                            100% { transform: rotate(360deg); }
                          }
                          @keyframes spinReverse {
                            100% { transform: rotate(-360deg); }
                          }
                          @keyframes pulseGentle {
                            0%, 100% { transform: scale(1); opacity: 0.5; }
                            50% { transform: scale(1.05); opacity: 0.8; }
                          }
                        `}
                    </style>
                    <defs>
                        {/* Architectural Dot Grid */}
                        <pattern id="hero-dot-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1.5" className="fill-slate-200" />
                        </pattern>
                        {/* Plus Pattern */}
                        <pattern id="hero-plus-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                            <path d="M24 20v8m-4-4h8" className="stroke-slate-200" strokeWidth="1.5" strokeLinecap="round" />
                        </pattern>
                    </defs>

                    {/* Faint base grid covering left side */}
                    <rect x="0" y="0" width="40%" height="100%" fill="url(#hero-dot-grid)" className="opacity-[0.3]" />

                    {/* Plus grid scattered on right side */}
                    <rect x="60%" y="20%" width="40%" height="60%" fill="url(#hero-plus-grid)" className="opacity-[0.4]" />

                    {/* Animated Floating Geometric Wireframes */}

                    {/* Top right rings */}
                    <g style={{ transformOrigin: '85% 15%', animation: 'spinSlow 60s linear infinite' }}>
                        <circle cx="85%" cy="15%" r="200" className="stroke-slate-200/60 fill-transparent" strokeWidth="1.5" strokeDasharray="12 12" />
                    </g>
                    <g style={{ transformOrigin: '85% 15%', animation: 'pulseGentle 6s ease-in-out infinite' }}>
                        <circle cx="85%" cy="15%" r="150" className="stroke-slate-200 fill-slate-50" strokeWidth="1" />
                    </g>

                    {/* Bottom left dashed ring */}
                    <g style={{ transformOrigin: '10% 85%', animation: 'spinReverse 40s linear infinite' }}>
                        <circle cx="10%" cy="85%" r="280" className="stroke-slate-300/60 fill-transparent" strokeWidth="1.5" strokeDasharray="4 6" />
                    </g>

                    {/* Abstract overlapping fluid lines with floating transformations */}
                    <g style={{ animation: 'floatSlow 10s ease-in-out infinite' }}>
                        <path d="M -200,400 C 300,300 600,700 1200,300 C 1800,-100 2400,400 3000,100" className="stroke-slate-200" fill="none" strokeWidth="1" />
                    </g>
                    <g style={{ animation: 'floatMid 12s ease-in-out infinite 1s' }}>
                        <path d="M -100,500 C 400,200 700,600 1300,400 C 1900,200 2300,500 2800,200" className="stroke-primary/20" fill="none" strokeWidth="2" />
                    </g>
                    <g style={{ animation: 'floatFast 14s ease-in-out infinite 2s' }}>
                        <path d="M -300,600 C 200,700 500,400 1100,600 C 1700,800 2100,100 2700,300" className="stroke-slate-200" fill="none" strokeWidth="1.5" />
                    </g>
                </svg>

                {/* Soft ambient glowing orbs */}
                <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] mix-blend-multiply animate-pulse" style={{ animationDuration: '6s' }} />
                <div className="absolute bottom-[20%] left-[5%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />

                {/* Bottom gradient fade-out to blend seamlessly into next section */}
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full relative z-10">
                <header className="lg:col-span-6 flex flex-col gap-8 z-10">
                    {/* ── Headline with staggered entrance ── */}
                    <div className="flex flex-col gap-6">
                        <h1 className="text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.03em] text-slate-900">
                            <span className="hero-fade-up hero-stagger-1 block">
                                Accelerate Growth with
                            </span>
                            <span className="hero-fade-up hero-stagger-2 block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                                <strong>Next-Generation Digital Systems</strong>
                            </span>
                        </h1>

                        {/* Subheading — delayed fade */}
                        <p className="hero-fade-up hero-stagger-3 text-lg text-slate-600 max-w-xl leading-relaxed">
                            We engineer conversion-optimized websites, smart automation
                            platforms, and AI-powered solutions designed to turn visitors
                            into loyal customers.
                        </p>
                    </div>

                    {/* ── CTAs — redesigned with premium micro-interactions ── */}
                    <div className="hero-fade-up hero-stagger-4 flex flex-wrap items-center gap-4 pt-2">
                        {/* Primary CTA — magnetic hover with inner glow */}
                        <Link
                            href="#contact"
                            className="hero-btn-primary group relative overflow-hidden bg-primary text-white text-base font-bold rounded-full h-12 px-8 flex items-center gap-2.5 cursor-pointer"
                        >
                            {/* Radial spotlight that follows hover */}
                            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />

                            <span className="relative z-10 flex items-center gap-2">
                                Start Your Project
                                <span className="material-symbols-outlined text-sm transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
                                    arrow_forward
                                </span>
                            </span>
                        </Link>

                        {/* Secondary CTA — border-draw effect on hover */}
                        <Link
                            href="#portfolio"
                            className="hero-btn-ghost group relative bg-transparent text-slate-700 text-base font-bold rounded-full h-12 px-8 flex items-center gap-2.5 cursor-pointer overflow-hidden"
                        >
                            {/* Animated border ring */}
                            <span className="absolute inset-0 rounded-full border-2 border-slate-200 group-hover:border-primary/50 transition-colors duration-400" />

                            {/* Fill sweep from left on hover */}
                            <span className="absolute inset-0 rounded-full bg-primary/5 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400 ease-out" />

                            <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-primary">
                                <span className="material-symbols-outlined text-sm transition-all duration-300 group-hover:-translate-x-0.5 group-hover:text-primary text-slate-400">
                                    play_arrow
                                </span>
                                View Our Work
                            </span>
                        </Link>
                    </div>

                    {/* ── Honest trust signal ── */}
                    <div className="hero-fade-up hero-stagger-5 pt-6 border-t border-slate-200/60 mt-2">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 font-medium">
                            <span className="flex items-center gap-1.5">
                                <span
                                    className="material-symbols-outlined text-primary"
                                    style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1, 'wght' 500" }}
                                >
                                    bolt
                                </span>
                                <span className="text-slate-600">Modern Tech Stack</span>
                            </span>

                            <span className="text-slate-300" aria-hidden="true">•</span>

                            <span className="flex items-center gap-1.5">
                                <span
                                    className="material-symbols-outlined text-primary"
                                    style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1, 'wght' 500" }}
                                >
                                    handshake
                                </span>
                                <span className="text-slate-600">Startup Friendly</span>
                            </span>

                            <span className="text-slate-300 hidden sm:inline" aria-hidden="true">•</span>

                            <span className="hidden sm:flex items-center gap-1.5">
                                <span
                                    className="material-symbols-outlined text-primary"
                                    style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1, 'wght' 500" }}
                                >
                                    rocket_launch
                                </span>
                                <span className="text-slate-600">End-to-End Delivery</span>
                            </span>
                        </div>
                    </div>
                </header>

                {/* ── Hero Visual ── */}
                <figure className="lg:col-span-6 relative h-[600px] w-full hidden lg:block overflow-visible">
                    <HeroVisual />
                </figure>
            </div>
        </section>
    );
}
