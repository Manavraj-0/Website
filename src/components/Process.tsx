export default function Process() {
    const steps = [
        {
            num: "01",
            title: "Discovery",
            description: "We analyze your business goals, current tech stack, and identify areas for digital transformation."
        },
        {
            num: "02",
            title: "Design",
            description: "We craft modern UX/UI designs and architect the technical systems required to achieve your objectives."
        },
        {
            num: "03",
            title: "Development",
            description: "Our engineers build your solution using modern, scalable frameworks and rigorous testing protocols."
        },
        {
            num: "04",
            title: "Launch",
            description: "We deploy your project to production, ensure everything runs smoothly, and hand over the keys."
        }
    ];

    return (
        <section className="w-full py-24 bg-background-light relative overflow-hidden" id="process">
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 -mr-[20%] -mt-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-3xl"></div>
            {/* Bottom gradient: blends into TechStack's white background */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-[1]" aria-hidden="true" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900  mb-4 tracking-tight">Our Development Process</h2>
                    <p className="text-slate-600  text-lg max-w-2xl mx-auto">
                        A streamlined, transparent workflow designed to deliver high-quality digital products on time.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-8 left-[10%] w-[80%] h-0.5 bg-slate-200  z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="w-16 h-16 rounded-full bg-white  border-4 border-background-light  shadow-md flex items-center justify-center text-primary font-black text-xl mb-6 ring-2 ring-primary/20">
                                {step.num}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900  mb-3">{step.title}</h3>
                            <p className="text-slate-600  text-sm leading-relaxed max-w-xs">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
