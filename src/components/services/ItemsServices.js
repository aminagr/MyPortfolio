"use client";
import React, { useState, useRef, useEffect } from 'react';
import { FaDesktop, FaLanguage, FaPencilAlt } from 'react-icons/fa';
import { IoLanguage } from "react-icons/io5";
import MiniServices from './MiniServices';
import { useLanguage } from '../../app/context/LanguageContext';

const ItemsServices = () => {
    const { currentTranslations } = useLanguage();
    const [showMiniServices, setShowMiniServices] = useState(false);
    const miniServicesRef = useRef(null);

    const handleShowMiniServices = () => {
        setShowMiniServices(true);
    };

    useEffect(() => {
        if (showMiniServices && miniServicesRef.current) {
            miniServicesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [showMiniServices]);

    return (
        <>
            <section className="py-12 bg-gradient-to-r from-[#E26D5C] to-[#FFB6C1]" id="services">
                <h1 className="font-bold text-center text-white mb-8">
                    {currentTranslations.header} 
                </h1>
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentTranslations.itemsServices.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 cursor-pointer"
                                onClick={index === 0 ? handleShowMiniServices : null}
                            >
                                <div className="flex justify-center mb-4">
                                    {index === 0 ? <FaDesktop className="w-10 h-10 text-blue-500" /> : (index === 1 ? <IoLanguage className="w-10 h-10 text-green-500" /> : <FaPencilAlt className="w-10 h-10 text-purple-500" />)}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[#E26D5C]">
                                    {service.title} 
                                </h3>
                                <p className="text-gray-600">{service.description}</p> 
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {showMiniServices && (
                <div ref={miniServicesRef} className="py-12 bg-white">
                    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
                        <MiniServices />
                    </div>
                </div>
            )}
        </>
    );
};

export default ItemsServices;
