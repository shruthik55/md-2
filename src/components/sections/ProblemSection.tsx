"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { FileSpreadsheet, MessageCircle, FolderOpen, Clock, Users } from "lucide-react";

const painPoints = [
  { icon: FileSpreadsheet, title: "Excel Sheets Everywhere", desc: "Techpacks, BOMs, and specs scattered across dozens of spreadsheets." },
  { icon: MessageCircle, title: "WhatsApp Approvals", desc: "Critical decisions buried in chat threads that no one can trace." },
  { icon: FolderOpen, title: "Scattered Files", desc: "Design assets, specs, and revisions lost across drives and emails." },
  { icon: Clock, title: "Delayed Production", desc: "Missed deadlines because no one sees the full timeline." },
  { icon: Users, title: "Disconnected Teams", desc: "Designers, vendors, and QA teams working in silos." },
];

const chaosNodes = [
  { x: 30, y: 20, label: "Email", color: "#EF4444" },
  { x: 70, y: 15, label: "Excel", color: "#F59E0B" },
  { x: 20, y: 55, label: "WhatsApp", color: "#22C55E" },
  { x: 80, y: 50, label: "Drive", color: "#3B82F6" },
  { x: 50, y: 80, label: "Slack", color: "#8B5CF6" },
  { x: 45, y: 35, label: "???", color: "#64748B" },
];

function ChaosVisualization() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative h-[350px] md:h-[400px]">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        {isInView && (
          <>
            <motion.line x1="120" y1="80" x2="200" y2="140" stroke="#EF4444" strokeWidth="1" strokeDasharray="4 6" initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ duration: 1, delay: 0.5 }} />
            <motion.line x1="280" y1="60" x2="200" y2="140" stroke="#F59E0B" strokeWidth="1" strokeDasharray="4 6" initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ duration: 1, delay: 0.7 }} />
            <motion.line x1="80" y1="220" x2="200" y2="140" stroke="#22C55E" strokeWidth="1" strokeDasharray="4 6" initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ duration: 1, delay: 0.9 }} />
            <motion.line x1="320" y1="200" x2="200" y2="140" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 6" initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ duration: 1, delay: 1.1 }} />
          </>
        )}
      </svg>
      {chaosNodes.map((node, i) => (
        <motion.div key={node.label} className="absolute" style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1, x: [0, i % 2 === 0 ? 5 : -5, 0], y: [0, i % 2 === 0 ? -3 : 3, 0] } : {}}
          transition={{ opacity: { duration: 0.5, delay: i * 0.15 }, scale: { duration: 0.5, delay: i * 0.15 }, x: { duration: 3, repeat: Infinity, ease: "easeInOut" }, y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" } }}
        >
          <div className="glass-card px-3 py-2 !rounded-lg text-xs font-medium" style={{ borderColor: `${node.color}33` }}>
            <div className="w-1.5 h-1.5 rounded-full inline-block mr-1.5" style={{ backgroundColor: node.color }} />
            {node.label}
          </div>
        </motion.div>
      ))}
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 1 }}>
        <div className="relative">
          <div className="absolute -inset-4 bg-red-500/10 rounded-full animate-ping" />
          <div className="w-10 h-10 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 text-lg font-bold">!</div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="problem">
      <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16 md:mb-20">
        <span className="text-xs uppercase tracking-[0.2em] text-electric-blue font-medium">The Problem</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tight">
          Why Fashion Still Feels <span className="text-gradient">Slower Than It Should</span>
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-4">
          {painPoints.map((point, i) => (
            <motion.div key={point.title} initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex items-start gap-4 glass-card p-4 !rounded-xl group">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 group-hover:bg-red-500/15 transition-colors">
                <point.icon size={18} className="text-red-400" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">{point.title}</h4>
                <p className="text-xs text-slate-text mt-1 leading-relaxed">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <ChaosVisualization />
      </div>
    </SectionWrapper>
  );
}
