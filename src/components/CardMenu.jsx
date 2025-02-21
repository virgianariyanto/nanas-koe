import React from "react";
import {data} from "../data/data";

const CardMenu = () => {
    console.log(data);
    return(
        <div className="max-w-[1640px] mx-auto px-4 py-12">
            <h1 className="text-orange-500 font-bold text-4xl text-center">Top Rated Menu Items</h1>

            {/* Filter row */}
            <div className="flex flex-col">
                {/* Filter Type */}
                <div>
                    <p className="font-bold text-slate-700">Filter Type</p>
                    <div className="flex flex-wrap">
                        <button className="px-3 py-0.5 m-1 rounded-2xl border border-orange-600 text-orange-600 hover:bg-orange-600  hover:text-white">All</button>
                        <button className="px-3 py-0.5 m-1 rounded-2xl border border-orange-600 text-orange-600 hover:bg-orange-600  hover:text-white">Food</button>
                        <button className="px-3 py-0.5 m-1 rounded-2xl border border-orange-600 text-orange-600 hover:bg-orange-600  hover:text-white">Cake</button> 
                        <button className="px-3 py-0.5 m-1 rounded-2xl border border-orange-600 text-orange-600 hover:bg-orange-600  hover:text-white">Bakery</button> 
                    </div>
                </div>

                {/* Filter Price */}
                <div>
                    <p className="font-bold text-slate-700">Filter Price</p>
                    <div className="flex flex-wrap">
                        <button className="px-3 py-0.5 m-1 rounded-2xl border border-orange-600 text-orange-600 hover:bg-orange-600  hover:text-white">All</button>
                        <button className="px-3 py-0.5 m-1 rounded-2xl border border-orange-600 text-orange-600 hover:bg-orange-600  hover:text-white">$</button>
                        <button className="px-3 py-0.5 m-1 rounded-2xl border border-orange-600 text-orange-600 hover:bg-orange-600  hover:text-white">$$</button> 
                        <button className="px-3 py-0.5 m-1 rounded-2xl border border-orange-600 text-orange-600 hover:bg-orange-600  hover:text-white">$$$</button> 
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default CardMenu;