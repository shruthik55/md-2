"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-b from-deep-navy via-[#0a1628] to-deep-navy" id="demo">
      {/* Background effects */}
      <div className="animated-grid opacity-50" />
      <div className="glow-orb w-[600px] h-[600px] bg-rich-blue/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Floating workflow nodes in background */}
      {[
        { x: 10, y: 20, label: "Techpack" },
        { x: 85, y: 30, label: "Approved" },
        { x: 15, y: 70, label: "Vendor" },
        { x: 80, y: 75, label: "Production" },
        { x: 50, y: 10, label: "Sample" },
      ].map((node, i) => (
        <motion.div
          key={node.label}
          className="absolute glass-card px-3 py-1.5 !rounded-lg text-[10px] text-slate-text/40 hidden md:block"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          animate={{ y: [0, -10, 0], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        >
          {node.label}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Launch Collections Faster —{" "}
            <span className="text-gradient">With Less Chaos</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-text mt-6 max-w-2xl mx-auto leading-relaxed">
            Bring your entire fashion workflow into one connected system built for speed, clarity, and control.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button variant="primary" size="lg" href="#" id="cta-demo">
            Book a Demo
            <ArrowRight size={18} />
          </Button>
          <Button variant="secondary" size="lg" href="#contact" id="cta-talk">
            <MessageCircle size={18} />
            Talk to Us
          </Button>
        </motion.div>

        {/* Trust line */}
        <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }} className="text-xs text-slate-text/50 mt-8">
          No credit card required · Free demo · Setup in minutes
        </motion.p>
      </div>
    </section>
  );
}
