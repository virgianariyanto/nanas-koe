import React from "react";
import {data} from "../data/data";

const CardMenu = () => {
    const [menus, setMenus] = React.useState(data);

    // Filter type of food
    const filterType = (type) => {
        setMenus(data.filter((item) => item.category === type));
    }

    // Filter price of food
    const filterPrice = (harga) => {
        setMenus(data.filter((item) => item.price === harga));
    }

    return(
        <div className="max-w-[1640px] mx-auto px-4 py-12">
            <h1 className="text-orange-500 font-bold text-4xl text-center">Top Rated Menu Items</h1>

            {/* Filter row */}
            <div className="flex flex-col">
                {/* Filter Type */}
                <div>
                    <p className="font-bold text-slate-700">Filter Type</p>
                    <div className="flex flex-wrap">
                        <button onClick={() => setMenus(data)} className="px-3 py-0.5 m-1 rounded-2xl border border-orange-600 text-orange-600 hover:bg-orange-600  hover:text-white">All</button>
                        <button onClick={() => filterType('burger')} className="px-3 py-0.5 m-1 rounded-2xl border border-orange-600 text-orange-600 hover:bg-orange-600  hover:text-white">Food</button>
                        <button onClick={() => filterType('pizza')} className="px-3 py-0.5 m-1 rounded-2xl border border-orange-600 text-orange-600 hover:bg-orange-600  hover:text-white">Cake</button> 
                        <button onClick={() => filterType('salad')} className="px-3 py-0.5 m-1 rounded-2xl border border-orange-600 text-orange-600 hover:bg-orange-600  hover:text-white">Bakery</button> 
                    </div>
                </div>

                {/* Filter Price */}
                <div>
                    <p className="font-bold text-slate-700">Filter Price</p>
                    <div className="flex flex-wrap">
                        <button onClick={() => setMenus(data)} className="px-3 py-0.5 m-1 rounded-2xl border border-orange-600 text-orange-600 hover:bg-orange-600  hover:text-white">All</button>
                        <button onClick={() => filterPrice('$')} className="px-3 py-0.5 m-1 rounded-2xl border border-orange-600 text-orange-600 hover:bg-orange-600  hover:text-white">$</button>
                        <button onClick={() => filterPrice('$$')} className="px-3 py-0.5 m-1 rounded-2xl border border-orange-600 text-orange-600 hover:bg-orange-600  hover:text-white">$$</button> 
                        <button onClick={() => filterPrice('$$$')} className="px-3 py-0.5 m-1 rounded-2xl border border-orange-600 text-orange-600 hover:bg-orange-600  hover:text-white">$$$</button> 
                    </div>
                </div>    
            </div>

            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {menus.map((item, index) => (
                        <div key={index} className="shadow-xl rounded-lg">
                            <img src={item.image} alt={item.name} className="w-full h-60 object-cover rounded-t-lg hover:scale-105 duration-200" />
                            <div className="p-3.5 flex justify-between items-center">
                                <h2 className="text-lg font-bold text-orange-400">{item.name}</h2>
                                <p className="text-sm text-slate-700 bg-green-500 py-0.5 px-1 text-white rounded-2xl"><b>{item.price}</b></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardMenu;