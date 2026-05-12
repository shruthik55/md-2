"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Palette, Package, Factory, ShieldCheck, Truck, Search } from "lucide-react";

const modules = [
  { icon: Palette, label: "Design", angle: 0 },
  { icon: Search, label: "Sourcing", angle: 60 },
  { icon: Package, label: "Vendors", angle: 120 },
  { icon: ShieldCheck, label: "QA", angle: 180 },
  { icon: Factory, label: "Production", angle: 240 },
  { icon: Truck, label: "Delivery", angle: 300 },
];

export default function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="solution">
      <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16 md:mb-20">
        <span className="text-xs uppercase tracking-[0.2em] text-electric-blue font-medium">The Solution</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tight">
          What If Your Entire Workflow{" "}
          <span className="text-gradient">Worked As One?</span>
        </h2>
        <p className="text-slate-text mt-6 max-w-2xl mx-auto">One platform connecting every stage of your fashion supply chain — from design to delivery.</p>
      </motion.div>

      {/* Hub Visualization */}
      <div className="relative max-w-lg mx-auto h-[400px] md:h-[500px]">
        {/* Center Hub */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
        >
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-rich-blue to-electric-blue flex items-center justify-center shadow-[0_0_60px_rgba(15,98,254,0.3)]">
            <span className="text-white font-bold text-lg md:text-xl">M</span>
          </div>
        </motion.div>

        {/* Connector Lines SVG */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
          {modules.map((mod, i) => {
            const rad = (mod.angle * Math.PI) / 180;
            const radius = 170;
            const cx = 250 + radius * Math.cos(rad);
            const cy = 250 + radius * Math.sin(rad);
            return (
              <motion.line
                key={mod.label}
                x1="250" y1="250" x2={cx} y2={cy}
                stroke="url(#solutionGrad)"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.4 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + i * 0.15 }}
              />
            );
          })}
          <defs>
            <linearGradient id="solutionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F62FE" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>

        {/* Module Nodes */}
        {modules.map((mod, i) => {
          const rad = (mod.angle * Math.PI) / 180;
          const radius = 42;
          const left = 50 + radius * Math.cos(rad);
          const top = 50 + radius * Math.sin(rad);
          return (
            <motion.div
              key={mod.label}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${left}%`, top: `${top}%` }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 + i * 0.15, type: "spring" }}
            >
              <div className="glass-card !rounded-xl p-3 md:p-4 flex flex-col items-center gap-2 hover:border-electric-blue/40 transition-all group cursor-default">
                <div className="w-10 h-10 rounded-lg bg-electric-blue/10 flex items-center justify-center group-hover:bg-electric-blue/20 transition-colors">
                  <mod.icon size={18} className="text-electric-blue" />
                </div>
                <span className="text-[10px] md:text-xs text-white font-medium">{mod.label}</span>
              </div>
            </motion.div>
          );
        })}

        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-rich-blue/8 rounded-full filter blur-[120px] pointer-events-none" />
      </div>
    </SectionWrapper>
  );
}
