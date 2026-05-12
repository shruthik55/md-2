"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Zap, Eye, Users, Layers } from "lucide-react";

const impacts = [
  { icon: Zap, title: "Faster Time to Market", value: 40, suffix: "%", prefix: "", desc: "reduction in product development cycle time", color: "#3B82F6" },
  { icon: Eye, title: "Complete Visibility", value: 100, suffix: "%", prefix: "", desc: "real-time visibility across all operations", color: "#10B981" },
  { icon: Users, title: "Better Coordination", value: 60, suffix: "%", prefix: "", desc: "fewer communication gaps between teams", color: "#8B5CF6" },
  { icon: Layers, title: "Structured Operations", value: 3, suffix: "x", prefix: "", desc: "faster decision-making with structured workflows", color: "#F59E0B" },
];

export default function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="impact">
      <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16 md:mb-20">
        <span className="text-xs uppercase tracking-[0.2em] text-electric-blue font-medium">Business Impact</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tight">
          The Impact on{" "}
          <span className="text-gradient">Your Business</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {impacts.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass-card p-6 !rounded-2xl text-center group hover:border-electric-blue/25 transition-all relative overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: item.color, filter: "blur(60px)" }} />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: `${item.color}12`, border: `1px solid ${item.color}20` }}>
                <item.icon size={22} style={{ color: item.color }} />
              </div>

              <div className="text-4xl md:text-5xl font-bold mb-2 animate-counter-glow">
                <AnimatedCounter target={item.value} suffix={item.suffix} prefix={item.prefix} className="text-white" />
              </div>

              <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-xs text-slate-text leading-relaxed">{item.desc}</p>

              {/* Mini chart */}
              <div className="mt-4 flex items-end justify-center gap-1 h-8">
                {[...Array(7)].map((_, j) => (
                  <motion.div
                    key={j}
                    className="w-2 rounded-full"
                    style={{ backgroundColor: `${item.color}30` }}
                    initial={{ height: 4 }}
                    whileInView={{ height: 4 + (j / 6) * 28 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + j * 0.08 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
