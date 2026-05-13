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

          {/* Right: Immersive Cinematic Visual */}
          <motion.div
<<<<<<< Updated upstream
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="relative perspective-1000"
          >
            <div className="relative z-10 w-full group flex justify-center [transform-style:preserve-3d]">
              <div className="relative overflow-hidden rounded-[32px] shadow-[20px_40px_80px_rgba(0,0,0,0.4)] border border-white/10 transition-transform duration-700 group-hover:scale-[1.02] group-hover:shadow-[30px_60px_100px_rgba(0,0,0,0.5)]">
                <Image
                  src="/hero.png"
                  alt="Modozo Product Interface"
                  width={1200}
                  height={1200}
                  className="w-full h-auto max-h-[80vh] object-contain"
                  priority
                />
              </div>
=======
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ 
              opacity: 1, 
              scale: 1
            }}
            transition={{ 
              opacity: { duration: 1.5, delay: 0.2 },
              scale: { duration: 1.5, delay: 0.2 }
            }}
            className="relative lg:w-[130%] lg:translate-x-[-5%] xl:translate-x-[-8%] flex justify-center items-center h-full min-h-[600px]"
          >
            <div className="relative w-full group flex justify-center items-center">
              {/* Multi-layered Atmospheric Depth */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-rich-blue/10 blur-[120px] rounded-full opacity-60 pointer-events-none" />
              <div className="absolute top-1/4 right-1/4 w-[60%] h-[60%] bg-teal-accent/10 blur-[90px] rounded-full mix-blend-screen pointer-events-none animate-pulse-soft" />
              <div className="absolute bottom-1/4 left-1/2 w-[40%] h-[40%] bg-[#FFD700]/5 blur-[100px] rounded-full mix-blend-overlay pointer-events-none" />
              
              {/* Edge-Fading Mask Wrapper (Shifted Right to Trim Left Edge) */}
              <div 
                className="relative z-10 w-full flex justify-center items-center overflow-visible"
                style={{
                  maskImage: 'radial-gradient(ellipse at 60% 50%, black 40%, transparent 95%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at 60% 50%, black 40%, transparent 95%)',
                }}
              >
                <Image
                  src="/photo1.png"
                  alt="Modozo Immersive Fashion Tech Interface"
                  width={1800}
                  height={1800}
                  className="w-full h-auto max-h-[85vh] lg:max-h-[95vh] lg:scale-105 object-contain brightness-[1.12] contrast-[1.08] saturate-[1.05] drop-shadow-[0_0_80px_rgba(59,130,246,0.2)] drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-transform duration-1000 group-hover:scale-[1.03]"
                  priority
                />
              </div>

              {/* Cinematic Vignette Overlay */}
              <div 
                className="absolute inset-0 z-20 pointer-events-none" 
                style={{
                  background: 'radial-gradient(circle at center, transparent 30%, var(--deep-navy) 98%)',
                  opacity: 0.4
                }}
              />
>>>>>>> Stashed changes
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
