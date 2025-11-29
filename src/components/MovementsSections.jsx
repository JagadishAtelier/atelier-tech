import React from 'react'

const data = [
    {
        image: "https://odoocdn.com/openerp_website/static/src/img/apps/inventory/wave-picking.svg",
        head: "Wave picking",
        content: "Launch picking orders per aisle, or area, and regroup at packing zone. Ideal for large warehouses."
    },
    {
        image: "https://odoocdn.com/openerp_website/static/src/img/apps/inventory/wave-picking.svg",
        head: "Wave picking",
        content: "Launch picking orders per aisle, or area, and regroup at packing zone. Ideal for large warehouses."
    },
    {
        image: "https://odoocdn.com/openerp_website/static/src/img/apps/inventory/wave-picking.svg",
        head: "Wave picking",
        content: "Launch picking orders per aisle, or area, and regroup at packing zone. Ideal for large warehouses."
    },
]
function MovementsSections() {
    return (
        <div className='mt-10 px-20'>
            <img src='https://odoocdn.com/openerp_website/static/src/img/arrows/grey_arrow_md_04.svg' className='mx-auto h-30' />

            <div>
                <h1 className='text-7xl text-center font-bold text-white my-5'>
                    <span className='mx-3' style={{
                        backgroundImage: `url(https://odoocdn.com/openerp_website/static/src/img/highlights/green_highlight_bold_01.svg)`,
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        whiteSpace: "nowrap"
                    }}>
                        Minimize
                    </span>
                    picking movements
                </h1>
                <p className='text-center text-[1.2rem]'>Choose the right strategy for you: single, cluster, wave, or batch picking. Trigger goods to release using multiple reservation strategies. Implementing the rights strategies allows to pick and pack 30% extra products with the same team.</p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14'>
                    {data.map((item, index) => (
                        <div key={index} className=''>
                            <img src={item.image} className='w-100 h-100 mx-auto shadow rounded-md' />
                            <div className='p-4'>
                            <p className='text-2xl font-semibold text-white mb-4'>{item.head}</p>
                            <p className='text-gray-300 text-[1.2rem]'>{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovementsSections