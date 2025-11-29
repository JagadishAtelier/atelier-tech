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
      "Odoo Inventory replaced our legacy spreadsheets which were unable to keep up with our growing business. The biggest benefits we realized were saving time by using a simpler system, and greater overall accessibility to our inventory.",
  },
];

function TestiSection() {
  return (
    <div className="mt-10 px-20">

      <img
        src="https://odoocdn.com/openerp_website/static/src/img/arrows/grey_arrow_loop_02.svg"
        className="ms-auto h-50"
      />

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        slidesPerView={1}
        className="mt-10 test-swiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="overflow-visible">
            <div className="relative bg-[#F3F4F6] p-10 rounded-2xl text-black overflow-visible">

                <div className="absolute -top-10 left-20">
                    <img src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_testimonials/quote.svg" className="h-15"/>
                </div>

              {/* ABSOLUTE TOP RIGHT IMAGE + TEXT */}
              <div className="absolute -top-10 right-20 flex flex-col items-end gap-3">
                <img
                  src={item.image}
                  className="w-20 h-20 object-cover rounded-full border-2 border-white"
                />
                <div className="text-right">
                  <p className="font-semibold text-lg">{item.name}</p>
                  <p className="text-sm text-black">{item.prof}</p>
                </div>
              </div>

              {/* COMMENT */}
              <p className="text-2xl w-200 ps-10">
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
