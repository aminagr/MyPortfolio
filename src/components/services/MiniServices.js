import React from 'react';
import { FaStore, FaDesktop, FaClipboardList, FaCogs } from 'react-icons/fa';

const services = [
  {
    title: "Sites E-commerce",
    description: "Boostez vos ventes en ligne avec une boutique performante et sécurisée, offrant une expérience d'achat fluide à vos clients.",
    icon: <FaStore className="w-10 h-10 text-blue-500" />
  },
  {
    title: "Sites vitrines",
    description: "Mettez en avant votre entreprise avec un site vitrine moderne et élégant.",
    icon: <FaDesktop className="w-10 h-10 text-green-500" />
  },
  {
    title: "Sites portfolio",
    description: "Présentez vos projets et compétences avec un portfolio numérique captivant.",
    icon: <FaClipboardList className="w-10 h-10 text-purple-500" />
  },
  {
    title: "Applications de gestion",
    description: "Optimisez, automatisez et simplifiez la gestion de votre entreprise avec des applications sur mesure.",
    icon: <FaCogs className="w-10 h-10 text-red-500" />
  },
];

const MiniServices = () => {
  return (
   <div>
     <br/>
     <p className="text-gray-600 mb-12 text-center text-lg">Voici les types de sites que je propose :</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-24 py-1">
      {services.map((service, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105">
          <div className="bg-gray-100 p-4 rounded-full mb-3">
            {service.icon}
          </div>
          <h3 className="text-lg font-bold mb-2 text-center">{service.title}</h3>
          <p className="text-gray-600 text-center">{service.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default MiniServices;
