import React from "react";

const dataLeft = [
  {
    head: "Fast barcode scanner",
    content:
      "Blazing fast as most operations are performed offline; zero latency scans! Supports barcode, QR Code and GS-1, and is even optimized for products without barcodes.",
  },
  {
    head: "Fast barcode scanner",
    content:
      "Blazing fast as most operations are performed offline; zero latency scans! Supports barcode, QR Code and GS-1, and is even optimized for products without barcodes.",
    image:
      "https://odoocdn.com/openerp_website/static/src/img/apps/inventory/smarts_routes.webp",
  },
  {
    head: "Fast barcode scanner",
    content:
      "Blazing fast as most operations are performed offline; zero latency scans! Supports barcode, QR Code and GS-1, and is even optimized for products without barcodes.",
  },
];

const dataRight = [
  {
    head: "Clear reservation mechanism",
    image:
      "https://odoocdn.com/openerp_website/static/src/img/apps/inventory/reservation_mechanism.webp",
  },
  {
    head: "Clear reservation mechanism",
    image:
      "https://odoocdn.com/openerp_website/static/src/img/apps/inventory/reservation_mechanism.webp",
  },
];

function FeaturesSection() {
  return (
    <section className="mt-10 px-5 md:px-10 lg:px-20">
      <img
        src="https://odoocdn.com/openerp_website/static/src/img/arrows/grey_arrow_md_04.svg"
        className="mx-auto h-20 lg:h-30"
      />

      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white my-5 text-center lg:text-left">
        All the features done right
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-10">
        {/* LEFT */}
        <div className="flex flex-col gap-6">
          {dataLeft.map((item, i) => (
            <div
              key={i}
              className="bg-[#181b25] backdrop-blur-xl p-5 lg:p-6 rounded-xl shadow"
            >
              <p className="text-xl lg:text-2xl font-bold text-white mb-2">
                {item.head}
              </p>

              <p className="text-gray-300 text-base lg:text-[1.2rem] mb-3">
                {item.content}
              </p>

              {item.image && (
                <img
                  src={item.image}
                  className="rounded-lg w-full object-cover mt-3"
                />
              )}
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-6">
          {dataRight.map((item, i) => (
            <div
              key={i}
              className="bg-[#181b25] backdrop-blur-xl p-5 lg:p-6 rounded-xl shadow-md"
            >
              <p className="text-xl lg:text-2xl font-bold text-white mb-4">
                {item.head}
              </p>

              <img
                src={item.image}
                className="rounded-lg w-full object-cover h-56 md:h-72 lg:h-79"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex gap-3 items-center mt-10 justify-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
          See all features
        </h1>
        <img
          src="https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_03.svg"
          className="h-4 md:h-5"
        />
      </div>
    </section>
  );
}

export default FeaturesSection;
