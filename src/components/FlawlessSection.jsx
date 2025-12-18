import React from "react";

function FlawlessSection() {
  return (
    <div className="lg:mt-0 lg:px-20 px-5 mt-10">

      {/* Top Arrow */}
      <img
        src="https://odoocdn.com/openerp_website/static/src/img/arrows/grey_arrow_md_04.svg"
        className="mx-auto hidden lg:block"
        alt=""
      />

      {/* Heading */}
      <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold text-white my-5 text-left lg:text-left">
        Flawless replenishments
      </h1>

      {/* Description */}
      <p className="lg:text-lg md:text-base text-sm leading-relaxed max-w-4xl mx-auto lg:mx-0">
        <strong className="text-white">Never run out-of-stock </strong>
        with smart replenishment strategies like min-max rules, MTO, or the master
        production schedule. Let Atelier propose, or trigger purchase orders
        automatically. Then automate vendor follow-ups to minimize communication
        risks : PO acknowledgment, receipt schedule confirmation a few days before,
        etc.
      </p>

      {/* Flow Section */}
      <div className="
        flex
        lg:flex-row md:flex-row flex-row
        justify-evenly
        items-center
        text-center
        py-6
        mt-8
        gap-6 md:gap-4 lg:gap-0
      ">

        {/* ITEM 1 */}
        <div className="flex flex-col items-center h-20 md:h-44 lg:h-48 lg:justify-end">
          <img
            src="https://odoocdn.com/openerp_website/static/src/img/icons/blue_truck.svg"
            className="lg:h-40 lg:w-40 md:h-24 h-15"
            alt=""
          />
          <h5 className="lg:text-4xl md:text-3xl text-lg mt-2 text-white font-semibold">
            Replenishment
          </h5>
        </div>

        {/* Arrow */}
        <img
          src="https://odoocdn.com/openerp_website/static/src/img/arrows/arrow_dot_02.svg"
          className="-rotate-90 hidden md:block lg:block md:w-6 lg:w-auto"
          alt=""
        />

        {/* ITEM 2 */}
        <div className="flex flex-col items-center h-20 md:h-44 lg:h-48 lg:justify-end">
          <img
            src="https://odoocdn.com/openerp_website/static/src/img/icons/yellow_shield_2.svg"
            className="lg:h-32 lg:w-32 md:h-24 h-15"
            alt=""
          />
          <h5 className="lg:text-4xl md:text-3xl text-lg mt-2 text-white font-semibold">
            Quality control
          </h5>
        </div>

        {/* Arrow */}
        <img
          src="https://odoocdn.com/openerp_website/static/src/img/arrows/arrow_dot_02.svg"
          className="-rotate-90 hidden md:block lg:block md:w-6 lg:w-auto"
          alt=""
        />

        {/* ITEM 3 */}
        <div className="flex flex-col items-center h-20 md:h-44 lg:h-48 lg:justify-end">
          <img
            src="https://odoocdn.com/openerp_website/static/src/img/icons/hand-truch.svg"
            className="lg:h-32 lg:w-32 md:h-24 h-15"
            alt=""
          />
          <h5 className="lg:text-4xl md:text-3xl text-lg mt-2 text-white font-semibold">
            Storage
          </h5>
        </div>

      </div>
    </div>
  );
}

export default FlawlessSection;
