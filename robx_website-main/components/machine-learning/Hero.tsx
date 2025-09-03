"use client";

import Link from "next/link";
import Button from "../reusable/Button";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import React from "react";

// Local, typed variants
const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -70 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const fadeRight: Variants = {
  hidden: { opacity: 0, x: 70 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero(): JSX.Element {
  return (
    <main
      style={{ backgroundImage: "url('/machine-learning/MLDL-Bg.svg')" }}
      className="bg-cover bg-bottom bg-no-repeat bg-[#16091F] w-full relative h-full lg:h-[800px] flex items-center justify-center z-10"
    >
      {/* SHAPES */}
      <div className="absolute w-full h-full bg-black/40 top-0 right-0" />
      <div className="absolute w-[592px] h-[594px] bg-[#D63EF1] rounded-full -right-60 -top-20 blur-[600px] opacity-70" />
      <div className="absolute w-[628px] h-[600px] bg-[#7500FF] rounded-full -right-96 bottom-0 blur-[600px] opacity-70" />

      <section className="relative container w-full mx-auto h-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 xl:px-12 py-16 md:py-32">
        {/* Left Text Section */}
        <motion.div
          className="text-white text-start w-full md:w-[47%] space-y-10 z-10"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-snug">
            Machine Learning &amp; Deep Learning{" "}
            <span className="text-[#DC00F9]">Development</span> Services
          </h1>

          <p className="text-base md:text-lg 2xl:text-xl max-w-2xl font-lato">
            At Robx.ai, we build intelligent solutions using machine learning and deep
            learning to help businesses make smarter decisions, automate tasks, and gain
            valuable insights from data. Our team develops custom AI models tailored to
            your goals.
          </p>

          <div className="flex flex-row items-end justify-start gap-3 md:gap-5">
            <Link href="/contact">
              <Button text="Get a Free Consultation" variant="gradient" className="border-2" />
            </Link>
          </div>
        </motion.div>

        {/* Right Graphic Section */}
        <motion.div
          className="w-full md:w-[47%] flex flex-col items-center justify-center mt-10 lg:mt-0 relative"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/machine-learning/MLDL-Hero.png"
            alt="Machine Learning and Deep Learning Development"
            width={900}
            height={700}
            className="h-auto w-full max-w-[640px]"
            priority
          />
        </motion.div>
      </section>

      {/* Shapes After Hero */}
      <div className="w-[90%] self-center bg-[#A234FD] rounded-t-full h-10 absolute -bottom-10 !rotate-180 opacity-25" />
      <div className="w-[80%] self-center bg-[#5D00F7] rounded-t-full h-14 absolute -bottom-14 !rotate-180 opacity-25" />
    </main>
  );
}
