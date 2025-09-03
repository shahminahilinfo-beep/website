"use client";

import { FaStar } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../reusable/Button";
import HeadingHighlight from "../reusable/HeadingHighlight";
import { articles } from "../../constant/data";
import {
  fadeSlideLeft,
  fadeSlideRight,
  titleVariants,
  viewportOnce,
} from "../animations";

const Blog = () => {
  return (
    <section
      // className="
      //   relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16
      //   overflow-hidden overflow-x-hidden
      //   bg-gradient-to-b from-[#0B0713] via-[#0B0713] to-[#120A1E] text-white
      // "
      // className="
      //   relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16
      //   overflow-hidden overflow-x-hidden
      //  bg-[#200e2e] text-white
      // "
      className="
        static  w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16
        overflow-hidden overflow-x-hidden
       bg-[#200e2e] text-white
      "
      id="blog"
    >
      {/* Glow shapes */}
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-20 -left-40 opacity-70" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-80 -right-40 opacity-70" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 bottom-20 -left-40 opacity-70" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 bottom-80 -right-40 opacity-70" />

      {/* Main Content */}
      <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col justify-center items-center gap-16">
        <div className="relative w-full flex flex-col lg:flex-row justify-between items-start gap-7">
          {/* Left Text Section */}
          <motion.div
            className="lg:sticky top-24 flex flex-col items-start text-start w-full lg:w-[35%] space-y-7"
            variants={fadeSlideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* Title */}
            <motion.div
              className="flex items-center justify-center gap-3"
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <HeadingHighlight
                text="Latest"
                highlightText=" Blog"
                className="text-[#da00f7]"
              />
              <div className="space-y-2">
                <div className="bg-[#A234FD] w-14 h-[2px]" />
                <div className="bg-[#A234FD] w-7 h-[2px]" />
              </div>
            </motion.div>

            {/* Description */}
            <p className="text-base md:text-lg 2xl:text-xl max-w-2xl font-lato text-white/90">
              Each blog highlights our expertise and the transformative impact
              of our services
            </p>

            {/* Button */}
            <Link href="/blog">
              <Button text="More Blogs" variant="default" />
            </Link>

            {/* Avatars + rating */}
            <div className="flex items-center justify-start gap-4">
              <div className="flex items-center">
                {[
                  "/home/hero/Avatar1.svg",
                  "/home/hero/Avatar2.svg",
                  "/home/hero/Avatar3.svg",
                  "/home/hero/Avatar2.svg",
                ].map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt="Avatar"
                    className={`w-12 h-12 rounded-full border-4 border-[#28093B] shadow-md ${
                      index > 0 ? "-ml-3" : ""
                    }`}
                  />
                ))}
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-0 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={18} />
                  ))}
                </div>
                <p className="text-[#DC00F9] font-lato">
                  Trusted by 20k+ clients
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Blogs Section */}
          <motion.div
            className="w-full h-full lg:w-[60%] xl:w-[50%] flex flex-col items-center justify-start gap-7"
            variants={fadeSlideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {articles.map((item, index) => (
              <div
                key={index}
                className="w-full bg-[#F7F1FC] p-6 flex flex-col md:flex-row items-start justify-between gap-4 rounded-xl text-black"
              >
                <img
                  alt={item.title}
                  src={item.imageUrl}
                  className="h-40 md:h-52 w-full md:w-1/3 xl:w-[30%] rounded-xl object-cover max-w-full"
                />

                <div className="w-full md:w-2/3 xl:w-[70%] space-y-4">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-base lg:text-lg text-[#716F73] line-clamp-3 font-lato">
                    {item.description}
                  </p>

                  <div className="flex flex-col xl:flex-row items-start xl:items-center gap-3 justify-between font-lato">
                    {/* Author */}
                    <div className="flex items-center gap-2">
                      <span className="text-base font-semibold italic">
                        by {item.author}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="w-full xl:w-fit flex items-center justify-between gap-3 xl:gap-5">
                      <b>{item.date}</b>
                      <p className="text-white bg-gradient-to-r from-[#D700FA] via-[#28093B] to-[#6800EE] px-3 py-2 rounded font-bold uppercase">
                        {item.tag}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
