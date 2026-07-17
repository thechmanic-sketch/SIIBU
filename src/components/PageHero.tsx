"use client";

import { motion } from "framer-motion";
import SplitReveal from "@/components/SplitReveal";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  palette,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  palette: string;
  align?: "left" | "center";
}) {
  return (
    <section
      className={`relative flex min-h-[60vh] w-full flex-col justify-end overflow-hidden bg-gradient-to-br px-6 pb-16 pt-32 text-white sm:px-16 sm:pb-24 ${palette} ${
        align === "center" ? "items-center text-center" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"
      />

      <div className={`relative z-10 ${align === "center" ? "max-w-2xl" : "max-w-3xl"}`}>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="block text-xs tracking-[0.4em] text-white/60 uppercase"
        >
          {eyebrow}
        </motion.span>

        <SplitReveal
          as="h1"
          className="mt-3 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl md:text-8xl"
        >
          {title}
        </SplitReveal>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`mt-6 text-sm text-white/70 sm:text-base ${align === "center" ? "mx-auto max-w-md" : "max-w-md"}`}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
