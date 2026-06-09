"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HarvestSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);

  return (
    <section
      ref={containerRef}
      id="harvest"
      className="relative min-h-screen py-32 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-corn-gold/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-corn-dark via-transparent to-corn-dark" />
      </div>

      <motion.div style={{ scale }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.3em] uppercase text-corn-gold/80 font-medium block mb-4"
          >
            The Result
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Harvest
            <span className="text-gradient block mt-2">the Future</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-corn-cream/60 text-lg max-w-2xl mx-auto mb-12"
          >
            The culmination of years of research, breeding, and testing — a harvest
            that doesn't just meet expectations, but redefines what's possible.
          </motion.p>
        </div>

        {/* Main Image */}
        <motion.div
          style={{ y }}
          className="relative mb-24"
        >
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/images/2_Golden_Hour_Glow_Majestic_Sunset.png"
              alt="Golden Corn Field at Harvest"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-corn-dark via-corn-dark/30 to-transparent" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-8 left-8 md:bottom-16 md:left-16"
            >
              <div className="text-xs tracking-wider uppercase text-corn-gold mb-2">
                Ready for Harvest
              </div>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-corn-cream leading-tight">
                Maximum Yield.<br />
                Minimum Risk.
              </h3>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "350M", label: "Acres Planted" },
            { value: "140", label: "Countries Served" },
            { value: "95%", label: "Farmer Satisfaction" },
            { value: "100+", label: "Years of Innovation" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center p-6 border border-white/10 hover:border-corn-gold/30 transition-colors duration-300"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-corn-gold mb-2">
                {stat.value}
              </div>
              <div className="text-xs tracking-wider uppercase text-corn-cream/40">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
