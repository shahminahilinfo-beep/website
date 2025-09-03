// src/sections/home/WhyUs.tsx
import Image from "next/image";

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Base + tiled background */}
      <div className="absolute inset-0 -z-20 bg-[#0B0713]" />
      <div
        className="absolute inset-0 -z-10 bg-[url('/images/sec3bg.png')] bg-repeat bg-top opacity-100 contrast-200 brightness-125"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:items-start md:gap-10">
          {/* LEFT CARD */}
          <div className="w-full max-w-[380px]">
            <div className="relative overflow-hidden rounded-[12px] border border-[rgba(255,255,255,0.17)] shadow-xl">
              <Image
                src="/images/sec3div1bg.jpg"
                alt="Feature visual"
                width={380}
                height={480}
                className="w-full h-[420px] md:h-[480px] object-cover"
                priority
              />
              {/* Solid overlay: #0A0118 @ 85% */}
              <div className="absolute inset-0 bg-[#0A0118]/[0.85]" />

              {/* KEY FEATURE — bigger pill */}
              <span className="absolute left-[20px] sm:left-[25px] top-6 sm:top-8 inline-flex min-w-[135px] justify-center rounded-full border border-[#DC00F9] px-5 py-2 text-[11px] sm:text-[12px] font-semibold text-white">
                KEY FEATURE
              </span>

              {/* Card copy */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                <div className="-translate-y-[12px] sm:-translate-y-[17px]">
                  <div className="w-full md:w-[372.07px] -mt-1 sm:-mt-2">
                    <h3 className="font-outfit font-semibold text-[22px] leading-[32px] tracking-[-1.03px] text-white sm:text-[24px] sm:leading-[36px] md:text-[27px] md:leading-[41px]">
                      Enhance Your Digital
                      <br />
                      Impact with MaxReach
                      <br />
                      Expertise
                    </h3>
                  </div>

                  <p className="mt-2 text-[12px] leading-6 text-white/80">
                    At Max Reach, we empower brands with cutting-edge digital solutions that drive
                    engagement and growth. From innovative design to strategic marketing, our expertise
                    ensures a powerful online presence that captivates audiences and delivers results.
                  </p>

                  {/* GET STARTED — filled purple gradient */}
                  <button
                    className="
                      mt-4 inline-flex items-center justify-center rounded-full
                      px-6 py-2.5 text-[13px] font-outfit font-semibold text-white
                      bg-[linear-gradient(98.61deg,_#D700FA_-6.86%,_#28093B_58.51%,_#6800EE_120.22%)]
                      hover:opacity-95 transition
                    "
                  >
                    GET STARTED
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full max-w-[440px]">
            {/* WHY US? — bigger pill */}
            <div className="mb-3">
              <span className="inline-flex rounded-full p-[1.5px] bg-[linear-gradient(98.61deg,_#D700FA_-6.86%,_#28093B_58.51%,_#6800EE_120.22%)]">
                <span className="rounded-full bg-[#0B0713] px-4 py-1.5 text-[12px] font-medium text-white/80">
                  WHY US?
                </span>
              </span>
            </div>

            <h3 className="font-outfit text-[20px] sm:text-[22px] md:text-[24px] font-semibold tracking-tight text-white">
              Designs That <span className="text-[#DC00F9]">Captivate</span>
            </h3>

            <p className="mt-2 text-[13px] leading-6 text-white/70">
              We help brands stand out with compelling and persuasive designs that leave a lasting
              impact. By blending creativity with strategy, we craft visuals that not only capture
              attention but also drive action. Our approach ensures that every design tells a story,
              strengthens brand identity, and engages audiences effectively.
            </p>

            <div className="mt-5 space-y-5">
              <Bullet
                iconSrc="/icons/div2i1.png"
                title="Strategic Creativity"
                text="We combine aesthetics with purpose, ensuring every design not only looks stunning but also aligns with your brand’s goals and messaging."
              />
              <Bullet
                iconSrc="/icons/div2i2.png"
                title="Engagement-Driven Approach"
                text="Our designs are crafted to capture attention, evoke emotions, and drive user actions—helping brands create meaningful connections with their audience."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bullet({
  iconSrc,
  title,
  text,
}: {
  iconSrc: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-3">
      {/* Bigger solid purple circle */}
      <span className="mt-[2px] inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DC00F9]">
        <img src={iconSrc} alt="" className="h-5 w-5 object-contain" />
      </span>
      <div>
        <h4 className="font-outfit text-[15px] font-semibold text-white">{title}</h4>
        <p className="mt-1 text-[13px] leading-6 text-white/70">{text}</p>
      </div>
    </div>
  );
}
