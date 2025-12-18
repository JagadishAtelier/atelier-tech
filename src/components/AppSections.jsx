import React from 'react'

const data = [
  {
    image: "https://download.odoocdn.com/icons/sale/static/description/icon.svg",
    head: "Sales",
    content: "Boost sales with automation"
  },
  {
    image: "https://download.odoocdn.com/icons/sale/static/description/icon.svg",
    head: "Manufacturing",
    content: "Streamlined production workflow"
  },
  {
    image: "https://download.odoocdn.com/icons/sale/static/description/icon.svg",
    head: "Purchase",
    content: "Smarter vendor procurement"
  },
  {
    image: "https://download.odoocdn.com/icons/sale/static/description/icon.svg",
    head: "Accounting",
    content: "Accurate financial management"
  },
  {
    image: "https://download.odoocdn.com/icons/sale/static/description/icon.svg",
    head: "Quality",
    content: "Ensure top product standards"
  },
]

function AppSections() {
  return (
    <div className="mt-10 px-5 md:px-10 lg:px-20 text-white">

      {/* Arrow */}
      <img
        src="https://odoocdn.com/openerp_website/static/src/img/arrows/grey_arrow_loop_01.svg"
        className="ms-auto h-32 md:h-40 lg:h-50 hidden md:block"
      />

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold my-5 text-left lg:text-left">
        One need, one app.
      </h1>

      <p className="text-base md:text-lg lg:text-[1.2rem] mb-10 text-left lg:text-left">
        Expand as you grow.
      </p>

      {/* GRID SECTION */}
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="
              flex items-center gap-5
              bg-[#181b25] text-white
              p-5 rounded-2xl
              w-full lg:max-w-[430px]
            "
          >
            {/* IMAGE */}
            <div className="bg-[#181b25] p-2 rounded shrink-0">
              <img
                src={item.image}
                className="h-12 w-12 md:h-14 md:w-14"
              />
            </div>

            {/* CONTENT */}
            <div>
              <p className="text-xl md:text-2xl font-semibold">
                {item.head}
              </p>
              <p className="text-base md:text-lg opacity-80">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      {/* <div className="flex gap-3 items-center mt-8 justify-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
          See all features
        </h1>
        <img
          src="https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_03.svg"
          className="h-4 md:h-5"
        />
      </div> */}

    </div>
  )
}

export default AppSections
