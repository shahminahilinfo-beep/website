"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiOutlineSearch, HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";

import Button from "../reusable/Button";
import { navLinks } from "../../constant/data";

// ---- Types ----
type IconType = React.ElementType;
type DropdownItem = { to: string; label: string; icon?: IconType };
type NavLinkItem = { to?: string; label: string; dropdown?: DropdownItem[] };

const Navbar: React.FC = () => {
  const path = usePathname() || "/";
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  // ✅ Auto-close on ANY route change (Home/Blogs/Services items)
  useEffect(() => {
    closeMenu();
  }, [path]);

  // Close dropdown on outside click (desktop)
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Lock body scroll when drawer open (mobile)
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <div className="w-full overflow-x-clip">
      {/* NAVBAR (Desktop) */}
      <nav
        className="fixed top-0 left-0 w-full z-50 h-18 bg-[#0E0613]/80 text-white font-normal border-b-2 border-gray-600 uppercase backdrop-blur-sm"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto w-full max-w-[1280px] px-4 md:px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" aria-label="Home page">
              <Image
                src="/robx-logo.png"
                alt="ROBX Logo"
                width={160}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Links (Desktop) */}
          <div className="hidden lg:flex items-center">
            <ul className="flex items-center font-semibold gap-6 xl:gap-8">
              {(navLinks as NavLinkItem[]).map((link, index) =>
                link.dropdown ? (
                  <li
                    key={index}
                    className="relative flex items-center"
                    ref={dropdownRef}
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href="/services"
                      className={`flex items-center transition-colors duration-200 ${
                        path === "/services" ? "text-[#dc00f9]" : "hover:text-[#dc00f9]"
                      }`}
                      aria-haspopup="true"
                      aria-expanded={isServicesDropdownOpen}
                    >
                      {link.label}
                      <MdKeyboardArrowDown
                        className={`w-4 h-4 ml-2 transform ${
                          isServicesDropdownOpen ? "rotate-180" : ""
                        } transition-transform duration-300 ease-in-out`}
                      />
                    </Link>

                    {/* Dropdown */}
                    <ul
                      className={`absolute top-[110%] left-0 bg-[#0E0613]/95 border border-white/20 p-2 backdrop-blur-sm rounded-md shadow-lg z-50 text-white/90 transition-all duration-200 ease-out ${
                        isServicesDropdownOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                      role="menu"
                    >
                      {link.dropdown.map((item, subIndex) => {
                        const Icon = item.icon;
                        return (
                          <li key={subIndex} className="group px-4 py-3 text-sm text-nowrap w-full" role="menuitem">
                            <Link
                              href={item.to}
                              className={`w-fit flex items-center justify-start gap-2 transition-colors duration-200 ${
                                path === item.to ? "text-[#dc00f9]" : "text-white/90 hover:text-[#dc00f9]"
                              }`}
                              aria-label={item.label}
                            >
                              {Icon ? <Icon className="w-5 h-5" /> : null}
                              <span>{item.label}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                ) : (
                  <li key={index}>
                    <Link
                      href={link.to || "#"}
                      className={`transition-colors duration-200 ${
                        (link.to === "/" && path === "/") || path === (link.to || "#")
                          ? "text-[#dc00f9]"
                          : "hover:text-[#dc00f9]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Right actions (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <HiOutlineSearch className="w-5 h-5 text-white" aria-label="Search" />
            <div className="h-[24px] w-px bg-gray-300/70" />
            <Link href="/contact" aria-label="Get a Free Consultation">
              <Button text="Get a Free Consultation" variant="gradient" />
            </Link>
          </div>

          {/* Burger (Mobile) */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen((s) => !s)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <HiOutlineMenuAlt3 className="w-7 h-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop (Mobile) */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* MOBILE DRAWER */}
      <nav
        className={`fixed top-0 right-0 h-full lg:hidden bg-[#16091F] border-l border-[#A234FD] text-white z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out w-full max-w-[360px] shadow-2xl`}
        role="dialog"
        aria-label="Mobile navigation menu"
      >
        <button
          className="absolute top-3 right-3 p-2"
          onClick={() => setMenuOpen((s) => !s)}
          aria-label="Close mobile menu"
        >
          <CgClose className="w-6 h-6" />
        </button>

        <div className="h-full flex flex-col pt-12">
          <ul className="flex-1 overflow-y-auto text-base md:text-lg font-bold space-y-7 p-7 pt-2 text-left">
            {(navLinks as NavLinkItem[]).map((link, index) =>
              link.dropdown ? (
                <li key={index}>
                  <button
                    type="button"
                    className={`flex justify-start items-center cursor-pointer transition-colors duration-200 ${
                      path === "/services" ? "text-[#dc00f9]" : "hover:text-[#dc00f9]"
                    }`}
                    onClick={() => setServicesDropdownOpen((s) => !s)}
                    aria-haspopup="true"
                    aria-expanded={isServicesDropdownOpen}
                  >
                    {link.label}
                    <MdKeyboardArrowDown
                      className={`w-5 h-5 ml-2 transform ${
                        isServicesDropdownOpen ? "rotate-180" : ""
                      } transition-transform duration-300 ease-in-out`}
                    />
                  </button>

                  {/* Mobile dropdown */}
                  <ul
                    className={`flex flex-col items-start bg-[#1a0d22] rounded-md py-4 mt-2 space-y-4 transition-all duration-200 ease-out ${
                      isServicesDropdownOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                    role="menu"
                  >
                    {link.dropdown.map((item, subIndex) => {
                      const Icon = item.icon;
                      return (
                        <li key={subIndex} className="px-4 py-2 text-base md:text-lg w-full" role="menuitem">
                          {/* onClick not required now, route change will auto-close via effect */}
                          <Link
                            href={item.to}
                            className={`flex items-center justify-start gap-2 transition-colors duration-200 ${
                              path === item.to ? "text-[#dc00f9]" : "text-white/90 hover:text-[#dc00f9]"
                            }`}
                            aria-label={item.label}
                          >
                            {Icon ? (
                              <Icon
                                className={`w-5 h-5 ${
                                  path === item.to ? "text-[#dc00f9]" : "text-white hover:text-[#dc00f9]"
                                }`}
                              />
                            ) : null}
                            <span>{item.label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ) : (
                <li key={index}>
                  <Link
                    href={link.to || "#"}
                    className={`transition-colors duration-200 ${
                      (link.to === "/" && path === "/") || path === (link.to || "#")
                        ? "text-[#dc00f9]"
                        : "hover:text-[#dc00f9]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="p-7 pt-0">
            <Link href="/contact" aria-label="Get a Free Consultation">
              <Button text="Get a Free Consultation" variant="gradient" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
