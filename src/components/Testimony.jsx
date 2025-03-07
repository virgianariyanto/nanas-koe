import React from "react";
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

const Testimony = () => {
    const [imageUrl, setImageUrl] = useState("");
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            text: "Kue nya enak enak dan banyak varian. Bersih, harga ekonomis.cocok buat oleh2 dan suguhan. Instansi yg mengadakan acara pertemuan atau cara keluarga",
            name: "Em Arifin PWB",
            position: "Pembeli"
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in nulla vitae",
            name: "Jane Smith",
            position: "Marketing Director"
        },
    ];

    useEffect(() => {
        fetch("https://randomuser.me/api/")
            .then(response => response.json())
            .then(data => setImageUrl(data.results[0].picture.medium))
            .catch(error => console.error("Error:", error));
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => 
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-[#0c3834] py-12">
            <div className="max-w-[1640px] mx-auto px-4">
                <h1 className="text-[#A67C6D] font-bold text-4xl text-center mb-8">
                    What Our Customers Say
                </h1>
                <div className="relative">
                    {/* Slide Container */}
                    <div className="overflow-hidden">
                        <div className="relative h-[300px]"> {/* Atur tinggi sesuai kebutuhan */}
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                                        currentSlide === index 
                                            ? "opacity-100 animate-slide-in" 
                                            : "opacity-0 animate-slide-out"
                                    }`}
                                >
                                    <div className="bg-[#687a79] rounded-lg p-6 shadow-lg w-full max-w-md mx-auto">
                                        <p className="text-slate-200 text-lg">
                                            "{testimonial.text}"
                                        </p>
                                        <div className="flex items-center mt-4">
                                        <FaUser size={25} />
                                            <div className="ml-4">
                                                <h2 className="text-lg font-bold text-[#122624]">
                                                    {testimonial.name}
                                                </h2>
                                                <p className="text-sm text-slate-300">
                                                    {testimonial.position}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center -mt-14 space-x-2">
                        {testimonials.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    currentSlide === index ? 'bg-[#A67C6D] scale-125' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* CSS Animasi Inline */}
            <style>
                {`
                    @keyframes slideIn {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    }

                    .animate-slide-in {
                    animation: slideIn 0.7s ease-in-out forwards;
                    }
                `}
            </style>
        </div>
    );
};

export default Testimony;