"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

const workflowData = [
  {
    title: "Accelerate Product Development",
    desc: "Centralize garment specs, fit approvals, sampling, and production tracking in one unified workspace so collections move from concept to production without delays.",
    image: "/photo2.png",
  },
  {
    title: "Align Every Stakeholder",
    desc: "Keep designers, merchandisers, vendors, QA teams, and production managers connected in one shared workspace.",
    image: "/photo3.png",
  },
  {
    title: "Gain Real-Time Visibility",
    desc: "Track approvals, sampling, production progress, and factory updates in real time without chasing status updates.",
    image: "/photo4.png",
  },
];

export default function InteractiveWorkflowSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SectionWrapper id="interactive-workflow" className="bg-deep-navy border-t border-white/5 !py-24">
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
        >
          Built for Fashion Teams <br className="hidden md:block" /> That Move Fast
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-text leading-relaxed max-w-2xl mx-auto"
        >
          Modozo connects design, approvals, vendors, sampling, and production into one unified workflow — helping teams eliminate delays, reduce miscommunication, and launch collections faster.
        </motion.p>
      </div>

      {/* Interactive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {workflowData.map((item, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            className={`cursor-pointer p-8 rounded-[2rem] transition-all duration-500 relative overflow-hidden group border ${
              activeIndex === index 
                ? "bg-white/[0.05] border-teal-accent/40 shadow-[0_0_40px_rgba(0,163,150,0.1)]" 
                : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10"
            }`}
          >
            {/* Active Glow */}
            <div className={`absolute -inset-10 bg-teal-accent/10 blur-[60px] rounded-full transition-opacity duration-700 ${activeIndex === index ? "opacity-100" : "opacity-0"}`} />
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-2 h-2 rounded-full transition-all duration-500 ${activeIndex === index ? "bg-teal-accent scale-125 shadow-[0_0_10px_#00A396]" : "bg-white/20"}`} />
                <span className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-colors ${activeIndex === index ? "text-teal-accent" : "text-white/40"}`}>
                  Phase 0{index + 1}
                </span>
              </div>
              
              <h3 className={`text-xl md:text-2xl font-bold mb-4 transition-all duration-500 ${activeIndex === index ? "text-white translate-x-1" : "text-white/60"}`}>
                {item.title}
              </h3>
              
              <p className={`text-sm leading-relaxed transition-all duration-500 ${activeIndex === index ? "text-slate-text" : "text-white/30"}`}>
                {item.desc}
              </p>

              {/* Selection Indicator */}
              <div className="mt-8 overflow-hidden h-[1px] w-full bg-white/5">
                <motion.div 
                  className="h-full bg-teal-accent"
                  initial={{ x: "-100%" }}
                  animate={{ x: activeIndex === index ? "0%" : "-100%" }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dynamic Visual Area */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.4/1] rounded-[2.5rem] overflow-hidden border border-white/10 bg-black/40 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 p-6 md:p-12"
            style={{
              maskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)',
            }}
          >
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-deep-navy/40 via-transparent to-transparent opacity-80 pointer-events-none" />
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-deep-navy/10 via-transparent to-deep-navy/10 pointer-events-none" />
            
            <Image
              src={itemForIndex(activeIndex).image}
              alt={itemForIndex(activeIndex).title}
              fill
              className="object-contain brightness-110 contrast-[1.05]"
              priority
            />
            
            {/* Live Indicator */}
            <div className="absolute top-8 left-8 z-20 flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="w-2 h-2 rounded-full bg-teal-accent animate-pulse shadow-[0_0_10px_#00A396]" />
              <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">System State: Active</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Decorative Light Rays */}
        <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-rich-blue/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-teal-accent/5 blur-[150px] rounded-full pointer-events-none" />
      </div>
    </SectionWrapper>
  );
}

function itemForIndex(index: number) {
  return workflowData[index] || workflowData[0];
}
