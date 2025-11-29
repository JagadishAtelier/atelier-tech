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
        <div className='mt-10 px-20 text-white'>

            <img
                src='https://odoocdn.com/openerp_website/static/src/img/arrows/grey_arrow_loop_01.svg'
                className='ms-auto h-50'
            />

            <h1 className='text-7xl font-bold my-5'>
                One
                <span className='mx-3 bg-no-repeat bg-contain bg-bottom'
                    style={{
                        backgroundImage: `url(https://odoocdn.com/openerp_website/static/src/img/graphics/underline.svg)`
                    }}>
                    need,
                </span>
                one
                <span className='mx-3 bg-no-repeat bg-contain bg-bottom'
                    style={{
                        backgroundImage: `url(https://odoocdn.com/openerp_website/static/src/img/graphics/underline.svg)`
                    }}>
                    app.
                </span>
            </h1>

            <p className='text-[1.2rem] mb-10'>Expand as you grow.</p>

            {/* GRID SECTION */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center'>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className='flex items-center gap-5 bg-[#F3F4F6] text-black p-5 rounded-2xl w-full max-w-[450px]'
                    >
                        {/* IMAGE LEFT */}
                        <div className='bg-white p-2 rounded'>
                            <img src={item.image} className='h-14 w-14' />
                        </div>
                        {/* CONTENT RIGHT */}
                        <div>
                            <p className='text-2xl font-semibold'>{item.head}</p>
                            <p className='text-lg opacity-80'>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex gap-3 items-center mt-6 justify-center'>
                <h1 className='text-3xl font-bold text-white'>See all features</h1>
                <img src='https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_03.svg' className='h-5' />
            </div>

        </div>
    )
}

export default AppSections
