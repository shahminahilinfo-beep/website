"use client";

import Image from "next/image";
import Link from "next/link";

export default function RetailShowcase() {
  return (
    <section
      className="
        relative isolate overflow-hidden
        py-12 lg:py-16
        bg-gradient-to-b from-[#0B0713] via-[#0B0713] to-[#120A1E]
        text-white
      "
    >
      {/* purple glow blobs */}
      <div className="pointer-events-none absolute -left-48 top-10 h-72 w-72 rounded-full bg-[#DC00F9]/20 blur-[90px] -z-10" />
      <div className="pointer-events-none absolute -right-48 top-20 h-72 w-72 rounded-full bg-[#6800EE]/20 blur-[90px] -z-10" />
      <div className="pointer-events-none absolute left-1/2 -bottom-24 h-96 w-96 -translate-x-1/2 rounded-full bg-[#6800EE]/10 blur-[140px] -z-10" />

      <div className="mx-auto max-w-[1160px] px-4 sm:px-6">
        {/* Heading row */}
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-white text-[24px] sm:text-[32px] md:text-[36px] leading-[1.15] font-semibold">
              Empowering Sales Journeys
              <br />
              through Robx Retail CRM
              <br />
              Trusted. Scalable. Smart.
            </h2>
          </div>

          <p className="text-[#9B96B0] text-[14px] leading-6 lg:col-span-5">
            Unlock new digital possibilities with Robx retail your trusted
            partner for innovation and success.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-12 [grid-auto-rows:auto] lg:[grid-auto-rows:300px]">
          {/* SALES AUTOMATION */}
          <div className="sm:col-span-2 lg:col-span-6 rounded-[12px] bg-[linear-gradient(98.61deg,#D700FA_-6.86%,#28093B_58.51%,#6800EE_120.22%)] p-[1px]">
            <div className="relative overflow-hidden rounded-[12px] h-[220px] sm:h-[260px] lg:h-full">
              <Image
                src="/images/dashboarddesign.png"
                alt="Sales Automation dashboard"
                fill
                className="object-contain object-center"
                priority
              />
              <div className="absolute inset-0 bg-[#1B0B35]/65" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="text-white font-extrabold tracking-tight text-[20px] sm:text-[26px] md:text-[28px]">
                  Sales Automation
                </span>
              </div>
            </div>
          </div>

          {/* RESPONSIVE / SCALABLE */}
          <div className="sm:col-span-1 lg:col-span-3 rounded-[12px] border border-white/10 bg-[#120A1E] p-5">
            <div className="flex min-h-[220px] sm:min-h-[260px] lg:min-h-0 h-full flex-col">
              <div>
                <div className="mb-3">
                  <Image
                    src="/icons/crown.png"
                    alt="crown"
                    width={22}
                    height={22}
                  />
                </div>
                <h3 className="text-white font-medium text-[18px] leading-snug">
                  Responsive and Scalable
                  <br />
                  Solutions
                </h3>
                <p className="mt-3 text-[#9B96B0] text-[13px] leading-6">
                  Our solutions adapt seamlessly to your needs, ensuring
                  flexibility, efficiency, and long-term growth. Our solutions
                  adapt seamlessly to your needs.
                </p>
              </div>
              <Link
                href="#"
                className="mt-auto inline-flex w-max items-center justify-center rounded-full bg-[#DC00F9] px-4 py-2 text-xs font-semibold text-white hover:opacity-90 uppercase tracking-[0.12em] [font-family:var(--font-outfit)]"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* PREMIUM SUPPORT */}
          <div className="relative sm:col-span-1 lg:col-span-3 lg:row-span-2 overflow-hidden rounded-[12px] border border-white/10 shadow-[0_40px_140px_#0A0118]">
            <Image
              src="/images/premiumsupport.jpg"
              alt="Premium Support"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0A0118]/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0118] via-[#0A0118]/85 to-transparent" />
            <div className="relative z-[1] p-6 text-center flex h-full min-h-[260px] lg:min-h-0 flex-col items-center justify-center gap-3">
              <div className="grid place-items-center mb-1">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#DC00F9]">
                  <Image
                    src="/icons/phone.png"
                    alt="phone"
                    width={18}
                    height={18}
                  />
                </div>
              </div>
              <h3 className="text-white text-[15px] font-medium">
                Premium Support
              </h3>
              <p className="text-[11px] text-white/70">000-00000000</p>
              <Image
                src="/icons/fullrate.png"
                alt="rating"
                width={92}
                height={14}
                className="opacity-95"
              />
              <p className="text-[12px] leading-5 text-white/85 px-3">
                Explore our comprehensive help desk services, ensuring seamless
                IT support and swift resolution to keep your operations running
                smoothly.
              </p>
              <Link
                href="#"
                className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#DC00F9] px-4 py-2 text-[11px] font-semibold text-white hover:bg-white/5 uppercase tracking-[0.12em] [font-family:var(--font-outfit)]"
              >
                <Image
                  src="/icons/contactusicon.png"
                  alt="contact"
                  width={14}
                  height={14}
                />
                Contact Us
              </Link>
            </div>
          </div>

          {/* 4.9+ RATING */}
          <div className="relative sm:col-span-1 lg:col-span-3 overflow-hidden rounded-[12px] border border-white/10 bg-[#120A1E]">
            <Image
              src="/images/imageborder.png"
              alt=""
              fill
              className="pointer-events-none rounded-[12px] object-cover opacity-80"
            />
            <div className="relative p-6 text-center">
              <div className="text-white text-[24px] font-bold">4.9+</div>
              <div className="mt-1 text-[11px] tracking-[0.22em] text-white/80">
                CLIENT RATINGS
              </div>
              <div className="mt-3 flex items-center justify-center">
                <Image
                  src="/icons/rate.png"
                  alt="stars"
                  width={96}
                  height={16}
                />
              </div>
              <p className="mt-4 text-[12px] leading-5 text-[#9B96B0]">
                Our 4.9+ client rating highlights exceptional service quality,
                authentic reviews, and strong trust from satisfied businesses
              </p>
            </div>
          </div>

          {/* ADS */}
          <div className="relative sm:col-span-2 lg:col-span-6 overflow-hidden rounded-[12px] border border-white/10">
            <div className="relative h-[220px] sm:h-[260px] lg:h-full">
              <Image
                src="/images/ads.png"
                alt="Ads dashboard"
                fill
                className="object-contain object-center rounded-[12px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
