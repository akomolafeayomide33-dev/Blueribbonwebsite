import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right transition-transform duration-1000" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full font-bold text-xs uppercase tracking-widest">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                            </span>
                            Founded December 2020
                        </div>

                        <h1 className="text-5xl md:text-7xl leading-[1.1] mb-6">
                            Restoring <span className="text-secondary italic">Hope.</span><br />
                            Unlocking Potential.<br />
                            Building <span className="underline decoration-secondary/30">Futures.</span>
                        </h1>

                        <p className="text-xl text-charcoal/70 leading-relaxed max-w-xl">
                            Empowering vulnerable children and teens across Nigeria through
                            leadership, inclusion, and community-driven impact.
                            Spirituality meets strategy for global excellence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="btn-primary flex items-center justify-center gap-2 group">
                                Donate Now
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </button>
                            <button className="btn-outline flex items-center justify-center gap-2">
                                Our Programs
                                <ChevronRight size={18} />
                            </button>
                        </div>

                        {/* Impact Metric Strip */}
                        <div className="pt-12 flex gap-12 border-t border-primary/10">
                            <div>
                                <p className="font-display text-3xl text-primary font-bold">2020</p>
                                <p className="text-xs uppercase tracking-widest text-charcoal/50 font-bold">Year Founded</p>
                            </div>
                            <div>
                                <p className="font-display text-3xl text-primary font-bold">6</p>
                                <p className="text-xs uppercase tracking-widest text-charcoal/50 font-bold">Impact Pillars</p>
                            </div>
                            <div>
                                <p className="font-display text-3xl text-primary font-bold">$1,600+</p>
                                <p className="text-xs uppercase tracking-widest text-charcoal/50 font-bold">Funds Invested</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                            {/* Image Placeholder with Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1547032175-7fc8c7bd15b3?q=80&w=2070&auto=format&fit=crop"
                                alt="Aspirational Nigerian Youth"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            />

                            {/* Quote Overlay */}
                            <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
                                <p className="font-serif italic text-lg leading-relaxed mb-4">
                                    "Every child deserves a future worth fighting for. We are raising a generation that leads with purpose."
                                </p>
                                <div className="h-1 w-12 bg-secondary rounded-full" />
                            </div>
                        </div>

                        {/* Floating Trust Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-secondary/20 animate-bounce-slow">
                            <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-xl text-secondary">
                                <Heart fill="currentColor" />
                            </div>
                            <div>
                                <p className="font-bold text-primary leading-none mb-1">Impact First</p>
                                <p className="text-xs text-charcoal/60">Decades of Vision</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
