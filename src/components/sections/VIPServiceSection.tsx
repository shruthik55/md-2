"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Headphones, DatabaseZap, Users } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

const services = [
  {
    icon: Headphones,
    title: "Expert Design Guidance",
    desc: "Work closely with our fashion specialists to refine your collection with precision and trend-focused insights.",
    visual: "/photo35.png"
  },
  {
    icon: DatabaseZap,
    title: "Fast Production Support",
    desc: "Accelerate your production process with dedicated assistance from our experienced manufacturing team.",
    visual: "/photo36.png"
  },
  {
    icon: Users,
    title: "Dedicated VIP Assistance",
    desc: "Receive personalized support and seamless communication throughout every stage of your fashion journey.",
    visual: "/photo37.png"
  },
];

export default function VIPServiceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="vip-service" className="bg-[#0B1120] py-12 md:py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-sm font-bold text-teal-accent uppercase tracking-widest"
          >
            {/* START NOW */}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Get VIP service from Modozo experts
          </motion.h2>
        </div>

        {/* 3-Column Tab Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 glass-card !p-0 !rounded-3xl border border-white/10 overflow-hidden mb-10"
          onMouseLeave={() => setActiveIndex(0)}
        >
          {services.map((item, i) => (
            <button
              key={item.title}
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => setActiveIndex(i)}
              onFocus={() => setActiveIndex(i)}
              className={clsx(
                "p-6 md:p-8 flex flex-col items-start transition-all duration-300 ease-out text-left group relative",
                activeIndex === i ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"
              )}
            >
              {/* Active Indicator */}
              {activeIndex === i && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 border-2 border-teal-accent/30 rounded-none z-10 pointer-events-none"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              )}

              <div className={clsx(
                "w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300",
                activeIndex === i
                  ? "bg-teal-accent text-white shadow-[0_0_20px_rgba(0,163,150,0.4)] scale-110"
                  : "bg-teal-accent/10 border border-teal-accent/20 text-teal-accent group-hover:bg-teal-accent/20"
              )}>
                <item.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className={clsx(
                "text-lg font-bold mb-2 transition-colors duration-300",
                activeIndex === i ? "text-white" : "text-slate-200"
              )}>
                {item.title}
              </h3>
              <p className={clsx(
                "text-sm leading-relaxed transition-colors duration-300",
                activeIndex === i ? "text-slate-300" : "text-slate-500"
              )}>
                {item.desc}
              </p>
            </button>
          ))}
        </div>

        {/* Dynamic Image Display */}
        <div className="relative w-full max-w-3xl mx-auto px-4 md:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              <Image
                src={services[activeIndex].visual}
                alt={services[activeIndex].title}
                width={1600}
                height={900}
                className="w-full h-auto display-block"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
