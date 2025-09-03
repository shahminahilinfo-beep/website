"use client";
import { chatbotChooseServices } from "../../constant/data";
import HeadingHighlight from "../reusable/HeadingHighlight";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Title animation
const titleVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Grid / card animation
const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.08 },
  },
};

export default function ChooseServices(): JSX.Element {
  return (
    <motion.section
      className="bg-[#16091F] relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16 overflow-hidden pt-32 lg:pt-32"
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

      {/* Shapes */}
      <Image
        src="/home/faq/FaqBg.svg"
        alt="FAQ Background"
        className="absolute -right-28 top-60 h-[70%] w-auto -z-10 opacity-80"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="bg-[#431964] w-96 h-96 rounded-full absolute top-80 blur-[200px] z-0 -left-10" />
      <div className="bg-[#431964] w-96 h-96 rounded-full absolute top-80 blur-[200px] z-0 -right-10" />

      {/* Main Content */}
      <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col justify-center items-center gap-16 text-white z-10">
        {/* Title */}
        <motion.div
          className="relative flex items-center justify-center max-w-6xl text-center gap-3 z-10"
          variants={titleVariants}
        >
          <HeadingHighlight
            highlightText=" AI Chatbot Development"
            text="Choose Our"
            subText="Services"
            className="text-[#da00f7]"
          />
        </motion.div>

        {/* Cards */}
        <motion.div
          className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-start gap-3 !gap-y-10"
          variants={fadeSlideUp}
        >
          {chatbotChooseServices.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeSlideUp}
              className={`relative flex flex-col items-start h-40 md:h-44 lg:h-48
                ${
                  service.id === 6
                    ? "justify-between p-3 md:p-4 lg:p-6 xl:!p-8 rounded-xl"
                    : "justify-start border-l-2 px-4 lg:px-6 xl:!px-7"
                }
                space-y-3 overflow-hidden z-10`}
              style={
                service.bgSrc
                  ? {
                      backgroundImage: `url(${service.bgSrc})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : undefined
              }
            >
              <h3 className="text-xl xl:text-2xl font-bold text-white">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm lg:text-base font-lato">
                {service.description}
              </p>

              {service.id === 6 && (
                <div className="w-full flex items-center justify-between">
                  <Link href="/contact">
                    <Image
                      src="/chatbot/Link.svg"
                      alt="Link Icon"
                      className="w-14 h-14"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Link>

                  <Image
                    src="/chatbot/Graph.png"
                    alt="Graph Icon"
                    className="w-14 h-14"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
