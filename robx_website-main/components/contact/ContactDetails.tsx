"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { ContactUs } from "../../constant/data";

// ---- Types for Contact cards ----
type ContactLinkItem = { name: string; url: string };
type ContactCard = {
  title?: string;
  imageUrl: string;
  link?: string; // single external link (optional)
  details: string | ContactLinkItem[]; // either plain text OR list of links
};

// Cast constant to our type (so TS knows the shape)
const contacts = ContactUs as ContactCard[];

// ---- Local, strongly-typed variants ----
const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ContactDetails(): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={fadeSlideUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative w-full xl:container mx-auto 2xl:max-w-[1280px] px-4 md:px-8 xl:px-12 my-8 lg:my-16 mt-24 md:mt-48 lg:mt-36 xl:mt-40"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start space-y-4 p-6 bg-[#110B15] gradient-border-wrapper text-white transition-all duration-300 ease-in-out hover:scale-[1.03] hover:cursor-pointer hover:opacity-90"
          >
            <div className="flex items-center justify-center">
              <Image
                src={contact.imageUrl}
                alt={contact.title ?? `Contact ${index + 1}`}
                className="w-12 h-12"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "48px", height: "48px" }}
              />
            </div>

            <div className="flex flex-col justify-center items-center space-y-2 text-center">
              {contact.title ? (
                <h3 className="text-xl xl:text-2xl font-bold">
                  {contact.title}
                </h3>
              ) : null}

              {/* details can be (a) direct link, (b) list of links, or (c) plain text */}
              {contact.link ? (
                <a
                  href={contact.link}
                  className="text-sm md:text-base hover:underline font-lato break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {typeof contact.details === "string"
                    ? contact.details
                    : "Open link"}
                </a>
              ) : Array.isArray(contact.details) ? (
                <ul className="text-sm md:text-base space-y-1 text-left font-lato">
                  {contact.details.map((item, itemIndex) => (
                    <li key={`${index}-${itemIndex}`}>
                      <a
                        href={item.url}
                        className="hover:underline break-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm md:text-base font-lato break-words">
                  {contact.details}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
