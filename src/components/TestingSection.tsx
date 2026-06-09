"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const testCategories = [
  {
    title: "Yield Performance",
    description: "Multi-year, multi-location trials comparing new hybrids against industry benchmarks across diverse growing conditions.",
    metric: "+15%",
    metricLabel: "Average Yield Gain",
  },
  {
    title: "Stress Tolerance",
    description: "Rigorous drought, heat, and cold stress testing ensures our hybrids perform when conditions are toughest.",
    metric: "98%",
    metricLabel: "Survival Rate",
  },
  {
    title: "Disease Resistance",
    description: "Inoculated field trials and greenhouse screening protect against the most devastating corn pathogens.",
    metric: "40+",
    metricLabel: "Diseases Tested",
  },
  {
    title: "Agronomic Fit",
    description: "From sandy soils to heavy clay, we test emergence, standability, and harvestability across all soil types.",
    metric: "200+",
    metricLabel: "Test Locations",
  },
];

export default function TestingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <section
      ref={containerRef}
      id="testing"
      className="relative min-h-screen py-32 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-corn-gold/20 to-transparent" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-corn-gold/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Image */}
          <motion.div
            style={{ y, rotate }}
            className="relative lg:sticky lg:top-32"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/5_Genetically_Modified_Corn_Research.png"
                alt="Corn Research"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-corn-dark via-transparent to-corn-dark/30" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-8 left-8 right-8"
              >
                <div className="bg-corn-dark/80 backdrop-blur-md border border-white/10 p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs tracking-wider uppercase text-corn-gold">
                      Live Testing Data
                    </span>
                  </div>
                  <div className="text-2xl font-display font-bold text-corn-cream">
                    2.4M+ Test Plots
                  </div>
                  <div className="text-sm text-corn-cream/50 mt-1">
                    Evaluated globally in 2024
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.3em] uppercase text-corn-gold/80 font-medium block mb-4"
            >
              The Testing
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6"
            >
              Proven in the
              <span className="text-gradient block mt-2">Field</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-corn-cream/60 text-lg leading-relaxed mb-12"
            >
              Before a Pioneer hybrid ever reaches your farm, it has endured years
              of the most rigorous testing in the industry. We don't just test for
              yield — we test for real-world performance under real-world pressure.
            </motion.p>

            <div className="space-y-6">
              {testCategories.map((category, i) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group border border-white/10 p-6 hover:border-corn-gold/30 transition-all duration-500 hover:bg-white/[0.02]"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-display font-bold text-corn-cream group-hover:text-corn-gold transition-colors">
                      {category.title}
                    </h3>
                    <div className="text-right shrink-0">
                      <div className="text-2xl font-display font-bold text-corn-gold">
                        {category.metric}
                      </div>
                      <div className="text-[10px] tracking-wider uppercase text-corn-cream/40">
                        {category.metricLabel}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-corn-cream/50 leading-relaxed">
                    {category.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
