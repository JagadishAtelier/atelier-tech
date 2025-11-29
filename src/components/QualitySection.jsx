import React from 'react'

function QualitySection() {
    return (
        <div className='mt-10 pe-20'>
            <img src='https://odoocdn.com/openerp_website/static/src/img/arrows/grey_arrow_loop_01.svg' className='ms-auto h-50' />

            <div className='flex justify-between gap-10 items-start'>
                <div className='w-[80%] bg-[#F3F4F6] h-[80vh] rounded-e-full flex justify-center items-center'>
                    <img src='https://odoocdn.com/openerp_website/static/src/img/apps/inventory/device.png'
                        className='h-100 object-cover' />
                </div>

                <div className=''>
                    <h1 className='text-7xl font-bold text-white my-5'>
                        <span className='mx-3' style={{
                            backgroundImage: `url(https://odoocdn.com/openerp_website/static/src/img/highlights/yellow_highlight_01.svg)`,
                            backgroundPosition: "center bottom",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            whiteSpace: "nowrap"
                        }}>
                            Speed up
                        </span>
                        receipt, quality control and storage
                    </h1>

                    <p className='text-[1.2rem]'><strong className='text-white'>Control incoming and outgoing shipments </strong> with push and pull rules, GS-1 codes, and customizable routes.</p>
                    <p className='text-[1.2rem]'>Use put-away strategies to optimize your storage: slow-fast movers, ABC analysis, cross-dock... all you need to reduce the number of parts moved, and distances.</p>

                    <div className='flex flex-col justify-center items-end mt-20'>
                        <div className='h-30 flex items-center relative' style={{
                            backgroundImage: `url(https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_persona/bg_green.svg)`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            whiteSpace: "nowrap"
                        }}>
                            <img src='https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_persona/bob.png' className='h-18 w-18 absolute -top-3 -left-10' />
                            <img src='https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_persona/message.svg' className='h-10 w-10 absolute -top-3 left-10 filter invert' />
                            <p className='bg-white text-black text-lg w-fit px-10 py-3 rounded-4xl'>Works offline: No WiFi coverage issues!</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default QualitySection