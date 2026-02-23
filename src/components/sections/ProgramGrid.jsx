import { motion } from "framer-motion";
import {
    Users,
    UserCheck,
    Sparkles,
    HandHelping,
    Accessibility,
    Home,
    ArrowUpRight
} from "lucide-react";

export function ProgramGrid() {
    const programs = [
        {
            id: "tiv",
            title: "Teens in Vogue (TIV)",
            tagline: "Defining identity. Developing leaders.",
            description: "Empowering teenagers to navigate identity and build foundational leadership skills.",
            icon: <Users className="w-8 h-8" />,
            color: "bg-blue-500",
        },
        {
            id: "gatekeepers",
            title: "The Gatekeepers",
            tagline: "Raising men of character.",
            description: "Mentoring boys into responsible young men driven by integrity and purpose.",
            icon: <UserCheck className="w-8 h-8" />,
            color: "bg-indigo-600",
        },
        {
            id: "liones",
            title: "LIONES",
            tagline: "Empowering girls to lead.",
            description: "Providing girls with tools and confidence to break barriers and lead with excellence.",
            icon: <Sparkles className="w-8 h-8" />,
            color: "bg-amber-500",
        },
        {
            id: "lots",
            title: "Love on the Street",
            tagline: "Bringing relief to the community.",
            description: "Our direct-action arm providing essential relief and materials to those in need.",
            icon: <HandHelping className="w-8 h-8" />,
            color: "bg-rose-500",
        },
        {
            id: "accessible",
            title: "Touch the Accessible",
            tagline: "Inclusion is a commitment.",
            description: "Advocating for disability inclusion and providing direct support to ensure equal opportunity.",
            icon: <Accessibility className="w-8 h-8" />,
            color: "bg-teal-500",
        },
        {
            id: "blue-city",
            title: "The Blue City",
            tagline: "Sustainable housing for impact.",
            description: "An ethical estate model designed to fund our humanitarian work sustainably.",
            icon: <Home className="w-8 h-8" />,
            color: "bg-primary",
        },
    ];

    return (
        <section id="programs" className="py-24 bg-background">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full font-bold text-xs uppercase tracking-widest mb-6"
                    >
                        Our 6 Impact Pillars
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl mb-6">
                        Strategy Meets <span className="text-secondary italic">Spirituality.</span>
                    </h2>
                    <p className="text-charcoal/70 text-lg font-serif">
                        We focus on six core areas of impact, each designed to transform lives
                        and build a more inclusive, empowered society across Nigeria and beyond.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white rounded-3xl p-8 border border-primary/5 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                        >
                            {/* Card Background Glow */}
                            <div className={`absolute -right-12 -top-12 w-32 h-32 ${program.color} opacity-5 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />

                            <div className="relative z-10">
                                <div className={`w-16 h-16 ${program.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:rotate-6 transition-transform duration-500`}>
                                    {program.icon}
                                </div>

                                <h3 className="text-2xl font-display text-primary mb-2 group-hover:text-secondary transition-colors">
                                    {program.title}
                                </h3>
                                <p className="text-secondary font-bold text-xs uppercase tracking-widest mb-4">
                                    {program.tagline}
                                </p>
                                <p className="text-charcoal/70 text-sm leading-relaxed mb-8 font-serif">
                                    {program.description}
                                </p>

                                <button className="flex items-center gap-2 text-primary font-bold text-sm tracking-wide group/btn">
                                    Learn More
                                    <div className="w-8 h-8 rounded-full border border-primary/10 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-all">
                                        <ArrowUpRight size={16} />
                                    </div>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* The Blue City Highlight Portal */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-primary rounded-[40px] p-10 md:p-16 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-32" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-white text-3xl md:text-4xl mb-6">
                                The Blue City: <span className="text-secondary">Funding the Mission.</span>
                            </h3>
                            <p className="text-accent/80 text-lg leading-relaxed mb-8 font-serif">
                                A structured estate management model designed to fund humanitarian work
                                sustainably. We're building not just homes, but an ethical engine for social change.
                            </p>
                            <button className="btn-primary">
                                Explore the Model
                            </button>
                        </div>
                        <div className="aspect-video bg-white/10 rounded-3xl flex items-center justify-center border border-white/20">
                            <p className="text-white font-display text-xl opacity-50 italic">
                                Architectural Visualization Coming Soon
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
