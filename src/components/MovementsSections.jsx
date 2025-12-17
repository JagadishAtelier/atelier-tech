import React from "react";

const data = [
  {
    image: "https://odoocdn.com/openerp_website/static/src/img/apps/inventory/wave-picking.svg",
    head: "Wave picking",
    content:
      "Launch picking orders per aisle, or area, and regroup at packing zone. Ideal for large warehouses.",
  },
  {
    image: "https://odoocdn.com/openerp_website/static/src/img/apps/inventory/wave-picking.svg",
    head: "Wave picking",
    content:
      "Launch picking orders per aisle, or area, and regroup at packing zone. Ideal for large warehouses.",
  },
  {
    image: "https://odoocdn.com/openerp_website/static/src/img/apps/inventory/wave-picking.svg",
    head: "Wave picking",
    content:
      "Launch picking orders per aisle, or area, and regroup at packing zone. Ideal for large warehouses.",
  },
];

function MovementsSections() {
  return (
    <div className="mt-10 px-5 md:px-10 lg:px-20">
      
      {/* Arrow */}
      <img
        src="https://odoocdn.com/openerp_website/static/src/img/arrows/grey_arrow_md_04.svg"
        className="mx-auto h-20 md:h-24 lg:h-30"
      />

      <div>
        {/* Heading */}
        <h1 className="
          text-3xl md:text-5xl lg:text-7xl
          text-center font-bold text-white my-5
        ">
          Minimize picking movements
        </h1>

        {/* Description */}
        <p className="
          text-center
          text-base md:text-lg lg:text-[1.2rem]
          max-w-5xl mx-auto
        ">
          Choose the right strategy for you: single, cluster, wave, or batch picking.
          Trigger goods to release using multiple reservation strategies.
          Implementing the rights strategies allows to pick and pack 30% extra
          products with the same team.
        </p>

        {/* Cards */}
        <div className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-8 lg:gap-10
          mt-10 lg:mt-14
        ">
          {data.map((item, index) => (
            <div key={index}>
              
              {/* Image */}
              <img
                src={item.image}
                className="
                  mx-auto
                  w-40 h-40 md:w-56 md:h-56 lg:w-100 lg:h-100
                  shadow rounded-md
                "
                alt={item.head}
              />

              {/* Text */}
              <div className="p-4 text-center lg:text-left">
                <p className="text-xl lg:text-2xl font-semibold text-white mb-3">
                  {item.head}
                </p>
                <p className="text-gray-300 text-base lg:text-[1.2rem]">
                  {item.content}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovementsSections;
