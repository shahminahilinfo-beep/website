"use client";

import Link from "next/link";
import Button from "../reusable/Button";
import { motion, type Variants } from "framer-motion";

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero(): JSX.Element {
  return (
    <motion.main
      className="w-full relative h-full lg:h-[800px] bg-no-repeat bg-cover bg-center flex items-center justify-center z-10"
      style={{ backgroundImage: `url('/generative/Hero-Bg.svg')` }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <section className="relative container w-full mx-auto h-full flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 xl:px-12 py-16 md:py-32">
        {/* Main Content */}
        <motion.div
          className="text-white flex flex-col items-center justify-center text-center w-full space-y-7"
          variants={titleVariants}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-snug">
            Generative <span className="text-[#DC00F9]">AI Development</span>{" "}
            Solutions <br />
            <span className="text-[#DC00F9]">for Businesses</span>
          </h1>

          <p className="text-base md:text-lg 2xl:text-xl max-w-3xl font-lato">
            At Robx.ai, we build Generative AI tools that help your business
            work faster and smarter. From writing content to answering
            questions, our AI solutions can automate tasks and improve the way
            you connect with customers. Let us create custom AI tools that fit
            your goals.
          </p>

          <Link href="/contact">
            <Button text="Get a Free Consultation" variant="gradient" className="border-2" />
          </Link>
        </motion.div>
      </section>

      {/* Shapes After Hero */}
      <div className="w-[90%] self-center bg-[#A234FD] rounded-t-full h-10 absolute -bottom-10 !rotate-180 opacity-25" />
      <div className="w-[80%] self-center bg-[#5D00F7] rounded-t-full h-14 absolute -bottom-14 !rotate-180 opacity-25" />
    </motion.main>
  );
}
