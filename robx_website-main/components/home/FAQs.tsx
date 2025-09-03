"use client";

import { useState, useRef, useEffect } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import HeadingHighlight from "../reusable/HeadingHighlight";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";

/* ---- Local, strongly-typed variants (avoid external typing issues) ---- */
const titleVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.06 } },
};

/* ---- Types ---- */
type FaqItem = {
  id: string | number;
  question: string;
  answer: string;
};

type FAQItemProps = { faq: FaqItem };
type FAQsProps = { faqs: FaqItem[] };

function FAQItem({ faq }: FAQItemProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number>(0);

  // Update height when open/close (and on content size changes)
  useEffect(() => {
    const el = contentRef.current;
    if (!el) {
      setHeight(0);
      return;
    }

    // Set on toggle
    setHeight(isOpen ? el.scrollHeight : 0);

    // Optional: observe content size while open
    if (!isOpen) return;

    const ro = new ResizeObserver(() => {
      setHeight(el.scrollHeight);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [isOpen]);

  return (
    <div
      className={`rounded-lg p-4 transition-colors duration-300 ease-in-out ${
        isOpen
          ? "bg-gradient-to-r to-[#F9B7BC] from-[#771A8B] via-[#A234FD] text-white"
          : "bg-white text-black"
      }`}
    >
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="relative w-full flex justify-between text-lg md:text-[22px] items-center text-left font-semibold focus:outline-none"
      >
        <span>{faq.question}</span>
        <IoIosArrowDropdownCircle
          size={28}
          className={`absolute top-0 -right-3 h-5 w-5 md:w-7 md:h-7 md:static transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: `${height}px` }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <p
          className={`mt-3 text-lg font-normal transition-all duration-500 ease-in-out font-lato ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQs({ faqs }: FAQsProps): JSX.Element {
  return (
    <motion.section
      className="bg-[#110B15] relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16 z-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Background */}
      <Image
        src="/home/WhyChooseUs/WhyChooseUsBg.png"
        alt="Background"
        className="absolute w-full h-fit object-cover bottom-0 opacity-50"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="absolute bottom-40 -left-40 w-[378px] h-[378px] opacity-80 rounded-full bg-[#431964] blur-[150px] -z-0" />
      <div className="absolute -bottom-20 -right-40 w-[378px] h-[378px] opacity-80 rounded-full bg-[#431964] blur-[150px] -z-0" />

      {/* Main Content */}
      <div className="relative xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col justify-center items-center gap-16 text-white z-10">
        {/* Title */}
        <motion.div
          className="flex items-center justify-center gap-3"
          variants={titleVariants}
        >
          <HeadingHighlight text="FAQ" />
          <div className="space-y-2">
            <div className="bg-[#A234FD] w-14 h-[2px]" />
            <div className="bg-[#A234FD] w-7 h-[2px]" />
          </div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div className="w-full space-y-7 text-sm" variants={fadeSlideUp}>
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
