import React from 'react'

function OptimizeSection() {
    return (
        <div className='mt-10 px-20'>
            <img src='https://odoocdn.com/openerp_website/static/src/img/graphics/arrow_zig_zag_down_right.svg' className='me-auto h-50' />

            <div className='flex justify-between'>
                <div className='w-1/2'>
                    <h1 className='text-7xl font-bold text-white my-5'>
                        <span className='mx-3' style={{
                            backgroundImage: `url(https://odoocdn.com/openerp_website/static/src/img/highlights/yellow_highlight_01.svg)`,
                            backgroundPosition: "center bottom",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            whiteSpace: "nowrap"
                        }}>
                            Optimize
                        </span>
                        your warehouse
                    </h1>

                    <p className='text-[1.2rem]'><strong className='text-white'>Real-time inventory management </strong> with all the features: serial numbers, lots, packaging, reservation strategies, cycle counting, KPIs, and more...</p>
                    <br/>
                    <p className='text-[1.2rem]'>Blazing-fast inventory lookup: instantly know the location of all your products across multiple warehouses or multiple companies.</p>

                </div>
                <div className='w-1/2 flex justify-center items-center'>
                    <div className="relative w-full flex justify-center items-center">

                        {/* Circle */}
                        <div className="bg-[#181b25] h-[70vh] w-[70vh] rounded-full"></div>

                        {/* Image (centered on top of circle) */}
                        <img
                            src="/Report.png"
                            className="absolute w-[80vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md shadow"
                        />
                        <img
                            src="https://odoocdn.com/openerp_website/static/src/img/icons/yellow_unbox.svg"
                            className="absolute w-[12vh] -bottom-1 right-1/5 rounded-md shadow"
                        />

                    </div>


                </div>
            </div>
        </div>
    )
}

export default OptimizeSection