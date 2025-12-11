import { ArrowLeft, ChevronDown, Facebook, GithubIcon, Instagram, LinkedinIcon, Menu } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'


function HeroSection() {
    return (
        <div className='flex flex-col gap-7 relative pt-40'>

                            {/* <span className='mx-3' style={{
                    backgroundImage: `url(https://odoocdn.com/openerp_website/static/src/img/highlights/green_highlight_03.svg)`,
                    backgroundPosition:"center bottom",
                    backgroundRepeat : "no-repeat",
                    backgroundSize: "contain",
                    whiteSpace:"nowrap"
                }}>
                    modern
                </span> */}
            <img src='https://atelier-product.vercel.app/images/ns-img-dark-126.svg' className='hero-bakground-pattern h-100vh' />
            <div className='hero-background-wrap'>
                {/* <div className='hero-blob-center'></div>
                <div className='hero-blob-left'></div>
                <div className='hero-blob-right'></div> */}


            </div>
            <h1 className='text-8xl font-bold text-white text-center w-full'>Finally, a modern inventory system</h1>
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
