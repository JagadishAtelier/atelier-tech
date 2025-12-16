import { ArrowLeft, ChevronDown, Facebook, GithubIcon, Instagram, LinkedinIcon, Menu } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const heroSlides = [
    {
        title: "Finally, a modern inventory system",
        desc1: "Optimize performance, automate tasks, and gain real-time insights with",
        desc2: "Atelier Creation’s powerful software suite.",
        primaryBtn: "Start now - It's free",
        secondaryBtn: "Meet an advisor",
        showButtons: true,
        
    },
    {
        title: "Manage smarter. Scale faster.",
        desc1: "Powerful automation and real-time analytics",
        desc2: "built for growing teams.",
        showButtons: true,
                primaryBtn: "Start now - It's free",
        secondaryBtn: "Meet an advisor",
    },
];


function HeroSection() {
    return (
        <div className='flex justify-left items-center relative ps-30 pe-20 h-[110vh]'>

            {/* <span className='mx-3' style={{
                    backgroundImage: `url(https://odoocdn.com/openerp_website/static/src/img/highlights/green_highlight_03.svg)`,
                    backgroundPosition:"center bottom",
                    backgroundRepeat : "no-repeat",
                    backgroundSize: "contain",
                    whiteSpace:"nowrap"
                }}>
                    modern
                </span> */}
            <img
                src="https://atelier-product.vercel.app/images/ns-img-dark-126.svg"
                className="
    hidden lg:block
    absolute
    top-0
    left-9
    h-[100vh]
    w-[90rem]
    object-cover
    pointer-events-none
    animate-pulse
  "
            />

            <div className="w-1/2">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    loop
                    speed={800}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    className="w-full"
                >
                    {heroSlides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col gap-7">
                                <h1 className="lg:text-7xl text-3xl md:text-5xl font-bold text-white text-start">
                                    {slide.title}
                                </h1>

                                <div className="px-4 lg:px-0 w-[80%]">
                                    <p className="lg:text-lg text-start">{slide.desc1}</p>
                                    <p className="lg:text-lg text-start">{slide.desc2}</p>
                                </div>

                                {slide.showButtons && (
                                    <div className="flex lg:flex-row flex-col gap-5">
                                        <Button className="lg:h-13 w-40 !bg-[#005bd4] text-white text-2xl font-semibold">
                                            {slide.primaryBtn}
                                        </Button>

                                        <Button className="lg:h-13 w-40 !bg-gray-100 !text-black text-2xl font-semibold">
                                            {slide.secondaryBtn} <ChevronDown />
                                        </Button>
                                    </div>
                                )}

                                <p className="lg:text-lg text-start">
                                    Free, forever, with unlimited users.
                                    <span className="text-[#005bd4]"> See why</span>
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className='flex items-center justify-end relative z-10'>

                <img
                    src="/LapDash.png"
                    className="rounded-[10px] object-cover h-[70vh] w-full"
                />
            </div>
        </div>
    )
}

export default HeroSection
