"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Scissors, Ruler, Shirt, Factory } from "lucide-react";

const phases = [
  { icon: Scissors, label: "Design & Develop", desc: "From sketch to techpack with complete specifications." },
  { icon: Ruler, label: "Sample & Iterate", desc: "Track sample rounds and iterate until perfection." },
  { icon: Shirt, label: "Source & Produce", desc: "Connect with vendors and manage production runs." },
  { icon: Factory, label: "Track & Deliver", desc: "Monitor production and ensure on-time delivery." },
];

export default function IndustrySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="industry" className="bg-gradient-to-b from-deep-navy via-[#0a1628] to-deep-navy">
      <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16 md:mb-20">
        <span className="text-xs uppercase tracking-[0.2em] text-electric-blue font-medium">Industry Focus</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tight">
          Built Specifically{" "}
          <span className="text-gradient">for Fashion</span>
        </h2>
        <p className="text-slate-text mt-6 max-w-2xl mx-auto">
          Not another generic project management tool. Modozo is purpose-built for the unique workflows of fashion and apparel production.
        </p>
      </motion.div>

      {/* Fashion Production Lifecycle */}
      <div className="relative max-w-4xl mx-auto">
        {/* Connecting line */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-electric-blue/20 to-transparent hidden md:block" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center relative"
            >
              {/* Node */}
              <div className="glass-card p-6 !rounded-2xl hover:border-electric-blue/25 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-electric-blue/15 transition-colors">
                  <phase.icon size={24} className="text-electric-blue" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{phase.label}</h3>
                <p className="text-xs text-slate-text leading-relaxed">{phase.desc}</p>
              </div>

              {/* Step number */}
              <div className="mt-4 flex justify-center">
                <span className="w-8 h-8 rounded-full bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center text-xs font-mono text-electric-blue">
                  {i + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Industry stats */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1, duration: 0.6 }} className="mt-20 glass-card p-8 !rounded-2xl max-w-3xl mx-auto">
        <div className="grid grid-cols-3 gap-8 text-center">
          {[
            { label: "Fashion Workflows", value: "End-to-End" },
            { label: "Built for Apparel", value: "100%" },
            { label: "Industry-Specific", value: "Purpose-Built" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-lg md:text-xl font-bold text-gradient">{stat.value}</p>
              <p className="text-xs text-slate-text mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
