// src/sections/home/Services.tsx

const services = [
  {
    icon: "social",
    title: "Social Media Marketing",
    text: "We create data-driven social media strategies that boost engagement, build brand awareness, and drive meaningful connections with your audience.",
  },
  {
    icon: "seo",
    title: "SEO Optimization",
    text: "Our SEO solutions increase search visibility, drive organic traffic, strengthen brand authority, enhance customer engagement, and ensure sustainable long-term online growth.",
  },
  {
    icon: "consult",
    title: "Digital Consultancy",
    text: "We provide expert guidance to help businesses navigate the digital landscape, streamline operations, and implement strategies for long-term success.",
  },
  {
    icon: "email",
    title: "Email Marketing",
    text: "We craft personalized email campaigns that enhance customer relationships, increase engagement, and drive conversions through targeted messaging.",
  },
  {
    icon: "ads",
    title: "Google Ads",
    text: "We design and manage precise ad campaigns that maximize ROI, ensuring your brand consistently reaches the right audience at exactly the right time.",
  },
  {
    icon: "analysis",
    title: "Online Presence Analysis",
    text: "Our in-depth analysis evaluates your brand’s digital footprint, identifies areas for improvement, and provides actionable insights to enhance visibility and performance.",
  },
];

export default function Services() {
  const spans = Array(services.length).fill("lg:col-span-4");

  return (
    <section
      // single dark bg for whole section + subtle vertical gradient
      className="
        relative isolate overflow-hidden
        py-16 md:py-24
        bg-gradient-to-b from-[#0B0713] via-[#0B0713] to-[#120A1E]
        text-white
      "
    >
      {/* purple glow blobs (behind content) */}
      <div className="pointer-events-none absolute -left-48 top-10 h-72 w-72 rounded-full bg-[#DC00F9]/20 blur-[90px] -z-10" />
      <div className="pointer-events-none absolute -right-48 top-20 h-72 w-72 rounded-full bg-[#6800EE]/20 blur-[90px] -z-10" />
      <div className="pointer-events-none absolute left-1/2 -bottom-24 h-80 w-80 -translate-x-1/2 rounded-full bg-[#6800EE]/10 blur-[120px] -z-10" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Tag */}
        <div className="mb-6 flex justify-center">
          <span className="inline-flex rounded-full p-[1.5px] bg-[linear-gradient(98.61deg,_#D700FA_-6.86%,_#28093B_58.51%,_#6800EE_120.22%)]">
            <span className="rounded-full bg-[#0B0713] px-5 py-2 text-[13px] md:text-[14px] font-semibold text-white/90">
              WHAT WE OFFER
            </span>
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center font-outfit text-[26px] sm:text-[28px] md:text-[34px] font-semibold tracking-tight">
          Where Strategy Meets Digital Success
        </h2>

        <p className="mx-auto mt-2 max-w-2xl text-center font-inter text-[14px] md:text-[16px] leading-[24px] md:leading-[28px] text-[#9B96B0]">
          At MaxReach, we blend strategic thinking with innovative digital
          solutions to help brands thrive. Your journey to success starts here.
        </p>

        {/* Services grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {services.map((s, idx) => (
            <ServiceCard
              key={idx}
              icon={s.icon}
              title={s.title}
              text={s.text}
              spanClass={spans[idx]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  text,
  spanClass,
}: {
  icon: string;
  title: string;
  text: string;
  spanClass: string;
}) {
  const Icon = () => {
    switch (icon) {
      case "seo":
        return (
          <img
            src="/icons/seoopt.png"
            alt="SEO Icon"
            className="h-7 w-7 md:h-8 md:w-8 object-contain"
          />
        );
      case "ads":
        return (
          <img
            src="/icons/iconads.png"
            alt="Google Ads Icon"
            className="h-7 w-7 md:h-8 md:w-8 object-contain"
          />
        );
      default:
        return (
          <img
            src={
              icon === "social"
                ? "/icons/s1.png"
                : icon === "consult"
                ? "/icons/s3.png"
                : icon === "email"
                ? "/icons/s4.png"
                : icon === "analysis"
                ? "/icons/s5.png"
                : "/icons/s8.png"
            }
            alt=""
            className="h-7 w-7 md:h-8 md:w-8 object-contain"
          />
        );
    }
  };

  return (
    <div
      className={["rounded-[16px] border border-white/15 p-3", spanClass].join(
        " "
      )}
    >
      <div className="relative overflow-hidden rounded-[12px] p-4 md:p-5 bg-[#0F0B1B]/40">
        {/* subtle grid frame (stays on top of card bg) */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[url('/images/serviceborder.png')] bg-no-repeat bg-center bg-cover opacity-90"
        />
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-outfit text-[14px] md:text-[15px] font-semibold">
            {title}
          </h3>
          <Icon />
        </div>

        <p className="mt-2 max-w-[560px] font-inter text-[13px] leading-6 text-white/70">
          {text}
        </p>

        {/* Button */}
        <button
          className="
            relative mt-6 inline-flex items-center gap-3 h-12 md:h-14 px-6 md:px-7
            text-[12px] md:text-[13px] font-outfit uppercase tracking-[0.2em] text-white
            bg-transparent rounded-[999px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20
          "
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[999px] p-[1.5px]"
            style={{
              background:
                "linear-gradient(98.61deg,#D700FA -6.86%, #28093B 58.51%, #6800EE 120.22%)",
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="-mb-[1px]"
            aria-hidden
          >
            <path
              fill="currentColor"
              d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3ZM5 5h6v2H7v8h8v-4h2v6H5V5Z"
            />
          </svg>
          LEARN MORE
        </button>
      </div>
    </div>
  );
}
