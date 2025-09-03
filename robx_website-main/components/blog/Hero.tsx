"use client";
import Link from "next/link";
import Button from "../reusable/Button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const fadeLeft = {
  hidden: { opacity: 0, x: -70 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 70 },
  visible: { opacity: 1, x: 0 },
};

export default function Hero(): JSX.Element {
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  // framer-motion: triggerOnce -> once
  const leftInView = useInView(leftRef, { once: true, amount: 0.3 });
  const rightInView = useInView(rightRef, { once: true, amount: 0.3 });

  return (
    <main className="w-full relative h-full lg:h-[800px] bg-no-repeat flex items-center justify-center bg-[#110817] ">
      {/* Glows */}
      <div className="absolute w-[780px] h-[720px] bg-[#4C1766]  rounded-full -left-[-139px] -bottom-[134px] blur-[300px] opacity-80" />
      <div className="absolute w-[427px] h-[415px] bg-[#535EE0]  rounded-full -left-60 bottom-[134px] blur-[200px] opacity-70" />
      <div className="absolute w-[628px] h-[600px] bg-[#7500FF]  rounded-full -right-96 bottom-[75px] blur-[300px] opacity-80" />
      <div className="absolute w-[592px] h-[594px] bg-[#2AA0F0]  rounded-full -right-10 -top-20 blur-[300px] opacity-80" />
      {/* Vector Shapes */}
      <div className="bg-[#d18cfe] w-48 h-48 md:w-64 md:h-64 rounded-full blur-[100px] absolute -z-10 top-5 left-5 opacity-50" />
      <div className="bg-[#f569dd] w-48 h-48 md:w-64 md:h-64 rounded-full blur-[100px] absolute -z-10 bottom-5 right-5 opacity-50" />
      <section className="relative container w-full mx-auto h-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 xl:px-12 py-16 md:py-32 ">
        {/* Left */}
        <motion.div
          ref={leftRef}
          variants={fadeLeft}
          initial="hidden"
          animate={leftInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white text-start w-full md:w-1/2 space-y-10 z-10 "
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-snug ">
            Latest <span className="text-[#DC00F9]">News &amp; Articles</span>
          </h1>
          <p className="text-base md:text-lg 2xl:text-xl max-w-2xl font-lato">
            Make property investment more accessible and efficient with
            tokenization offering fractional ownership, faster liquidity and
            global reach through blockchain technology.
          </p>
          <div className="flex flex-row items-end justify-start gap-3 md:gap-5">
            <Link href="/services">
              <Button
                text="Discover our Services"
                variant="gradient"
                className="border-2"
              />
            </Link>
          </div>
        </motion.div>
        {/* Right */}
        <motion.div
          ref={rightRef}
          variants={fadeRight}
          initial="hidden"
          animate={rightInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-[40%] 2xl:w-[37%] flex flex-col items-center justify-center mt-12 lg:mt-0 relative"
        >
          <Image
            src="/blog/BlogHero.png"
            alt="AI Bot Graphic"
            className="z-10 h-full w-auto"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="absolute w-[200px] h-[00px] lg:w-[400px] lg:h-[400px] bg-[#f569dd] rounded-full blur-[200px] -z-0" />
        </motion.div>
      </section>
      {/* After Hero Waves */}
      <div className="w-[90%] self-center bg-[#A234FD] rounded-t-full h-10 absolute -bottom-10 !rotate-180 opacity-25" />
      <div className="w-[80%] self-center bg-[#5D00F7] rounded-t-full h-14 absolute -bottom-14 !rotate-180 opacity-25" />
    </main>
  );
}
