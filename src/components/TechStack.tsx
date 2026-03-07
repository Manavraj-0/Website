export default function TechStack() {
    const technologies = [
        { name: "React", icon: "code" },
        { name: "Next.js", icon: "terminal" },
        { name: "Tailwind", icon: "palette" },
        { name: "Supabase", icon: "database" },
        { name: "Vercel", icon: "cloud" },
        { name: "Stripe", icon: "payments" }
    ];

    return (
        <section className="w-full py-24 bg-white relative">
            {/* Bottom gradient: bridges into the dark CTA section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-100 to-transparent pointer-events-none" aria-hidden="true" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900  mb-4 tracking-tight">Modern Technology Stack</h2>
                    <p className="text-slate-600  text-lg max-w-2xl mx-auto">
                        We use industry-leading tools and frameworks to ensure your digital presence is robust, scalable, and secure.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-3 hover:opacity-100 transition-all duration-300 hover:scale-110 hover:text-primary cursor-pointer"
                        >
                            <span className="material-symbols-outlined text-5xl text-slate-700  transition-colors">{tech.icon}</span>
                            <span className="text-sm font-semibold text-slate-600  transition-colors">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
