"use client";
import { integrateData } from "../../constant/data";
import HeadingHighlight from "../reusable/HeadingHighlight";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";

// Strongly-typed variants (local to avoid typing mismatch)
const titleVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.08 },
  },
};

export default function Integrate(): JSX.Element {
  return (
    <motion.section
      className="bg-[#14091c] relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16 overflow-hidden pt-32 lg:pt-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Shapes */}
      <Image
        src="/home/faq/FaqBg.svg"
        alt="FAQ Background"
        className="absolute -left-28 top-60 h-[70%] w-auto scale-x-[-1] opacity-80"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-80 -left-40 opacity-70" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-80 -right-40 opacity-70" />

      {/* Main Content */}
      <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col justify-center items-center gap-16 text-white">
        {/* Title */}
        <motion.div
          className="flex items-center justify-center max-w-6xl text-center gap-3"
          variants={titleVariants}
        >
          <HeadingHighlight
            text="Integrate Our"
            highlightText=" Chatbot Across Multiple"
            subText="Platforms"
          />
        </motion.div>

        {/* Grid */}
        <motion.div
          className="w-full grid grid-cols-1 lg:grid-cols-2 items-center justify-start gap-7"
          variants={fadeSlideUp}
        >
          {integrateData.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeSlideUp}
              className="relative bg-[#110B15] border-l-[5px] border-[#DC00F9] shadow-[0_0_15px_rgba(120,0,149,0.5)] hover:shadow-[0_0_15px_rgba(120,0,149,0.8)] transition-shadow duration-300 p-4 space-y-3 md:gap-7 overflow-hidden z-10 flex flex-col md:flex-row items-start md:items-center justify-center"
            >
              <Image
                src={service.imgsrc}
                alt={service.title}
                className="h-10 w-10"
                width={0}
                height={0}
                sizes="100vw"
                // style={{ width: "100%", height: "auto" }}
              />
              <div>
                <h3 className="text-xl xl:text-2xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm lg:text-base font-lato">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
