import React from "react";
import { useState, useEffect } from "react";

const Testimony = () => {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        fetch("https://randomuser.me/api/")
            .then(response => response.json())
            .then(data => setImageUrl(data.results[0].picture.medium))
            .catch(error => console.error("Error:", error));
    }, []);

    return(
        <div className="bg-slate-900 py-12">
            <div className="max-w-[1640px] mx-auto px-4">
                <h1 className="text-orange-500 font-bold text-4xl text-center">What Our Customers Say</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                        <p className="text-slate-900 text-lg">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in nulla vitae</p>
                        <div className="flex items-center mt-4">
                            <img src={imageUrl} alt="user" className="w-12 h-12 object-cover rounded-full" />
                            <div className="ml-4">
                                <h2 className="text-lg font-bold text-orange-500">John Doe</h2>
                                <p className="text-sm text-slate-700">CEO of Company</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                        <p className="text-slate-900 text-lg">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in nulla vitae</p>
                        <div className="flex items-center mt-4">
                            <img src={imageUrl} alt="user" className="w-12 h-12 object-cover rounded-full" />
                            <div className="ml-4">
                                <h2 className="text-lg font-bold text-orange-500">John Doe</h2>
                                <p className="text-sm text-slate-700">CEO of Company</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                        <p className="text-slate-900 text-lg">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in nulla vitae</p>
                        <div className="flex items-center mt-4">
                            <img src={imageUrl} alt="user" className="w-12 h-12 object-cover rounded-full" />
                            <div className="ml-4">
                                <h2 className="text-lg font-bold text-orange-500">John Doe</h2>
                                <p className="text-sm text-slate-700">CEO of Company</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                        <p className="text-slate-900 text-lg">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in nulla vitae</p>
                        <div className="flex items-center mt-4">
                            <img src={imageUrl} alt="user" className="w-12 h-12 object-cover rounded-full" />
                            <div className="ml-4">
                                <h2 className="text-lg font-bold text-orange-500">John Doe</h2>
                                <p className="text-sm text-slate-700">CEO of Company</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                        <p className="text-slate-900 text-lg">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in nulla vitae</p>
                        <div className="flex items-center mt-4">
                            <img src={imageUrl} alt="user" className="w-12 h-12 object-cover rounded-full" />
                            <div className="ml-4">
                                <h2 className="text-lg font-bold text-orange-500">John Doe</h2>
                                <p className="text-sm text-slate-700">CEO of Company</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimony;