import Link from "next/link";
import HeroAnimation from "./HeroBackground";

export default function Hero() {
    return (
        <section
            className="w-full max-w-7xl mx-auto pt-32 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-visible"
            id="home"
        >
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

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

                {/* ── 3D Isometric Visual ── */}
                <figure className="lg:col-span-6 relative h-[600px] w-full hidden lg:block pointer-events-none">
                    <HeroAnimation />
                </figure>
            </div>
        </section>
    );
}
