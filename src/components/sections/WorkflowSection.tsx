"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { FileText, CheckCircle2, Search, Handshake, Package, Factory } from "lucide-react";

const workflowSteps = [
  { icon: FileText, title: "Techpack Creation", desc: "Structured digital techpacks with measurements, BOMs, and artwork — all in one place.", color: "#3B82F6", status: "Created" },
  { icon: CheckCircle2, title: "Brand Review & Approval", desc: "Route techpacks for approval with tracked comments, versions, and sign-offs.", color: "#10B981", status: "Approved" },
  { icon: Search, title: "Sourcing Handoff", desc: "Seamlessly transfer approved specs to sourcing teams with full context.", color: "#F59E0B", status: "Sourced" },
  { icon: Handshake, title: "Vendor Coordination", desc: "Share specs, negotiate samples, and track vendor responses in real-time.", color: "#8B5CF6", status: "Confirmed" },
  { icon: Package, title: "Sample Tracking", desc: "Track sample iterations from submission to approval with visual status.", color: "#EC4899", status: "Tracking" },
  { icon: Factory, title: "Production Tracking", desc: "Monitor production milestones, quantities, and delivery timelines.", color: "#06B6D4", status: "On Track" },
];

function WorkflowCard({ step, index }: { step: typeof workflowSteps[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex-shrink-0 w-[300px] md:w-[340px]"
    >
      {/* Step number */}
      <div className="text-[80px] font-bold text-white/[0.03] absolute -top-6 -left-2 select-none leading-none">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="glass-card p-6 !rounded-2xl relative group hover:border-electric-blue/30 transition-all h-full">
        {/* Status badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${step.color}15`, border: `1px solid ${step.color}25` }}>
            <step.icon size={22} style={{ color: step.color }} />
          </div>
          <span className="text-[10px] uppercase tracking-widest font-medium px-3 py-1 rounded-full" style={{ color: step.color, backgroundColor: `${step.color}10`, border: `1px solid ${step.color}20` }}>
            {step.status}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
        <p className="text-sm text-slate-text leading-relaxed">{step.desc}</p>

        {/* Mini dashboard preview */}
        <div className="mt-4 pt-4 border-t border-card-border">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-1.5 rounded-full flex-1 bg-white/5 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: step.color }}
                initial={{ width: 0 }}
                animate={isInView ? { width: `${60 + index * 7}%` } : {}}
                transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
              />
            </div>
            <span className="text-[10px] text-slate-text">{60 + index * 7}%</span>
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, j) => (
              <div key={j} className="h-6 flex-1 rounded bg-white/[0.03]" style={j <= index ? { backgroundColor: `${step.color}10` } : {}} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WorkflowSection() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const connectorWidth = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-b from-deep-navy via-[#060e1a] to-deep-navy overflow-hidden" id="workflow">
      <div className="glow-orb w-[600px] h-[600px] bg-rich-blue/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div ref={titleRef} initial={{ opacity: 0, y: 30 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.2em] text-electric-blue font-medium">The Workflow</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tight">
            From Concept to <span className="text-gradient">Production</span>
          </h2>
          <p className="text-slate-text mt-6 max-w-2xl mx-auto">Every step connected. Every status visible. One continuous flow.</p>
        </motion.div>

        {/* Connector Line */}
        <div className="relative mb-8 hidden md:block">
          <div className="h-[2px] bg-white/5 rounded-full mx-8">
            <motion.div className="h-full bg-gradient-to-r from-electric-blue via-rich-blue to-soft-blue rounded-full" style={{ width: connectorWidth }} />
          </div>
        </div>

        {/* Scrollable Cards */}
        <div className="overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-6 w-max">
            {workflowSteps.map((step, i) => (
              <WorkflowCard key={step.title} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* Flow arrows on desktop */}
        <div className="hidden md:flex justify-center gap-2 mt-8">
          {workflowSteps.map((step, i) => (
            <div key={`dot-${i}`} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: step.color, opacity: 0.6 }} />
              {i < workflowSteps.length - 1 && <div className="w-8 h-[1px] bg-white/10" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
