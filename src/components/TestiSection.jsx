import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const data = [
  {
    image:
      "https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_testimonials/avatar/jeremy_b.webp",
    name: "Jeremy B.",
    prof: "Mid-market Business Owner",
    comment:
      "Atelier Inventory replaced our legacy spreadsheets which were unable to keep up with our growing business. The biggest benefits we realized were saving time by using a simpler system, and greater overall accessibility to our inventory.",
  },
  {
    image:
      "https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_testimonials/avatar/jeremy_b.webp",
    name: "Jeremy B.",
    prof: "Mid-market Business Owner",
    comment:
      "Atelier Inventory replaced our legacy spreadsheets which were unable to keep up with our growing business. The biggest benefits we realized were saving time by using a simpler system, and greater overall accessibility to our inventory.",
  },
];

function TestiSection() {
  return (
    <div className="mt-10 px-5 md:px-10 lg:px-20 overflow-hidden ">

      <img
        src="https://odoocdn.com/openerp_website/static/src/img/arrows/grey_arrow_loop_02.svg"
        className="ms-auto h-30 md:h-40 lg:h-50"
      />

      <Swiper
        modules={[Autoplay]}
        spaceBetween={80}
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
        loop
        className="mt-10 w-full test-swiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="overflow-y-visible">
            <div className="
              relative bg-[#F3F4F6]
              p-6 md:p-8 lg:p-10
              rounded-2xl text-black
            ">

              {/* QUOTE ICON */}
              <div className="
                absolute
                -top-6 md:-top-8 lg:-top-10
                left-6 md:left-10 lg:left-20
              ">
                <img
                  src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_testimonials/quote.svg"
                  className="h-10 md:h-12 lg:h-15"
                />
              </div>

              {/* AVATAR + NAME */}
              <div className="
                absolute
                -top-6 md:-top-8 lg:-top-10
                right-6 md:right-10 lg:right-20
                flex flex-col items-end gap-2
              ">
                <img
                  src={item.image}
                  className="
                    w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20
                    object-cover rounded-full border-2 border-white
                  "
                />
                <div className="text-right">
                  <p className="font-semibold text-sm md:text-base lg:text-lg">
                    {item.name}
                  </p>
                  <p className="text-xs md:text-sm">
                    {item.prof}
                  </p>
                </div>
              </div>

              {/* COMMENT */}
              <p className="
                mt-15 md:mt-12 lg:mt-0
                text-base md:text-xl lg:text-2xl
                max-w-full lg:w-[800px]
                ps-0 md:ps-6 lg:ps-10
              ">
                {item.comment}
              </p>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TestiSection;
