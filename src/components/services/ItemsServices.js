"use client";
import React from 'react';
import { FaDesktop, FaLanguage, FaFileAlt } from 'react-icons/fa';

const itemsServicesData = [
    {
        id: 1,
        icon: <FaDesktop className="w-10 h-10 text-blue-500" />, // Couleur bleue
        title: 'Création de Sites Web',
        description: 'Je crée des sites web modernes sur mesure qui reflètent votre identité et répondent à vos besoins, adaptés à tout type d’appareils tout en assurant performance et sécurité.',
    },
    {
        id: 2,
        icon: <FaLanguage className="w-10 h-10 text-green-500" />, // Couleur verte
        title: 'Traduction de sites et contenus',
        description: 'Etant polyglotte qui parle 8 langues, j’assure la traduction de vos sites web, applications, articles, documents et contenus pour toucher une audience internationale.',
    },
    {
        id: 3,
        icon: <FaFileAlt className="w-10 h-10 text-purple-500" />, 
        title: 'Rédaction de contenus et Optimisation SEO',
        description: 'J’offre des services de rédaction de tout type de contenu et j’améliore la visibilité de votre site sur les moteurs de recherche grâce à des techniques SEO avancées.',
    }
];

const ItemsServices = () => {
    return (
        <section className="py-12 bg-gradient-to-r from-[#E26D5C] to-[#FFB6C1]" id="services">
            <h1 className="font-bold text-center text-white mb-8">Mes Services</h1>
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
