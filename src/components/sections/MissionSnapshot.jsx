import { motion } from "framer-motion";
import { Target, Eye, Shield } from "lucide-react";

export function MissionSnapshot() {
    const missionItems = [
        {
            title: "Our Mission",
            description: "To restore hope and unlock the potential of vulnerable children and teens through leadership and community development.",
            icon: <Target className="w-10 h-10 text-secondary" />,
            delay: 0.1,
        },
        {
            title: "Our Vision",
            description: "A future where every child leads with purpose, and communities are transformed through strategy and spirituality.",
            icon: <Eye className="w-10 h-10 text-secondary" />,
            delay: 0.2,
        },
        {
            title: "Our Values",
            description: "Strategy with Spirituality, Global Excellence, and Unwavering Dignity for every human being we serve.",
            icon: <Shield className="w-10 h-10 text-secondary" />,
            delay: 0.3,
        },
    ];

    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32" />

            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                    {missionItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: item.delay }}
                            className="group p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="mb-6 inline-block p-4 bg-secondary/10 rounded-xl transition-colors group-hover:bg-secondary group-hover:text-white">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-display mb-4 text-primary group-hover:text-secondary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-charcoal/70 leading-relaxed font-serif">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
