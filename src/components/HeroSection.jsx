import { ChevronDown } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const heroSlides = [
  {
    title: "Finally, a modern inventory system",
    desc1:
      "Optimize performance, automate tasks, and gain real-time insights with",
    desc2: "Atelier Creation’s powerful software suite.",
    primaryBtn: "Start now - It's free",
    secondaryBtn: "Meet an advisor",
    showButtons: true,
  },
  {
    title: "Manage smarter. Scale faster.",
    desc1: "Powerful automation and real-time analytics",
    desc2: "built for growing teams.",
    primaryBtn: "Start now - It's free",
    secondaryBtn: "Meet an advisor",
    showButtons: true,
  },
];

function HeroSection() {
  return (
    <section className="relative lg:min-h-screen text-white overflow-hidden lg:pt-20">
      {/* Background Decoration */}
      {/* DOT GRID BACKGROUND */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <div
          className="
      absolute inset-0
      bg-[radial-gradient(circle,_rgba(255,255,255,0.35)_1px,_transparent_1px)]
      bg-[length:22px_22px]
      opacity-40
      animate-[drift_60s_linear_infinite]
    "
        />

        {/* Gradient fade */}
        <div
          className="
    absolute inset-0
    bg-gradient-to-b
    from-transparent
    via-transparent
    to-[#0e121b]
  "
        />
      </div>

      <div
        className="
         mx-auto
        flex flex-col lg:flex-row
        items-center
        gap-12
        px-6 md:px-10 lg:px-20
        lg:pt-20 pt-20 lg:pb-20 pb-0
      "
      >
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 z-10">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop
            speed={800}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
          >
            {heroSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-6">
                  <h1
                    className="
                    text-4xl md:text-5xl lg:text-7xl
                    font-bold leading-tight
                  "
                  >
                    {slide.title}
                  </h1>

                  <div className="max-w-xl text-gray-300">
                    <p className="text-base md:text-lg">{slide.desc1}</p>
                    <p className="text-base md:text-lg">{slide.desc2}</p>
                  </div>

                  {slide.showButtons && (
                    <div className="flex lg:flex-row sm:flex-col gap-5">
                      <Button className="lg:h-13 w-40 !bg-[#005bd4] text-white text-2xl font-semibold">
                        {slide.primaryBtn}
                      </Button>

                      <Button className="lg:h-13 w-40 !bg-gray-100 !text-black text-2xl font-semibold">
                        {slide.secondaryBtn} <ChevronDown />
                      </Button>
                    </div>
                  )}

                  <p className="text-sm md:text-base text-gray-400">
                    Free, forever, with unlimited users.
                    <span className="text-[#005bd4] cursor-pointer">
                      {" "}
                      See why
                    </span>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center relative z-10">
          <img
            src="/inventory/LapDash.png"
            className="
              w-full max-w-[720px]
              h-auto
              rounded-xl
              shadow-2xl
            "
            alt="Dashboard Preview"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
