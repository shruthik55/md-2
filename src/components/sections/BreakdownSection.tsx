"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const breakdownSteps = [
  { label: "Design", broken: true },
  { label: "Approval", broken: true },
  { label: "Sourcing", broken: true },
  { label: "Vendor", broken: false },
  { label: "Sample", broken: false },
  { label: "Production", broken: false },
];

export default function BreakdownSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="breakdown" className="bg-gradient-to-b from-deep-navy via-[#0a1628] to-deep-navy">
      <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16 md:mb-20">
        <span className="text-xs uppercase tracking-[0.2em] text-electric-blue font-medium">The Breakdown</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tight">
          It&apos;s Not Just Delay —{" "}
          <span className="text-gradient">It&apos;s Lack of Structure</span>
        </h2>
        <p className="text-slate-text mt-6 max-w-2xl mx-auto">
          When every stage of your supply chain operates independently, delays compound and visibility disappears.
        </p>
      </motion.div>

      {/* Workflow Transformation Visual */}
      <div className="relative max-w-4xl mx-auto">
        {/* Broken State */}
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 }} className="mb-12">
          <p className="text-xs text-red-400/80 uppercase tracking-widest mb-6 text-center font-medium">Before — Disconnected</p>
          <div className="flex items-center justify-between gap-2 md:gap-4">
            {breakdownSteps.map((step, i) => (
              <div key={`broken-${step.label}`} className="flex items-center gap-2 md:gap-4 flex-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="glass-card !rounded-lg px-2 py-2 md:px-4 md:py-3 text-center flex-1 border-red-500/20 hover:border-red-500/30"
                >
                  <span className="text-[10px] md:text-xs text-slate-text">{step.label}</span>
                </motion.div>
                {i < breakdownSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="text-red-500/40 text-xs hidden md:block"
                  >
                    ✕
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 1, delay: 1.2 }} className="section-divider mb-12" />

        {/* Connected State */}
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 1.5 }}>
          <p className="text-xs text-electric-blue/80 uppercase tracking-widest mb-6 text-center font-medium">After — Connected with Modozo</p>
          <div className="flex items-center justify-between gap-2 md:gap-4">
            {breakdownSteps.map((step, i) => (
              <div key={`connected-${step.label}`} className="flex items-center gap-2 md:gap-4 flex-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1.7 + i * 0.1 }}
                  className="glass-card !rounded-lg px-2 py-2 md:px-4 md:py-3 text-center flex-1 border-electric-blue/30 hover:border-electric-blue/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]"
                >
                  <span className="text-[10px] md:text-xs text-white">{step.label}</span>
                </motion.div>
                {i < breakdownSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 2.0 + i * 0.1, type: "spring" }}
                    className="w-4 h-[2px] bg-gradient-to-r from-electric-blue to-soft-blue hidden md:block rounded-full"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom statements */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 2.5, duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
        {[
          { num: "01", text: "Every approval leaves a trail" },
          { num: "02", text: "Every file connects to a workflow" },
          { num: "03", text: "Every stakeholder sees the same timeline" },
        ].map((item) => (
          <div key={item.num} className="text-center">
            <span className="text-electric-blue font-mono text-sm">{item.num}</span>
            <p className="text-sm text-slate-text mt-2">{item.text}</p>
          </div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
