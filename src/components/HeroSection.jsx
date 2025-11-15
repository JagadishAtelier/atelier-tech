import { ArrowLeft, ChevronDown, Facebook, GithubIcon, Instagram, LinkedinIcon, Menu } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'


function HeroSection() {
    return (
        <div className='flex flex-col gap-7 mt-7'>
            <h1 className='text-8xl font-bold text-white text-center'>Finally, a
                <span className='mx-3' style={{
                    backgroundImage: `url(https://odoocdn.com/openerp_website/static/src/img/highlights/green_highlight_03.svg)`,
                    backgroundPosition:"center bottom",
                    backgroundRepeat : "no-repeat",
                    backgroundSize: "contain",
                    whiteSpace:"nowrap"
                }}>
                    modern
                </span>
                inventory system</h1>
            <div>
                <p className='text-2xl text-center'>Optimize performance, automate tasks, and gain real-time insights with</p>
                <p className='text-2xl text-center'>Atelier Creation’s powerful software suite.</p>
            </div>
            <div className='flex gap-5 justify-center items-center'>
                <Button variant={null} className="flex items-center justify-center h-13 w-40 bg-[#005bd4] text-white text-2xl font-semibold">Start now - It's free</Button>
                <Button variant={null} className="flex items-center justify-center h-13 w-40 bg-gray-100 text-black text-2xl font-semibold">Meet an advisor <ChevronDown /></Button>
            </div>
            <p className='text-lg text-center'>Free, forever, with unlimited users. <span className='text-[#005bd4]'>See why</span></p>
        </div>
    )
}

export default HeroSection
