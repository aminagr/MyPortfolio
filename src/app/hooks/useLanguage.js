"use client";
import { useState, useEffect } from 'react';

export const useLanguage = () => {
    const [language, setLanguage] = useState('en'); // Default language

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    return [language, setLanguage]; // Return both language and setter
};
