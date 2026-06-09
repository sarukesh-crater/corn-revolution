"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Our scientists search the globe for unique genetic traits, screening thousands of corn varieties to find the building blocks of tomorrow's super crops.",
  },
  {
    number: "02",
    title: "Crossbreeding",
    description: "Using both traditional methods and marker-assisted selection, we combine the best traits from parent lines to create hybrids with superior performance.",
  },
  {
    number: "03",
    title: "Selection",
    description: "Advanced analytics and AI-driven models help us predict which combinations will perform best in real-world conditions before they ever touch soil.",
  },
  {
    number: "04",
    title: "Optimization",
    description: "Years of iterative refinement ensure each hybrid is optimized for specific growing regions, soil types, and climate conditions.",
  },
];

export default function BreedingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={containerRef}
      id="breeding"
      className="relative min-h-screen py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-corn-gold/20 to-transparent" />
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-corn-green/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.3em] uppercase text-corn-gold/80 font-medium block mb-4"
          >
            The Process
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Breeding
            <span className="text-gradient block mt-2">Excellence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-corn-cream/60 text-lg max-w-2xl mx-auto"
          >
            Four critical stages transform raw genetic potential into field-ready
            hybrids that consistently outperform expectations.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative"
            >
              <div className="border border-white/10 p-8 h-full hover:border-corn-gold/30 transition-all duration-500 hover:bg-white/[0.02]">
                <div className="text-5xl font-display font-bold text-corn-gold/20 group-hover:text-corn-gold/40 transition-colors duration-300 mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-display font-bold text-corn-cream mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-corn-cream/50 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Image */}
        <motion.div
          style={{ y }}
          className="relative"
        >
          <div className="relative aspect-[21/9] overflow-hidden">
            <Image
              src="/images/3_CloseUp_View_of_a_Young_Corn_Plants.png"
              alt="Young Corn Plants"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-corn-dark via-corn-dark/50 to-transparent" />

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute bottom-8 left-8 md:bottom-16 md:left-16 max-w-md"
            >
              <div className="text-xs tracking-wider uppercase text-corn-gold mb-2">
                From Lab to Field
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-corn-cream mb-3">
                Every Kernel Counts
              </h3>
              <p className="text-corn-cream/60 text-sm leading-relaxed">
                Each hybrid undergoes rigorous testing across multiple environments
                before earning the Pioneer name.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
