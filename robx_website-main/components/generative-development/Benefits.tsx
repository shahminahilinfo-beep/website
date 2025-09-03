"use client";

import Image from "next/image";
import HeadingHighlight from "../reusable/HeadingHighlight";
import { GenerativeBenefits } from "../../constant/data";
import { motion, type Variants } from "framer-motion";

// Strongly-typed local variants
const titleVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeSlideLeft: Variants = {
  hidden: { opacity: 0, x: -70 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeSlideRight: Variants = {
  hidden: { opacity: 0, x: 70 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// (optional) data typing to silence TS on map()
type BenefitItem = { id: number | string; title: string; description: string };
const benefits = (GenerativeBenefits ?? []) as BenefitItem[];

export default function Benefits(): JSX.Element {
  if (!Array.isArray(benefits) || benefits.length === 0) {
    return (
      <div className="text-white text-center py-16">
        <p>Error: Unable to load benefits data. Please try again later.</p>
      </div>
    );
  }

  return (
    <motion.section
      className="bg-[#16091F] relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <Image
        src="/home/WhyChooseUs/WhyChooseUsBg.png"
        alt="Background"
        className="absolute w-full h-fit object-cover bottom-0 opacity-50"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />

      <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col justify-center items-center gap-16 text-white">
        {/* Title */}
        <motion.div
          className="flex flex-col gap-7 items-center justify-center text-center max-w-5xl text-white"
          variants={titleVariants}
        >
          <HeadingHighlight
            text="Benefits of Acquiring "
            highlightText="Generative AI"
            subText="Development"
          />
          <p className="text-base md:text-lg 2xl:text-xl xl:px-4 font-lato">
            At Robx.ai, we analyze your workflows and data needs to choose the
            right AI tools. Then, we build tailored solutions like smart
            chatbots that deliver fast, accurate responses and help your
            business work more efficiently.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start justify-start">
          {/* Left column (first 3) */}
          <motion.div
            className="w-full flex flex-col items-center justify-start gap-7"
            variants={fadeSlideLeft}
          >
            {benefits.slice(0, 3).map((benefit) => (
              <div
                key={benefit.id}
                className="flex items-start justify-between gap-3 pt-10 border-t-2 border-white/50"
              >
                <div className="text-white text-sm lg:text-base font-lato">
                  {benefit.id}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl xl:text-2xl font-bold text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-white text-sm lg:text-base font-lato">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right column (next 3) */}
          <motion.div
            className="w-full flex flex-col items-center justify-start gap-7 lg:mt-28"
            variants={fadeSlideRight}
          >
            {benefits.slice(3, 6).map((benefit) => (
              <div
                key={benefit.id}
                className="flex items-start justify-start gap-3 pt-10 border-t-2 border-white/50"
              >
                <div className="text-white text-sm lg:text-base font-lato">
                  {benefit.id}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl xl:text-2xl font-bold text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-white text-sm lg:text-base font-lato">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
