import React from "react";

const Hero = () => {
    return(
        <div className="max-w-[1640px] mx-auto p-4 mt-16">
            <div className="max-h-[500px] relative">
                {/* Overlay */}
                <div className="absolute w-full h-full rounded-2xl text-slate-200 max-h-[500px] bg-black/50 flex flex-col justify-center">
                    <h1 className="px-16 text-4xl sm:text-5xl md:text-5xl font-normal tracking-tighter">Dari Dapur <span className="text-[#A67C6D] font-semibold">Kami</span></h1>
                    <h1 className="px-16 text-2xl sm:text-3xl md:text-3xl font-light tracking-wide">Untuk Meja Anda</h1>
                    {/* <h5 className="p-4 font-bold text-[14px] md:text-[16px]">Since 2020</h5> */}
                </div>
                <img className="w-full max-h-[500px] object-cover rounded-2xl" src="./image/pexels-mzynasx-28202767.jpg" alt="donuts image" />
            </div>
        </div>
    )
}

export default Hero