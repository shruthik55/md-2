"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";
import clsx from "clsx";

interface WorkflowSplitProps {
  tag: string;
  title: string;
  subtitle: string;
  bullets: string[];
  image: string;
  reverse?: boolean;
  id?: string;
  emoji?: string;
}

export default function WorkflowSplit({
  tag,
  title,
  subtitle,
  bullets,
  image,
  reverse = false,
  id,
  emoji = "⚡",
}: WorkflowSplitProps) {
  return (
    <section id={id} className="section-light py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={clsx(
          "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center",
          reverse && "lg:flex-row-reverse"
        )}>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={clsx("space-y-8", reverse && "lg:order-2")}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-teal-accent uppercase tracking-widest">
                <span>{emoji} {tag}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                {title}
              </h2>
              <p className="text-lg text-slate-text leading-relaxed">
                {subtitle}
              </p>
            </div>

            <ul className="space-y-4">
              {bullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: reverse ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 w-5 h-5 rounded-md bg-teal-accent/10 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-teal-accent" />
                  </div>
                  <span className="text-sm font-medium text-slate-text">{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={clsx("relative", reverse && "lg:order-1")}
          >
            <div className="relative z-10 bg-white p-2 rounded-3xl shadow-2xl shadow-blue-900/10 border border-slate-200 overflow-hidden group">
              <Image 
                src={image} 
                alt={title} 
                width={800} 
                height={600} 
                className="rounded-2xl w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Background decorative shape */}
            <div className={clsx(
              "absolute -inset-4 bg-teal-accent/5 rounded-3xl -z-10",
              reverse ? "translate-x-4 translate-y-4" : "-translate-x-4 translate-y-4"
            )} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
