"use client";

import Link from "next/link";
import Image from "next/image";
import { generativeServicesData } from "../../constant/data";
import Button from "../reusable/Button";
import HeadingHighlight from "../reusable/HeadingHighlight";
import { motion, type Variants } from "framer-motion";
import React from "react";

/** ---- Types ---- */
type ServiceItem = {
  title: string;
  description: string;
  details: string[]; // bullets/points
  imgSrc: string;
};

/** ---- Local, strongly-typed variants ---- */
const titleVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.08 },
  },
};

const fadeSlideLeft: Variants = {
  hidden: { opacity: 0, x: -70 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeSlideRight: Variants = {
  hidden: { opacity: 0, x: 70 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/** ---- Section for a single service ---- */
function ServiceSection({
  current,
  index,
}: {
  current: ServiceItem;
  index: number;
}): JSX.Element | null {
  if (
    !current ||
    !current.title ||
    !current.description ||
    !Array.isArray(current.details) ||
    !current.imgSrc
  ) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`Invalid data for service at index ${index}`);
    }
    return null;
  }

  const isEven = index % 2 === 0;

  return (
    <motion.section
      key={index}
      style={{ backgroundImage: `url('/generative/Tabs-Bg.jpg')` }}
      className={`relative isolate max-w-full overflow-hidden w-full h-full flex ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } rounded-3xl p-4 md:p-7 lg:!p-10 2xl:!p-14 flex-col shadow-[0_8px_16px_0_#A234FD40] md:flex-col-reverse justify-start md:justify-between items-start gap-7 lg:items-center bg-cover bg-center bg-no-repeat lg:justify-between`}
      variants={fadeSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Left Text */}
      <motion.div
        className="w-full lg:w-[47%] xl:w-1/2 space-y-7 text-white"
        variants={isEven ? fadeSlideLeft : fadeSlideRight}
      >
        <HeadingHighlight
          text={current.title}
          className="text-2xl md:text-3xl lg:text-4xl"
        />

        <p className="text-base md:text-lg text-justify font-lato">
          {current.description}
        </p>

        <div className="space-y-3">
          {current.details.map((point, i) => (
            <span
              key={i}
              className="flex items-center justify-start text-base md:text-lg gap-3 font-lato"
            >
              <Image
                src="/generative/list-icon.svg"
                alt="list icon"
                width={24}
                height={20}
              />
              <p>{point}</p>
            </span>
          ))}
        </div>

        <div>
          <Link href="/contact">
            <Button text="Get Started With Us" variant="gradient" />
          </Link>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="w-full hidden md:flex lg:w-[40%] xl:w-[45%] h-full min-w-0"
        variants={isEven ? fadeSlideRight : fadeSlideLeft}
      >
        <Image
          src={current.imgSrc}
          alt={current.title}
          className="block w-full h-auto object-contain"
          width={1200}
          height={800}
          sizes="(min-width:1280px) 45vw, (min-width:1024px) 40vw, 100vw"
          priority={index === 0}
        />
      </motion.div>
    </motion.section>
  );
}

/** ---- Main Services block ---- */
export function Services(): JSX.Element {
  const data = (generativeServicesData ?? []) as ServiceItem[];

  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="text-white text-center py-16">
        <p>Error: Unable to load services data. Please try again later.</p>
      </div>
    );
  }

  return (
    // ✅ full-bleed background wrapper
    <section className="relative w-full bg-[#14091c]">
      <motion.div
        className="h-full relative isolate overflow-x-hidden flex flex-col gap-16
                   w-full xl:container mx-auto 2xl:max-w-[1280px]
                   items-start md:items-center justify-start
                   pt-20 py-8 lg:pt-28 lg:py-16 px-4 md:px-8 xl:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div
          className="flex flex-col gap-7 items-center justify-center text-center max-w-5xl text-white"
          variants={titleVariants}
          initial="visible"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <HeadingHighlight
            text="End-to-End"
            highlightText=" Generative AI Solutions"
            subText="for your Business"
          />
          <p className="text-base md:text-lg 2xl:text-xl xl:px-4 font-lato text-white">
            At Robx.ai, we start by understanding how your team works, what data
            you use, and what your platform needs. Then we build smart AI tools
            like chatbots and content generators that give accurate results and
            help you work more efficiently.
          </p>
          <Link href="/services">
            <Button
              text="See All Services"
              variant="gradient"
              className="text-white"
            />
          </Link>
        </motion.div>

        <main className="space-y-16 w-full">
          {data.map((current, index) => (
            <ServiceSection key={index} current={current} index={index} />
          ))}
        </main>
      </motion.div>
    </section>
  );
}
