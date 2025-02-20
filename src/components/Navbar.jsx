import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            {/* Left side */}
            <div className="flex items-center">
                <div className="cursor-pointer">
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
                    Best <span className="font-bold">Eats</span>
                </h1>
                <div className="hidden lg:flex items-center rounded-full p-1 bg-slate-200 text-[14px]">
                    <p className="bg-black p-1 rounded-full text-white">Delivery</p>
                    <p className="p-1">Pickup</p>
                </div>
            </div>

            {/* Search Input */}
            <div className="flex items-center bg-slate-200 rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
                <AiOutlineSearch size={20} className="text-black" />
                <input type="text" className="p-2 focus:outline-none w-full text-slate-900" placeholder="search.." />
            </div>

            {/* Cart */}
            <button className="bg-black text-white hidden md:flex items-center p-2 rounded-full">
                <BsFillCartFill size={20} className="mr-1" /> Cart
            </button>

        </div>
    )
}

export default Navbar