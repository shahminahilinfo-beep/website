"use client";

import Link from "next/link";
import Button from "../reusable/Button";
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { titleVariants } from "../animations";

const Hero = () => {
  // Give the ref a concrete type for TS
  const ref = useRef<HTMLElement | null>(null);

  // Framer Motion v10+: use `once` and (optionally) `amount`. `threshold` is not a valid option here.
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2,
  });

  useEffect(() => {
    console.log("isInView:", isInView);
  }, [isInView]);

  return (
    <motion.main
      ref={ref}
      style={{ backgroundImage: `url('/tokenization/Tokenizationhero-Bg.svg')` }}
      className="w-full relative h-full lg:h-[800px] bg-no-repeat bg-cover bg-center flex items-center justify-center z-10"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <section className="relative container w-full mx-auto h-full flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 xl:px-12 py-16 md:py-32">
        {/* Main Content */}
        <motion.div
          className="text-white flex flex-col items-center justify-center text-center w-full space-y-7"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-snug">
            Convert Your <span className="text-[#DC00F9]">Real Estate</span>{" "}
            into <br className="hidden 2xl:block" /> Tokenization
          </h1>

          {/* Text */}
          <p className="text-base md:text-lg 2xl:text-xl max-w-3xl font-lato">
            At Robx.ai, we help you turn physical properties into secure digital
            tokens. Simplify ownership, enable fractional investments, and bring
            more transparency to real estate through smart tokenization
            solutions.
          </p>

          {/* Button */}
          <Link href="/contact">
            <Button text="Get a Free Consultation" variant="gradient" className="border-3" />
          </Link>
        </motion.div>
      </section>

      {/* Shapes After Hero */}
      <div className="w-[90%] self-center bg-[#A234FD] rounded-t-full h-10 absolute -bottom-10 !rotate-180 opacity-25" />
      <div className="w-[80%] self-center bg-[#5D00F7] rounded-t-full h-14 absolute -bottom-14 !rotate-180 opacity-25" />
    </motion.main>
  );
};

export default Hero;
