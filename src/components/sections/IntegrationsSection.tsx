"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Plug, Database, Network } from "lucide-react";

const integrations = [
  { 
    icon: Plug,
    title: "Connect your entire stack", 
    desc: "Seamlessly hook-up Modozo with your existing ERPs, PLMs, or use our direct plugins for tools like Adobe Illustrator and Excel." 
  },
  { 
    icon: Database,
    title: "Centralized Supply Chain Hub", 
    desc: "Consolidate your product data into a single source of truth. Cut manual data entry in half and keep your team hyper-focused." 
  },
  { 
    icon: Network,
    title: "Scale across any product line", 
    desc: "Whether you produce apparel, footwear, or accessories, our flexible data models adapt perfectly to your unique workflows." 
  },
];

export default function IntegrationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="integrations" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header Section */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             className="text-[12px] font-bold text-teal-accent uppercase tracking-widest"
          >
            PLATFORM
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
          >
            Overflowing with Integrations
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto"
          >
            Built by fashion supply-chain experts. By tapping into Modozo’s centralized ecosystem, your team will become instantly responsive and act swiftly, even in the face of external challenges.
          </motion.p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {integrations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center transition-shadow hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
            >
              <div className="w-12 h-12 rounded-lg border border-slate-200 flex items-center justify-center mb-6 text-teal-accent">
                <item.icon size={20} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>
              
              <p className="text-sm text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}
