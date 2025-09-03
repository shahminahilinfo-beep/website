"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import ErrorBoundary from "../ErrorBoundary";
import Image from "next/image";

type SlideItem = {
  image: string;
  title: string;
  description: string;
};

interface SliderComponentProps {
  slides: SlideItem[];
}

const FallbackImage: React.FC<{ src: string; alt: string; className?: string }> = ({
  src,
  alt,
  className,
}) => {
  const [fallback, setFallback] = useState<string | null>(null);

  return (
    <Image
      src={fallback ?? src}
      alt={alt}
      className={className}
      /* Responsive trick for Next/Image without fixed dims */
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      onError={() => {
        setFallback("https://via.placeholder.com/800x400?text=Image+Not+Found");
      }}
    />
  );
};

const SliderComponent: React.FC<SliderComponentProps> = ({ slides }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <ErrorBoundary>
      <div className="relative w-full space-y-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={3}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }} // default pagination bullets
          className="pb-12"
        >
          {slides?.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[540px] lg:h-[570px] xl:h-[540px] gradient-border-wrapper bg-[#671399] p-2 space-y-4 cursor-pointer">
                <FallbackImage
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-60 object-cover rounded-lg"
                />
                <div className="w-full px-2 space-y-7">
                  <h3 className="text-white text-xl md:text-2xl xl:text-3xl font-bold">
                    {slide.title}
                  </h3>
                  <p className="text-base text-[#E7E7E7]">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrows */}
        <div className="w-full flex items-center justify-center gap-7">
          <button
            type="button"
            className="z-20 bg-[#4F4F4F] hover:bg-[#DC00F9] text-white p-2 rounded-full transition"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous slide"
          >
            <HiOutlineChevronLeft className="w-6 h-6" />
          </button>

        <button
            type="button"
            className="z-20 bg-[#4F4F4F] hover:bg-[#DC00F9] text-white p-2 rounded-full transition"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next slide"
          >
            <HiOutlineChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* If you want custom pagination container, uncomment below and set
            pagination={{ clickable: true, el: ".custom-swiper-pagination" }} above */}
        {/* <div className="custom-swiper-pagination flex justify-center gap-2 mt-4" /> */}
      </div>
    </ErrorBoundary>
  );
};

export default SliderComponent;
