import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { MdDeliveryDining, MdOutlineMenuBook, MdFavorite, MdCall } from "react-icons/md";

const Navbar = () => {
const [nav, setNav] = useState(false)

    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            {/* Left side */}
            <div className="flex items-center">
                <div onClick={() => setNav(!nav)} className="cursor-pointer">
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

            {/* Cart Button */}
            <button className="bg-black text-white hidden md:flex items-center p-2 rounded-full">
                <BsFillCartFill size={20} className="mr-1" /> Cart
            </button>

            {/* Mobile Menu */}
            {/* Overlay */}
            {nav ? <div className="bg-black/60 fixed z-10 w-full h-screen left-0 bottom-0"></div> : '' }

            {/* Sidebar Drawer Menu */}
            <div className={nav ? 'fixed z-10 w-[300px] left-0 top-0 bottom-0 bg-white duration-500' : 'fixed z-10 w-[300px] -left-100 top-0 bottom-0 bg-white duration-500'}>
                <AiOutlineClose onClick={() => setNav(!nav)} size={20} className="top-4 right-4 absolute cursor-pointer text-slate-600" />
                <h2 className="text-3xl p-4">Best <span className="font-bold">Eats</span></h2>

                <nav>
                    <ul className="flex flex-col p-4">
                        <li className="flex items-center text-xl py-2 text-slate-600"><MdOutlineMenuBook className="mr-4" size={25} /><span className="text-[17px]">Order</span></li>
                        <li className="flex items-center text-xl py-2 text-slate-600"><MdDeliveryDining className="mr-4" size={25} /><span className="text-[17px]">Delivery</span></li>
                        <li className="flex items-center text-xl py-2 text-slate-600"><MdFavorite className="mr-4" size={25} /><span className="text-[17px]">Favorite</span></li>
                        <li className="flex items-center text-xl py-2 text-slate-600"><MdCall className="mr-4" size={25} /><span className="text-[17px]">Contact</span></li>
                        <li className="flex items-center text-xl py-2 text-slate-600"><AiFillTag className="mr-4" size={25} /><span className="text-[17px]">Promo</span></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar