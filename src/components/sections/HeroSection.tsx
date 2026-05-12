"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-deep-navy pt-20" id="hero">
      {/* Background Elements */}
      <div className="animated-grid opacity-40" />
      <div className="glow-orb w-[600px] h-[600px] bg-rich-blue/15 -top-40 -right-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8 lg:pr-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
            >
              Supercharge Your <br />
              <span className="text-gradient">Fashion Supply Chain</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-lg md:text-xl text-slate-text leading-relaxed max-w-xl"
            >
              The operating system for fashion brands. Seamlessly connect your product data, teams, and manufacturers on one high-fidelity platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" size="lg" href="#demo" className="!bg-teal-accent hover:!bg-teal-accent/90 px-10" id="hero-cta-demo">
                Get a demo
                <ArrowRight size={18} />
              </Button>
              <Button variant="secondary" size="lg" href="#workflow" className="px-10" id="hero-cta-how">
                See How It Works
              </Button>
            </motion.div>
          </div>

          {/* Right: AI Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10 w-full group flex justify-center">
              <Image
                src="/firefly_gemini_flash.png"
                alt="Modozo Product Interface"
                width={1200}
                height={1200}
                className="w-full h-auto max-h-[80vh] object-contain transition-transform duration-1000 group-hover:scale-105"
                priority
              />
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
