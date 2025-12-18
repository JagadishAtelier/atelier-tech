import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function PackingSection() {
  const truckRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(truckRef.current, {
        x: window.innerWidth >= 1024 ? -400 : -200, // desktop unchanged
        ease: "power2.out",
        scrollTrigger: {
          trigger: truckRef.current,
          start: "top 80%",
          end: "top 10%",
          scrub: 3,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="mt-10 px-5 md:px-10 lg:ps-20">

      {/* Arrow */}
      <img
        src="https://odoocdn.com/openerp_website/static/src/img/graphics/arrow_zig_zag_down_right.svg"
        className="me-auto h-20 lg:h-30"
        alt=""
      />

      <div className="flex flex-col lg:flex-row justify-between gap-10">

        {/* TEXT */}
        <div className="w-full lg:w-1/2">
          <h1 className="
            text-3xl md:text-5xl lg:text-7xl
            font-bold text-white my-5
          ">
            Packing has never been easier
          </h1>

          <p className="text-base md:text-lg lg:text-[1.2rem]">
            Atelier integrates with carriers to print shipping labels, quality
            controls, and different packing units such as parts, boxes, pallets,
            and more.
          </p>
        </div>

        {/* TRUCK */}
        <div className="
          relative
          h-[25vh] md:h-[45vh] lg:h-[50vh]
          w-full
          overflow-x-hidden
        ">
          <div
            ref={truckRef}
            className="
              absolute top-0
              -right-100 lg:-right-74
            "
          >
            <img
              src="https://odoocdn.com/openerp_website/static/src/img/apps/inventory/truck.webp"
              className="
                h-48 md:h-64 lg:h-85
              "
              alt="Truck"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default PackingSection;
