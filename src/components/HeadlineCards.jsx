import React from "react";

const HeadlineCards = () => {
    return(
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
            {/* Card */}
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">Lorem ipsum dolor sit amet.</p>
                    <p className="px-2">Lorem, ipsum dolor.</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4 p-2 rounded-2xl">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="./image/pexels-khairulonggon-908177.jpg" alt="foto-donut" />
            </div>
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">Lorem ipsum dolor sit amet.</p>
                    <p className="px-2">Lorem, ipsum dolor.</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4 p-2 rounded-2xl">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="./image/pexels-horizon-content-2100060-3738730.jpg" alt="foto-donut" />
            </div>
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">Lorem ipsum dolor sit amet.</p>
                    <p className="px-2">Lorem, ipsum dolor.</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4 p-2 rounded-2xl">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="./image/pexels-khairulonggon-908177.jpg" alt="foto-donut" />
            </div>
        </div>
    )
}

export default HeadlineCards