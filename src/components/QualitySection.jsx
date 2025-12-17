import React from "react";

function QualitySection() {
  return (
    <div className="mt-10 px-5 md:px-10 lg:pe-20">

      {/* Top Arrow */}
      <img
        src="https://odoocdn.com/openerp_website/static/src/img/arrows/grey_arrow_loop_01.svg"
        className="ms-auto h-40 hidden md:block"
      />

      {/* MAIN LAYOUT */}
      <div className="
        flex flex-col lg:flex-row
        gap-10
        items-center lg:items-start
      ">

        {/* LEFT IMAGE CONTAINER */}
        <div className="
          w-full lg:w-[80%]
          bg-[#181b25]
          h-[50vh] md:h-[60vh] lg:h-[80vh]
          rounded-3xl lg:rounded-e-full
          flex justify-center items-center
        ">
          <img
            src="https://odoocdn.com/openerp_website/static/src/img/apps/inventory/device.png"
            className="
              h-[80%] md:h-[90%] lg:h-full
              object-contain
            "
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-auto text-center lg:text-left">

          <h1 className="
            text-3xl md:text-5xl lg:text-7xl
            font-bold text-white my-5
          ">
            Speed up receipt, quality control and storage
          </h1>

          <p className="text-base md:text-lg lg:text-[1.2rem]">
            <strong className="text-white">
              Control incoming and outgoing shipments
            </strong>{" "}
            with push and pull rules, GS-1 codes, and customizable routes.
          </p>

          <p className="text-base md:text-lg lg:text-[1.2rem] mt-3">
            Use put-away strategies to optimize your storage: slow-fast movers,
            ABC analysis, cross-dock... all you need to reduce the number of parts
            moved, and distances.
          </p>

          {/* PERSONA CALLOUT */}
          <div className="
            flex justify-center lg:justify-end
            mt-12 lg:mt-20
          ">
            <div
              className="h-24 flex items-center relative"
              style={{
                backgroundImage:
                  "url(https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_persona/bg_green.svg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                whiteSpace: "nowrap",
              }}
            >
              <img
                src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_persona/bob.png"
                className="h-14 w-14 lg:h-18 lg:w-18 absolute -top-3 -left-8 lg:-left-10"
              />
              <img
                src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_persona/message.svg"
                className="h-8 w-8 lg:h-10 lg:w-10 absolute -top-3 left-8 filter invert"
              />
              <p className="
                bg-white text-black
                text-sm md:text-base lg:text-lg
                px-6 lg:px-10
                py-2 lg:py-3
                rounded-full
              ">
                Works offline: No WiFi coverage issues!
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default QualitySection;
