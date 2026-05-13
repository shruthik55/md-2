"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Zap, Brain, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const cards = [
  {
    icon: Zap,
    title: "Accelerate Time to Market",
    desc: "Remove chaos, overworked and under-resourced staff with Modozo's smart project management system and ship faster.",
    highlight: false,
    contentTitle: "Ship faster without the chaos",
    contentDesc: "With our smart Kanban system and automated Time & Action calendars, you can visualize progress from design to shipment in real-time. Catch delays before they happen and keep your entire supply chain running like clockwork.",
    bullets: [
      "Real-time Kanban visibility",
      "Automated T&A tracking",
      "Proactive delay alerts"
    ],
    image: "/feature_accelerate.png",
  },
  {
    icon: Brain,
    title: "AI-Powered Techpacks",
    desc: "Modozo is the first AI-powered fashion platform that cuts data entry in half. Keep your team motivated and productive.",
    highlight: true,
    contentTitle: "Turn sketches into specs instantly",
    contentDesc: "Stop wasting hours on manual data entry. Our AI instantly analyzes your design sketches to generate comprehensive, production-ready techpacks in minutes, complete with POMs and graded measurements.",
    bullets: [
      "AI sketch analysis",
      "Auto-generated POMs",
      "One-click PDF exports"
    ],
    image: "/feature_techpacks.png",
  },
  {
    icon: Users,
    title: "Seamless Vendor Collaboration",
    desc: "Bring crystal clear clarity and interconnect your designers, operations, and manufacturers on a platform that scales.",
    highlight: false,
    contentTitle: "Connect your global supply chain",
    contentDesc: "No more lost emails or scattered WhatsApp messages. Centralize all vendor communications, sample approvals, and quality control directly within the platform. Everyone stays on the exact same page.",
    bullets: [
      "Centralized vendor messaging",
      "Digital sample approvals",
      "Integrated QC workflows"
    ],
    image: "/feature_vendor.png",
  },
];

export default function FeatureCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <SectionWrapper id="features-overview" className="bg-deep-navy py-12 lg:py-20 min-h-screen flex flex-col justify-center">
      <div ref={ref} className="space-y-8 lg:space-y-12 w-full">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-teal-accent font-bold tracking-widest uppercase text-sm"
          >
            Modozo
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Watch your team achieve the impossible
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-slate-text leading-relaxed max-w-3xl mx-auto"
          >
            Modozo enables you to grow your fashion brand faster by focusing on what matters most: your product. Seamlessly connect your product data, teams, and manufacturers on one AI-powered platform.
          </motion.p>
        </div>

        {/* Feature Cards Grid (Tabs) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              onClick={() => setActiveTab(i)}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
              className={`glass-card p-6 !rounded-[24px] flex flex-col items-start gap-4 group cursor-pointer transition-all duration-300 ${activeTab === i
                  ? "bg-white/[0.05] border-teal-accent/50 shadow-[0_0_30px_rgba(0,163,150,0.1)] ring-1 ring-teal-accent/50"
                  : "border-white/5 opacity-70 hover:opacity-100 hover:border-teal-accent/30"
                }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${activeTab === i ? "bg-teal-accent text-white" : "bg-white/5 text-teal-accent"
                }`}>
                <card.icon size={24} />
              </div>

              <div className="space-y-2">
                <h3 className={`text-lg font-bold transition-colors ${activeTab === i ? "text-teal-accent" : "text-white group-hover:text-teal-accent"}`}>
                  {card.title}
                </h3>
                <p className="text-sm text-slate-text leading-relaxed line-clamp-2">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanded Content Section */}
        <div className="relative pt-2 min-h-[450px] lg:min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
              transition={{ duration: 0.3 }}
              className="glass-card !p-6 md:!p-10 !rounded-[32px] border-white/10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left: Content */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {cards[activeTab].contentTitle}
                    </h3>
                    <p className="text-base text-slate-text leading-relaxed">
                      {cards[activeTab].contentDesc}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {cards[activeTab].bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-slate-text font-medium">
                        <div className="w-5 h-5 rounded-full bg-teal-accent/20 flex items-center justify-center shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-accent" />
                        </div>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <Button variant="primary" href="#demo" className="!bg-teal-accent hover:!bg-teal-accent/90">
                      Explore feature
                    </Button>
                  </div>
                </div>

                {/* Right: Image */}
                <div className="relative group rounded-[20px] overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src={cards[activeTab].image}
                    alt={cards[activeTab].contentTitle}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover aspect-[16/10] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </SectionWrapper>
  );
}
