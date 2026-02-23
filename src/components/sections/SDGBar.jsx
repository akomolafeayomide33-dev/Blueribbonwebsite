import { motion } from "framer-motion";

export function SDGBar() {
    const sdgs = [
        { goal: 3, name: "Good Health & Well-being", color: "bg-[#4C9F38]" },
        { goal: 4, name: "Quality Education", color: "bg-[#C5192D]" },
        { goal: 5, name: "Gender Equality", color: "bg-[#FF3A21]" },
        { goal: 10, name: "Reduced Inequalities", color: "bg-[#DD1367]" },
        { goal: 11, name: "Sustainable Cities", color: "bg-[#FD9D24]" },
        { goal: 16, name: "Peace & Justice", color: "bg-[#00689D]" },
    ];

    return (
        <section className="py-12 bg-accent/30 border-y border-primary/5">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="shrink-0">
                        <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Global Credibility</h4>
                        <p className="font-display text-xl">U.N. SDG Alignment</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                        {sdgs.map((sdg, index) => (
                            <motion.div
                                key={sdg.goal}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className={`w-12 h-12 md:w-16 md:h-16 ${sdg.color} text-white flex items-center justify-center rounded-lg shadow-sm transition-transform group-hover:scale-110 cursor-help font-bold text-xl md:text-2xl`}>
                                    {sdg.goal}
                                </div>

                                {/* Tooltip */}
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-primary text-white text-[10px] font-bold rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-wider">
                                    {sdg.name}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-right hidden lg:block max-w-[200px]">
                        <p className="text-xs text-charcoal/50 italic leading-snug">
                            Commitment to the United Nations Sustainable Development Goals for 2030.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
