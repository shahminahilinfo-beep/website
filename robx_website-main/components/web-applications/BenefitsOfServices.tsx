"use client";

import { webAppBenefitofServices } from "../../constant/data";
import HeadingHighlight from "../reusable/HeadingHighlight";
import { useRef, useEffect } from "react";
import { useInView, motion } from "framer-motion";
import { fadeSlideUp, titleVariants } from "../animations";
import Image from "next/image";

const BenefitsOfServices: React.FC = () => {
  // Tip: type the ref for TS
  const ref = useRef<HTMLDivElement | null>(null);

  // ✅ Framer Motion: use `once` (not triggerOnce) and `amount` (not threshold)
  const isInView = useInView(ref, {
    once: false, // was: triggerOnce: false
    amount: 0.2, // use this instead of threshold
    // margin: "-10% 0px" // optional: viewport margin if you want earlier/later trigger
  });

  useEffect(() => {
    console.log("isInView:", isInView);
  }, [isInView]);

  return (
    <motion.section
      ref={ref}
      className="relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16 overflow-hidden pt-32 lg:pt-32 bg-[#110b15]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {/* Shapes */}
      <Image
        src="/home/faq/FaqBg.svg"
        alt="FAQ Background"
        className="absolute -right-28 top-60 h-[70%] w-auto -z-10 hidden lg:block opacity-80"
        width={1200}
        height={1200} // 👈 better to give real numbers OR use `fill`
        sizes="100vw"
        // style={{ width: "100%", height: "auto" }}
      />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-80 -left-40 opacity-70" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-80 -right-40 opacity-70" />

      {/* Main Content */}
      <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col justify-center items-center gap-16 text-white ">
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center max-w-5xl text-center gap-7"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          key={`title-${isInView}`}
        >
          <HeadingHighlight
            text="Benefits Of Our"
            highlightText=" Web Application Development"
            subText="Services"
          />
          <p className="text-base md:text-lg xl:px-4 font-lato">
            At Robx.ai, we create custom web applications that are fast,
            reliable, and built to grow with your business. With years of
            experience and successful projects delivered, our team focuses on
            results helping you boost productivity, improve user experience, and
            drive business growth through powerful web solutions.
          </p>
        </motion.div>

        <motion.div
          className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-start gap-7"
          variants={fadeSlideUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
          key={`grid-${isInView}`}
        >
          {webAppBenefitofServices.map((service, index) => (
            <div
              key={index}
              className="relative rounded-xl border-2 border-white/40 p-4 lg:p-6 xl:!p-7 2xl:!p-8 space-y-3 overflow-hidden z-10 flex flex-col items-start justify-start h-64 md:h-56 lg:h-72"
            >
              <Image
                src={service.bgSrc}
                alt={service.title}
                className="absolute -right-10 -bottom-16 h-60 w-60 -z-10 opacity-20"
                width={0}
                height={0}
                sizes="100vw"
              />
              <Image
                src={service.imgsrc}
                alt={service.title}
                className="h-8 w-8"
                width={0}
                height={0}
                sizes="100vw"
              />
              <h3 className="text-xl xl:text-2xl font-bold text-white">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm lg:text-base font-lato">
                {service.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BenefitsOfServices;
