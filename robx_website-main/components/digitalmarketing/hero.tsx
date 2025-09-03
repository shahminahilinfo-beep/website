"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-32">
      {/* Base Layers */}
      <div className="pointer-events-none absolute inset-0 -z-50 bg-[#0E0613]" />
      <div
        className="pointer-events-none absolute inset-0 -z-40
        bg-[radial-gradient(120%_140%_at_88%_50%,rgba(214,62,241,0.82)_0%,rgba(214,62,241,0.62)_20%,rgba(166,35,252,0.45)_34%,rgba(117,0,255,0.32)_48%,rgba(117,0,255,0.16)_60%,transparent_72%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-30
        bg-[radial-gradient(70%_85%_at_98%_55%,rgba(117,0,255,0.55)_0%,rgba(117,0,255,0.28)_36%,transparent_68%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-20
        bg-[linear-gradient(90deg,rgba(14,6,19,0.95)_0%,rgba(14,6,19,0.85)_20%,rgba(14,6,19,0.70)_35%,rgba(14,6,19,0.50)_50%,rgba(14,6,19,0.25)_65%,rgba(14,6,19,0)_78%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10
        bg-[radial-gradient(55%_70%_at_10%_55%,rgba(14,6,19,0.80)_0%,rgba(14,6,19,0.45)_40%,transparent_72%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(140%_120%_at_50%_15%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_100%)]" />

      {/* Content */}
      <div className="mx-auto flex min-h-[78vh] max-w-[1100px] flex-col items-center justify-center px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-5 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-[#D63EF1] px-3 py-1 text-[10px] sm:text-xs font-medium text-white"
        >
          WELCOME TO AGENCY
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="font-outfit font-semibold tracking-[-0.043em]
          text-[30px] leading-[34px]
          sm:text-[44px] sm:leading-[48px]
          md:text-[56px] md:leading-[56px]
          lg:text-[64px] lg:leading-[64px]
          text-white"
        >
          Fuel Your Business
          <br />
          <span className="text-[#DC00F9]">with Smart Marketing</span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mt-5 sm:mt-6 max-w-3xl font-inter text-[14px] sm:text-[15px] md:text-[16px] leading-7 text-white text-center"
        >
          We help brands scale with smart, data driven strategies tailored to
          their goals. From building strong brand awareness to boosting
          conversions, we craft customized digital marketing solutions that
          deliver measurable results. Whether you're a startup or an established
          business, our expertise keeps you ahead in today’s fast paced digital
          world.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="mt-10 sm:mt-14 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          {/* GET STARTED */}
          <Link
            href="#get-started"
            className="w-full sm:w-auto rounded-full px-5 py-2.5 md:px-6 md:py-3
              font-outfit font-medium text-[12px] md:text-[13px]
              tracking-[1.6px] md:tracking-[2px] uppercase
              text-white transition-opacity hover:opacity-90
              shadow-[0_10px_30px_rgba(117,0,255,0.35)]"
            style={{
              backgroundImage:
                "linear-gradient(145deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.00) 38%, rgba(0,0,0,0.28) 72%), linear-gradient(100deg, #D63EF1 0%, #7500FF 100%)",
            }}
          >
            GET STARTED
          </Link>

          {/* VIEW ACHIEVEMENTS */}
          <Link
            href="#achievements"
            className="relative group inline-flex items-center justify-center gap-2 rounded-full
              w-full sm:w-auto px-5 py-2.5 md:px-6 md:py-3
              font-outfit font-medium text-[12px] md:text-[13px]
              tracking-[1.6px] md:tracking-[2px] uppercase
              text-white/90 bg-transparent"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full p-[2px]"
              style={{
                background: "linear-gradient(100deg, #D63EF1 0%, #7500FF 100%)",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
            <img
              src="/icons/badge.png"
              alt="badge icon"
              className="h-4 w-4 opacity-90"
            />
            VIEW ACHIEVEMENTS
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
