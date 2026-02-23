import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function Counter({ value, suffix = "", duration = 2000 }) {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.1 }
        );

        if (nodeRef.current) {
            observer.observe(nodeRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            const nextValue = Math.floor(value * percentage);
            setCount(nextValue);

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [hasStarted, value, duration]);

    return (
        <span ref={nodeRef}>
            {count.toLocaleString()}
            {suffix}
        </span>
    );
}

export function ImpactCounter() {
    const stats = [
        { label: "Major Outreaches", value: 2, suffix: "+", color: "text-secondary" },
        { label: "Funds Invested", value: 1600, suffix: "+ $", color: "text-primary" },
        { label: "Core Pillars", value: 6, suffix: "", color: "text-secondary" },
        { label: "Year Founded", value: 2020, suffix: "", color: "text-primary" },
    ];

    return (
        <section id="impact" className="py-20 bg-primary overflow-hidden relative">
            {/* Background Decorative Accents */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 border border-white rounded-full -translate-y-1/2" />
                <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] border border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="space-y-4"
                        >
                            <h3 className="text-4xl md:text-6xl font-display text-white">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </h3>
                            <p className="text-sm md:text-base uppercase tracking-widest font-bold text-accent/60">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
