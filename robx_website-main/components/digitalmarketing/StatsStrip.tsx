// src/sections/home/StatsStrip.tsx
export default function StatsStrip() {
  return (
    <section className="relative">
      {/* Purple gradient background */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(98.61deg,_#D700FA_-6.86%,_#28093B_58.51%,_#6800EE_120.22%)]
        "
      />
      {/* Subtle diagonal dark band */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0
          opacity-30
          bg-[linear-gradient(110deg,transparent_30%,rgba(0,0,0,0.28)_50%,transparent_70%)]
        "
      />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-10 lg:px-12">
        {/* Flexible height on mobile; fixed bar feel on sm+ */}
        <div className="grid grid-cols-2 sm:grid-cols-4 place-items-stretch gap-y-6 sm:gap-y-0 py-6 sm:py-8 sm:h-[132px]">
          {/* 1 */}
          <div className="flex items-center justify-center px-2 sm:pr-8">
            <Stat number="24K" label="COMPLETED PROJECT" />
          </div>

          {/* 2 */}
          <div className="flex items-center justify-center px-2 sm:border-l sm:border-white/15 sm:pl-8 sm:pr-8">
            <Stat number="18K" label="HAPPY CLIENT" />
          </div>

          {/* 3 (adds a top border on mobile second row to mirror dividers) */}
          <div className="flex items-center justify-center px-2 border-t border-white/15 pt-6 sm:pt-0 sm:border-t-0 sm:border-l sm:border-white/15 sm:pl-8 sm:pr-8">
            <Stat number="22+" label="YEARS OF EXPERIENCE" />
          </div>

          {/* 4 (same mobile top border) */}
          <div className="flex items-center justify-center px-2 border-t border-white/15 pt-6 sm:pt-0 sm:border-t-0 sm:border-l sm:border-white/15 sm:pl-8">
            <Stat number="4.9" label="CLIENT RATINGS" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex w-full flex-col items-center justify-center text-white text-center">
      <div className="font-outfit font-semibold text-[26px] sm:text-[30px] md:text-[32px] leading-tight">
        {number}
      </div>
      <div className="font-outfit font-semibold text-[11px] sm:text-[12px] md:text-[12.5px] leading-[24px] sm:leading-[28px] tracking-[1.2px] uppercase">
        {label}
      </div>
    </div>
  );
}
