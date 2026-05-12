"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

export default function FounderLetterSection() {
  return (
    <SectionWrapper id="founder" className="section-light py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 md:p-16 rounded-[40px] shadow-2xl shadow-blue-900/10 border border-slate-100 relative overflow-hidden"
        >
          {/* Subtle logo watermark */}
          <div className="absolute top-8 right-8 text-[120px] font-bold text-slate-50 select-none pointer-events-none">
            M
          </div>

          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-teal-accent uppercase tracking-widest">
                LETTER
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                Our project management mentality <br /> and commitment to you
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 leading-relaxed text-base md:text-lg">
              <p>
                I firmly believe that in today’s AI-powered world, your product data is undoubtedly one of the most valuable assets a business can possess. Now is the best time to use this data to improve quality, better decisions, and bring innovation faster to market.
              </p>
              <p>
                However, these benefits can only be realized if you urgently repair your product data that’s scattered all over the place on spreadsheets, emails and random messaging channels. Traditional PLM and ERPs are clunky, hard to use, and your team hates them.
              </p>
              <p>
                From my experience working with hundreds of brands, the companies that have unorganized data and under performing employees face the biggest challenge from competitors leveraging AI. Consolidation is the key to effective operations, and Modozo is built to help you achieve that.
              </p>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-8 border-t border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-accent to-rich-blue border-2 border-white shadow-lg flex items-center justify-center text-white font-bold text-xl">
                  S
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg">Saral Kochar</p>
                  <p className="text-sm text-slate-500">Founder, Modozo</p>
                </div>
              </div>

              <Button variant="primary" size="lg" className="!bg-slate-900 hover:!bg-black !rounded-full px-10">
                Start Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
