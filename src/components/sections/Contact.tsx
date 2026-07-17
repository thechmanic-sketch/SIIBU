"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ARTIST_NAME } from "@/lib/site-data";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative w-full bg-black px-6 py-24 text-white sm:px-16">
      <span className="text-xs tracking-[0.4em] text-white/50 uppercase">08 — Contact</span>
      <h2 className="mt-2 text-3xl font-semibold sm:text-5xl">Get in touch</h2>

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
            className="border-b border-white/20 bg-transparent pb-3 text-sm outline-none placeholder:text-white/40 focus:border-white"
          />
          <input
            required
            type="email"
            placeholder="Email"
            className="border-b border-white/20 bg-transparent pb-3 text-sm outline-none placeholder:text-white/40 focus:border-white"
          />
          <textarea
            required
            rows={4}
            placeholder="Message"
            className="border-b border-white/20 bg-transparent pb-3 text-sm outline-none placeholder:text-white/40 focus:border-white"
          />
          <button
            type="submit"
            className="mt-2 w-fit border border-white/30 px-6 py-3 text-xs uppercase tracking-widest transition hover:border-white"
          >
            {submitted ? "Sent ✓" : "Send Message"}
          </button>
          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-white/50"
            >
              Thanks — we&apos;ll be in touch soon.
            </motion.p>
          )}
        </form>

        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-sm uppercase tracking-widest text-white/40">Booking &amp; Press</h3>
            <p className="mt-2 text-sm text-white/70">booking@siibu.com</p>
          </div>
          <div className="mt-10 flex gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Spotify</a>
            <a href="#" className="hover:text-white">YouTube</a>
          </div>
          <p className="mt-16 text-xs text-white/30">
            © {new Date().getFullYear()} {ARTIST_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
