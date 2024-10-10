"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); 

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            setLanguage(savedLanguage);
        } else {
         
            const browserLanguage = navigator.language || navigator.userLanguage;
            if (browserLanguage.startsWith('fr')) {
                setLanguage('fr'); 
            } else {
                setLanguage('en'); 
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
