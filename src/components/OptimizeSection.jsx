import React from 'react'

function OptimizeSection() {
  return (
    <div className="mt-10 px-5 md:px-10 lg:px-20">
      
      {/* Arrow */}
      <img
        src="https://odoocdn.com/openerp_website/static/src/img/graphics/arrow_zig_zag_down_right.svg"
        className="me-auto h-32 md:h-40 lg:h-50"
      />

      <div className="flex flex-col lg:flex-row justify-between gap-10">

        {/* TEXT */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white my-5">
            Optimize your warehouse
          </h1>

          <p className="text-base md:text-lg lg:text-[1.2rem]">
            <strong className="text-white">Real-time inventory management </strong>
            with all the features: serial numbers, lots, packaging, reservation strategies,
            cycle counting, KPIs, and more...
          </p>

          <br />

          <p className="text-base md:text-lg lg:text-[1.2rem]">
            Blazing-fast inventory lookup: instantly know the location of all your products
            across multiple warehouses or multiple companies.
          </p>
        </div>

        {/* IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full flex justify-center items-center">

            {/* Circle */}
            <div className="
              bg-[#181b25]
              h-[45vh] w-[45vh]
              md:h-[75vh] md:w-[75vh]
              lg:h-[70vh] lg:w-[70vh]
              rounded-full
            " />

            {/* Main Image */}
            <img
              src="/inventory/Report.png"
              className="
                absolute
                w-full
                h-[30vh]
                lg:h-[50vh]
                md:h-[50vh]
                md:w-[100%]
                lg:w-[80vh]
                top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                rounded-md shadow
              "
            />

            {/* Icon */}
            <img
              src="https://odoocdn.com/openerp_website/static/src/img/icons/yellow_unbox.svg"
              className="
                absolute
                w-[70px]
                md:w-[90px]
                lg:w-[12vh]
                -bottom-2
                right-[15%]
                rounded-md shadow
              "
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default OptimizeSection
