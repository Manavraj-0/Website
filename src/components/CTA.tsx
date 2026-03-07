import Link from "next/link";

export default function CTA() {
    return (
        <section className="w-full py-32 bg-slate-900  relative overflow-hidden" id="contact">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
                <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">Ready to Build Your Digital Presence?</h2>
                <p className="text-slate-300 text-xl mb-10 max-w-2xl">
                    Let&apos;s discuss how we can engineer a custom solution to help your business scale and succeed online.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                    <Link
                        href="mailto:contact@techmate4u.com"
                        className="bg-primary hover:bg-primary/90 text-white text-lg font-bold rounded-full h-14 px-8 transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2 w-full sm:w-auto hover:scale-105 active:scale-95 duration-200"
                    >
                        Start Your Project
                        <span className="material-symbols-outlined">rocket_launch</span>
                    </Link>
                    <Link
                        href="#"
                        className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 text-lg font-bold rounded-full h-14 px-8 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto hover:scale-105 active:scale-95 duration-200"
                    >
                        Schedule a Call
                        <span className="material-symbols-outlined">calendar_month</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
