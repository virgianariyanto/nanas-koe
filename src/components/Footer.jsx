import React from "react";
import { MdLocationOn,MdCall } from "react-icons/md";

const Footer = () => {
    return(
        <div className="bg-orange-900 py-8">
            <div className="max-w-[1640px] mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    <div>
                        {/* <h1 className="text-orange-500 font-bold text-2xl">Foodies</h1> */}
                        <p className="text-white">Dari Dapur Kami ke Meja Anda.</p>
                    </div>
                    <div>
                        <ul className="flex flex-col">
                            <li className="flex items-center py-2">
                                <h2 className="text-orange-500 font-bold text-xl">Contact Us</h2>
                            </li>
                            <li className="flex items-center py-2">
                                <MdLocationOn className="mr-2 text-white" size={25}/><h2 className="text-white">Ds. Sidorejo RT.02 RW.01 Kec. Bungah Kab. Gresik</h2>
                            </li>
                            <li className="flex items-center py-2">
                                <MdCall className="mr-2 text-white" size={25}/><h2 className="text-white">085704822627</h2>
                            </li>
                        </ul>
                    </div>
                    </div>
                <div className="mt-8">
                    <p className="text-center text-white">© 2025 Nanas Koe</p>
                </div>
            </div>
        </div>

    )
}

export default Footer