"use client";
import { chatbotBenefitofServices } from "../../constant/data";
import HeadingHighlight from "../reusable/HeadingHighlight";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";

// Title animate variants
const titleVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Cards fade-up variants
const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.08 },
  },
};

export default function BenefitsOfServices(): JSX.Element {
  return (
    <motion.section
      className="relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16 overflow-hidden pt-32 lg:pt-32 bg-[#120b16]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Shapes */}
      <Image
        src="/home/faq/FaqBg.svg"
        alt="FAQ Background"
        className="absolute -right-28 top-60 h-[70%] w-auto -z-10 hidden md:block opacity-80"
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
            text="Benefits Of Our"
            highlightText=" AI Chatbot Development"
            subText="Services"
            className="text-[#da00f7]"
          />
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-start gap-7"
          variants={fadeSlideUp}
        >
          {chatbotBenefitofServices.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeSlideUp}
              className="relative rounded-xl border-2 border-white/40 p-4 lg:p-6 xl:!p-7 2xl:!p-8 space-y-3 overflow-hidden z-10 flex flex-col items-start justify-start h-64 md:h-56 lg:h-72"
            >
              <Image
                src={service.bgSrc}
                alt={service.title}
                className="absolute -right-10 -bottom-16 h-auto w-[19%] -z-10 opacity-20"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
              <Image
                src={service.imgsrc}
                alt={service.title}
                className="h-8 w-8"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "19%", height: "auto" }}
              />
              <h3 className="text-xl xl:text-2xl font-bold text-white ">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm lg:text-base font-lato">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
