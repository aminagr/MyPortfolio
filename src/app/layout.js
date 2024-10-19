// src/app/layout.js
"use client"; 
import './globals.css';
import { LanguageProvider } from './context/LanguageContext';

export default function RootLayout({ children }) {
    return (
        <LanguageProvider>
            <html>
                <body>{children}</body>
            </html>
        </LanguageProvider>
    );
}
