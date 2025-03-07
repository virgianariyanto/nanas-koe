import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from "react-icons/ai";
import { BsFillCartFill, BsWhatsapp } from "react-icons/bs";
import { MdDeliveryDining, MdOutlineMenuBook, MdFavorite, MdCall } from "react-icons/md";

const Navbar = ({ onSearchChange }) => {
  const [nav, setNav] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const keyword = e.target.value;
    setSearchTerm(keyword);
    onSearchChange(keyword); // Kirim data pencarian ke CardMenu
  }

  const handleWhatsAppClick = () => {
    const message = "Halo, Saya mau order.";
    const phone = "+6285704822627";
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  }

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 fixed top-0 left-0 right-0 bg-[#122624] z-50">
      {/* Left side */}
      <div className="flex items-center">
        {/* <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div> */}
        <div className="mr-4 fixed">
            <img src="./image/nanasKoe-logo.png" alt="logo" className="w-52" />
        </div>
        <label htmlFor="Toggle3" className="items-center p-1 bg-slate-200 rounded-full cursor-pointer ml-52 hidden md:inline-flex">
          <input id="Toggle3" type="checkbox" className="hidden peer" />
          <span className="px-4 py-1 rounded-full bg-[#889C9B] text-white transition-colors duration-300 peer-checked:bg-slate-200 peer-checked:text-slate-500">Pickup</span>
          <span className="px-4 py-1 rounded-full bg-slate-200 text-slate-500 transition-colors duration-300 peer-checked:bg-[#889C9B] peer-checked:text-white">Delivery</span>
        </label>
      </div>

      {/* Search Input */}
      <div className="hidden bg-slate-200 rounded-full px-2 lg:flex items-center w-[100px] lg:w-[500px] ">
        <AiOutlineSearch size={20} className="text-black" />
        <input
          type="text"
          className="p-2 focus:outline-none w-full text-slate-900"
          placeholder="search.."
          value={searchTerm}
          onChange={handleSearch} // Jalankan fungsi saat input berubah
        />
      </div>

      {/* Cart Button */}
      <button onClick={handleWhatsAppClick} className="bg-green-500 hover:bg-green-600 transition-all cursor-pointer text-white flex items-center py-2 px-3 rounded-full">
        {/* <BsFillCartFill size={20} className="mr-1" /> Cart */}
        <BsWhatsapp size={20} className="mr-1" /> Whatsapp
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/60 fixed z-10 w-full h-screen left-0 bottom-0"></div>
      ) : (
        ""
      )}

      {/* Sidebar Drawer Menu */}
      <div
        className={
          nav
            ? "fixed z-10 w-[300px] left-0 top-0 bottom-0 bg-[#122624] duration-500"
            : "fixed z-10 w-[300px] -left-100 top-0 bottom-0 bg-[#122624] duration-500"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={20}
          className="top-4 right-4 absolute cursor-pointer text-slate-600"
        />
        <h2 className="text-3xl text-slate-300 p-4">
          Nanas<span className="font-bold">Koe</span>
        </h2>

        <nav>
          <ul className="flex flex-col p-4">
            <li className="flex items-center text-xl py-2 text-slate-200">
              <MdOutlineMenuBook className="mr-4" size={25} />
              <span className="text-[17px]">Order</span>
            </li>
            <li className="flex items-center text-xl py-2 text-slate-200">
              <MdDeliveryDining className="mr-4" size={25} />
              <span className="text-[17px]">Delivery</span>
            </li>
            <li className="flex items-center text-xl py-2 text-slate-200">
              <MdFavorite className="mr-4" size={25} />
              <span className="text-[17px]">Favorite</span>
            </li>
            <li className="flex items-center text-xl py-2 text-slate-200">
              <MdCall className="mr-4" size={25} />
              <span className="text-[17px]">Contact</span>
            </li>
            <li className="flex items-center text-xl py-2 text-slate-200">
              <AiFillTag className="mr-4" size={25} />
              <span className="text-[17px]">Promo</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;