"use client"; 
import React from 'react';
import { useLanguage } from '../../app/context/LanguageContext';

export default function Blog() {
    const { currentTranslations } = useLanguage();
    const posts = [
      {
        title: 'Titre de l\'article 1',
        excerpt: 'Ceci est un extrait captivant de l\'article 1.',
        date: '10 octobre 2024',
        image: 'images/Taklidi/Image1.png',
      },
      {
        title: 'Titre de l\'article 2',
        excerpt: 'Un aperçu intrigant de l\'article 2.',
        date: '9 octobre 2024',
        image: 'images/Taklidi/Image2.png',
      },
      {
        title: 'Titre de l\'article 2',
        excerpt: 'Un aperçu intrigant de l\'article 2.',
        date: '9 octobre 2024',
        image: 'images/Taklidi/Image2.png',
      },
      {
        title: 'Titre de l\'article 2',
        excerpt: 'Un aperçu intrigant de l\'article 2.',
        date: '9 octobre 2024',
        image: 'images/Taklidi/Image2.png',
      },
      {
        title: 'Titre de l\'article 2',
        excerpt: 'Un aperçu intrigant de l\'article 2.',
        date: '9 octobre 2024',
        image: 'images/Taklidi/Image2.png',
      },
      {
        title: 'Titre de l\'article 2',
        excerpt: 'Un aperçu intrigant de l\'article 2.',
        date: '9 octobre 2024',
        image: 'images/Taklidi/Image2.png',
      },
    ];
    return (
      <div>
        <h1 className="text-5xl text-center mb-6" style={{ color: 'white', background: 'linear-gradient(to right, #E26D5C, #FFB6C1)', padding:'25px 0' }}>
          {currentTranslations.blog.title}
        </h1>
        <div className="container mx-auto px-8 md:px-24">
          <p className="text-gray-600 mb-6" style={{ color: '#848484', textAlign: 'center' }}>
            {currentTranslations.blog.intro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <span className="text-sm text-gray-400">{post.date}</span>
                </div>
              </div>
            ))}
          </div>
          <br/>
        </div>
      </div>
    );
}