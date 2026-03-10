"use client";

import React from "react";
import Image from "next/image";
import { TrendingUp, Sparkles, Zap, Lock } from "lucide-react";

/* ─────────────────────────────────────────────
   Floating metric cards data
───────────────────────────────────────────── */

type FloatingCard = {
    id: string;
    icon: React.ElementType;
    label: string;
    value: string;
    color: string;
    iconColor: string;
    iconBg: string;
    position: string;
    delay: string;
    floatAnimation: string;
};

const FLOATING_CARDS: FloatingCard[] = [
    {
        id: "growth",
        icon: TrendingUp,
        label: "Traffic Growth",
        value: "+180%",
        color: "text-slate-900",
        iconColor: "text-emerald-500 flex justify-center items-center",
        iconBg: "bg-emerald-50/50",
        position: "top-[10%] right-[-20px] md:right-[-40px]",
        delay: "hero-stagger-2",
        floatAnimation: "animate-float-1",
    },

    {
        id: "speed",
        icon: Zap,
        label: "Processing Speed",
        value: "Lightning-fast",
        color: "text-slate-900",
        iconColor: "text-purple-500 fill-purple-500",
        iconBg: "bg-purple-50/50",
        position: "bottom-[-20px] left-[5%] md:left-[-10px]",
        delay: "hero-stagger-4",
        floatAnimation: "animate-float-3",
    },
];

export default function HeroVisual() {
    return (
        <div className="relative w-full h-[600px] flex items-center justify-end select-none pr-8">

            {/* Background glow */}
            <div className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[120px] -z-10 pointer-events-none" />

            {/* ── Main Browser Mockup (Showing a Real Website) ── */}
            <div className="relative w-full max-w-[560px] bg-white rounded-[1.5rem] shadow-[0_40px_100px_-15px_rgba(0,0,0,0.45),0_0_0_1px_rgba(226,232,240,1)] overflow-hidden hero-fade-up hero-stagger-1 ml-auto flex flex-col">

                {/* Browser Header */}
                <div className="h-12 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-3 shrink-0">
                    <div className="flex gap-1.5 p-2">
                        <div className="w-3 h-3 rounded-full bg-slate-300 shadow-inner" />
                        <div className="w-3 h-3 rounded-full bg-slate-300 shadow-inner" />
                        <div className="w-3 h-3 rounded-full bg-slate-300 shadow-inner" />
                    </div>
                    {/* URL Bar */}
                    <div className="h-7 w-full max-w-[240px] bg-white border border-slate-200 rounded-md mx-auto flex items-center justify-center shadow-sm gap-1.5 px-3">
                        <Lock className="w-2.5 h-2.5 text-slate-400" />
                        <span className="text-[10px] text-slate-500 font-medium">Client Showcase: Amara</span>
                    </div>
                    <div className="w-12" /> {/* Spacer for centering */}
                </div>

                {/* Website Image Container */}
                <div className="relative w-full bg-slate-100 overflow-hidden border-t border-slate-200 shadow-[inset_0_4px_20px_rgba(0,0,0,0.03)] flex">
                    <div className="absolute inset-0 w-full h-full bg-slate-200 animate-pulse" /> {/* Loading skeleton */}

                    {/* Flat UI Screenshot */}
                    <img
                        src="/assets/laptop.webp"
                        alt="Amara website"
                        className="relative block w-full h-auto object-cover object-top"
                    />

                    {/* Subtle inner shadow for depth instead of a heavy gloss */}
                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.02)] pointer-events-none" />
                </div>
            </div>

            {/* ── Floating Mobile View (Responsive showcasing) ── */}
            <div className="absolute bottom-[-10px] right-[-20px] md:right-[-30px] lg:right-[0px] z-40 hero-fade-up hero-stagger-4">
                <div className="w-[150px] md:w-[180px] lg:w-[200px] rounded-3xl border-[6px] border-white shadow-[0_30px_70px_-12px_rgba(0,0,0,0.5)] overflow-hidden bg-white rotate-[6deg] transition-transform hover:rotate-0 duration-500 animate-float-mobile">
                    <img
                        src="/assets/mobile-amara.png"
                        alt="Mobile responsive view"
                        className="w-full h-auto object-cover block bg-slate-100"
                    />
                </div>
            </div>

            {/* ── Floating Metric Badges (Overlapping) ── */}
            {FLOATING_CARDS.map((card) => (
                <div
                    key={card.id}
                    className={`absolute z-50 ${card.position} ${card.delay} hero-fade-up`}
                >
                    <div className={`glass-panel ${card.floatAnimation} bg-white/20 backdrop-blur-2xl rounded-2xl p-2.5 pr-5 flex items-center gap-3 transition-transform hover:-translate-y-1 duration-300 shadow-[0_20px_45px_-8px_rgba(0,0,0,0.4)] border border-white/50 ring-1 ring-inset ring-white/30`}>
                        <div className={`w-10 h-10 rounded-full ${card.iconBg} flex items-center justify-center shrink-0 shadow-inner`}>
                            <card.icon className={`w-5 h-5 ${card.iconColor}`} strokeWidth={2.5} />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="text-[10px] font-bold text-slate-800 uppercase tracking-widest leading-none mb-1 text-shadow-sm">
                                {card.label}
                            </span>
                            <span className={`text-[15px] font-extrabold tracking-tight leading-none ${card.color} drop-shadow-sm`}>
                                {card.value}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
