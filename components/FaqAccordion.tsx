"use client";

import { useState } from "react";
import type { FaqItem } from "./faqSchema";

export type { FaqItem };

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="pb-12 md:pb-20">
      <div className="container-legal card-legal p-6 md:p-10">
        <div className="eyebrow">Preguntas frecuentes</div>
        <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
          Lo que más nos preguntan sobre este servicio
        </h2>

        <div className="mt-6 divide-y divide-[#e6dece] border-t border-[#e6dece]">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-semibold text-[#0f2740] md:text-lg">
                    {item.question}
                  </span>
                  <span
                    className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-[#e6dece] text-lg text-[#c8a46a] transition-transform duration-200"
                    style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-base leading-7 text-[#5f6b76] md:text-[17px]">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
