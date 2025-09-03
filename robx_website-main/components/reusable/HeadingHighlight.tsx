"use client";

import React from "react";

type Variant = "heading" | "subheading";

export interface HeadingHighlightProps {
  /** Pehle wala normal text (optional) */
  text?: React.ReactNode;
  /** Highlighted text (optional) */
  highlightText?: React.ReactNode;
  /** Neeche chhota sub text (optional) */
  subText?: React.ReactNode;
  /** Typography variant */
  variant?: Variant;
  /** Extra classes */
  className?: string;
}

export default function HeadingHighlight({
  text = "",
  highlightText = "",
  subText = "",
  variant = "heading",
  className = "",
}: HeadingHighlightProps): JSX.Element {
  const isHeading = variant === "heading";

  return (
    <div className={`w-full ${className}`}>
      <h2
        className={`font-bold ${
          isHeading
            ? "text-2xl md:text-4xl lg:text-5xl"
            : "text-xl md:text-2xl lg:text-3xl"
        }`}
      >
        {text && <span className="mr-2">{text}</span>}
        {highlightText && (
          <span className="text-[#DC00F9]">{highlightText}</span>
        )}
      </h2>

      {subText && (
        <p className="mt-2 text-sm md:text-base text-white/80">{subText}</p>
      )}
    </div>
  );
}
