"use client";

import HeadingHighlight from "../reusable/HeadingHighlight";
import SliderComponent from "../reusable/Slider";
import { slides } from "../../constant/data";
import { motion, type Variants } from "framer-motion";
import React from "react";

// Local, strongly-typed variants
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

export default function CustomSolutions(): JSX.Element {
  return (
    <motion.section
      style={{ backgroundImage: "url('/machine-learning/CustomSolutionsBg.jpg')" }}
      className="relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16 overflow-hidden bg-cover bg-no-repeat bg-center pt-32 lg:pt-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="bg-black/40 absolute top-0 left-0 h-full w-full" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-60 -left-40 opacity-70" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 bottom-60 -right-40 opacity-70" />

      {/* Main Content */}
      <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col justify-center items-center gap-16 text-white relative z-10">
        <motion.div
          className="relative flex flex-col items-center justify-center max-w-5xl text-center gap-7"
          variants={titleVariants}
        >
          <HeadingHighlight
            text="Custom"
            highlightText="Deep Learning / Machine Learning"
            subText="Solutions"
          />
          <p className="text-base md:text-lg xl:px-4 font-lato">
            We analyze your workflows, data structures, and business goals to choose the
            right machine learning or deep learning approach. Then, we design and develop
            intelligent models that deliver accurate predictions, automate tasks, and adapt
            to your evolving needs.
          </p>
        </motion.div>

        <motion.div
          className="w-full flex flex-col items-center justify-center"
          variants={fadeSlideUp}
        >
          <SliderComponent slides={slides} />
        </motion.div>
      </div>
    </motion.section>
  );
}
