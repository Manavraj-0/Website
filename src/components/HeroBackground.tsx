"use client";

import React from 'react';

/**
 * Service-oriented node labels that map to TechMate4u's core offerings.
 * Palette: brand-blue (#0d59f2), muted cyan (#38bdf8), muted violet (#8b5cf6).
 */
const NODES = [
    { id: 1, x: 200, y: 700, label: 'DESIGN',   color: '#38bdf8' },
    { id: 2, x: 200, y: 300, label: 'DEVELOP',   color: '#0d59f2' },
    { id: 3, x: 500, y: 300, label: 'DEPLOY',    color: '#38bdf8' },
    { id: 4, x: 500, y: 700, label: 'AUTOMATE',  color: '#8b5cf6' },
    { id: 5, x: 800, y: 700, label: 'SCALE',     color: '#0d59f2' },
] as const;

const SEGMENTS = [
    { x1: 200, y1: 700, x2: 200, y2: 300, color: '#38bdf8' },
    { x1: 200, y1: 300, x2: 500, y2: 300, color: '#0d59f2' },
    { x1: 500, y1: 300, x2: 500, y2: 700, color: '#38bdf8' },
    { x1: 500, y1: 700, x2: 800, y2: 700, color: '#8b5cf6' },
] as const;

function hexToRgba(hex: string, alpha: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function HeroBackground() {
    return (
        <div
            className="absolute inset-x-0 inset-y-[-100px] flex items-center justify-center pointer-events-none overflow-hidden"
            style={{ perspective: '1500px' }}
        >
            {/* 3D Isometric Container */}
            <div
                className="relative w-[1000px] h-[1000px] scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100 transition-transform duration-700"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: 'rotateX(60deg) rotateZ(-45deg)',
                }}
            >
                {/* ─── LEVEL 0: SVG Grid & Data Paths ─── */}
                <svg className="absolute inset-0 w-full h-full" style={{ transform: 'translateZ(0px)', overflow: 'visible' }}>
                    {/* SVG filter for efficient glow (replaces CSS drop-shadow) */}
                    <defs>
                        <filter id="glow-sm" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="4" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <filter id="glow-lg" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="6" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Isometric Floor Grid — reduced opacity for premium feel */}
                    <pattern id="iso-floor" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                        <rect width="50" height="50" fill="none" stroke="rgba(13,89,242,0.06)" strokeWidth="1" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#iso-floor)" />

                    {/* Data Bus Segments */}
                    {SEGMENTS.map((seg, i) => {
                        const isVertical = seg.x1 === seg.x2;
                        const offsets = [-14, 0, 14];
                        return offsets.map((off, j) => {
                            const nx1 = seg.x1 + (isVertical ? off : 0);
                            const nx2 = seg.x2 + (isVertical ? off : 0);
                            const ny1 = seg.y1 + (isVertical ? 0 : off);
                            const ny2 = seg.y2 + (isVertical ? 0 : off);
                            const isMain = j === 1;

                            return (
                                <g key={`seg-${i}-${j}`}>
                                    {/* Ambient glow line */}
                                    <line
                                        x1={nx1} y1={ny1} x2={nx2} y2={ny2}
                                        stroke={seg.color}
                                        strokeWidth={isMain ? 5 : 1.5}
                                        strokeOpacity={isMain ? 0.25 : 0.08}
                                        strokeLinecap="round"
                                        filter={isMain ? 'url(#glow-sm)' : undefined}
                                    />
                                    {/* Streaming data packet line */}
                                    <line
                                        x1={nx1} y1={ny1} x2={nx2} y2={ny2}
                                        stroke={isMain ? 'white' : seg.color}
                                        strokeWidth={isMain ? 2.5 : 1}
                                        strokeLinecap="round"
                                        strokeDasharray={isMain ? '12 24' : '4 32'}
                                        className={isMain ? 'iso-data-fast' : 'iso-data-slow'}
                                        filter={isMain ? 'url(#glow-lg)' : undefined}
                                    />
                                </g>
                            );
                        });
                    })}
                </svg>

                {/* ─── LEVEL 1 & 2: 3D Floating Glass Plates ─── */}
                {NODES.map((n, i) => (
                    <div
                        key={`node-${i}`}
                        className="absolute top-0 left-0"
                        style={{ transform: `translate3d(${n.x}px, ${n.y}px, 0)`, transformStyle: 'preserve-3d' }}
                    >
                        {/* Drop shadow on grid */}
                        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-black/25 blur-[28px] rounded-[3rem]" style={{ transform: 'translateZ(-1px)' }} />

                        {/* Middle: Core colored plate */}
                        <div
                            className="absolute -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-3xl border-2 backdrop-blur-md iso-float"
                            style={{
                                '--tz': '25px',
                                animationDelay: `${i * 0.4}s`,
                                background: hexToRgba(n.color, 0.12),
                                borderColor: hexToRgba(n.color, 0.4),
                                boxShadow: `0 0 40px 8px ${hexToRgba(n.color, 0.3)}, inset 0 0 16px ${hexToRgba(n.color, 0.25)}`,
                            } as React.CSSProperties}
                        />

                        {/* Top: Frosted glass plate */}
                        <div
                            className="absolute -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-3xl border border-white/50 bg-white/15 backdrop-blur-xl shadow-[inset_0_0_24px_rgba(255,255,255,0.6)] flex items-center justify-center iso-float"
                            style={{
                                '--tz': '50px',
                                animationDelay: `${i * 0.4 + 0.15}s`,
                            } as React.CSSProperties}
                        >
                            {/* Inner energy core */}
                            <div
                                className="w-7 h-7 rounded-full bg-white blur-[2px]"
                                style={{ boxShadow: `0 0 32px 12px ${n.color}` }}
                            />
                        </div>
                    </div>
                ))}

                {/* ─── LEVEL 3: Floating Label Pills (Counter-Rotated) ─── */}
                {NODES.map((n, i) => (
                    <div
                        key={`label-${i}`}
                        className="absolute top-0 left-0"
                        style={{ transform: `translate3d(${n.x}px, ${n.y}px, 140px)`, transformStyle: 'preserve-3d' }}
                    >
                        <div
                            className="flex flex-col items-center justify-end pointer-events-none w-64 -translate-x-1/2"
                            style={{
                                transform: 'rotateZ(45deg) rotateX(-60deg)',
                                transformOrigin: 'bottom center',
                                height: '80px',
                            }}
                        >
                            <div className="flex items-center justify-center px-5 py-2.5 rounded-full bg-[#0a0a0a]/90 backdrop-blur-xl shadow-2xl border border-white/10 w-max translate-y-2">
                                <span className="text-[11px] font-black text-white/90 tracking-[0.2em] leading-none">
                                    {n.label}
                                </span>
                            </div>
                            {/* Anchor stalk */}
                            <div className="w-px h-16 bg-gradient-to-t from-white/0 via-white/40 to-white/80" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
