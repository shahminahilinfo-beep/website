"use client";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import HeadingHighlight from "../reusable/HeadingHighlight";
import Button from "../reusable/Button";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Local, strongly-typed variants (so external animations import ki zaroorat nahi)
const fadeSlideLeft: Variants = {
  hidden: { opacity: 0, x: -70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeSlideRight: Variants = {
  hidden: { opacity: 0, x: 70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function ContactForm(): JSX.Element {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const socialLinks = [
    { id: 1, icon: FaFacebookF, url: "https://www.facebook.com/robxai" },
    { id: 2, icon: FaXTwitter, url: "https://x.com/robx_ai/" },
    { id: 3, icon: FaInstagram, url: "https://www.instagram.com/robx.ai" },
    {
      id: 4,
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/company/robx-ai",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#16091FB2] relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16 overflow-hidden "
    >
      {/* <Image
        src="/home/faq/FaqBg.svg"
        alt="FAQ Background"
        className="hidden xl:block absolute -right-28 top-0 h-[70%] w-auto opacity-80"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      /> */}
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-80 -left-40 opacity-70" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-80 -right-40 opacity-70" />

      <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col lg:flex-row lg:items-start justify-center items-center gap-16 text-white">
        {/* LEFT SECTION */}
        <motion.div
          variants={fadeSlideLeft}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
          className="w-full lg:w-[45%] space-y-7"
        >
          <HeadingHighlight text="Contact Us" className="text-[#da00f7]" />

          <p className="text-base md:text-lg 2xl:text-xl text-white font-lato">
            We are a team of dedicated professionals united by our commitment to
            excellence and innovation.
          </p>

          <div className="flex items-center justify-start gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border border-[#d08dff] rounded-full p-2 transition-all ease-in-out duration-500 hover:scale-105"
              >
                <link.icon size={20} className="text-white" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SECTION: Form */}
        <motion.form
          variants={fadeSlideRight}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.35 }}
          noValidate
          className="w-full lg:w-[45%] p-8 space-y-7 border rounded-xl"
        >
          <div>
            <label htmlFor="name" className="block mb-1 ml-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              required
              className="bg-[#352146] block w-full p-3 rounded focus:outline-none focus:ring-4 focus:ring-[#d08dff]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 ml-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              required
              className="bg-[#352146] block w-full p-3 rounded focus:outline-none focus:ring-4 focus:ring-[#d08dff]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 ml-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Message..."
              className="bg-[#352146] block w-full p-3 rounded focus:outline-none focus:ring-4 focus:ring-[#d08dff]"
            />
          </div>

          <div className="flex justify-center items-center">
            {/* NOTE: agar ButtonProps union me 'purple' missing ho to 'gradient' use karein,
               ya ButtonProps me 'purple' add kar dein */}
            <Button text="Send" variant="gradient" className="!rounded-full" />
          </div>
        </motion.form>
      </div>
    </section>
  );
}
