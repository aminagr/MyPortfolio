"use client";
import React from 'react';
import { FaShoppingCart, FaDesktop, FaCog, FaLanguage, FaFileAlt, FaCheckCircle } from 'react-icons/fa';

const itemsServicesData = [
    {
        id: 1,
        icon: <FaShoppingCart className="text-[#E26D5C] text-3xl mb-4" />,
        title: 'Sites E-commerce',
        description: 'Boostez vos ventes en ligne avec une boutique performante et sécurisée, offrant une expérience d\'achat fluide à vos clients.',
    },
    {
        id: 2,
        icon: <FaDesktop className="text-[#E26D5C] text-3xl mb-4" />,
        title: 'Sites vitrines',
        description: 'Mettez en avant votre entreprise avec un site vitrine moderne et élégant.',
    },
    {
        id: 3,
        icon: <FaCog className="text-[#E26D5C] text-3xl mb-4" />,
        title: 'Applications de gestion',
        description: 'Optimisez, automatisez et simplifiez la gestion de votre entreprise.',
    },
    {
        id: 4,
        icon: <FaLanguage className="text-[#E26D5C] text-3xl mb-4" />,
        title: 'Traduction',
        description: 'Touchez une audience internationale avec mes services de traduction.',
    },
    {
        id: 5,
        icon: <FaFileAlt className="text-[#E26D5C] text-3xl mb-4" />,
        title: 'Rédaction',
        description: 'Faites la différence avec du contenu percutant et engageant.',
    },
    {
        id: 6,
        icon: <FaCheckCircle className="text-[#E26D5C] text-3xl mb-4" />,
        title: 'Relecture et Correction',
        description: 'Assurez-vous d\'un contenu impeccable grâce à mon service de relecture.',
    },
];

const ItemsServices = () => {
    return (
        <section className="py-12 bg-gradient-to-r from-[#E26D5C] to-[#FFB6C1]" id="services">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Mes Services</h2>
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Ajout d'un margin-top ici */}
                    {itemsServicesData.map(service => (
                        <div key={service.id} className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                            <div className="flex justify-center mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-[#E26D5C]">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ItemsServices;
