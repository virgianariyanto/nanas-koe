import React from "react";
import {data} from "../data/data";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const CardMenu = ({ searchTerm }) => {
    const [menus, setMenus] = React.useState(data);
    const [searchTerm2, setSearchTerm2] = useState("");

    // Efek untuk menyaring menu berdasarkan pencarian
    useEffect(() => {
        setMenus(
            data.filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm]); // Jalankan saat searchTerm berubah

    const handleSearch = (e) => {
        const keyword = e.target.value.toLowerCase();
        setSearchTerm2(keyword);
        setMenus(data.filter((item) => item.name.toLowerCase().includes(keyword)));
    };


    // Filter type of food
    const filterType = (type) => {
        setMenus(data.filter((item) => item.category === type));
    }

    // Filter price of food
    const filterRate = (rate) => {
        setMenus(data.filter((item) => item.rate === rate));
    }

    return(
        <div className="max-w-[1640px] mx-auto px-4 py-12">
            <h1 className="text-[#7BA1A6] font-bold text-4xl text-center mb-10">Top Rated Menu Items</h1>

            {/* Input Pencarian */}
            <div className="flex items-center mb-6 w-full sm:w-[75%] md:w-1/2 lg:hidden mx-auto bg-slate-200 rounded-full px-2">
                <AiOutlineSearch size={20} className="text-black" />
                <input
                    type="text"
                    className="p-2 focus:outline-none w-full text-slate-900"
                    placeholder="search.."
                    value={searchTerm2}
                    onChange={handleSearch} // Jalankan fungsi saat input berubah
                />
            </div>

            {/* Filter row */}
            <div className="flex flex-col">
                {/* Filter Type */}
                <div>
                    <p className="font-bold text-slate-300">Filter Type</p>
                    <div className="flex flex-wrap">
                        <button onClick={() => setMenus(data)} className="px-3 py-0.5 m-1 rounded-2xl border border-[#A67C6D] text-[#A67C6D] hover:bg-[#A67C6D] hover:text-white">All</button>
                        <button onClick={() => filterType('kuekering')} className="px-3 py-0.5 m-1 rounded-2xl border border-[#A67C6D] text-[#A67C6D] hover:bg-[#A67C6D]  hover:text-white">Kue Kering</button>
                        <button onClick={() => filterType('snack')} className="px-3 py-0.5 m-1 rounded-2xl border border-[#A67C6D] text-[#A67C6D] hover:bg-[#A67C6D]  hover:text-white">Snack</button> 
                        <button onClick={() => filterType('cake&bakery')} className="px-3 py-0.5 m-1 rounded-2xl border border-[#A67C6D] text-[#A67C6D] hover:bg-[#A67C6D]  hover:text-white">Cake & Bakery</button> 
                    </div>
                </div>

                {/* Filter Price */}
                <div className="my-2">
                    <p className="font-bold text-slate-300">Filter Price</p>
                    <div className="flex flex-wrap">
                        <button onClick={() => setMenus(data)} className="px-3 py-0.5 m-1 rounded-2xl border border-[#A67C6D] text-[#A67C6D] hover:bg-[#A67C6D]  hover:text-white">All</button>
                        <button onClick={() => filterRate('murah')} className="px-3 py-0.5 m-1 rounded-2xl border border-[#A67C6D] text-[#A67C6D] hover:bg-[#A67C6D]  hover:text-white">10K</button>
                        <button onClick={() => filterRate('sedang')} className="px-3 py-0.5 m-1 rounded-2xl border border-[#A67C6D] text-[#A67C6D] hover:bg-[#A67C6D]  hover:text-white">50K</button> 
                        <button onClick={() => filterRate('mahal')} className="px-3 py-0.5 m-1 rounded-2xl border border-[#A67C6D] text-[#A67C6D] hover:bg-[#A67C6D]  hover:text-white">100K</button> 
                    </div>
                </div>    
            </div>

            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {menus.length > 0 ? (
                        menus.map((item, index) => (
                            <div key={index} className="shadow-xl rounded-xl bg-[#315955]">
                                <img src={item.image} alt={item.name} className="w-full h-60 object-cover rounded-t-lg hover:scale-105 duration-200" />
                                <div className="p-3.5 flex justify-between items-center">
                                    <h2 className="text-lg font-bold text-slate-300">{item.name}</h2>
                                    <p className="text-sm text-white bg-[#194013] py-0.5 px-1 rounded-2xl"><b>{item.price}</b></p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">Menu tidak ditemukan</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardMenu;