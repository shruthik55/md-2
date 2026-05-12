"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Palette, Users, Search, Truck, ShieldCheck, Wrench } from "lucide-react";

const stakeholders = [
  { icon: Palette, role: "Designers", desc: "Create and manage techpacks with precision and speed.", color: "#EC4899" },
  { icon: Users, role: "Brand Teams", desc: "Review, approve, and track every product decision.", color: "#3B82F6" },
  { icon: Search, role: "Sourcing Managers", desc: "Find materials, compare vendors, and manage costing.", color: "#F59E0B" },
  { icon: Truck, role: "Vendors", desc: "Receive specs, submit samples, and update production.", color: "#10B981" },
  { icon: ShieldCheck, role: "QA Teams", desc: "Track quality checkpoints across every production run.", color: "#8B5CF6" },
  { icon: Wrench, role: "Technical Teams", desc: "Manage fit, construction, and engineering specs.", color: "#06B6D4" },
];

export default function StakeholdersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="stakeholders" className="bg-gradient-to-b from-deep-navy via-[#0a1628] to-deep-navy">
      <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16 md:mb-20">
        <span className="text-xs uppercase tracking-[0.2em] text-electric-blue font-medium">Stakeholders</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tight">
          One Platform.{" "}
          <span className="text-gradient">All Stakeholders.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stakeholders.map((s, i) => (
          <motion.div
            key={s.role}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-6 !rounded-2xl group hover:border-electric-blue/25 transition-all relative overflow-hidden"
          >
            {/* Subtle color glow */}
            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity" style={{ backgroundColor: s.color, filter: "blur(40px)" }} />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${s.color}15`, border: `1px solid ${s.color}25` }}>
                  <s.icon size={20} style={{ color: s.color }} />
                </div>
                <h3 className="text-base font-semibold text-white">{s.role}</h3>
              </div>
              <p className="text-sm text-slate-text leading-relaxed">{s.desc}</p>

              {/* Connection indicator */}
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: s.color }} />
                <span className="text-[10px] text-slate-text uppercase tracking-wider">Connected</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
