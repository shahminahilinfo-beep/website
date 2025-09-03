"use client";

import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

type Variant = "default" | "gradient" | "light" | "dark" | "purple";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: Variant;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "default",
  onClick,
  className = "",
  type = "button",
  ...rest
}) => {
  let baseClasses = "py-2 px-4 font-bold text-base lg:text-lg";
  let icon: React.ReactNode = null;

  switch (variant) {
    case "default":
      baseClasses +=
        " flex flex-row-reverse items-center justify-between gap-3 text-white bg-gradient-to-r py-3 rounded-xl from-[#D700FA] via-[#28093B] to-[#6800EE] border";
      icon = <FaCircleArrowRight size={26} />;
      break;

    case "gradient":
      baseClasses +=
        " text-white bg-gradient-to-r from-[#D700FA] via-[#28093B] to-[#6800EE] rounded-lg";
      break;

    case "light":
      baseClasses += " text-black bg-[#F0EBF5] rounded-lg";
      break;

    case "dark":
      baseClasses +=
        " flex flex-row-reverse items-center justify-between gap-3 text-white bg-black gradient-border-wrapper py-3 rounded-lg";
      icon = <FaCircleArrowRight size={26} />;
      break;

    case "purple":
      baseClasses +=
        " flex flex-row-reverse items-center justify-between gap-3 text-white bg-[#A234FD] rounded mt-2 border";
      icon = <FaCircleArrowRight size={26} />;
      break;

    default:
      break;
  }

  return (
    <button
      type={type}
      className={`${baseClasses} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
