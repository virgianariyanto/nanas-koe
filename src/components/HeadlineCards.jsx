import React from "react";

const HeadlineCards = () => {
    return(
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
            {/* Card */}
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4 text-[#B2BEBF]">Soes</p>
                    <p className="px-2 text-[#B2BEBF] pt-2">Soes lembut dengan isian krim lumer, renyah di luar, creamy di dalam. Cocok untuk camilan dan suguhan spesial!</p>
                    <button className="bg-[#A67C6D] text-slate-200 mx-2 absolute bottom-4 p-2 rounded-xl hover:bg-[#8b6252] transition-all cursor-pointer">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="./image/IMG_8959.jpeg" alt="foto-donut" />
            </div>
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4 text-[#B2BEBF]">Nastar</p>
                    <p className="px-2 text-[#B2BEBF] pt-2">Nastar lembut dengan isian selai nanas legit, lumer di mulut. Cocok untuk camilan dan hantaran spesial!</p>
                    <button className="bg-[#A67C6D] text-slate-200 mx-2 absolute bottom-4 p-2 rounded-xl hover:bg-[#8b6252] transition-all cursor-pointer">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="./image/IMG_8585.jpg" alt="foto-donut" />
            </div>
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4 text-[#B2BEBF]">Donat Kentang</p>
                    <p className="px-2 text-[#B2BEBF] pt-2">Tekstur lembut dengan pilihan berbagai variant rasa</p>
                    <button className="bg-[#A67C6D] text-slate-200 mx-2 absolute bottom-4 p-2 rounded-xl hover:bg-[#8b6252] transition-all cursor-pointer">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="./image/pexels-khairulonggon-908177.jpg" alt="foto-donut" />
            </div>
        </div>
    )
}

export default HeadlineCards