"use client";

import HeadingHighlight from "../reusable/HeadingHighlight";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { tabs as tabsData } from "../../constant/data";

// Local, strongly-typed variants (avoid ../animations typing issues)
const titleVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 },
  },
};

// Light typing for tabs
type TabItem = {
  title: string;
  content: string;
  details: string[];
};

export default function WhatOurCompanyCanDo(): JSX.Element {
  const tabs = (tabsData ?? []) as TabItem[];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.section
      className="relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16 overflow-hidden bg-[#130B18] pt-32 lg:pt-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Decorative shapes */}
      <div
        className="absolute -right-28 top-60 hidden md:block opacity-80 pointer-events-none select-none"
        style={{
          backgroundImage: "url('/home/faq/FaqBg.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          width: "70vw",
          height: "70vh",
        }}
      />
      <div className="bg-black/40 absolute top-0 left-0 h-full w-full" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute top-60 -left-40 opacity-70" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute bottom-60 -right-40 opacity-70" />

      {/* Main Content */}
      <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col justify-center items-center gap-16 text-white relative z-10">
        {/* Title */}
        <motion.div
          className="relative flex flex-col items-center justify-center max-w-5xl text-center gap-7"
          variants={titleVariants}
        >
          <HeadingHighlight
            text="What Our"
            highlightText=" Machine Learning / Deep Learning"
            subText="Company Can Do"
          />
          <p className="text-base md:text-lg xl:px-4 font-lato">
            At Robx.ai, we design intelligent ML and Deep Learning systems that
            automate processes, predict outcomes, and drive smarter decisions.
            Whether it&apos;s optimizing workflows or uncovering hidden
            insights, our solutions are tailored to meet your business goals.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="w-full flex flex-col gap-10 items-center justify-center relative z-10"
          variants={fadeSlideUp}
        >
          {/* Tab Headers */}
          <div className="w-full flex gap-4 flex-wrap md:justify-center max-w-5xl overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`py-2 px-3 text-sm md:text-base lg:text-lg text-white border border-[#4F4F4F] rounded-lg whitespace-nowrap transition-all ${
                  activeIndex === index
                    ? "bg-[#242424] shadow-md"
                    : "hover:text-pink-400"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {tabs[activeIndex] && (
            <div
              key={activeIndex}
              className="gradient-border-wrapper bg-[#671399] text-white p-4 md:p-6 xl:p-8 w-full flex flex-col lg:flex-row items-start justify-between gap-10"
            >
              {/* LEFT: TITLE */}
              <div className="text-xl md:text-2xl x:text-3xl font-bold w-full lg:w-[30%]">
                {tabs[activeIndex].title}
              </div>

              {/* DIVIDER */}
              <hr className="w-full h-[2px] lg:h-64 lg:w-[2px] bg-white" />

              {/* RIGHT: CONTENT */}
              <div className="text-base xl:text-lg w-full lg:w-[68%] space-y-3 font-lato">
                <p>{tabs[activeIndex].content}</p>
                <ul className="list-disc pl-4 grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-2">
                  {tabs[activeIndex].details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
