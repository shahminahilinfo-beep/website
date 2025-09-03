// src/sections/home/Principles.tsx
import Image from "next/image";

const brands = [
  { alt: "Product", src: "/icons/gptprofessor.png" },
  { alt: "Nextmove", src: "/icons/snapcheck.png" },
  { alt: "Snapshot", src: "/icons/wakeel.png" }, // wakeel
  { alt: "Luminous", src: "/icons/intelliwriter.png" }, // intelliwriter
  { alt: "Umbrella", src: "/icons/happymind.png" },
  { alt: "Sitemark", src: "/icons/sitemark.png" },
];

export default function Principles() {
  return (
    <section className="relative overflow-hidden">
      {/* Base layer */}
      <div className="absolute inset-0 -z-10 bg-[#0B0713]" aria-hidden />

      {/* logos + headline */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 md:py-12">
        <p className="mb-6 text-center font-outfit font-normal text-[14px] leading-[16.8px] tracking-[-0.38px] text-white">
          Join over 300,000+ businesses to create unique brand designs.
        </p>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 place-items-center">
          {brands.map((b, i) => {
            const isWakeel = b.src.includes("wakeel");
            const isIntelli = b.src.includes("intelliwriter");
            return (
              <div
                key={i}
                className="flex items-center justify-center w-full max-w-[177.5px]"
                style={{ height: "75.94px" }}
              >
                <img
                  src={b.src}
                  alt={b.alt}
                  className={
                    isWakeel
                      ? "h-[50%] w-auto object-contain"
                      : isIntelli
                      ? "h-full w-auto object-contain scale-150"
                      : "h-full w-full object-contain"
                  }
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* divider */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-px w-full bg-white/10" />
      </div>

      {/* content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 md:py-16">
        {/* AGENCY gradient border pill */}
        <div className="mb-5">
          <div className="inline-flex rounded-full p-[2px] bg-[linear-gradient(98.61deg,_#D700FA_-6.86%,_#28093B_58.51%,_#6800EE_120.22%)]">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0B0713] px-[18px] py-[8px] text-[13px] font-semibold text-white">
              AGENCY
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-start">
          {/* LEFT */}
          <div className="md:col-span-5">
            <h2 className="font-outfit font-semibold text-[30px] leading-[36px] md:text-[38px] md:leading-[45.6px] tracking-[-1.03px] text-white mb-6 md:mb-8">
              Our Work Principles
            </h2>

            <div className="w-full md:w-[396.45px]">
              <p className="font-inter text-[15px] md:text-[16px] leading-[26px] md:leading-[28px] text-[#9B96B0] text-pretty">
                Our work is guided by a clear set of principles that shape every
                project we take on. We focus on quality, making sure each detail
                is handled with precision and care. Innovation drives our
                process, helping us deliver solutions that stand out in a
                competitive environment. Integrity defines the way we work,
                building trust and ensuring transparency at every step.
              </p>
            </div>

            <div className="mt-8 w-full md:w-[396.45px] grid grid-cols-2 gap-8 md:gap-16">
              <div className="text-left">
                <span className="font-[Outfit] font-semibold text-[34px] leading-[34px] md:text-[40px] md:leading-[40px] text-[#DC00F9] block">
                  364+
                </span>
                <span className="font-[Outfit] font-semibold text-[12px] md:text-[13px] leading-[28px] md:leading-[32.5px] tracking-[1.2px] uppercase text-[#188EFF]">
                  Completed Project
                </span>
              </div>
              <div className="text-left">
                <span className="font-[Outfit] font-semibold text-[34px] leading-[34px] md:text-[40px] md:leading-[40px] text-[#DC00F9] block">
                  16
                </span>
                <span className="font-[Outfit] font-semibold text-[12px] md:text-[13px] leading-[28px] md:leading-[32.5px] tracking-[1.2px] uppercase text-[#188EFF]">
                  Year Experience
                </span>
              </div>
            </div>
          </div>

          {/* MIDDLE (image) */}
          <div className="md:col-span-3 place-self-center md:place-self-start">
            <div
              className="
                w-full max-w-[440px] overflow-hidden rounded-[12px]
                border border-white/10 bg-white/[0.03]
                mx-auto md:mx-0
                md:-translate-x-6 lg:-translate-x-10 xl:-translate-x-14
              "
            >
              <Image
                src="/images/dm1.jpg"
                alt="Team collaborating"
                width={440}
                height={400}
                className="w-full h-[400px] object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT — moved up with -mt-6 */}
          <div className="md:col-span-4 md:pl-6 lg:pl-8 self-start -mt-6">
            <div className="w-full max-w-[360px] md:pr-4 lg:pr-6">
              <Feature
                iconSrc="/icons/brush.png"
                title="Precision in Ideas and Execution"
                text="Great ideas thrive on clarity. When thought and design remain simple yet focused, innovation flourishes and impact becomes inevitable."
              />

              <div className="h-8" />

              <Feature
                iconSrc="/icons/star.png"
                title="Quality Without Boundaries"
                text="True mastery is timeless. It calls for persistence, refinement, and a steady commitment to achieving the standards."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type FeatureProps = {
  iconSrc: string;
  title: string;
  text: string;
  textWidth?: string;
};

function Feature({ iconSrc, title, text, textWidth }: FeatureProps) {
  return (
    <div className="flex flex-col items-start">
      <img
        src={iconSrc}
        alt=""
        className="h-[32px] w-[32px] object-contain mb-[26.25px]"
      />
      <h3
        className="
          font-outfit font-normal text-[21px] leading-[26.25px] tracking-[-0.57px]
          text-white
        "
      >
        {title}
      </h3>
      <p
        className="mt-2 font-inter text-[15px] md:text-[16px] leading-[26px] md:leading-[28px] text-[#9B96B0]"
        style={textWidth ? { maxWidth: textWidth } : undefined}
      >
        {text}
      </p>
    </div>
  );
}
