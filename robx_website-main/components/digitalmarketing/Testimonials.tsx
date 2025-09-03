"use client";

import Image from "next/image";

export default function Testimonials() {
  return (
    <section
      className="
        relative py-16
        bg-gradient-to-b from-[#0B0713] via-[#0B0713] to-[#120A1E]
        text-white
      "
    >
      <div className="mx-auto max-w-[1160px] px-4 sm:px-6 text-center">
        {/* TESTIMONIAL pill */}
        <div className="mb-6">
          <span className="inline-flex rounded-full bg-[linear-gradient(98.61deg,#D700FA_-6.86%,#28093B_58.51%,#6800EE_120.22%)] p-[1px]">
            <span className="inline-flex items-center rounded-full bg-[#120A1E] px-4 py-1 text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-white font-[Outfit]">
              TESTIMONIAL
            </span>
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-[Outfit] text-white text-[26px] sm:text-[32px] md:text-[36px] font-semibold">
          Client Feedback & Reviews
        </h2>

        {/* Subtext */}
        <p className="mt-3 text-[#9B96B0] text-[15px] md:text-[16px] leading-[26px] md:leading-[28px] font-[Inter] max-w-2xl mx-auto">
          Showcase what clients say about our products and feedback
          <br /> and reviews from satisfied customers.
        </p>

        {/* OUTER WRAPPER with white border under the three cards */}
        <div className="mt-10 rounded-2xl border border-white/15 p-4 md:p-6">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="relative overflow-hidden rounded-[12px] border border-white/20 bg-[#2B2338] p-5 sm:p-6 text-center">
              {/* Folded corner */}
              <div className="absolute right-0 top-0 h-16 w-16 sm:h-20 sm:w-20">
                <Image src="/images/comasbg.png" alt="fold" fill className="object-cover" />
                <div className="absolute right-2 top-2 sm:right-3 sm:top-3">
                  <Image src="/icons/comas.png" alt="quote" width={22} height={22} />
                </div>
              </div>

              <div className="flex justify-center">
                <Image
                  src="/images/james.png"
                  alt="Jay"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <h3 className="mt-4 font-[Inter] font-semibold text-white text-[15px] sm:text-[16px]">Jay</h3>
              <p className="font-[Inter] text-[13px] sm:text-[14px] text-[#C2BDD5]">
                Marketing Director, Elevate Brands
              </p>

              {/* Stars */}
              <div className="mt-3 flex justify-center">
                <Image src="/icons/fullrate.png" alt="stars" width={100} height={16} />
              </div>

              <p className="mt-4 font-[Inter] text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] text-[#C2BDD5]">
                From website development to social media marketing, MaxReach handled everything with
                professionalism and
                <br />
                our traffic and leads have doubled in just a few months.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative overflow-hidden rounded-[12px] border border-white/20 bg-[#2B2338] p-5 sm:p-6 text-center">
              <div className="absolute right-0 top-0 h-16 w-16 sm:h-20 sm:w-20">
                <Image src="/images/comasbg.png" alt="fold" fill className="object-cover" />
                <div className="absolute right-2 top-2 sm:right-3 sm:top-3">
                  <Image src="/icons/comas.png" alt="quote" width={22} height={22} />
                </div>
              </div>

              <div className="flex justify-center">
                <Image
                  src="/images/lisa.png"
                  alt="Lisa Rodriguez"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <h3 className="mt-4 font-[Inter] font-semibold text-white text-[15px] sm:text-[16px]">Lisa Rodriguez</h3>
              <p className="font-[Inter] text-[13px] sm:text-[14px] text-[#C2BDD5]">Founder, EcoWear</p>

              <div className="mt-3 flex justify-center">
                <Image src="/icons/fullrate.png" alt="stars" width={100} height={16} />
              </div>

              <p className="mt-4 font-[Inter] text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] text-[#C2BDD5]">
                Their team understood our vision and executed it flawlessly. The website they built
                is not just visually stunning but also optimized for conversions!
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative overflow-hidden rounded-[12px] border border-white/20 bg-[#2B2338] p-5 sm:p-6 text-center">
              <div className="absolute right-0 top-0 h-16 w-16 sm:h-20 sm:w-20">
                <Image src="/images/comasbg.png" alt="fold" fill className="object-cover" />
                <div className="absolute right-2 top-2 sm:right-3 sm:top-3">
                  <Image src="/icons/comas.png" alt="quote" width={22} height={22} />
                </div>
              </div>

              <div className="flex justify-center">
                <Image
                  src="/images/david.png"
                  alt="David Thompson"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <h3 className="mt-4 font-[Inter] font-semibold text-white text-[15px] sm:text-[16px]">David Thompson</h3>
              <p className="font-[Inter] text-[13px] sm:text-[14px] text-[#C2BDD5]">COO, Nexa Solutions</p>

              <div className="mt-3 flex justify-center">
                <Image src="/icons/fullrate.png" alt="stars" width={100} height={16} />
              </div>

              <p className="mt-4 font-[Inter] text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] text-[#C2BDD5]">
                MaxReach goes beyond just marketing; they help businesses scale. Their strategic
                approach has given us a competitive edge in our industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
