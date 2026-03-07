export default function Portfolio() {
    const projects = [
        {
            title: "Landing Page Website",
            category: "Web Development",
            description: "A high-conversion marketing site built with Next.js and Tailwind CSS.",
            icon: "web"
        },
        {
            title: "E-commerce Website",
            category: "Web Development",
            description: "A scalable digital storefront featuring seamless checkout and inventory management.",
            icon: "storefront"
        },
        {
            title: "AI Assistant Chatbot",
            category: "AI Integration",
            description: "An intelligent customer support bot capable of handling natural language queries 24/7.",
            icon: "forum"
        },
        {
            title: "Automation System",
            category: "Business Automation",
            description: "A custom internal tool workflow processing data between CRM and billing systems automatically.",
            icon: "webhook"
        },
        {
            title: "Blog Website",
            category: "Web Development",
            description: "An SEO-optimized content management platform designed for fast organic growth.",
            icon: "article"
        }
    ];

    return (
        <section className="w-full py-24 bg-white relative" id="portfolio">
            {/* Bottom gradient: blends into Process section's background-light */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f5f6f8] to-transparent pointer-events-none" aria-hidden="true" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900  mb-4 tracking-tight">Our Work</h2>
                    <p className="text-slate-600  text-lg max-w-2xl mx-auto">
                        Explore a selection of our recent projects across web development, automation, and AI.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group border border-slate-200  rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 bg-slate-50 "
                        >
                            <div className="h-48 w-full bg-slate-200  relative overflow-hidden flex items-center justify-center">
                                {/* Abstract visualization for the project since we don't have screenshots */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                                <span className="material-symbols-outlined text-6xl text-slate-400  group-hover:scale-110 transition-transform duration-500">{project.icon}</span>
                            </div>
                            <div className="p-6">
                                <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">{project.category}</div>
                                <h3 className="text-xl font-bold text-slate-900  mb-2">{project.title}</h3>
                                <p className="text-slate-600  text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
