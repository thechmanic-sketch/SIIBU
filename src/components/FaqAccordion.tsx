"use client";

import { useState } from "react";
import { FAQS } from "@/lib/site-data";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mt-16 max-w-2xl">
      {FAQS.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.question} className="border-b border-white/10">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between py-6 text-left"
            >
              <span className="text-lg font-medium sm:text-xl">{faq.question}</span>
              <span className="ml-4 shrink-0 text-white/50">{isOpen ? "−" : "+"}</span>
            </button>
            <div
              className="overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
              style={{ maxHeight: isOpen ? "200px" : "0px" }}
            >
              <p className="pb-6 text-sm text-white/60">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
