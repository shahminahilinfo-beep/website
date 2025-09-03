"use client";
import Link from "next/link";
import Button from "../reusable/Button";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -70 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const fadeRight: Variants = {
  hidden: { opacity: 0, x: 70 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero(): JSX.Element {
  return (
    <main className="bg-[#16091F] w-full relative h-full lg:h-[800px] flex items-center justify-center z-10">
      {/* SHAPES */}
      <div className="absolute w-[780px] h-[720px] bg-[#4C1766]  rounded-full -left-[-139px] -bottom-[134px] blur-[300px] opacity-80" />
      <div className="absolute w-[427px] h-[415px] bg-[#535EE0]  rounded-full -left-60 bottom-[134px] blur-[200px] opacity-70" />
      <div className="absolute w-[628px] h-[600px] bg-[#7500FF]  rounded-full -right-96 bottom-[75px] blur-[300px] opacity-80" />
      <div className="absolute w-[592px] h-[594px] bg-[#2AA0F0]  rounded-full -right-10 -top-20 blur-[300px] opacity-80" />

      <section className="relative container w-full mx-auto h-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 xl:px-12 py-16 md:py-32">
        {/* Left */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-white text-start w-full md:w-1/2 space-y-10 z-10"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-snug">
            AI Chatbot <br className="hidden lg:block" />
            <span className="text-[#DC00F9]">Development</span> Services
          </h1>

          <p className="text-base md:text-lg 2xl:text-xl max-w-2xl font-lato">
            At Robx.ai, we build smart AI-powered chatbots that help businesses
            connect with their customers 24/7. Whether it&apos;s answering questions,
            guiding users, or automating support, our chatbots improve service and save time.
          </p>

          <div className="flex flex-row items-end justify-start gap-3 md:gap-5">
            <Link href="/contact">
              <Button text="Get a Free Consultation" variant="gradient" className="border-2" />
            </Link>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full md:w-[43%] flex flex-col items-center justify-center mt-10 lg:mt-0 relative"
        >
          <Image
            src="/chatbot/AI-Chatbot-Development-Services.png"
            alt="AI Bot Graphic"
            className="h-full w-auto"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>
      </section>

      {/* After Hero */}
      <div className="w-[90%] self-center bg-[#A234FD] rounded-t-full h-10 absolute -bottom-10 !rotate-180 opacity-25" />
      <div className="w-[80%] self-center bg-[#5D00F7] rounded-t-full h-14 absolute -bottom-14 !rotate-180 opacity-25" />
    </main>
  );
}
