"use client";
import React, { useState } from 'react';
import { FaGithub, FaTimes, FaGlobe, FaEye } from 'react-icons/fa';
import { useLanguage } from '../../app/context/LanguageContext';

const ProjectsGlobal = () => {
    const { currentTranslations } = useLanguage(); 
    const projects = currentTranslations.projects || []; 

    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
        <section className="py-12 px-6 md:px-24 bg-white" id="projects">
            <div className="container mx-auto text-center">
                <h1 className="font-bold mb-6 text-[#E26D5C]">{currentTranslations.titleProjects}</h1>
                <p className="text-gray-600 mb-12 text-center">{currentTranslations.subprojects}</p>

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

                            <div className="relative flex flex-col items-center h-full">
                                <img src={selectedProject.gallery[currentImageIndex]} alt={`Gallery ${currentImageIndex + 1}`} className="w-full h-[80%] object-contain rounded-lg" />
                                <div className="flex justify-center space-x-2 mt-1 flex-wrap">
                                    {selectedProject.gallery.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            className={`w-16 h-16 sm:w-24 sm:h-24 object-cover cursor-pointer rounded-md transition transform ${currentImageIndex === index ? 'border-2 border-[#E26D5C]' : ''}`}
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
