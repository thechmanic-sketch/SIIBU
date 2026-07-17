"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ARTIST_NAME } from "@/lib/site-data";
import SplitReveal from "@/components/SplitReveal";

export default function Contact({ showHeading = true }: { showHeading?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative w-full bg-ink px-6 py-24 text-sand sm:px-16">
      {showHeading && (
        <>
          <span className="text-xs tracking-[0.4em] text-ochre uppercase">08 — Contact</span>
          <SplitReveal as="h2" className="mt-2 text-3xl font-semibold sm:text-5xl">
            Get in touch
          </SplitReveal>
        </>
      )}

      <div className="mt-12 grid gap-16 md:grid-cols-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="flex flex-col gap-6"
        >
          <input
            required
            type="text"
            placeholder="Name"
            className="border-b border-sand/20 bg-transparent pb-3 text-sm outline-none placeholder:text-sand/40 focus:border-ochre"
          />
          <input
            required
            type="email"
            placeholder="Email"
            className="border-b border-sand/20 bg-transparent pb-3 text-sm outline-none placeholder:text-sand/40 focus:border-ochre"
          />
          <textarea
            required
            rows={4}
            placeholder="Message"
            className="border-b border-sand/20 bg-transparent pb-3 text-sm outline-none placeholder:text-sand/40 focus:border-ochre"
          />
          <button
            type="submit"
            className="mt-2 w-fit border border-terracotta px-6 py-3 text-xs uppercase tracking-widest text-terracotta transition hover:bg-terracotta hover:text-ink"
          >
            {submitted ? "Sent ✓" : "Send Message"}
          </button>
          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-sand/50"
            >
              Thanks — we&apos;ll be in touch soon.
            </motion.p>
          )}
        </form>

        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-sm uppercase tracking-widest text-sand/40">Booking &amp; Press</h3>
            <p className="mt-2 text-sm text-sand/70">booking@siibu.com</p>
          </div>
          <div className="mt-10 flex gap-6 text-sm text-sand/60">
            <a href="#" className="hover:text-ochre">Instagram</a>
            <a href="#" className="hover:text-ochre">Spotify</a>
            <a href="#" className="hover:text-ochre">YouTube</a>
          </div>
          <p className="mt-16 text-xs text-sand/30">
            © {new Date().getFullYear()} {ARTIST_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
