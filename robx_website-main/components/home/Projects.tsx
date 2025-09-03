"use client";

import Link from "next/link";
import { FaLink } from "react-icons/fa6";
import { projects } from "../../constant/data";
import Button from "../reusable/Button";
import HeadingHighlight from "../reusable/HeadingHighlight";
import { motion, type Variants } from "framer-motion";
import React from "react";

// ---- Local, strongly-typed variants ----
const titleVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.06 },
  },
};

// (optional) light typing to keep TS happy
type ProjectItem = { title: string; imgSrc: string };
const projectList = (projects ?? []) as ProjectItem[];

export default function Projects(): JSX.Element {
  return (
    <motion.section
      className="bg-[#16091F] relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Background Shapes */}
      <div className="bg-[#2b1041] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-20 -left-40 opacity-70" />
      <div className="bg-[#280f3b] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-80 -right-40 opacity-70" />

      <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col justify-center items-center gap-16 text-white">
        {/* Heading */}
        <motion.div className="flex items-center justify-center gap-3" variants={titleVariants}>
          <HeadingHighlight text="Explore" highlightText="Projects" />
          <div className="hidden md:block space-y-2">
            <div className="bg-[#A234FD] w-14 h-[2px]" />
            <div className="bg-[#A234FD] w-7 h-[2px]" />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="w-full flex flex-col justify-between items-start gap-10" variants={fadeSlideUp}>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center justify-start gap-7">
            {projectList.map((service, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${service.imgSrc})` }}
                className="group relative bg-cover bg-no-repeat bg-start rounded-xl z-10 w-full overflow-hidden h-[250px] md:h-[300px] lg:h-[360px] border shadow-md shadow-[#A234FD]/40"
              >
                {/* Hover Reveal Panel */}
                <div className="absolute inset-0 flex items-center justify-center p-4 text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold bg-black/85 bg-gradient-to-t from-[#6800EE] text-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
                  {service.title}
                  <FaLink className="absolute top-7 right-7 text-white" size={40} />
                  <div className="bg-[#431964] w-80 h-80 rounded-full blur-[100px] absolute -z-10 -top-20 -left-20 opacity-70" />
                  <div className="bg-[#431964] w-80 h-80 rounded-full blur-[100px] absolute -z-10 -bottom-20 -right-20 opacity-70" />
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto">
            <Link href="/projects">
              <Button text="More Projects" variant="default" />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
