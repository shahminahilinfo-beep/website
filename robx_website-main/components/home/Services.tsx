"use client";

import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useInView } from "framer-motion";
import Button from "../reusable/Button";
import HeadingHighlight from "../reusable/HeadingHighlight";
import { servicesDetailed } from "../../constant/data";

const Services = () => {
  const router = useRouter();
  const pathname = router.pathname;

  // ✅ fixed hook usage
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section
      className="
        relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16 overflow-hidden
        bg-gradient-to-b from-[#0B0713] via-[#0B0713] to-[#120A1E]
        pt-40 lg:pt-32
      "
      id="services"
    >
      {/* Glow shapes */}
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-20 -left-40 opacity-70" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-80 -right-40 opacity-70" />

      {/* Main Content */}
      <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col justify-center items-center gap-16 text-white">
        <div
          ref={ref}
          className={`flex items-center justify-center gap-3 ${
            isInView ? "fade-slide-in-up" : "opacity-0"
          }`}
        >
          <HeadingHighlight
            text="Services"
            highlightText=" We Offer"
            className="text-[#da00f7]"
          />
          <div className="hidden md:block space-y-2">
            <div className="bg-[#A234FD] w-14 h-[2px]" />
            <div className="bg-[#A234FD] w-7 h-[2px]" />
          </div>
        </div>

        <div className="w-full flex flex-col justify-between items-start gap-10">
          <div
            ref={ref}
            className={`w-full flex flex-wrap items-center justify-center gap-7 ${
              isInView ? "fade-slide-in-right" : "opacity-0"
            }`}
          >
            {servicesDetailed.map((service, index) => (
              <Link
                key={index}
                href={service.url}
                className="
                  w-[31%] relative rounded-xl border-2 border-white/40 p-4 lg:p-6 xl:!p-7 2xl:!p-8
                  space-y-3 overflow-hidden z-10 flex flex-col items-start justify-start
                  h-64 md:h-56 lg:h-72 xl:h-64
                "
              >
                <img
                  src={service.bgSrc}
                  alt={service.title}
                  className="absolute -right-10 -bottom-16 h-60 w-60 -z-10 opacity-20"
                />
                <h3 className="text-xl xl:text-2xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm md:text-base font-lato">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          {pathname !== "/services" && (
            <div className="mx-auto">
              <Link href="/services">
                <Button text="More Services" variant="default" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
