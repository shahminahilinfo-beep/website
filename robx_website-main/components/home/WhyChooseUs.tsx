"use client";

import HeadingHighlight from "../reusable/HeadingHighlight";
import Button from "../reusable/Button";
import { WhyChooseUs as whyChooseList, whyUsStats } from "../../constant/data";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import React from "react";

// Local, strongly-typed variants (avoid external typing issues)
const titleVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const fadeSlideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const fadeSlideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.06 },
  },
};

// (optional) light typing to keep TS happy
type WhyStat = { id: number; title: string | number; description: string };

export default function WhyUs(): JSX.Element {
  const stats = (whyUsStats ?? []) as WhyStat[];
  const bullets = (whyChooseList ?? []) as string[];

  return (
    <section className="bg-[#16091F] relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16">
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
        {/* Heading */}
        <motion.div
          className="flex items-center justify-center gap-3"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <HeadingHighlight
            text="Why Should"
            highlightText=" You Choose ?"
            className="text-[#da00f7]"
            subText="?"
          />
          <div className="hidden md:block space-y-2">
            <div className="bg-[#A234FD] w-14 h-[2px]" />
            <div className="bg-[#A234FD] w-7 h-[2px]" />
          </div>
        </motion.div>

        <div className="w-full flex flex-col md:flex-row-reverse justify-between items-start gap-7">
          {/* Left Text Section */}
          <motion.div
            className="text-white text-start w-full md:w-[47%] lg:w-[45%] 2xl:w-[42%] space-y-7"
            variants={fadeSlideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Subheading (no unsupported `variant` prop; style via className) */}
            <HeadingHighlight
              text="Transform your online presence with"
              highlightText=" AI website design."
              className="text-2xl md:text-3xl lg:text-4xl"
            />

            <p className="text-base md:text-lg 2xl:text-xl max-w-2xl font-lato">
              Choose Robx.ai for leading edge AI solutions and dedicated
              support. We specialize in customized AI development, ensuring
              transformative results tailored to your business needs and
              supported 24/7.
            </p>

            {/* Proper list wrapper */}
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-7 list-disc pl-5 marker:text-[#A234FD]">
              {bullets.map((item, index) => (
                <li
                  key={index}
                  className={`py-[14px] text-sm xl:text-base 2xl:text-lg font-lato border-[#D5D5D566] ${
                    index === 4 || index === 5
                      ? "border-t border-b"
                      : "border-t"
                  }`}
                  style={{ listStyleType: "square" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            style={{
              backgroundImage: `url("/home/WhyChooseUs/Why-Us-Banner.svg")`,
            }}
            className="relative w-full h-[470px] md:w-[47%] lg:w-[45%] 2xl:w-[42%] bg-cover bg-center bg-no-repeat rounded-3xl flex flex-col items-center justify-end"
            variants={fadeSlideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-fit flex flex-col items-center justify-center bg-white/10 rounded-3xl border p-6 xl:px-20 space-y-7 backdrop-blur-sm mb-7">
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold">
                Get Started!
              </h3>
              <p className="text-sm md:text-base xl:text-lg font-lato text-white/70">
                Try Robx Services for free today
              </p>
              <Link href="/contact">
                <Button variant="default" text="Get a Free Consultation" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="-mb-32 w-full h-full bg-cover bg-no-repeat bg-center px-10 lg:px-20 py-8 lg:py-12 grid grid-cols-1 md:grid-cols-3 lg:flex gap-3 lg:justify-between lg:items-center rounded-xl bg-[#07000E] z-20"
          style={{
            backgroundImage: `url("/home/WhyChooseUs/Why-us-Stats-Bg.png")`,
          }}
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`cols-span-1 w-fit lg:w-1/3 flex items-center justify-center gap-4 ${
                stat.id === 2
                  ? "lg:px-6 lg:border-l lg:border-r border-[#372C3D]"
                  : ""
              }`}
            >
              <Image src="/Square.svg" width={24} height={24} alt="Square" />
              <div>
                <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-left">
                  {stat.title}{" "}
                  <span className="text-base md:text-lg xl:text-xl">+</span>
                </h2>
                <p className="text-sm md:text-base xl:text-lg text-white/70 font-lato">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
