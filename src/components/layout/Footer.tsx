"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const footerLinks = {
  COMPANY: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Customer Stories", href: "#" },
  ],
  LEGAL: [
    { label: "Privacy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  "USE CASES": [
    { label: "Footwear", href: "#" },
    { label: "Handbags and accessories", href: "#" },
    { label: "Workwear & Uniforms", href: "#" },
  ],
};

const socialLinks = [
  { label: "Youtube", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-deep-navy border-t border-white/5 overflow-hidden" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          {/* Brand & Socials */}
          <div className="lg:col-span-2 space-y-8">
            <Image
              src="/logo4.png"
              alt="Modozo"
              width={180}
              height={54}
              className="h-12 w-auto"
            />
            <p className="text-slate-text text-sm leading-relaxed max-w-sm">
              The Operating System for Fashion Supply Chains. Built to bring clarity and speed to your production workflow.
            </p>
            <div className="flex flex-col gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-slate-text text-sm hover:text-teal-accent transition-colors w-max"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-text text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mosaic Grid */}
        <div className="relative mb-12">
           <div className="mosaic-grid">
              {/* Mosaic tiles */}
              <div className="mosaic-item col-span-2 row-span-2">
                 <Image src="/mosaic.png" alt="Fashion texture" fill className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="mosaic-item bg-teal-accent/20" />
              <div className="mosaic-item bg-rich-blue/30" />
              <div className="mosaic-item bg-purple-500/10" />
              <div className="mosaic-item col-span-2 bg-gradient-to-br from-teal-accent/40 to-rich-blue/40 flex items-center justify-center">
                 <span className="text-[40px] font-bold text-white/20">M</span>
              </div>
              <div className="mosaic-item bg-slate-800/50" />
              <div className="mosaic-item bg-teal-accent/10" />
              <div className="mosaic-item bg-white/5" />
              <div className="mosaic-item row-span-2 bg-rich-blue/20" />
              <div className="mosaic-item col-span-2">
                 <Image src="/factory.png" alt="Factory texture" fill className="object-cover opacity-40 grayscale" />
              </div>
           </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-text text-xs">
            © {new Date().getFullYear()} Modozo. Made in Brooklyn ❤️
          </p>
          <div className="flex items-center gap-6 text-[10px] text-slate-text/50 uppercase tracking-widest font-bold">
             <span>Fashion-Tech</span>
             <span>•</span>
             <span>Supply Chain OS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
