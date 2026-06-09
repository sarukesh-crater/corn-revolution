"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ParticleField from "./ParticleField";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleField />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-corn-dark/20 to-corn-dark z-10 pointer-events-none" />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-corn-gold/80 mb-6 font-medium">
            Pioneer® Corn Revolutionized
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8"
        >
          <span className="block text-corn-cream">The Future of</span>
          <span className="block text-gradient glow-gold mt-2">Corn is Here</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-lg md:text-xl text-corn-cream/60 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          From the science lab to the field, discover how Pioneer is revolutionizing
          agriculture through cutting-edge breeding, rigorous testing, and a commitment
          to feeding the world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#science"
            className="group relative px-8 py-4 bg-corn-gold text-corn-dark font-semibold text-sm tracking-wider uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,162,39,0.3)]"
          >
            <span className="relative z-10">Explore the Science</span>
            <div className="absolute inset-0 bg-corn-cream transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#breeding"
            className="px-8 py-4 border border-corn-cream/20 text-corn-cream font-semibold text-sm tracking-wider uppercase hover:border-corn-gold hover:text-corn-gold transition-all duration-300"
          >
            See the Process
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-corn-cream/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-corn-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
