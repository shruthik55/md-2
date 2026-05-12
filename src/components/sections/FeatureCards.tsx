"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Zap, Brain, Users } from "lucide-react";

const cards = [
  {
    icon: Zap,
    title: "Speed Up your Growth",
    desc: "Remove chaos, overworked and under-resourced staff with Modozo smart project management system and grow rapidly.",
    highlight: false,
  },
  {
    icon: Brain,
    title: "AI for your Modern Workforce",
    desc: "Modozo is the first AI-powered fashion platform that cuts data entry to half. Keeping your team motivated and productive.",
    highlight: true,
  },
  {
    icon: Users,
    title: "Empower your Manufacturers",
    desc: "Bring crystal clear clarity and interconnect your designers, operations, and manufacturers on a platform that scales.",
    highlight: false,
  },
];

export default function FeatureCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="features-overview" className="bg-deep-navy py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`glass-card p-8 !rounded-3xl flex flex-col items-start gap-6 group hover:border-teal-accent/30 transition-all duration-500 ${
              card.highlight ? "bg-white/[0.03] border-teal-accent/20" : ""
            }`}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${
              card.highlight ? "bg-teal-accent text-white" : "bg-white/5 text-teal-accent"
            }`}>
              <card.icon size={28} />
            </div>
            
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white group-hover:text-teal-accent transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-slate-text leading-relaxed">
                {card.desc}
              </p>
            </div>
            
            {card.highlight && (
              <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-bold text-teal-accent uppercase tracking-widest">
                <span>Featured Solution</span>
                <div className="w-10 h-[1px] bg-teal-accent/30" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
