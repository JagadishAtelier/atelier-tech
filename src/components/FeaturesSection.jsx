import React from 'react'

const dataLeft = [
    {
        head: "Fast barcode scanner",
        content: "Blazing fast as most operations are performed offline; zero latency scans! Supports barcode, QR Code and GS-1, and is even optimized for products without barcodes."
    },
    {
        head: "Fast barcode scanner",
        content: "Blazing fast as most operations are performed offline; zero latency scans! Supports barcode, QR Code and GS-1, and is even optimized for products without barcodes.",
        image: "https://odoocdn.com/openerp_website/static/src/img/apps/inventory/smarts_routes.webp"
    },
    {
        head: "Fast barcode scanner",
        content: "Blazing fast as most operations are performed offline; zero latency scans! Supports barcode, QR Code and GS-1, and is even optimized for products without barcodes."
    },
]
const dataRight = [
    {
        head: "Clear reservation mechanism",
        image: "https://odoocdn.com/openerp_website/static/src/img/apps/inventory/reservation_mechanism.webp"
    },
    {
        head: "Clear reservation mechanism",
        image: "https://odoocdn.com/openerp_website/static/src/img/apps/inventory/reservation_mechanism.webp"
    },
]

function FeaturesSection() {
    return (
        <div className='mt-10 px-20'>
            <img
                src='https://odoocdn.com/openerp_website/static/src/img/arrows/grey_arrow_md_04.svg'
                className='mx-auto h-30'
            />

            <h1 className='text-7xl font-bold text-white my-5'>
                All the features done right
            </h1>

            {/* LEFT + RIGHT side layout */}
            <div className='grid grid-cols-2 gap-10 mt-10'>

                {/* LEFT SIDE */}
                <div className='flex flex-col gap-6'>
                    {dataLeft.map((item, i) => (
                        <div
                            key={i}
                            className='bg-[#181b25] backdrop-blur-xl p-6 rounded-xl  relative shadow'
                        >
                            {/* <div className='absolute right-10 top-0 bg-white rounded-b-full flex justify-center items-center'>
                                <img src='https://odoocdn.com/openerp_website/static/src/img/icons/heart.svg' className='h-15' />
                            </div> */}
                            <p className='text-2xl font-bold text-white mb-2'>{item.head}</p>
                            <p className='text-gray-300 mb-3 text-[1.2rem]'>{item.content}</p>

                            {/* Conditionally render image */}
                            {item.image && (
                                <img
                                    src={item.image}
                                    className='rounded-lg w-full object-cover mt-3'
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* RIGHT SIDE */}
                <div className='flex flex-col gap-6'>
                    {dataRight.map((item, i) => (
                        <div
                            key={i}
                            className='bg-[#181b25] backdrop-blur-xl p-6 rounded-xl relative shadow-md'
                        >
                            {/* <div className='absolute right-10 top-0 bg-white rounded-b-full flex justify-center items-center'>
                                <img src='https://odoocdn.com/openerp_website/static/src/img/icons/heart.svg' className='h-15' />
                            </div> */}
                            <p className='text-2xl font-bold text-white mb-4'>{item.head}</p>
                            <img
                                src={item.image}
                                className='rounded-lg w-full object-cover h-79'
                            />
                        </div>
                    ))}
                </div>

            </div>
            <div className='flex gap-3 items-center mt-6 justify-center'>
                <h1 className='text-3xl font-bold text-white'>See all features</h1>
                <img src='https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_03.svg' className='h-5' />
            </div>
        </div>
    )
}

export default FeaturesSection
