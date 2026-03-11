"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        num: "01",
        title: "Discovery",
        description: "We analyze your business goals, current tech stack, and identify areas for digital transformation. This phase eliminates assumptions and establishes a rigorous architectural blueprint."
    },
    {
        num: "02",
        title: "Design",
        description: "We craft modern UX/UI designs and architect the technical systems required to achieve your objectives. Every interaction is mapped, tested, and aligned with your core brand identity."
    },
    {
        num: "03",
        title: "Development",
        description: "Our engineers build your solution using modern, scalable frameworks and rigorous testing protocols. We write strict, type-safe code prioritized for performance and maintainability."
    },
    {
        num: "04",
        title: "Launch",
        description: "We deploy your project to production, ensure everything runs smoothly, and hand over the keys. Our CI/CD pipelines guarantee zero-downtime shipping and automated rollbacks."
    }
];

export default function Process() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track total scroll progress through the entire section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 20%"]
    });

    // The animated pipeline line grows based on scroll progress
    const lineY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section
            id="process"
            className="w-full relative z-20 bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pb-32"
        >
            <div className="max-w-7xl mx-auto px-4 pt-32 pb-16">
                <div className="text-left mb-16 max-w-2xl">
                    <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight font-[family-name:var(--font-outfit)] drop-shadow-md">How We Build.</h2>
                    <p className="text-slate-500 text-lg md:text-xl mt-6 leading-relaxed drop-shadow-md">
                        A rigorous, transparent engineering pipeline designed to eliminate technical debt and deliver high-quality digital products on time.
                    </p>
                </div>
            </div>

            {/* The main scroll tracking container */}
            <div ref={containerRef} className="relative w-full max-w-5xl mx-auto px-4">

                {/* ── Background Vertical Pipeline Track ── */}
                <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200/50 transform md:-translate-x-1/2" />

                {/* ── Animated Active Pipeline Path ── */}
                <motion.div
                    className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 via-fuchsia-500 to-purple-600 transform md:-translate-x-1/2 origin-top"
                    style={{ scaleY: scrollYProgress }}
                />

                {/* Render Nodes */}
                <div className="flex flex-col gap-0">
                    {steps.map((step, index) => (
                        <ProcessNode
                            key={index}
                            step={step}
                            index={index}
                            total={steps.length}
                            progress={scrollYProgress}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

// Individual Node with isolated animation thresholds
function ProcessNode({ step, index, total, progress }: { step: any, index: number, total: number, progress: any }) {

    // Calculate the activation threshold for this specific node based on its index
    // Node 0 activates at 0.1, Node 1 at 0.35, etc.
    const startRange = index / total;
    const peakRange = startRange + (0.5 / total);
    const endRange = startRange + (1.2 / total);

    // Opacity mapping: fades in, peaks, and slightly fades out as we pass it
    const opacity = useTransform(
        progress,
        [startRange - 0.1, startRange, peakRange, endRange],
        // Never fully fade out past nodes, keep them at 40%
        [0.2, 1, 1, 0.4]
    );

    // Position mapping: slides up slightly
    const yOffsets = useTransform(
        progress,
        [startRange - 0.2, startRange],
        [40, 0]
    );

    // Node Scale: pops when active
    const scale = useTransform(
        progress,
        [startRange - 0.1, startRange, peakRange, endRange],
        [0.8, 1.05, 1, 0.95]
    );

    const isEven = index % 2 === 0;

    return (
        <div className="h-[50vh] min-h-[400px] flex items-center relative w-full">

            {/* Number Indicator on the line */}
            <motion.div
                style={{ scale, opacity }}
                className="absolute left-4 md:left-1/2 w-12 h-12 rounded-full border border-slate-300 bg-white shadow-xl flex items-center justify-center transform md:-translate-x-1/2 z-10"
            >
                <div className="w-8 h-8 rounded-full border border-slate-100 bg-slate-50 flex items-center justify-center">
                    <span className="text-xs font-black text-slate-800">{step.num}</span>
                </div>
            </motion.div>

            {/* Content Container (Alternating left/right on Desktop, Right-aligned on Mobile) */}
            <motion.div
                style={{ opacity, y: yOffsets }}
                className={`w-full pl-24 md:px-0 flex flex-col md:flex-row ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
            >
                <div className={`w-full md:w-[45%] ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>

                    <div className="bg-white/60 backdrop-blur-xl border border-slate-200/60 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.1)] rounded-[2rem] p-8 md:p-12 relative group hover:bg-white/90 transition-colors duration-500">
                        {/* Eyebrow */}
                        <div className={`flex items-center gap-3 mb-6 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                            {!isEven && <div className="w-6 h-[1px] bg-slate-300 hidden md:block"></div>}
                            <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase drop-shadow-md">Phase {step.num}</span>
                            {isEven && <div className="w-6 h-[1px] bg-slate-300 hidden md:block"></div>}
                        </div>

                        <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 font-[family-name:var(--font-outfit)] tracking-tight drop-shadow-md">
                            {step.title}
                        </h3>

                        <p className="text-slate-600 text-base md:text-lg leading-relaxed drop-shadow-md">
                            {step.description}
                        </p>
                    </div>

                </div>
            </motion.div>

        </div>
    );
}
