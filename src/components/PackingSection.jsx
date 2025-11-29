import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function PackingSection() {
    const truckRef = useRef(null);

useEffect(() => {
    gsap.to(truckRef.current, {
        x: -400,
        ease: "power2.out",
        scrollTrigger: {
            trigger: truckRef.current,
            start: "top 80%",
            end: "top 10%",
            scrub: 3,     // slower & smoother
        },
    });
}, []);


    return (
        <div className='mt-10 ps-20'>
            <img src='https://odoocdn.com/openerp_website/static/src/img/graphics/arrow_zig_zag_down_right.svg' className='me-auto h-30' />
            <div className='flex justify-between'>
                <div className='w-1/2'>
                    <h1 className='text-7xl font-bold text-white my-5'>
                        <span className='mx-3' style={{
                            backgroundImage: `url(https://odoocdn.com/openerp_website/static/src/img/highlights/red_highlight_bold_05.svg)`,
                            backgroundPosition: "center center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            whiteSpace: "nowrap"
                        }}>
                            Packing
                        </span>
                        has never been easier
                    </h1>
                    <p className='text-[1.2rem]'>
                        Atelier integrates with carriers to print shipping labels, quality controls, and different packing units such as parts, boxes, pallets, and more.
                    </p>
                </div>

                {/* TRUCK SECTION */}
                <div className="relative h-[50vh] w-full overflow-x-hidden">
                    <div className="absolute top-0 -right-60" ref={truckRef}>
                        <img
                            src="https://odoocdn.com/openerp_website/static/src/img/apps/inventory/truck.webp"
                            className="h-90"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PackingSection;
