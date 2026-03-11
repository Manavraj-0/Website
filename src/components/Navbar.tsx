"use client";

import Link from 'next/link';
import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const NAV_SECTIONS = [
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Work', href: '#portfolio', id: 'portfolio' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Contact', href: '#contact', id: 'contact' },
] as const;

const DOT_W = 6;
const LINE_H = 3;

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');
    const [mobileOpen, setMobileOpen] = useState(false);

    const borderRef = useRef<HTMLDivElement>(null);
    const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
    const navInnerRef = useRef<HTMLDivElement>(null);

    // ── Dot/pill indicator ──────────────────────────────────────────────────
    const rawCx = useMotionValue(0);
    const rawW = useMotionValue(DOT_W);
    const cx = useSpring(rawCx, { stiffness: 280, damping: 28, mass: 1 });
    const w = useSpring(rawW, { stiffness: 200, damping: 26, mass: 1 });
    const left = useTransform([cx, w] as any, ([c, wd]: number[]) => c - wd / 2);

    const getCenterX = (id: string) => {
        const link = linkRefs.current[id];
        const nav = navInnerRef.current;
        if (!link || !nav) return 0;
        const lr = link.getBoundingClientRect();
        const nr = nav.getBoundingClientRect();
        return lr.left - nr.left + lr.width / 2;
    };

    const animateTo = useCallback((targetId: string) => {
        const toCx = getCenterX(targetId);
        const fromCx = rawCx.get();
        rawCx.set((fromCx + toCx) / 2);
        rawW.set(Math.max(Math.abs(toCx - fromCx) + DOT_W, DOT_W));
        const t = setTimeout(() => { rawCx.set(toCx); rawW.set(DOT_W); }, 110);
        return () => clearTimeout(t);
    }, [rawCx, rawW]);

    const snapTo = useCallback((id: string) => {
        const v = getCenterX(id);
        if (!v) return;
        rawCx.set(v);
        rawW.set(DOT_W);
    }, [rawCx, rawW]);

    const clickedRef = useRef(false);
    const handleLinkClick = useCallback((targetId: string) => {
        clickedRef.current = true;
        animateTo(targetId);
        setTimeout(() => { clickedRef.current = false; }, 900);
    }, [animateTo]);

    useEffect(() => {
        if (!activeSection || clickedRef.current) return;
        const raf = requestAnimationFrame(() => snapTo(activeSection));
        return () => cancelAnimationFrame(raf);
    }, [activeSection, snapTo]);

    useEffect(() => {
        const onResize = () => { if (activeSection) snapTo(activeSection); };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [activeSection, snapTo]);

    // ── Scroll-progress border ──────────────────────────────────────────────
    useEffect(() => {
        const border = borderRef.current as any;
        if (!border) return;

        const onScroll = () => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollable <= 0) return;
            // Add a buffer of 20px to ensure it hits 100% even with subpixel/mobile bar issues
            const p = Math.max(0, Math.min(window.scrollY / Math.max(1, scrollable - 20), 1));
            border.style.strokeDashoffset = (1 - p).toString();

            if (p >= 1) {
                border.style.filter = 'drop-shadow(0 0 6px rgba(13, 89, 242, 0.4))';
            } else {
                border.style.filter = 'none';
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        // Set initial value
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // ── Inject styles ───────────────────────────────────────────────────────
    useEffect(() => {
        const style = document.createElement('style');
        style.id = 'nav-border-style';
        style.textContent = `
            /* ── Hide native scrollbar ── */
            html { scrollbar-width: none; }
            html::-webkit-scrollbar { display: none; }
        `;
        document.head.appendChild(style);
        return () => document.getElementById('nav-border-style')?.remove();
    }, []);

    /* ── Scroll listener for navbar bg ── */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* ── IntersectionObserver ── */
    useEffect(() => {
        const elements = NAV_SECTIONS
            .map(s => document.getElementById(s.id))
            .filter(Boolean) as HTMLElement[];
        if (!elements.length) return;
        const observer = new IntersectionObserver(
            (entries) => { for (const e of entries) if (e.isIntersecting) setActiveSection(e.target.id); },
            { rootMargin: '-20% 0px -75% 0px', threshold: 0 },
        );
        elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    /* ── Mobile scroll lock ── */
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const closeMobile = useCallback(() => setMobileOpen(false), []);
    const isVisible = NAV_SECTIONS.some(s => s.id === activeSection);

    return (
        <>
            {/* ═══════════ Desktop Navbar ═══════════ */}
            <div className={`fixed left-0 right-0 z-50 flex justify-center w-full transition-all duration-500 pointer-events-none ${scrolled ? 'top-3 px-4 max-w-4xl mx-auto' : 'top-5 px-4 max-w-6xl mx-auto'
                }`}>
                <header
                    className={`relative rounded-full flex items-center justify-between w-full pointer-events-auto transition-all duration-500 ease-out group/nav hover:-translate-y-[2px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] hover:shadow-[0_35px_80px_rgba(13,89,242,0.15)] ${scrolled
                        ? 'glass-nav py-2.5 px-6 bg-white/95 backdrop-blur-2xl border border-white/70'
                        : 'glass-nav py-3.5 px-8 bg-white/80 border border-white/50 backdrop-blur-md'
                        }`}
                >
                    {/* Blue halo */}
                    <div
                        className={`absolute inset-0 rounded-full transition-opacity duration-700 -z-10 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
                        style={{ boxShadow: '0 0 40px rgba(13,89,242,0.08), 0 0 80px rgba(13,89,242,0.04)' }}
                    />

                    {/* ── Animated scroll-progress border ring ── */}
                    <svg className="absolute inset-0 pointer-events-none" width="100%" height="100%" style={{ zIndex: 25, overflow: 'visible' }}>
                        <rect
                            ref={borderRef as any}
                            x="-1" y="-1"
                            className="w-[calc(100%+2px)] h-[calc(100%+2px)] transition-[filter] duration-300"
                            rx="30"
                            fill="none"
                            stroke="rgba(13, 89, 242, 1)"
                            strokeWidth="2"
                            pathLength="1"
                            strokeLinecap="round"
                            style={{
                                strokeDasharray: '1',
                                strokeDashoffset: '1'
                            }}
                        />
                    </svg>

                    {/* Logo */}
                    <Link href="#home" className="flex items-center gap-2.5 relative z-30 group drop-shadow-sm">
                        <div className="text-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            <span className="material-symbols-outlined" style={{ fontSize: '26px', fontVariationSettings: "'FILL' 1, 'wght' 700" }}>
                                layers
                            </span>
                        </div>
                        <span className="text-slate-900 font-extrabold text-xl tracking-tight transition-colors duration-300 group-hover:text-primary select-none font-[family-name:var(--font-outfit)]">
                            TechMate4u
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav ref={navInnerRef} className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2 z-30">
                        {NAV_SECTIONS.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                ref={(el) => { linkRefs.current[item.id] = el; }}
                                onClick={() => handleLinkClick(item.id)}
                                className={`relative text-[14.5px] font-medium tracking-tight transition-colors duration-200 py-2 drop-shadow-sm ${activeSection === item.id ? 'text-slate-900' : 'text-slate-500 hover:text-slate-800'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Dot / pill indicator */}
                        {isVisible && (
                            <motion.div
                                className="absolute pointer-events-none z-0 bg-primary overflow-visible"
                                style={{ left, width: w, height: LINE_H, bottom: -4, borderRadius: 9999 }}
                            >
                                <div className="absolute inset-0 bg-primary/50 rounded-full" style={{ filter: 'blur(4px)', transform: 'scaleY(2.5) scaleX(1.1)' }} />
                            </motion.div>
                        )}
                    </nav>

                    {/* CTA + Hamburger */}
                    <div className="flex items-center gap-3 relative z-30">
                        <Link
                            href="#contact"
                            className="hidden sm:flex group relative overflow-hidden bg-primary text-white text-[14.5px] font-semibold tracking-wide rounded-full h-10 px-6 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 items-center justify-center gap-2"
                        >
                            <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-0.5">Start Project</span>
                            <span className="material-symbols-outlined text-[16px] relative z-10 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">arrow_forward</span>
                            <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] group-hover:translate-x-[400%] transition-transform duration-1000 ease-out z-0" />
                        </Link>
                        <button
                            onClick={() => setMobileOpen(true)}
                            className="md:hidden flex items-center justify-center size-10 rounded-full hover:bg-slate-100 transition-colors"
                            aria-label="Open navigation menu"
                        >
                            <span className="material-symbols-outlined text-slate-700" style={{ fontSize: '22px' }}>menu</span>
                        </button>
                    </div>
                </header>
            </div>

            {/* ═══════════ Mobile Overlay ═══════════ */}
            {mobileOpen && (
                <div className="fixed inset-0 z-[100] bg-white mobile-nav-overlay">
                    <div className="flex items-center justify-between px-6 pt-5">
                        <Link href="#home" onClick={closeMobile} className="flex items-center gap-2.5">
                            <span className="material-symbols-outlined text-primary" style={{ fontSize: '26px', fontVariationSettings: "'FILL' 1, 'wght' 700" }}>layers</span>
                            <span className="text-slate-900 font-extrabold text-lg tracking-tight">TechMate4u</span>
                        </Link>
                        <button onClick={closeMobile} className="flex items-center justify-center size-10 rounded-full hover:bg-slate-100 transition-colors" aria-label="Close navigation menu">
                            <span className="material-symbols-outlined text-slate-700" style={{ fontSize: '24px' }}>close</span>
                        </button>
                    </div>
                    <nav className="flex flex-col gap-2 px-6 mt-12">
                        {NAV_SECTIONS.map((item, i) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={closeMobile}
                                className="mobile-nav-link text-3xl font-extrabold font-[family-name:var(--font-outfit)] tracking-tight text-slate-900 hover:text-primary transition-colors py-3 border-b border-slate-100"
                                style={{ animationDelay: `${0.1 + i * 0.08}s` }}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="px-6 mt-10 mobile-nav-link" style={{ animationDelay: '0.5s' }}>
                        <Link href="#contact" onClick={closeMobile} className="flex items-center justify-center gap-2 w-full bg-primary text-white text-lg font-bold rounded-full h-14 shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30">
                            Start Project
                            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}