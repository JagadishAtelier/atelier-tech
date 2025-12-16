import React, { useState } from "react";
import { Checkbox } from "./ui/checkbox";

function HeroDashboard() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div
            className="mt-30 lg:h-[110vh] relative z-50 -top-30"
        //   style={{
        //     backgroundImage: `url(https://odoocdn.com/html_editor/shape/illustration/doodle/01.svg?c4=%23ffffff)`,
        //     backgroundPosition: "top center",
        //     backgroundRepeat: "no-repeat",
        //     backgroundSize: "contain",
        //     whiteSpace: "normal",
        //   }}
        >
            <div className="mx-auto w-[85%] h-100 relative rounded-md shadow flex flex-col items-center gap-8">
                <img
                    src="https://odoocdn.com/openerp_website/static/src/img/graphics/corner_1.svg"
                    className="absolute -top-0 left-15 h-30 lg:block hidden"
                />

                <img
                    src="/LapDash.png"
                    className="rounded-[10px] object-top object-cover rotate-[5deg]"
                />

                {/* PLAY BUTTON */}
                {/* <img
                    src="https://odoocdn.com/openerp_website/static/src/img/icons/play.svg"
                    className="absolute top-70 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 bg-white p-3 rounded-full cursor-pointer zoom-animation"
                    onClick={() => setOpenModal(true)}
                /> */}

                {/* CONTENT BELOW */}
                <div className="flex flex-col gap-4">
                    <img
                        src="https://odoocdn.com/openerp_website/static/src/img/icons/plus.svg"
                        className="h-10"
                    />
                    <h3 className="lg:text-5xl text-3xl md:text-5xl font-semibold text-center text-white">
                        Automate vendor reminders too!
                    </h3>

                    <div className="bg-white lg:p-5 p-5 rounded-md text-black shadow-md flex flex-col gap-4 items-start">
                        <div className="flex gap-10">
                            <p className="text-base ">Confirmation date</p>
                            <p>11/11/2025 12:13</p>
                            <p>(confirmed by vendor)</p>
                        </div>

                        <div className="flex gap-10">
                            <p className="text-black font-semibold">Expected Arrival</p>
                            <p>13/11/2025 12:13</p>
                        </div>

                        <div className="flex gap-10 ms-auto">
                            <div className="flex gap-1">
                                <Checkbox className="h-5 w-5" defaultChecked />
                                <p>Ask confirmation</p>
                            </div>
                            <p>1 day(s) before</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL */}
            {openModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-4 relative w-[90%] max-w-3xl">

                        {/* CLOSE BUTTON */}
                        <button
                            className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow cursor-pointer"
                            onClick={() => setOpenModal(false)}
                        >
                            ❌
                        </button>

                        {/* RESPONSIVE YOUTUBE VIDEO */}
                        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="Demo Video"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HeroDashboard;
