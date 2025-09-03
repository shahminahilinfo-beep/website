"use client";

import { webAppChooseServices } from "../../constant/data";
import HeadingHighlight from "../reusable/HeadingHighlight";
import { useRef, useEffect } from "react";
import { useInView, motion } from "framer-motion";
import { fadeSlideUp, titleVariants } from "../animations";
import Link from "next/link";
import Image from "next/image";

const ChooseServices: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  // ✅ Framer Motion: use `once` + `amount`
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2,
    // margin: "-10% 0px" // (optional) tweak trigger window
  });

  // Debug (optional)
  useEffect(() => {
    console.log("isInView:", isInView);
  }, [isInView]);

  return (
    <motion.section
      ref={ref}
      className="bg-[#16091F] relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16 overflow-hidden pt-32 lg:pt-32"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {/* Background image (prefer real width/height OR fill) */}
      <Image
        src="/home/WhyChooseUs/WhyChooseUsBg.png"
        alt="Background"
        className="absolute inset-x-0 bottom-0 w-full h-auto object-cover opacity-50"
        width={1920}
        height={800}
        sizes="100vw"
        priority
      />

      {/* Shapes */}
      <Image
        src="/home/faq/FaqBg.svg"
        alt="FAQ Background"
        className="absolute -right-28 top-60 h-[70%] w-auto -z-10 opacity-80"
        width={1200}
        height={1200}
        sizes="100vw"
      />
      <div className="bg-[#431964] w-96 h-96 rounded-full absolute top-80 blur-[200px] z-0 -left-10" />
      <div className="bg-[#431964] w-96 h-96 rounded-full absolute top-80 blur-[200px] z-0 -right-10" />

      {/* Main Content */}
      <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col justify-center items-center gap-16 text-white">
        <motion.div
          className="flex flex-col items-center justify-center max-w-6xl text-center gap-7 relative z-10"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          key={`title-${isInView}`}
        >
          <HeadingHighlight
            text="Choose Our"
            highlightText=" Web Application Development"
            subText="Services"
          />
          <p className="text-base md:text-lg xl:px-4 font-lato">
            At Robx.ai, we build fast, secure, and scalable web applications
            tailored to your business goals. Our expert team focuses on
            performance and user experience, helping you improve operations,
            engage customers, and grow with confidence.
          </p>
        </motion.div>

        <motion.div
          className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-7 lg:gap-7 gap-y-10"
          variants={fadeSlideUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
          key={`grid-${isInView}`}
        >
          {webAppChooseServices.map((service, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-start h-36 lg:h-48 ${
                service.id === 6
                  ? "justify-between p-3 md:p-4 lg:p-6 xl:!p-8 rounded-xl"
                  : "justify-start border-l-2 px-4 lg:px-6 xl:!px-7"
              } space-y-3 overflow-hidden z-10`}
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
                  <Link href="/contact" aria-label="Contact">
                    <Image
                      src="/chatbot/Link.svg"
                      alt="Link Icon"
                      className="w-14 h-14"
                      width={56}
                      height={56}
                    />
                  </Link>

                  <Image
                    src="/chatbot/Graph.png"
                    alt="Graph Icon"
                    className="w-14 h-14"
                    width={56}
                    height={56}
                  />
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ChooseServices;
