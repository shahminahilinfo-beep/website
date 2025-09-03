// src/components/Faq.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Be_Vietnam_Pro, Inter } from "next/font/google";

// Fonts
const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

type FaqItem = { q: string; a: string };

const faqs: FaqItem[] = [
  {
    q: "What services does Robx AI offer?",
    a: "Robx AI provides complete digital marketing solutions including Social Media Marketing, SEO Optimization, Digital Consultancy, Email Marketing, Google Ads, and Online Presence Analysis to help businesses grow online.",
  },
  {
    q: "How can Robx AI help my business? ",
    a: "We design data-driven strategies that boost brand awareness, improve customer engagement, increase conversions, and ensure sustainable business growth.",
  },
  {
    q: " Is there a free consultation available?",
    a: "Yes. Robx AI offers a free initial consultation to understand your business goals and recommend the most effective digital marketing approach.",
  },
  {
    q: "Can I customize the services according to my business requirements?",
    a: "Absolutely. All our services can be tailored to match your brand, budget, and timeline, ensuring you get solutions that perfectly fit your business needs.",
  },
  {
    q: "How does Robx AI ensure quality in digital marketing campaigns?",
    a: "We follow data-driven methods, continuous optimization, and transparent reporting to make sure every campaign delivers maximum results.",
  },
  {
    q: "What industries do you work with?",
    a: "Robx AI works across diverse industries including e-commerce, SaaS, retail, education, professional services, and many more.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="relative overflow-hidden bg-[#0B0713] px-4 sm:px-6 py-16 sm:py-20">
      {/* Purple blurred ellipse background (scaled for mobile) */}
      <div
        className="pointer-events-none absolute -left-24 top-64 h-[260px] w-[260px] rounded-full blur-[300px] sm:-left-[106px] sm:top-[248px] sm:h-[378px] sm:w-[378px]"
        style={{ backgroundColor: "#431964" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1160px]">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12">
          {/* Left column */}
          <div className="order-1 md:order-none">
            <p className={`${beVietnam.className} mb-2 text-sm text-[#DC00F9]`}>
              FAQs
            </p>

            <h2
              className={`${beVietnam.className} mb-4 text-[28px] sm:text-[34px] font-semibold leading-[1.15] text-white`}
            >
              Still Have Qs?
            </h2>

            <p
              className={`${inter.className} max-w-[420px] text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] text-[#B0B0B0]`}
            >
              Find answers to common questions about our products, hosting,
              domains, and support.
            </p>

            <button
              className={`${beVietnam.className} mt-7 inline-flex items-center gap-2 rounded-[30px] px-5 py-2.5 sm:px-6 sm:py-3 text-[12px] sm:text-sm text-white`}
              style={{
                background:
                  "linear-gradient(90deg, #D700FA -6.86%, #28093B 58.51%, #6800EE 120.22%)",
              }}
              aria-label="View Help Center"
            >
              VIEW HELP CENTER
              <Image
                src="/icons/bicon.png"
                alt="help center icon"
                width={18}
                height={18}
              />
            </button>
          </div>

          {/* Right column (FAQs) */}
          <div className="space-y-4">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className="rounded-lg border border-white/20"
                  role="region"
                  aria-expanded={isOpen}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className={`flex w-full items-center justify-between px-4 sm:px-5 py-4 sm:py-5 text-left ${inter.className}`}
                    aria-controls={`faq-panel-${i}`}
                  >
                    <span className="text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] font-normal text-white">
                      <span className="mr-2 inline-block min-w-[2.5ch] text-white">
                        0{i + 1}.
                      </span>
                      {item.q}
                    </span>
                    <span
                      className={`text-white transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    >
                      ⌄
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-panel-${i}`}
                      className={`px-4 sm:px-5 pb-4 pt-0 ${inter.className}`}
                    >
                      <p className="text-[14px] leading-[24px] text-[#B0B0B0]">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
