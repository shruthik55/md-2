"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  id?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  id,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 cursor-pointer select-none";

  const variants = {
    primary:
      "bg-rich-blue text-white hover:bg-electric-blue hover:shadow-[0_0_30px_rgba(15,98,254,0.4)] active:scale-[0.98]",
    secondary:
      "bg-dark-surface text-white border border-card-border hover:border-electric-blue/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] active:scale-[0.98]",
    ghost:
      "bg-transparent text-slate-text hover:text-white border border-transparent hover:border-card-border active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  const classes = clsx(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes} id={id}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} id={id}>
      {children}
    </button>
  );
}
