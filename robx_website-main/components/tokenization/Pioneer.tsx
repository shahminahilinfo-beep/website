/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { motion, type Variants } from "framer-motion";
import { fadeSlideUp, fadeSlideLeft, fadeSlideRight } from "../animations";
import { pioneerData } from "../../constant/data";
import Image from "next/image";

/* --- Strongly-typed variants (fixes “variants” TS error) --- */
const parentStagger: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const textRevealLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const textRevealRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const imageRevealRight: Variants = {
  hidden: { opacity: 0, scale: 0.96, x: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 18, mass: 0.6 },
  },
};

const imageRevealLeft: Variants = {
  hidden: { opacity: 0, scale: 0.96, x: -40 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 18, mass: 0.6 },
  },
};

const PioneerSection = () => {
  return (
    /* full-bleed bg (no white edges) */
    <section className="relative w-full bg-[#110b15]">
      <motion.main
        className="h-full relative isolate overflow-x-hidden flex flex-col gap-16 w-full xl:container mx-auto 2xl:max-w-[1280px] items-start md:items-center justify-start py-8 px-4 md:px-8 xl:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={parentStagger}
      >
        {pioneerData.map((item, index) => {
          const even = index % 2 === 0;

          return (
            <motion.section
              key={index}
              className={`relative isolate max-w-full overflow-hidden w-full h-full flex ${
                even ? "lg:flex-row" : "lg:flex-row-reverse"
              } flex-col md:flex-col-reverse lg:flex-row items-start lg:items-center justify-start lg:justify-between rounded-3xl`}
              variants={fadeSlideUp} // aap ka existing base variant
            >
              {/* Left/Text Side */}
              <motion.div
                className="w-full lg:w-[47%] xl:w-[45%] space-y-7 text-white min-w-0"
                variants={even ? textRevealLeft : textRevealRight}
              >
                <h3 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-[50px] font-semibold leading-tight">
                  <span className="text-[#DC00F9]">{item.highlight}</span>{" "}
                  {item.title}
                </h3>

                <p className="text-base md:text-lg font-light text-justify font-lato">
                  {item.description}
                </p>

                <div className="space-y-3">
                  {item.details.map((point, i) => (
                    <motion.span
                      key={i}
                      className="flex items-center gap-3 text-base md:text-lg"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.06 }}
                    >
                      <Image
                        src="/BulletCheck.svg"
                        alt="list icon"
                        width={22}
                        height={22}
                      />
                      <p className="font-light">{point}</p>
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Right/Image Side */}
              <motion.div
                className="w-full hidden md:flex lg:w-[40%] xl:w-[45%] h-full min-w-0"
                variants={even ? imageRevealRight : imageRevealLeft}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.995 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  className="block w-full h-auto object-contain"
                  width={1200}
                  height={800}
                  sizes="(min-width:1280px) 45vw, (min-width:1024px) 40vw, 100vw"
                  priority={index === 0}
                />
              </motion.div>
            </motion.section>
          );
        })}
      </motion.main>
    </section>
  );
};

export default PioneerSection;
