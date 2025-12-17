import React from "react";
import { Button } from "./ui/button";

function OrganizedSection() {
  return (
    <div className="mt-16 sm:mt-24 lg:mt-30 relative z-50 px-4 sm:px-6">
      
      <div className="relative w-fit mx-auto flex flex-col gap-2 sm:gap-3 items-center text-center">

        {/* HEADLINE */}
        <h1 className="
          font-bold leading-snug
          text-4xl sm:text-6xl md:text-7xl lg:text-8xl
        ">
          Being organized
        </h1>

        <h1 className="
          font-bold leading-snug
          text-4xl sm:text-6xl md:text-7xl lg:text-8xl
        ">
          never felt so good
        </h1>

        {/* FIREWORK LEFT */}
        <img
          src="https://odoocdn.com/openerp_website/static/src/img/graphics/fireworks_01a.svg"
          className="
            absolute
            -top-5 sm:-top-16 lg:-top-20
            -left-4 sm:-left-6 lg:-left-10
            h-14 sm:h-28 lg:h-40
          "
        />

        {/* FIREWORK RIGHT */}
        <img
          src="https://odoocdn.com/openerp_website/static/src/img/graphics/fireworks_01b.svg"
          className="
            absolute
            -top-6 sm:-top-10
            -right-4 sm:-right-10 md:-right-12 lg:-right-15
            h-14 sm:h-22 lg:h-30
          "
        />
      </div>
    </div>
  );
}

export default OrganizedSection;
