import { motion } from "framer-motion";

export function Roadmap() {
    const milestones = [
        {
            period: "2026",
            phase: "Short-Term",
            title: "Foundation & Launch",
            tasks: [
                "Legal registration & board formalization",
                "Launch of disability program",
                "Implementation of governance models",
            ],
            current: true,
        },
        {
            period: "2027–2028",
            phase: "Mid-Term",
            title: "Expansion & Pilot",
            tasks: [
                "Multi-state program expansion",
                "Pilot housing project launch",
                "Global partnership formalization",
            ],
            current: false,
        },
        {
            period: "2029–2030",
            phase: "Long-Term",
            title: "Pan-African Scaling",
            tasks: [
                "Scaling housing network",
                "Expansion across Africa",
                "Global impact benchmarking",
            ],
            current: false,
        },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl mb-6">Strategic Roadmap</h2>
                    <p className="text-charcoal/60 font-serif max-w-2xl mx-auto">
                        Our vision is long-term. We are committed to a structured growth
                        plan that ensures sustainable impact from local roots to global reach.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-primary/10 hidden lg:block" />

                    <div className="space-y-12 lg:space-y-0">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="relative flex flex-col lg:flex-row items-center justify-between group">
                                {/* Connector Dot */}
                                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary z-10 hidden lg:block border-4 border-white shadow-md group-hover:scale-150 transition-transform duration-300" />

                                {/* Content Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    className={`w-full lg:w-[45%] ${index % 2 === 0 ? "lg:text-right lg:order-1" : "lg:text-left lg:order-2"}`}
                                >
                                    <div className={`p-8 rounded-3xl border border-primary/5 shadow-sm transition-all duration-300 hover:shadow-xl ${milestone.current ? "bg-primary/5 border-primary/10" : "bg-white"}`}>
                                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${milestone.current ? "bg-secondary text-white" : "bg-primary/10 text-primary"}`}>
                                            {milestone.phase}
                                        </div>
                                        <h3 className="text-2xl font-display text-primary mb-2">{milestone.period}: {milestone.title}</h3>
                                        <ul className={`space-y-3 font-serif text-charcoal/70 ${index % 2 === 0 ? "lg:ml-auto" : ""}`}>
                                            {milestone.tasks.map((task, i) => (
                                                <li key={i} className={`flex items-start gap-3 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                                                    <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                                                    <span>{task}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* Spacer Side */}
                                <div className="hidden lg:block lg:w-[45%] lg:order-3" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
