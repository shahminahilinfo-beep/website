"use client";

import { useState, useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "../reusable/Button";
import HeadingHighlight from "../reusable/HeadingHighlight";
import { useInView, motion } from "framer-motion";
import { titleVariants, fadeSlideLeft, fadeSlideRight } from "../animations";
import { tabData } from "../../constant/data";
import Link from "next/link";
import Image from "next/image";

const TabSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const titleRef = useRef<HTMLDivElement | null>(null);
  const leftCardRef = useRef<HTMLDivElement | null>(null);
  const rightTabRef = useRef<HTMLDivElement | null>(null);

  // ✅ Framer Motion options
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.1 });
  const isLeftCardInView = useInView(leftCardRef, { once: false, amount: 0.1 });
  const isRightTabInView = useInView(rightTabRef, { once: false, amount: 0.1 });

  const hasTabs = Array.isArray(tabData) && tabData.length > 0;
  const safeIndex = Math.min(
    activeTab,
    Math.max(0, (tabData?.length ?? 1) - 1)
  );
  const current = hasTabs
    ? tabData[safeIndex]
    : { title: "—", description: "" };

  const handlePrev = () => {
    if (!hasTabs) return;
    setActiveTab((i) => Math.max(0, i - 1));
  };

  const handleNext = () => {
    if (!hasTabs) return;
    setActiveTab((i) => Math.min(tabData.length - 1, i + 1));
  };

  // Debug (optional)
  useEffect(() => {
    console.log("isTitleInView:", isTitleInView);
    console.log("isLeftCardInView:", isLeftCardInView);
    console.log("isRightTabInView:", isRightTabInView);
  }, [isTitleInView, isLeftCardInView, isRightTabInView]);

  return (
    <motion.section
      className="relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16 overflow-hidden bg-[#110b15] "
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {/* Shapes */}
      <Image
        src="/home/faq/FaqBg.svg"
        alt="FAQ Background"
        className="absolute -right-28 top-60 h-[70%] w-auto -z-10 hidden md:block opacity-80"
        width={1200}
        height={1200}
        sizes="100vw"
        priority
      />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-80 -left-40 opacity-70" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-80 -right-40 opacity-70" />

      {/* Main Content */}
      <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col justify-center items-center gap-16 text-white">
        <motion.div
          ref={titleRef}
          className="flex flex-col items-center justify-center max-w-5xl text-center gap-7"
          variants={titleVariants}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
        >
          <HeadingHighlight
  text="" // or "Our"
  highlightText="Web Application Development"
  subText="Services We Offer"
/>

          <p className="text-base md:text-lg xl:px-4 font-lato">
            At Robx.ai, we design and build high-performing web applications
            that solve real business problems. Whether you need a custom
            dashboard, an internal tool, or a customer-facing platform, our team
            delivers reliable, scalable, and user-friendly solutions that help
            your business work smarter and grow faster.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row w-full text-white gap-7 items-stretch justify-center">
          {/* Left Card */}
          <motion.div
            ref={leftCardRef}
            className="relative bg-[#671399] rounded-xl p-8 w-full lg:w-[60%] shadow-lg flex flex-col"
            variants={fadeSlideLeft}
            initial="hidden"
            animate={isLeftCardInView ? "visible" : "hidden"}
          >
            <div className="absolute top-[10%] -left-2 bg-transparent w-[102%] h-[80%] rounded-xl !-z-10 border-l-8 border-r-8" />
            <h1 className="text-5xl font-bold text-white opacity-90 mb-4">
              {`0${safeIndex + 1}`}
            </h1>
            <h2 className="text-2xl font-bold mb-4">{current.title}</h2>
            <p className="text-sm md:text-base lg:text-lg whitespace-pre-line text-white/90 font-lato">
              {current.description}
            </p>

            <div className="flex items-center justify-between mt-8">
              <Link href="/contact" aria-label="Get Started">
                <Button
                  text="Get Started"
                  variant="gradient"
                  className="!rounded-full !text-base"
                />
              </Link>
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white text-[#7500FF] flex items-center justify-center shadow disabled:opacity-50"
                  disabled={!hasTabs || safeIndex === 0}
                  aria-label="Previous"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white text-[#7500FF] flex items-center justify-center shadow disabled:opacity-50"
                  disabled={!hasTabs || safeIndex === tabData.length - 1}
                  aria-label="Next"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Tab Menu */}
          <motion.div
            ref={rightTabRef}
            className="bg-[#671399] rounded-xl p-5 md:p-7 xl:p-10 2xl:p-14 w-full lg:w-[40%] flex flex-col justify-between"
            variants={fadeSlideRight}
            initial="hidden"
            animate={isRightTabInView ? "visible" : "hidden"}
          >
            {hasTabs ? (
              tabData.map((tab, index) => (
                <button
                  type="button"
                  key={tab.title + index}
                  onClick={() => setActiveTab(index)}
                  className="flex items-center gap-7 justify-start py-4 cursor-pointer font-bold border-b border-white/30 text-left"
                  aria-pressed={index === safeIndex}
                >
                  <span className="text-white">{`0${index + 1}`}</span>
                  <span
                    className={`${
                      index === safeIndex ? "text-[#DF1DF7]" : "text-white"
                    }`}
                  >
                    {tab.title}
                  </span>
                </button>
              ))
            ) : (
              <p className="text-white/80">No tabs available.</p>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TabSection;
