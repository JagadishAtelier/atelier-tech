import React from 'react'
import { Button } from './ui/button'

function OrganizedSection() {
    return (
        <div
            className="mt-30 relative z-50"
        >

            <div className='flex flex-col gap-3 justify-center items-center relative w-fit mx-auto'>
                <h1 className='text-9xl font-bold'>Being organized</h1>
                <h1 className='text-9xl font-bold'>never felt so good</h1>
                <div className='flex flex-col gap-3 mt-4 justify-center items-center'>
                    <Button variant={null} className="flex items-center justify-center h-13 w-40 bg-[#005bd4] text-white text-2xl font-semibold">Start now - It's free</Button>
                    <img src='https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_01.svg' />
                    <p className=''>No credit card required Instant access</p>
                </div>
                <img
                    src="https://odoocdn.com/openerp_website/static/src/img/graphics/fireworks_01a.svg"
                    className="absolute -top-20 -left-10 h-40"
                />
                <img
                    src="https://odoocdn.com/openerp_website/static/src/img/graphics/fireworks_01b.svg"
                    className="absolute -top-10 -right-15 h-30"
                />
            </div>
        </div>
    )
}

export default OrganizedSection