export default function Capabilities() {
    const capabilities = [
        {
            title: "Fast Websites",
            description: "Lightning-fast, SEO-optimized web experiences designed for maximum conversion and user engagement.",
            icon: "bolt"
        },
        {
            title: "Automation Systems",
            description: "Custom internal tools and smart workflows bridging the gap between your data and daily operations.",
            icon: "account_tree"
        },
        {
            title: "AI Integration",
            description: "Next-generation intelligence seamlessly integrated into your products to solve complex problems and save time.",
            icon: "smart_toy"
        }
    ];

    return (
        <section className="w-full pt-16 pb-24 bg-white relative" id="capabilities">
            {/* Top gradient: blends from hero-bg into white */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#f5f6f8] to-transparent pointer-events-none" aria-hidden="true" />
            {/* Bottom gradient: blends from white into the next section's background-light */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f5f6f8] to-transparent pointer-events-none" aria-hidden="true" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900  mb-4 tracking-tight">Our Core Capabilities</h2>
                    <p className="text-slate-600  text-lg max-w-2xl mx-auto">
                        The technical advantages we bring to engineer a custom solution to help your business scale and succeed online.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {capabilities.map((cap, index) => (
                        <div
                            key={index}
                            className="border border-slate-200  rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-slate-50  group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-primary text-3xl">{cap.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900  mb-3">{cap.title}</h3>
                            <p className="text-slate-600  leading-relaxed">
                                {cap.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
