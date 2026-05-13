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
    <section id={id} className="section-light py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={clsx(
<<<<<<< Updated upstream
          "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",
=======
          "grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-center",
>>>>>>> Stashed changes
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
                <span>{tag}</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                {title}
              </h2>
              <p className="text-lg md:text-xl text-slate-text leading-relaxed">
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
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-teal-accent/10 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-teal-accent" />
                  </div>
                  <span className="text-base font-medium text-slate-text">{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={clsx("relative w-full lg:w-[115%]", reverse ? "lg:order-1 lg:-ml-[15%]" : "lg:order-1 lg:-mr-[15%]")}
          >
            <div className="relative z-10 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden group">
              <Image 
                src={image} 
                alt={title} 
                width={1400} 
                height={1000} 
                className="w-full h-auto transition-transform duration-1000 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
