"use client"; // Indicate a client component

import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaGlobe, FaEye } from 'react-icons/fa';
const projects = [
    {
        title: 'Application d’apprentissage du dialècte algérien',
        description: 'Une application Web développée en ReactJS spécialisée en enseignement du dialecte algérien, elle contient des leçons interactives, des quiz et un dictionnaire multilingue, disponible en arabe,  français, anglais, espagnol, italien et russe. ',
        image: '/images/learn1.png',
        gallery: ['/images/learn1.png'],
        github: 'https://github.com/aminagr/AlgerianDialect',
        website: 'https://learnalgerian.vercel.app',
    },
    {
        title: 'HADAYA : Boutique de cadeaux en ligne',
        description: 'Hadaya est un site E-commerce de vente de cadeaux developpé en Java EE en back-end et en HTML, CSS, Javascript et Bootstrap en front-end.',
        image: '/images/Hadaya1.png',
        gallery: ['/images/Hadaya1.png', '/images/Hadaya4.png','/images/Hadaya5.jpg','/images/Hadaya6.jpg','/images/Hadaya7.jpg','/images/Hadaya8.jpg','/images/Hadaya11.jpg'],
       
    },
    {
        title: 'TAKLIDI : PLATEFORME E-COMMERCE & E-LEARNING',
        description: 'Taklidi est le design d’un site E-commerce de vente d’articles artisanaux Algériens ainsi qu’un site E-learning d’apprentissage de création d’articles artisanaux réalisé sur Adobe Xd.',
        image: '/images/biblio1.jpg',
        gallery: ['/images/biblio1.jpg', '/images/biblio1.jpg'],
        website: 'https://www.youtube.com/watch?v=VheCNxk_tNI',
    },
    {
        title: 'TYNIRI : Marketplace d artisanat Algérien',
        description: 'Tyniri est une marketplace de vente d’articles artisanaux Algériens où les artisans peuvent créer et gérer leur boutique, crée avec Wordpress.',
        image: '/images/project3.jpg',
        gallery: ['/images/biblio1.jpg', '/images/biblio1.jpg'],
        // Pas de liens pour ce projet
    },
    {
        title: 'Plateforme de gestion de bibliothèque en ligne',
        description: 'Cette plateforme de gestion de livres de bibliothèque est developpée en Java EE, HTML, CSS, Javascript et bootstrap .',
        image: '/images/project3.jpg',
        gallery: ['/images/biblio1.jpg', '/images/biblio1.jpg'],
        // Pas de liens pour ce projet
    },
    {
        title: 'Plateforme de gestion d inventaire',
        description: 'MyInventory est une application Desktop de gestion d’inventaire developpée en Java.',
        image: '/images/project3.jpg',
        gallery: ['/images/biblio1.jpg', '/images/biblio1.jpg'],
        github: 'https://github.com/aminagr/MyInventory',
    },
    {
        title: 'Mon portfolio',
        description: 'Mon site personnel que vous etes entrain de visiter, developpé en React JS, Next JS, Tailwind CSS',
        image: '/images/project3.jpg',
        gallery: ['/images/biblio1.jpg', '/images/biblio1.jpg'],
        github: 'https://github.com/aminagr/MyPortfolio',
    }
];

const ProjectsGlobal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        let interval;
        if (isOpen && selectedProject) {
            interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
            }, 3000); // Changer d'image toutes les 3 secondes
        }
        return () => clearInterval(interval);
    }, [isOpen, selectedProject]);

    const openModal = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedProject(null);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
    };

    return (
        <section className="py-12 px-6 md:px-12 bg-white" id="projects">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6 ">Mes Projets</h2>
                <p className="text-gray-600 mb-12 text-center">Découvrez certains de mes projets réalisés.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg overflow-hidden transform transition-all hover:scale-105 cursor-pointer"
                            onClick={() => openModal(project)}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-48 object-contain" />
                            <div className="p-6">
                                <h3 className="text-xl font-extrabold mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex justify-center space-x-4">
                                    <button onClick={(e) => { e.stopPropagation(); openModal(project); }} className="text-gray-600 hover:text-[#E26D5C] transition duration-300">
                                        <FaEye size={24} />
                                    </button>
                                    {project.website && (
                                        <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#E26D5C]">
                                            <FaGlobe size={24} />
                                        </a>
                                    )}
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#E26D5C]">
                                            <FaGithub size={24} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {isOpen && selectedProject && (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50" onClick={closeModal}>
        <div className="bg-white overflow-hidden w-full sm:w-[62%] h-[calc(90vh-50px)] relative mx-auto mt-16" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-600 hover:text-red-600 text-2xl z-10">
                <FaTimes />
            </button>

            {/* Image Slider */}
            <div className="relative flex flex-col items-center h-full">
                <img src={selectedProject.gallery[currentImageIndex]} alt={`Gallery ${currentImageIndex + 1}`} className="w-full h-[80%] object-contain rounded-lg" />
                <div className="flex justify-center space-x-2 mt-1"> {/* Réduit la marge ici */}
                    {selectedProject.gallery.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className={`w-24 h-24 object-cover cursor-pointer rounded-md transition transform ${currentImageIndex === index ? 'border-2 border-[#E26D5C]' : ''}`}
                            onClick={() => setCurrentImageIndex(index)}
                        />
                    ))}
                </div>
                <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-[#E26D5C] rounded-full p-2 hover:bg-gray-300 transition">
                    &lt;
                </button>
                <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-[#E26D5C] rounded-full p-2 hover:bg-gray-300 transition">
                    &gt;
                </button>
            </div>
        </div>
    </div>
)}



            </div>
        </section>
    );
};

export default ProjectsGlobal;