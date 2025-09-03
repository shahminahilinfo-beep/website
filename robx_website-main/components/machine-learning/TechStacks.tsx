"use client";

import HeadingHighlight from "../reusable/HeadingHighlight";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import React from "react";

/* Local, strongly-typed variants (avoid ../animations typing issues) */
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

export default function TechStack(): JSX.Element {
  return (
    <motion.section
      style={{ backgroundImage: "url('/machine-learning/CustomSolutionsBg.jpg')" }}
      className="relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16 overflow-hidden bg-cover bg-no-repeat bg-center pt-32 lg:pt-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Decorative */}
      <Image
        src="/home/faq/FaqBg.svg"
        alt="FAQ Background"
        className="absolute -left-28 top-60 h-[70%] w-auto hidden md:block opacity-80 -scale-x-[1]"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="bg-black/40 absolute top-0 left-0 h-full w-full" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-60 -left-40 opacity-70" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 bottom-60 -right-40 opacity-70" />

      {/* Main Content */}
      <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col justify-center items-center gap-16 text-white relative z-10">
        {/* Title */}
        <motion.div
          className="relative flex flex-col items-center justify-center max-w-5xl text-center gap-7"
          variants={titleVariants}
        >
          <HeadingHighlight
            text=""  // required prop
            highlightText="Machine Learning / Deep Learning"
            subText="Tech Stacks"
          />
          <p className="text-base md:text-lg xl:px-4 font-lato">
            At Robx.ai, we use trusted tools and technologies to build powerful machine
            learning and deep learning solutions. From creating and training models to
            launching them live, our tech stack helps us work faster, deliver better
            results, and scale smoothly with your needs.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="w-full flex flex-col md:flex-row items-center gap-3 justify-center"
          variants={fadeSlideUp}
        >
          <div className="w-full md:w-1/2 flex flex-col gap-3">
            <div className="w-full gradient-border-wrapper bg-[#110B15] p-4 space-y-4">
              <div className="w-full flex items-center justify-between">
                <h3 className="text-xl md:text-2xl x:text-3xl font-bold">Domains</h3>
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#DC00F9]" fill="currentColor">
                  <path d="M9 16.17l-3.88-3.88-1.41 1.41L9 19 20.29 7.71l-1.41-1.41z" />
                </svg>
              </div>
              <ul className="space-y-1 list-disc pl-4 font-lato">
                <li>Natural Language Processing / Understanding (NLP / NLU)</li>
                <li>Computer Vision (CV)</li>
                <li>Audio</li>
                <li>Tabular Data</li>
                <li>Reinforcement Learning (RL)</li>
              </ul>
            </div>

            <div className="w-full gradient-border-wrapper bg-[#110B15] p-4 space-y-4">
              <div className="w-full flex items-center justify-between">
                <h3 className="text-xl md:text-2xl x:text-3xl font-bold">Cloud</h3>
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#DC00F9]" fill="currentColor">
                  <path d="M9 16.17l-3.88-3.88-1.41 1.41L9 19 20.29 7.71l-1.41-1.41z" />
                </svg>
              </div>
              <ul className="space-y-1 list-disc pl-4 font-lato">
                <li>Amazon Web Services</li>
                <li>Google Cloud Platform</li>
                <li>Microsoft Azure</li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-3">
            <div className="w-full gradient-border-wrapper bg-[#110B15] p-4 space-y-4">
              <div className="w-full flex items-center justify-between">
                <h3 className="text-xl md:text-2xl x:text-3xl font-bold">Frameworks</h3>
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#DC00F9]" fill="currentColor">
                  <path d="M9 16.17l-3.88-3.88-1.41 1.41L9 19 20.29 7.71l-1.41-1.41z" />
                </svg>
              </div>
              <ul className="space-y-1 list-disc pl-4 font-lato">
                <li>TensorFlow / JAX / Keras</li>
                <li>Core ML / Microsoft Cognitive Toolkit</li>
                <li>ONNX</li>
              </ul>
            </div>

            <div className="w-full gradient-border-wrapper bg-[#110B15] p-4 space-y-4">
              <div className="w-full flex items-center justify-between">
                <h3 className="text-xl md:text-2xl x:text-3xl font-bold">Concepts</h3>
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#DC00F9]" fill="currentColor">
                  <path d="M9 16.17l-3.88-3.88-1.41 1.41L9 19 20.29 7.71l-1.41-1.41z" />
                </svg>
              </div>
              <ul className="space-y-1 list-disc pl-4 font-lato">
                <li>Supervised / Unsupervised / Semi-supervised Learning</li>
                <li>Reinforcement Learning</li>
                <li>Few-Shot Learning</li>
                <li>Metric Learning</li>
                <li>Clustering</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
