"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Image from "next/image";

const integrations = [
  { title: "1000+ Integrations", desc: "Hook-up with your existing ERP, PLM or use our plugins with tools like Adobe Illustrator and Excel." },
  { title: "Uncover powerful insights", desc: "Modozo is the first AI powered platform that cuts data entry to half, keeping your team productive." },
  { title: "Flexible for most products", desc: "Adaptable for various product types and workflows, from apparel to accessories." },
];

export default function IntegrationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="integrations" className="bg-deep-navy py-24 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left: Content Cards */}
        <div className="space-y-6">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-accent/20 text-[10px] font-bold text-teal-accent uppercase tracking-widest"
          >
            Platform
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Overflowing with <br />
            <span className="text-gradient">Integrations</span>
          </motion.h2>

          <div className="pt-8 space-y-4">
            {integrations.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="glass-card p-6 !rounded-2xl border-white/5 hover:border-teal-accent/20 transition-all group"
              >
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-text leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: 3D Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 1, type: "spring" }}
          className="relative"
        >
          <div className="relative z-10 glass-card !p-0 !rounded-[40px] border-white/10 overflow-hidden shadow-[0_0_100px_rgba(15,98,254,0.15)]">
            <Image 
              src="/integrations.png" 
              alt="Modozo Integrations" 
              width={800} 
              height={800} 
              className="w-full h-auto"
            />
          </div>
          
          {/* Animated background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-teal-accent/20 rounded-full filter blur-[120px] animate-pulse-soft" />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
