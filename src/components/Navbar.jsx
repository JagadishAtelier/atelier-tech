import { ChevronDown } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
function Navbar() {
    return (
        <div className='flex items-center justify-between pe-4 mt-5
            backdrop-filter-none
    bg-[#ffffff4d]
    border border-[#0000001a]
    rounded-[16px]
    w-full max-w-[810px]
    mx-auto
    shadow-[inset_0_4px_4px_#ffffff40]
        '>
            <img src='https://atelier-sdu1.vercel.app/assets/blue_logo-BZsKBbFk.svg' className='h-20' />

            <div className='flex items-center gap-7 text-white'>
                <a href='inventory' className='flex gap-1 items-center font-semibold'>
                    <p>Inventory</p>
                    <ChevronDown />
                </a>
                <a href='/overview' className='font-semibold'>
                    <p>OverView</p>
                </a>
                <a href='features' className='font-semibold'>
                    <p>Features</p>
                </a>
                <a href='hardware' className='font-semibold'>
                    <p>Hardware</p>
                </a>
            </div>

            <div className='flex gap-4 items-center text-white'>
                <a href='/sign-in' className='font-semibold'>sign in</a>
                <Button variant={null} className="bg-[#005bd4] text-white">
                    Try it free
                </Button>

            </div>
        </div>
    )
}

export default Navbar