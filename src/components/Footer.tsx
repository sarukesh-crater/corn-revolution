"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-2xl font-display font-bold text-corn-cream mb-4">
              PIONEER<span className="text-corn-gold">.</span>
            </div>
            <p className="text-sm text-corn-cream/50 leading-relaxed">
              Leading the corn revolution through science, innovation, and an
              unwavering commitment to farmers worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-xs tracking-wider uppercase text-corn-gold/80 mb-4">
              Explore
            </div>
            <div className="space-y-3">
              {["Science", "Breeding", "Testing", "Harvest", "Products"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-sm text-corn-cream/50 hover:text-corn-gold transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-xs tracking-wider uppercase text-corn-gold/80 mb-4">
              Connect
            </div>
            <div className="space-y-3">
              {["Find a Rep", "Contact Us", "News", "Careers"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-sm text-corn-cream/50 hover:text-corn-gold transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-xs text-corn-cream/30">
            © 2024 Pioneer. All rights reserved. A Corteva Agriscience Company.
          </div>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-corn-cream/30 hover:text-corn-cream/60 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
