"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const stats = [
  { number: "50+", label: "Years of Research" },
  { number: "200K+", label: "Genetic Markers" },
  { number: "99.9%", label: "Accuracy Rate" },
  { number: "6", label: "Continents Tested" },
];

export default function ScienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

  return (
    <section
      ref={containerRef}
      id="science"
      className="relative min-h-screen py-32 overflow-hidden"
    >
      {/* Background DNA particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-corn-green/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-corn-gold/10 rounded-full blur-[100px]" />
      </div>

      <motion.div style={{ opacity, scale }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.3em] uppercase text-corn-gold/80 font-medium block mb-4"
            >
              The Science
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Unlocking the
              <span className="text-gradient block mt-2">Genetic Code</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-corn-cream/60 text-lg leading-relaxed mb-8"
            >
              Pioneer scientists analyze over 200,000 genetic markers to identify
              the perfect combination of traits. Our advanced molecular breeding
              techniques allow us to precisely select for yield, drought tolerance,
              disease resistance, and nutrient efficiency — all at the DNA level.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="border border-white/10 p-6 hover:border-corn-gold/30 transition-colors duration-300"
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-corn-gold mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs tracking-wider uppercase text-corn-cream/40">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            style={{ y }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/4_Corn_Dna_Over_1_031_Royalty_Free.png"
                alt="Corn DNA Research"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-corn-dark via-transparent to-transparent" />

              {/* Floating label */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-8 left-8 right-8"
              >
                <div className="bg-corn-dark/80 backdrop-blur-md border border-white/10 p-4">
                  <div className="text-xs tracking-wider uppercase text-corn-gold mb-1">
                    Molecular Breeding
                  </div>
                  <div className="text-sm text-corn-cream/70">
                    Advanced DNA sequencing for precision trait selection
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
