export default function Services() {
    const services = [
        {
            title: "Website Development",
            description: "Custom SaaS landing pages, marketing sites, and full-stack web applications built on modern frameworks.",
            icon: "web",
            featured: true
        },
        {
            title: "Technical SEO",
            description: "Architecture optimization, semantic markup, and speed enhancements to rank higher organically.",
            icon: "query_stats"
        },
        {
            title: "Automation Systems",
            description: "Connecting your existing tools via APIs or building bespoke workflows that eliminate manual data entry.",
            icon: "route"
        },
        {
            title: "Mobile App Development",
            description: "Cross-platform mobile experiences that bring your digital products directly to your users' devices.",
            icon: "smartphone"
        }
    ];

    return (
        <section className="w-full py-24 bg-background-light hero-bg relative" id="services">
            {/* Bottom gradient: blends into Portfolio's white background */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" aria-hidden="true" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900  mb-4 tracking-tight">Our Services</h2>
                        <p className="text-slate-600  text-lg">
                            We specialize in the foundational pillars of modern digital infrastructure to transform how your business operates.
                        </p>
                    </div>
                    <button className="hidden md:flex bg-white  hover:bg-slate-50  text-slate-800  border border-slate-200  font-bold rounded-full h-12 px-8 transition-colors shadow-sm items-center gap-2">
                        View All Services
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`glass-panel p-8 flex flex-col gap-6 rounded-2xl relative overflow-hidden group ${service.featured ? 'border-primary/30 ring-1 ring-primary/20' : ''}`}
                        >
                            <div className="relative z-10 w-12 h-12 rounded-xl bg-white  shadow flex items-center justify-center text-slate-700  group-hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                            </div>
                            <div className="relative z-10">
                                <h3 className="font-bold text-slate-900  text-lg mb-3">{service.title}</h3>
                                <p className="text-slate-600  text-sm leading-relaxed">{service.description}</p>
                            </div>

                            {/* Highlight Background for Featured */}
                            {service.featured && (
                                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
