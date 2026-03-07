"use client";

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';

/** Section IDs that map to nav links — order matters for IntersectionObserver */
const NAV_SECTIONS = [
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Work', href: '#portfolio', id: 'portfolio' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Contact', href: '#contact', id: 'contact' },
] as const;

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');
    const [mobileOpen, setMobileOpen] = useState(false);

    /* ── scroll listener ── */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* ── IntersectionObserver for active section ── */
    useEffect(() => {
        const ids = NAV_SECTIONS.map((s) => s.id);
        const elements = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        if (elements.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                }
            },
            { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    /* ── lock body scroll when mobile menu open ── */
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const closeMobile = useCallback(() => setMobileOpen(false), []);

    return (
        <>
            {/* ═══════════ Desktop / Tablet Navbar ═══════════ */}
            <div
                className={`fixed left-0 right-0 z-50 flex justify-center w-full transition-all duration-500 pointer-events-none ${
                    scrolled
                        ? 'top-3 px-4 max-w-4xl mx-auto'
                        : 'top-5 px-4 max-w-6xl mx-auto'
                }`}
            >
                <header
                    className={`relative rounded-full flex items-center justify-between w-full pointer-events-auto transition-all duration-500 ease-out group/nav hover:-translate-y-[2px] hover:shadow-[0_12px_40px_rgba(13,89,242,0.10),0_4px_16px_rgba(0,0,0,0.06)] hover:border-primary/15 ${
                        scrolled
                            ? 'glass-nav py-2.5 px-6 bg-white/92 backdrop-blur-2xl border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.06)]'
                            : 'glass-nav py-3.5 px-8 bg-white/70 border border-white/50 backdrop-blur-md shadow-sm'
                    }`}
                >
                    {/* Brand-blue halo (visible on scroll only) */}
                    <div
                        className={`absolute inset-0 rounded-full transition-opacity duration-700 -z-10 ${
                            scrolled ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{
                            boxShadow: '0 0 40px rgba(13, 89, 242, 0.08), 0 0 80px rgba(13, 89, 242, 0.04)',
                        }}
                    />

                    {/* Accent bottom line on scroll */}
                    {scrolled && (
                        <span className="nav-accent-line absolute bottom-0 left-[15%] right-[15%] h-[1.5px] bg-gradient-to-r from-transparent via-primary/40 to-transparent rounded-full" />
                    )}

                    {/* ── Logo ── */}
                    <Link href="#home" className="flex items-center gap-2.5 relative z-30 group">
                        <div className="text-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            <span
                                className="material-symbols-outlined"
                                style={{ fontSize: '26px', fontVariationSettings: "'FILL' 1, 'wght' 700" }}
                            >
                                layers
                            </span>
                        </div>
                        <h2 className="text-slate-900 font-extrabold text-lg tracking-tight transition-colors duration-300 group-hover:text-primary select-none">
                            TechMate4u
                        </h2>
                    </Link>

                    {/* ── Desktop Nav Links ── */}
                    <nav className="hidden md:flex items-center gap-7 absolute left-1/2 transform -translate-x-1/2 z-30">
                        {NAV_SECTIONS.map((item) => {
                            const isActive = activeSection === item.id;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`relative text-sm font-semibold transition-colors duration-200 py-2 ${
                                        isActive
                                            ? 'text-slate-900'
                                            : 'text-slate-500 hover:text-slate-800'
                                    }`}
                                >
                                    {item.name}
                                    {/* Active dot indicator */}
                                    <span
                                        className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 size-1 rounded-full bg-primary transition-all duration-300 ${
                                            isActive
                                                ? 'opacity-100 scale-100'
                                                : 'opacity-0 scale-0'
                                        }`}
                                    />
                                </Link>
                            );
                        })}
                    </nav>

                    {/* ── CTA + Hamburger ── */}
                    <div className="flex items-center gap-3 relative z-30">
                        {/* Desktop CTA */}
                        <Link
                            href="#contact"
                            className="hidden sm:flex group relative overflow-hidden bg-primary text-white text-sm font-bold rounded-full h-10 px-6 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 items-center justify-center gap-2"
                        >
                            <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-0.5">
                                Start Project
                            </span>
                            <span className="material-symbols-outlined text-[16px] relative z-10 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                arrow_forward
                            </span>

                            {/* Shimmer */}
                            <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] group-hover:translate-x-[400%] transition-transform duration-1000 ease-out z-0" />
                        </Link>

                        {/* Hamburger (mobile) */}
                        <button
                            onClick={() => setMobileOpen(true)}
                            className="md:hidden flex items-center justify-center size-10 rounded-full hover:bg-slate-100 transition-colors"
                            aria-label="Open navigation menu"
                        >
                            <span
                                className="material-symbols-outlined text-slate-700"
                                style={{ fontSize: '22px' }}
                            >
                                menu
                            </span>
                        </button>
                    </div>
                </header>
            </div>

            {/* ═══════════ Mobile Full-screen Overlay ═══════════ */}
            {mobileOpen && (
                <div className="fixed inset-0 z-[100] bg-white mobile-nav-overlay">
                    {/* Header row */}
                    <div className="flex items-center justify-between px-6 pt-5">
                        <Link href="#home" onClick={closeMobile} className="flex items-center gap-2.5">
                            <span
                                className="material-symbols-outlined text-primary"
                                style={{ fontSize: '26px', fontVariationSettings: "'FILL' 1, 'wght' 700" }}
                            >
                                layers
                            </span>
                            <span className="text-slate-900 font-extrabold text-lg tracking-tight">TechMate4u</span>
                        </Link>

                        <button
                            onClick={closeMobile}
                            className="flex items-center justify-center size-10 rounded-full hover:bg-slate-100 transition-colors"
                            aria-label="Close navigation menu"
                        >
                            <span
                                className="material-symbols-outlined text-slate-700"
                                style={{ fontSize: '24px' }}
                            >
                                close
                            </span>
                        </button>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-col gap-2 px-6 mt-12">
                        {NAV_SECTIONS.map((item, i) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={closeMobile}
                                className="mobile-nav-link text-3xl font-bold text-slate-900 hover:text-primary transition-colors py-3 border-b border-slate-100"
                                style={{ animationDelay: `${0.1 + i * 0.08}s` }}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile CTA */}
                    <div className="px-6 mt-10 mobile-nav-link" style={{ animationDelay: '0.5s' }}>
                        <Link
                            href="#contact"
                            onClick={closeMobile}
                            className="flex items-center justify-center gap-2 w-full bg-primary text-white text-lg font-bold rounded-full h-14 shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
                        >
                            Start Project
                            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}
