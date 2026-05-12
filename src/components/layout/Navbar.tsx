"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Workflow", href: "#workflow" },
  { label: "Features", href: "#features" },
  { label: "Impact", href: "#impact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-deep-navy/90 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
        id="navbar"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="flex items-center h-20 md:h-24">
            {/* Logo - Pushed Left */}
            <div className="flex-1 flex justify-start">
              <a href="#" className="flex items-center gap-2" id="nav-logo">
                <Image
                  src="/logo4.png"
                  alt="Modozo"
                  width={200}
                  height={60}
                  className="h-12 md:h-14 w-auto"
                  priority
                />
              </a>
            </div>

            {/* Desktop Links - Truly Centered */}
            <div className="hidden lg:flex items-center justify-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-5 py-2 text-sm font-medium text-slate-text hover:text-white transition-all duration-200 rounded-lg hover:bg-white/5"
                  id={`nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA - Pushed Right */}
            <div className="flex-1 hidden md:flex items-center justify-end gap-4">
              <Button variant="ghost" size="md" href="#contact" className="text-white hover:bg-white/5" id="nav-talk">
                Sign In
              </Button>
              <Button variant="primary" size="md" href="#demo" className="!bg-teal-accent hover:!bg-teal-accent/90 px-8" id="nav-demo">
                Get a demo
              </Button>
            </div>

            {/* Mobile Menu Toggle - Only visible on small screens */}
            <div className="md:hidden flex-1 flex justify-end">
              <button
                className="text-white p-2"
                onClick={() => setMobileOpen(!mobileOpen)}
                id="nav-mobile-toggle"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-deep-navy/95 backdrop-blur-xl pt-20"
          >
            <div className="flex flex-col items-center gap-4 p-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-slate-text hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 w-full max-w-xs mt-4">
                <Button
                  variant="secondary"
                  href="#contact"
                  className="w-full justify-center"
                >
                  Talk to Us
                </Button>
                <Button
                  variant="primary"
                  href="#demo"
                  className="w-full justify-center"
                >
                  Book a Demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
