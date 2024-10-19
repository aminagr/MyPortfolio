"use client";
// src/app/page.js

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
    const router = useRouter();

    useEffect(() => {
        const path = window.location.pathname.split('/')[1]; // Vérifie la langue dans l'URL
        const browserLang = navigator.language.split('-')[0]; // Langue du navigateur
        const defaultLang = browserLang === 'fr' || browserLang === 'en' ? browserLang : 'en';

        // Redirige uniquement si aucune langue n'est spécifiée dans l'URL
        if (!path || (path !== 'fr' && path !== 'en')) {
            router.push(`/${defaultLang}`);
        }
    }, [router]);

    return null; // Pas de contenu, juste une redirection
}
