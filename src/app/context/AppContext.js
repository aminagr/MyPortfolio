"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); // Valeur par défaut

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            setLanguage(savedLanguage);
        } else {
            // Détecter la langue du navigateur
            const browserLanguage = navigator.language || navigator.userLanguage; // Obtenir la langue du navigateur
            if (browserLanguage.startsWith('fr')) {
                setLanguage('fr'); // Si la langue est française
            } else {
                setLanguage('en'); // Sinon, anglais
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    return (
        <AppContext.Provider value={{ language, setLanguage }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
