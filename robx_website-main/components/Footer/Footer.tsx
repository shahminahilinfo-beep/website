import Link from "next/link";

const services = [
  { label: "AI Chatbot", href: "/services/chatbot" },
  { label: "Generative AI Development", href: "/services/generative-development" },
  { label: "Web Application", href: "/services/web-applications" },
  { label: "Machine & Deep Learning", href: "/services/machine-learning" },
  { label: "Tokenization", href: "/services/tokenization" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
];

const company = [
  { label: "Our Team", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const support = [
  { label: "Help Center", href: "/blog" },
  { label: "Get Live Support", href: "/contact" },
  { label: "View Documentation", href: "/blog" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0713] border-t border-white/15">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-10">
          {/* left blurb */}
          <div className="md:col-span-6">
            <div className="font-outfit text-[#DC00F9] uppercase text-[13px] sm:text-[14px] leading-[1.2] tracking-[-0.38px] font-medium">
              HELLO! WE’RE LISTENING
            </div>

            <h3 className="mt-4 font-outfit text-white text-3xl sm:text-[36px] lg:text-[44px] leading-tight font-semibold text-balance">
              Let’s talk about
              <br />
              <span className="text-[#DC00F9] font-outfit">your vision</span>
            </h3>

            {/* Full clickable (text + SVG) -> /contact */}
            <Link
              href="/contact"
              aria-label="Go to contact page"
              className="group mt-6 inline-flex items-center gap-2 font-outfit text-[#F7F7F7] uppercase text-[13px] sm:text-[15px] leading-[1] font-semibold focus:outline-none focus:ring-2 focus:ring-[#DC00F9]/60 focus:ring-offset-2 focus:ring-offset-[#0B0713] rounded-md"
            >
              SOUNDS GOOD? LET’S CONNECT
              <svg
                className="transition-transform group-hover:translate-x-1"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M13 5h6v6h-2V8.41l-9.29 9.3-1.42-1.42L15.59 7H13V5Z"
                />
              </svg>
            </Link>
          </div>

          {/* right link columns */}
          <FooterColumn
            title="Services"
            items={services}
            className="md:col-span-2 md:text-nowrap"
          />
          <FooterColumn
            title="Company"
            items={company}
            className="md:col-span-2"
          />
          <FooterColumn
            title="Support"
            items={support}
            className="md:col-span-2"
          />
        </div>

        {/* divider */}
        <div className="my-8 md:my-10 h-px w-full bg-white/10" />

        {/* bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 text-[12px] text-white/60">
          <div>Copyright © {year} Robx | by Robx.ai</div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <Link href="/terms" className="hover:text-white focus:outline-none focus:underline">
              Term of Use
            </Link>
            <Link href="/privacy" className="hover:text-white focus:outline-none focus:underline">
              Privacy Policy
            </Link>
            <Link href="/refunds" className="hover:text-white focus:outline-none focus:underline">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
  className = "",
}: {
  title: string;
  items: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="mb-3 font-outfit text-[14px] font-semibold text-white">
        {title}
      </div>
      <ul className="space-y-1.5 sm:space-y-2">
        {items.map((it, i) => (
          <li key={i}>
            <Link
              href={it.href}
              className="block py-1 text-[12.5px] leading-6 text-white/70 transition hover:text-white focus:outline-none focus:underline"
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
