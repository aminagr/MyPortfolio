
"use client";
import React, { useState } from 'react';

const projects = [
    {
        title: 'Project One',
        description: 'A brief description of project one.',
        link: 'https://example.com/project-one',
        image: '/images/project1.jpg',
        gallery: ['/images/Hadaya1.png', '/images/biblio1.jpg'], // Additional images
    },
    {
        title: 'Project Two',
        description: 'A brief description of project two.',
        link: 'https://example.com/project-two',
        image: '/images/project2.jpg',
        gallery: ['/images/biblio1.jpg', '/images/biblio1.jpg'],
    },
    {
        title: 'Project Three',
        description: 'A brief description of project three.',
        link: 'https://example.com/project-three',
        image: '/images/project3.jpg',
        gallery: ['/images/biblio1.jpg', '/images/biblio1.jpg'],
    },
];

const ProjectsGlobal = () => {
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
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Mes Projets</h2>
                <p className="text-gray-600 mb-12">Découvrez quelques-uns de mes projets récents.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 cursor-pointer" onClick={() => openModal(project)}>
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300">
                                    Voir le projet
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
                        <div className="bg-white rounded-lg overflow-hidden w-full md:w-3/4 lg:w-2/3 xl:w-1/2 relative">
                            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-2xl">
                                &times;
                            </button>
                            <h3 className="text-xl font-bold text-gray-800 p-4">{selectedProject.title}</h3>
                            <p className="text-gray-600 p-4">{selectedProject.description}</p>

                            {/* Image Slider */}
                            <div className="relative">
                                <img src={selectedProject.gallery[currentImageIndex]} alt={`Gallery ${currentImageIndex + 1}`} className="w-full h-80 md:h-96 object-cover rounded-lg" />
                                <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 m-2 hover:bg-gray-300 transition">
                                    &lt;
                                </button>
                                <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 m-2 hover:bg-gray-300 transition">
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
