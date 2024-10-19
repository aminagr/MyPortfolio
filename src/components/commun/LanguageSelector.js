"use client"; 
import React from 'react';
import { useLanguage } from '../../app/context/LanguageContext'; 
import { useRouter } from 'next/navigation'; 

const LanguageSelector = () => {
    const { lang, changeLanguage } = useLanguage();
    const router = useRouter();

    const handleChange = (e) => {
        const newLang = e.target.value;
        changeLanguage(newLang); 
    };

    return (
        <select value={lang} onChange={handleChange} style={{ backgroundColor: 'white' }}>
            <option value="en">🇬🇧 English</option>
            <option value="fr">🇫🇷 Français</option>
        </select>
    );
};

export default LanguageSelector;
